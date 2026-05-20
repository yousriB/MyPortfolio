import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="py-24 bg-brand-950 border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 gsap-reveal-fade">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Client Endorsements
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Kind Words from Satisfied Clients
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-white/10 hover:border-white text-slate-400 hover:text-white transition-all bg-white/5"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-white/10 hover:border-white text-slate-400 hover:text-white transition-all bg-white/5"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[300px] gsap-reveal">
          <div
            key={index}
            className="flex flex-col justify-between animate-[fadeIn_0.4s_ease-out]"
          >
            <div className="space-y-6">
              <Quote className="w-12 h-12 text-blue-500/20" />
              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-4xl italic">
                "{current.quote}"
              </p>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-tr ${current.gradient} flex items-center justify-center font-bold text-black font-mono`}
              >
                {current.initials}
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">{current.name}</h4>
                <p className="text-xs text-slate-500 font-mono">{current.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
