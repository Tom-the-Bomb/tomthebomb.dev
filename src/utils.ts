import exifr from 'exifr';

export async function getAlbumImages(albumId: string): Promise<ImageMetadata[]> {
    let photos = import.meta.glob<{ default: ImageMetadata }>(
        "/src/content/albums/**/*.{jpeg,jpg}"
    );
    const original = Object.fromEntries(
        Object.entries(photos).filter(([key]) =>
            key.includes(albumId)
        )
    );
    const resolvedOriginal = await Promise.all(
        Object.values(original).map((image) =>
            image().then((mod) => mod.default)
        )
    );
    resolvedOriginal.sort((a, b) => Math.random() - 0.5);
    return resolvedOriginal;
}

export async function formatImageEXIF(image: HTMLImageElement, src: string): Promise<string> {
    const output = await exifr.parse(
        src,
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
        `Taken with ${output.Make} ${output.Model}${lens} |
        ${image.width}&times;${image.height}px at ${output.FocalLength} mm,
        ${expTime} s, ISO ${output.ISO}, ƒ${output.FNumber}`
    );
}