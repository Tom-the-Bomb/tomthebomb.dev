import exifr from 'exifr';

export function startAt(images: ImageMetadata[], idx: number) {
    let cycled = images.slice(idx);
    cycled.push(...images.slice(0, idx));
    return cycled;
}

export async function getAlbumImages(albumId: string) {
    let images = import.meta.glob<{ default: ImageMetadata }>(
        "/src/content/albums/**/*.{jpeg,jpg}"
    );

    images = Object.fromEntries(
        Object.entries(images).filter(([key]) => key.includes(albumId))
    );

    const resolvedImages = await Promise.all(
        Object.values(images).map((image) => image().then((mod) => mod.default))
    );

    resolvedImages.sort(() => Math.random() - 0.5);
    return resolvedImages;
}

export async function formatImageEXIF(image: string) {
    const output = await exifr.parse(
        image,
        {
            exif: {
                pick: [
                    'Make', 'Model', 'ExifImageWidth', 'ExifImageHeight',
                    'FocalLength', 'ExposureTime', 'ISO', 'FNumber',
                ],
            },
            xmp: {pick: ['Lens']},
        },
    );
    const lens = output.Lens != null ? ` + ${output.Lens}` : '';
    const expTime = output.ExposureTime < 1 ? `1/${1 / output.ExposureTime}` : output.ExposureTime;

    return (
        `Taken with ${output.Make} ${output.Model}${lens} |
        ${output.ExifImageWidth}&times;${output.ExifImageHeight}px at ${output.FocalLength} mm,
        ${expTime} s, ISO ${output.ISO}, ƒ${output.FNumber}`
    );
}