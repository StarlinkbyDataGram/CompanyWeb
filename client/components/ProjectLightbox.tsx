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
    return project.imageFiles.map((file, index) => ({
      slot: index + 1,
      file,
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
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-4 py-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-[860px] max-h-[92vh] overflow-y-auto rounded-[12px] bg-[#0A0A1A] p-6 shadow-2xl sm:p-5"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-lg transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close project gallery"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="rounded-[12px] border border-white/10 bg-white/5 p-4 sm:p-5">
          <div className="relative overflow-hidden rounded-[12px] bg-slate-900">
            {hasImage ? (
              <img
                src={encodeURI(`/images/installations/${project.folder}/${current.file}`)}
                alt={project.displayName}
                className="w-full max-h-[55vh] object-contain"
                onError={() => setImageFailed((prev) => ({ ...prev, [activeIndex]: true }))}
              />
            ) : (
              <div className="flex h-[45vh] w-full items-center justify-center bg-[#0040FF] px-6 text-center text-white sm:h-[55vh]">
                <Camera className="mb-3 h-12 w-12" />
                <p className="text-lg font-semibold">Photo coming soon</p>
              </div>
            )}

            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex((current) => (current - 1 + photoSlots.length) % photoSlots.length);
                }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white sm:h-11 sm:w-11"
                aria-label="Previous photo"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex((current) => (current + 1) % photoSlots.length);
                }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white sm:h-11 sm:w-11"
                aria-label="Next photo"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-5 space-y-5 text-slate-100">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold">{project.displayName}</h2>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                {project.location} · {project.state}
              </span>
            </div>
            <p className="max-w-3xl text-sm leading-7 text-white/80 sm:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#E8EEFF] px-3 py-1 text-sm font-medium text-[#0040FF]">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.internalLink.href}
              className="inline-flex text-sm font-semibold text-[#6ea8ff] transition hover:text-white"
            >
              {project.internalLink.label} →
            </a>
            <div className="text-sm text-white/70">{activeIndex + 1} / {photoSlots.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
