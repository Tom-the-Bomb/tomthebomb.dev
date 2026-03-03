import exifr from "exifr";
import path from "path";

export type AlbumImage = ImageMetadata & { exif: string };

export async function getAlbumImages(albumId: string): Promise<AlbumImage[]> {
    let photos = import.meta.glob<{ default: ImageMetadata }>(
        "/src/content/albums/**/*.{jpeg,jpg}",
    );
    const original = Object.entries(photos).filter(([key]) =>
        key.includes(albumId),
    );

    const resolvedOriginal = await Promise.all(
        original.map(async ([key, loader]) => {
            const mod = await loader();
            const metadata = mod.default;

            const relativePath = key.startsWith("/") ? key.slice(1) : key;
            const absolutePath = path.join(process.cwd(), relativePath);

            const exif = await getExifData(
                absolutePath,
                metadata.width,
                metadata.height,
            );

            return {
                ...metadata,
                exif,
            };
        }),
    );
    for (let i = resolvedOriginal.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [resolvedOriginal[i], resolvedOriginal[j]] = [
            resolvedOriginal[j],
            resolvedOriginal[i],
        ];
    }
    return resolvedOriginal;
}

async function getExifData(
    filePath: string,
    width: number,
    height: number,
): Promise<string> {
    try {
        const output = await exifr.parse(filePath, {
            exif: {
                pick: [
                    "Make",
                    "Model",
                    "LensMake",
                    "LensModel",
                    "FocalLength",
                    "ExposureTime",
                    "ISO",
                    "FNumber",
                ],
            },
            xmp: { pick: ["Lens"] },
        });
        if (!output?.Make || !output?.Model) {
            return `${width}×${height}px`;
        }
        let lens = output.Lens ? ` + ${output.Lens}` : "";
        lens =
            !lens && output.LensModel
                ? ` + ${output.LensMake} ${output.LensModel}`
                : lens;
        const expTime =
            output.ExposureTime < 1
                ? `1/${Math.round(1 / output.ExposureTime)}`
                : output.ExposureTime;

        return `Taken with ${output.Make} ${output.Model.replace("_2", "II")}${lens} |
        ${width}×${height}px at ${output.FocalLength} mm,
        ${expTime} s, ISO ${output.ISO}, ƒ${output.FNumber}`;
    } catch {
        return `${width}×${height}px`;
    }
}

export function getAge(birthday: Date = new Date(2007, 3, 26)): number {
    let now = new Date();
    let age = now.getFullYear() - birthday.getFullYear();
    if (
        now.getMonth() < birthday.getMonth() ||
        (now.getMonth() === birthday.getMonth() &&
            now.getDate() < birthday.getDate())
    ) {
        age--;
    }
    return age;
}
