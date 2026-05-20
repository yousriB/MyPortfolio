import { useMemo, useState } from 'react';
import { ChevronDown, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import type { ProjectTech } from '../data/projects';

type Filter = 'all' | ProjectTech;

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'nextjs', label: 'Next.js / React' },
  { key: 'creative', label: 'Animations' },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesFilter = filter === 'all' || project.tech === filter;
        if (!matchesFilter) return false;
        return showAll || !project.extra;
      }),
    [filter, showAll],
  );

  const hasMatchingExtras = useMemo(
    () =>
      projects.some(
        (project) => project.extra && (filter === 'all' || project.tech === filter),
      ),
    [filter],
  );

  return (
    <section id="projects" className="py-24 bg-brand-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 gsap-reveal-fade">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Showcase Grid
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Recent Projects Showcase
            </h2>
            <p className="text-slate-400 font-light max-w-lg">
              A handpicked curation of live platforms, complex booking systems, and bespoke UI
              designs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {filters.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={
                    active
                      ? 'px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500 text-white transition-all'
                      : 'px-4 py-2 rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all'
                  }
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="group bg-white/5 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-video bg-neutral-900 border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-xs font-mono pt-2 border-t border-white/5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {hasMatchingExtras && (
          <div className="flex justify-center mt-12 gsap-reveal-fade">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider border border-white/10 hover:border-white bg-white/5 hover:bg-white/10 text-white rounded-full transition-all"
            >
              <span>{showAll ? 'Show Less' : 'Show More Projects'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
