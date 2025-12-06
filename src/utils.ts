import exifr from 'exifr';
import path from 'path';

export type AlbumImage = ImageMetadata & { exif: string };

export async function getAlbumImages(albumId: string): Promise<AlbumImage[]> {
    let photos = import.meta.glob<{ default: ImageMetadata }>(
        "/src/content/albums/**/*.{jpeg,jpg}"
    );
    const original = Object.entries(photos).filter(([key]) =>
        key.includes(albumId)
    );

    const resolvedOriginal = await Promise.all(
        original.map(async ([key, loader]) => {
            const mod = await loader();
            const metadata = mod.default;

            const relativePath = key.startsWith('/') ? key.slice(1) : key;
            const absolutePath = path.join(process.cwd(), relativePath);

            const exif = await getExifData(absolutePath, metadata.width, metadata.height);

            return {
                ...metadata,
                exif
            };
        })
    );
    resolvedOriginal.sort(() => Math.random() - 0.5);
    return resolvedOriginal;
}

async function getExifData(filePath: string, width: number, height: number): Promise<string> {
    const output = await exifr.parse(
        filePath,
        {
            exif: {
                pick: [
                    'Make', 'Model', 'LensMake', 'LensModel',
                    'FocalLength', 'ExposureTime', 'ISO', 'FNumber',
                ],
            },
            xmp: {pick: ['Lens']},
        },
    );
    let lens = output.Lens ? ` + ${output.Lens}` : '';
    lens = !lens && output.LensModel ? ` + ${output.LensMake} ${output.LensModel}` : lens;
    const expTime = output.ExposureTime < 1 ? `1/${Math.round(1 / output.ExposureTime)}` : output.ExposureTime;

    return (
        `Taken with ${output.Make} ${output.Model.replace('_2', 'ii')}${lens} |
        ${width}×${height}px at ${output.FocalLength} mm,
        ${expTime} s, ISO ${output.ISO}, ƒ${output.FNumber}`
    );
}