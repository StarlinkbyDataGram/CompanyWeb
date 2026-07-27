import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin } from 'lucide-react';
import Seo from '@/components/Seo';
import ProjectCard from '@/components/ProjectCard';
import ProjectLightbox from '@/components/ProjectLightbox';
import { ourWorkProjects, type Project } from '@/data/our-work-projects';
import { WHATSAPP_URL } from '@/lib/site';

const filters = ['All', 'Maritime & Offshore', 'Enterprise & Government', 'Residential'] as const;

type FilterValue = (typeof filters)[number];

const getCategoryMatches = (project: Project, filter: FilterValue) => {
  switch (filter) {
    case 'Maritime & Offshore':
      return project.category === 'maritime';
    case 'Enterprise & Government':
      return project.category === 'enterprise' || project.category === 'government';
    case 'Residential':
      return project.category === 'residential';
    default:
      return true;
  }
};

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = useMemo(() => {
    return ourWorkProjects.filter((project) => getCategoryMatches(project, activeFilter));
  }, [activeFilter]);

  const heroImage = useMemo(() => {
    const preferred = ourWorkProjects.find((project) => project.folder === 'hp-kit--naval-vessel--sagbama');
    return preferred?.imageFiles[0] ? `/images/installations/${preferred.folder}/${preferred.imageFiles[0]}` : null;
  }, []);

  return (
    <div className="bg-white">
      <Seo
        title="Our Work — Real Starlink Installations Across Nigeria | DataGram"
        description="Browse DataGram's real Starlink installations across Nigeria — Navy vessels, enterprise offices, government sites, houseboats, and residential duplexes."
        canonical="/our-work"
      />

      <section className="relative overflow-hidden bg-[#0A0A1A] text-white">
        <div className="absolute inset-0">
          {heroImage ? (
            <img src={heroImage} alt="DataGram Starlink installations across Nigeria" className="h-full w-full object-cover opacity-30" />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A1A] via-[#0A0A1A]/90 to-[#0A0A1A]/70" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#6ea8ff]">DataGram field portfolio</p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Our Work</h1>
            <p className="mt-5 text-lg leading-8 text-white/80 sm:text-xl">
              Real installations across Nigeria — residential, enterprise, government, and maritime. Every project here was completed by the DataGram team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#0040FF]/60 bg-[#0040FF]/20 px-4 py-2 text-sm font-semibold text-[#dce7ff]">9 Featured Projects</span>
              <span className="rounded-full border border-[#0040FF]/60 bg-[#0040FF]/20 px-4 py-2 text-sm font-semibold text-[#dce7ff]">5 States</span>
              <span className="rounded-full border border-[#0040FF]/60 bg-[#0040FF]/20 px-4 py-2 text-sm font-semibold text-[#dce7ff]">3 Sectors</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-4 sm:px-8 lg:px-12">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'border-[#0040FF] bg-[#0040FF] text-white'
                    : 'border-slate-300 bg-white text-[#0A0A1A] hover:bg-[#E8EEFF]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onView={setSelectedProject} />
          ))}
        </div>
      </section>

      <section className="bg-[#0040FF] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Want to See Your Project Here?</h2>
            <p className="mt-3 text-lg text-white/80">
              We document every installation we complete. Get in touch to discuss your project and join the list.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0040FF] transition hover:bg-slate-100">
              Get a Free Survey
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <ProjectLightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
