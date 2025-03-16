import exifr from 'exifr';

export async function getAlbumImages(albumId: string) {
    let photos = import.meta.glob<{ default: ImageMetadata }>(
        "/src/content/albums/**/*.{jpeg,jpg}"
    );

    const small = Object.fromEntries(
        Object.entries(photos).filter(([key]) => key.includes(albumId) && key.includes('_small'))
    );
    const original = Object.fromEntries(
        Object.entries(photos).filter(([key]) => key.includes(albumId) && !key.includes('_small'))
    );

    const resolvedSmall = await Promise.all(
        Object.values(small).map((image) => image().then((mod) => mod.default))
    );
    const resolvedOriginal = await Promise.all(
        Object.values(original).map((image) => image().then((mod) => mod.default))
    );
    const zipped = resolvedSmall.map((smallI, i) => [smallI, resolvedOriginal[i]]);
    zipped.sort(() => Math.random() - 0.5);

    const smalls = [];
    const originals = [];

    for (const [smallI, originalI] of zipped) {
        smalls.push(smallI);
        originals.push(originalI);
    }
    return [smalls, originals];
}

export async function formatImageEXIF(image: HTMLImageElement, src: string) {
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