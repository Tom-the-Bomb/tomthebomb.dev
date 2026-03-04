import exifr from "exifr";
import path from "path";

export type AlbumImage = ImageMetadata & { exif: string };

export async function getAlbumImages(albumId: string): Promise<AlbumImage[]> {
  const photos = import.meta.glob<{ default: ImageMetadata }>(
    "/src/content/albums/**/*.{jpeg,jpg}",
  );
  const original = Object.entries(photos).filter(([key]) =>
    key.includes(`/${albumId}/`),
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
  const dimensions = `${width}×${height}px`;
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
      return dimensions;
    }
    const lensName =
      output.Lens ||
      (output.LensModel ? `${output.LensMake} ${output.LensModel}` : "");
    const lens = lensName ? ` + ${lensName}` : "";

    const settings = [
      output.FocalLength != null && `${output.FocalLength} mm`,
      output.ExposureTime != null &&
        (output.ExposureTime < 1
          ? `1/${Math.round(1 / output.ExposureTime)} s`
          : `${output.ExposureTime} s`),
      output.ISO != null && `ISO ${output.ISO}`,
      output.FNumber != null && `ƒ${output.FNumber}`,
    ]
      .filter(Boolean)
      .join(", ");

    const camera = `Taken with ${output.Make} ${output.Model.replace("_2", "II")}${lens}`;
    return settings
      ? `${camera} | ${dimensions} at ${settings}`
      : `${camera} | ${dimensions}`;
  } catch {
    return dimensions;
  }
}

export function getAge(birthday: Date = new Date(2007, 3, 26)): number {
  const now = new Date();
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
