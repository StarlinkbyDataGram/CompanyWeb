import { useMemo, useState } from 'react';
import { Camera, MapPin } from 'lucide-react';
import type { Project } from '@/data/our-work-projects';

interface ProjectCardProps {
  project: Project;
  onView: (project: Project) => void;
}

const categoryLabel = (category: Project['category']) => {
  switch (category) {
    case 'maritime':
      return 'Maritime';
    case 'enterprise':
      return 'Enterprise';
    case 'government':
      return 'Government';
    case 'residential':
      return 'Residential';
    default:
      return 'Project';
  }
};

export default function ProjectCard({ project, onView }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const thumbnailFile = project.imageFiles[0];
  const imageSrc = thumbnailFile ? `/images/installations/${project.folder}/${thumbnailFile}` : null;
  const hasImages = project.imageFiles.length > 0;

  const previewContent = useMemo(() => {
    if (imageSrc && !imageFailed && hasImages) {
      return (
        <img
          src={imageSrc}
          alt={project.displayName}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      );
    }

    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#0040FF] px-6 text-center text-white">
        <Camera className="mb-3 h-10 w-10" />
        <p className="text-sm font-semibold">Photo coming soon</p>
      </div>
    );
  }, [imageFailed, imageSrc, hasImages, project.displayName]);

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        {previewContent}
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          {categoryLabel(project.category)}
        </span>
      </div>

      <div className="flex h-[260px] flex-col p-5">
        <h3 className="line-clamp-2 text-base font-semibold text-[#0A0A1A]">{project.displayName}</h3>
        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4 text-[#0040FF]" />
          <span>{project.location} · {project.state}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-[#E8EEFF] px-2.5 py-1 text-[11px] font-medium text-[#0040FF]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 h-px w-full bg-slate-200" />

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Camera className="h-4 w-4" />
            <span>{project.imageFiles.length > 0 ? `${project.imageFiles.length} photos` : 'Photos pending'}</span>
          </div>
          <button
            type="button"
            onClick={() => onView(project)}
            className="text-sm font-semibold text-[#0040FF] transition-colors hover:text-[#0036c8]"
          >
            View Project →
          </button>
        </div>
      </div>
    </article>
  );
}
