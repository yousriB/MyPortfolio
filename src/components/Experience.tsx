import { Award } from 'lucide-react';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-brand-950/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6 gsap-reveal">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Career Progress
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              My Professional Journey.
            </h2>
            <p className="text-slate-400 font-light leading-relaxed">
              I've collaborated with fast-growing startups, real-world businesses, and local
              dealerships to build performance-optimized websites.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
              <Award className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div className="space-y-1">
                <h4 className="font-bold text-white text-sm">Strict Web Standards</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Adhering strictly to modular architectures, semantic markup, and secure clean code
                  wrappers.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 relative before:absolute before:top-4 before:bottom-4 before:left-4 before:w-px before:bg-white/10">
            {experience.map((item) => (
              <div key={item.period} className="relative pl-12 group timeline-item">
                <div
                  className={`absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full border-4 border-brand-950 transition-all ${
                    item.current
                      ? 'bg-blue-500 group-hover:scale-125'
                      : 'bg-slate-500 group-hover:bg-blue-500'
                  }`}
                />

                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-500">{item.period}</span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.role}
                    </h3>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded self-start ${
                        item.current
                          ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                          : 'text-slate-400 bg-white/5 border border-white/5'
                      }`}
                    >
                      {item.company}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/5 rounded text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
