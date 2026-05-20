import { capabilities } from '../data/capabilities';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-950/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-6 gsap-reveal">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Professional Profile
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Building Digital <br className="hidden sm:inline" />
              Experiences That Matter.
            </h2>
            <p className="text-slate-400 font-light leading-relaxed">
              I am a full-stack engineer and UI designer committed to creating high-converting
              websites and scalable SaaS. Over the past 5+ years, I've designed interactive portals
              and robust codebases, turning creative visions into optimized realities.
            </p>

            <div className="pt-4 flex items-center space-x-4">
              <a
                href="#services"
                className="px-5 py-3 text-sm font-mono font-bold bg-white text-black hover:bg-blue-400 transition-all rounded"
              >
                View Services & Pricing
              </a>
              <a
                href="#projects"
                className="px-5 py-3 text-sm font-mono font-bold bg-white/5 hover:bg-white/10 text-white transition-all rounded"
              >
                Explore Projects
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 capability-grid">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.08] transition-all duration-300 space-y-4 gsap-reveal"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
