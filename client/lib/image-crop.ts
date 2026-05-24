/**
 * object-position presets for object-fit: cover — keyed by image filename.
 * Desktop value is default; mobile used where portrait crops differ on narrow cards.
 */
export type ImageCropPreset = {
  desktop: string;
  mobile?: string;
};

export const IMAGE_CROP_BY_FILE: Record<string, ImageCropPreset> = {
  "install.png": { desktop: "top center", mobile: "top center" },
  "install2.png": { desktop: "top center", mobile: "top center" },
  "install3.png": { desktop: "top center", mobile: "top center" },
  "install4.jpg": { desktop: "top center", mobile: "top center" },
  "datagram2.png": { desktop: "50% 35%", mobile: "50% 30%" },
  "maritime.jpeg": { desktop: "center", mobile: "center" },
  "maritime2.jpeg": { desktop: "center", mobile: "center" },
  "maritime3.jpeg": { desktop: "center top", mobile: "center top" },
  "maritime4.jpeg": { desktop: "center", mobile: "center" },
  "maritime5.jpeg": { desktop: "center", mobile: "center" },
  "starlinkInstallation.jpeg": { desktop: "center top", mobile: "center top" },
  "starlinkSetup.jpeg": { desktop: "center top", mobile: "center top" },
  "StarlinkCompanyInstallation.jpeg": { desktop: "center top", mobile: "center top" },
  "starlinkCompanyInstalltionImage.jpeg": { desktop: "top center", mobile: "top center" },
  "starlinkEstateInstallation.jpeg": { desktop: "top center", mobile: "top center" },
  "residentalSetup.jpeg": { desktop: "center top", mobile: "center top" },
  "StarlinkInstallationresidential.jpeg": { desktop: "center top", mobile: "center top" },
  "StarlinkRoofMount.jpeg": { desktop: "top center", mobile: "top center" },
};

export function cropForFile(file: string, override?: string): string {
  if (override) return override;
  const name = file.split("/").pop() ?? file;
  return IMAGE_CROP_BY_FILE[name]?.desktop ?? "center";
}

export function cropFromSrc(src: string, override?: string): string {
  return cropForFile(src.split("/").pop() ?? src, override);
}

export function cropStyleForFile(
  file: string,
  override?: string
): { objectPosition: string } & Record<string, string> {
  const name = file.split("/").pop() ?? file;
  const preset = IMAGE_CROP_BY_FILE[name];
  const desktop = override ?? preset?.desktop ?? "center";
  return { objectPosition: desktop };
}

/** Card image containers — uniform height per section type */
export const CARD_IMAGE_HEIGHT_CLASS = "h-[280px] min-h-[240px] w-full overflow-hidden";
