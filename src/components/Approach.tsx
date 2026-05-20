import { Check, Route } from 'lucide-react';
import { approachPhases } from '../data/approach';

export default function Approach() {
  return (
    <section
      id="approach"
      className="py-24 bg-brand-950 border-t border-b border-white/5 relative overflow-hidden"
    >
      <div className="absolute -top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 gsap-reveal-fade">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <Route className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              My Approach
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            From Concept to Completion
          </h2>
          <p className="text-slate-400 font-light leading-relaxed">
            I follow a structured methodology to ensure your project is delivered successfully from
            concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {approachPhases.map(({ icon: Icon, ...phase }) => (
            <div
              key={phase.phase}
              className="bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/30 rounded-2xl p-8 flex flex-col relative group shadow-2xl shadow-blue-500/5 gsap-reveal"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-500 rounded-full text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                {phase.badgeTop}
              </div>
              <div className="space-y-6 mt-2 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
                    {phase.phase}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {phase.phaseLabel}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  {phase.description}
                </p>
                <ul className="space-y-3 text-xs font-light text-slate-300 border-t border-white/10 pt-6">
                  {phase.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
