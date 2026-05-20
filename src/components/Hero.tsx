import { ArrowRight, MessageSquare } from 'lucide-react';

const techBadges = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase'];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen grid-bg flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/40 to-brand-950 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="hero-item inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              Available for Freelance & Remote Work
            </span>
          </div>

          <h1 className="hero-item text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-none">
            Architecting <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white text-glow">
              Digital Architecture
            </span>
          </h1>

          <p className="hero-item text-base sm:text-lg text-slate-400 max-w-xl font-light leading-relaxed">
            I'm <strong className="text-white font-medium">Yousri Ben Ali</strong>, a Creative
            Full-Stack Developer shaping exceptional, high-performance web applications. My process
            blends rigorous security practices, clean minimalist designs, and high-performance
            engineering.
          </p>

          <div className="hero-item flex flex-wrap gap-2 pt-2">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded text-slate-300 hover:border-blue-500/30 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="hero-item flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              href="#projects"
              className="flex items-center justify-center space-x-2 px-6 py-4 bg-white hover:bg-blue-400 text-black font-semibold rounded transition-all duration-300 shadow-xl shadow-blue-500/5 hover:shadow-blue-400/20"
            >
              <span>Explore Showcase</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-12 lg:mt-0 hero-visual">
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent border border-white/10 p-6 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-500">yousri@stack:~</span>
            </div>

            <div className="font-mono text-sm space-y-3 my-6 flex-grow overflow-hidden select-none">
              <p className="text-slate-500">// Creative Developer Manifesto</p>
              <p className="text-blue-400">
                const <span className="text-purple-400">developer</span> = {'{'}
              </p>
              <p className="pl-4 text-slate-300">
                name: <span className="text-green-300">"Yousri Ben Ali"</span>,
              </p>
              <p className="pl-4 text-slate-300">
                experience: <span className="text-amber-300">"5+ Years"</span>,
              </p>
              <p className="pl-4 text-slate-300">
                specialization: <span className="text-green-300">"Full-Stack Web Architect"</span>,
              </p>
              <p className="pl-4 text-slate-300">focus: [</p>
              <p className="pl-8 text-blue-300">
                "Sleek UX", "Performance Tuning", "Security First"
              </p>
              <p className="pl-4 text-slate-300">],</p>
              <p className="pl-4 text-slate-300">
                passion: <span className="text-amber-300">"Ideas into flawless digital reality"</span>
              </p>
              <p className="text-blue-400">{'};'}</p>
              <p className="text-slate-400 mt-4 cursor-blink">
                _ <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse" />
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">
                  Years Exp
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">
                  Safe Delivery
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">
                  Shipped
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
