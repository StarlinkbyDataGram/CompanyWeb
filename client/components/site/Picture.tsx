import type { ImgHTMLAttributes } from "react";
import manifest from "@/data/image-manifest.json";

type Variant = { w: number; avif: string; webp: string };
type Entry = { src: string; width: number; height: number; variants: Variant[] };

const entries = manifest as Record<string, Entry>;

function lookup(src: string): Entry | null {
  if (!src) return null;
  const path = src.split("?")[0];
  return entries[path] || entries[decodeURI(path)] || null;
}

function srcSet(variants: Variant[], kind: "avif" | "webp") {
  return variants.map((variant) => `${variant[kind]} ${variant.w}w`).join(", ");
}

type PictureProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  sizes?: string;
};

export default function Picture({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  loading = "lazy",
  decoding = "async",
  width,
  height,
  fetchPriority,
  ...rest
}: PictureProps) {
  const entry = lookup(src);
  if (!entry) {
    return (
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={loading}
        decoding={decoding}
        width={width}
        height={height}
        fetchPriority={fetchPriority}
        {...rest}
      />
    );
  }
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet(entry.variants, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(entry.variants, "webp")} sizes={sizes} />
      <img
        src={entry.src}
        alt={alt}
        sizes={sizes}
        loading={loading}
        decoding={decoding}
        width={width ?? entry.width}
        height={height ?? entry.height}
        fetchPriority={fetchPriority}
        {...rest}
      />
    </picture>
  );
}
