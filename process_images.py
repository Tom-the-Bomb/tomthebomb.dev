
from os import remove
from pathlib import Path

from PIL import Image
from PIL.ExifTags import IFD
from pillow_heif import register_heif_opener

def convert_heif(directory: str, *, quality: int = 100) -> None:
    register_heif_opener()

    for file in Path(directory).glob('**/*.heic'):
        with Image.open(file) as img:
            img.save(
                file.with_suffix('.jpg'),
                format='JPEG',
                quality=quality,
                exif=img.info['exif'],
            )
        print(f'Converted [{file}] from HEIC to JPEG successfully.')
        remove(file)

    for file in Path(directory).glob('**/*.jpg'):
        with Image.open(file) as img:
            exif = img.getexif()

            if exif.get(IFD.GPSInfo):
                del exif[IFD.GPSInfo]

                img.save(
                    file,
                    format='JPEG',
                    quality=quality,
                    exif=exif,
                )
                print(f'Successfully removed GPS metadata from [{file}]')

if __name__ == '__main__':
    convert_heif('./src/content/albums/')