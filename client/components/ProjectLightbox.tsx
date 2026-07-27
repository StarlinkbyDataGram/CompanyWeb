import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Camera, X } from 'lucide-react';
import type { Project } from '@/data/our-work-projects';

interface ProjectLightboxProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState<{ [key: number]: boolean }>({});

  const photoSlots = useMemo(() => {
    if (!project) return [];
    const slots = Array.from({ length: project.photoCount }, (_, index) => index + 1);
    return slots.map((slot) => ({
      slot,
      file: project.imageFiles[slot - 1] ?? null,
    }));
  }, [project]);

  useEffect(() => {
    if (!project) return;
    setActiveIndex(0);
    setImageFailed({});
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % photoSlots.length);
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + photoSlots.length) % photoSlots.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, photoSlots.length, project]);

  if (!project) return null;

  const current = photoSlots[activeIndex];
  const hasImage = !!current?.file && !imageFailed[activeIndex];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 px-4 py-6">
      <div className="relative w-full max-w-5xl rounded-2xl bg-[#0A0A1A] p-3 shadow-2xl sm:p-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          aria-label="Close project gallery"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-900">
            {hasImage ? (
              <img
                src={`/images/installations/${project.folder}/${current.file}`}
                alt={project.displayName}
                className="h-full w-full object-cover"
                onError={() => setImageFailed((prev) => ({ ...prev, [activeIndex]: true }))}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-[#0040FF] px-6 text-center text-white">
                <Camera className="mb-3 h-12 w-12" />
                <p className="text-lg font-semibold">Photo coming soon</p>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current - 1 + photoSlots.length) % photoSlots.length)}
                className="rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="Previous photo"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current + 1) % photoSlots.length)}
                className="rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="Next photo"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="text-sm font-medium text-white/80">
              {activeIndex + 1} / {photoSlots.length}
            </div>
          </div>

          <div className="mt-6 text-white">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold">{project.displayName}</h2>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">{project.location} · {project.state}</span>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#E8EEFF] px-3 py-1 text-sm font-medium text-[#0040FF]">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.internalLink.href}
              className="mt-6 inline-flex text-sm font-semibold text-[#6ea8ff] transition hover:text-white"
            >
              {project.internalLink.label} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
