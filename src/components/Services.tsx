import { Check, DollarSign } from 'lucide-react';
import { pricingTiers } from '../data/pricing';
import { useContactPrefill } from '../hooks/useContactPrefill';

export default function Services() {
  const { setPrefill } = useContactPrefill();

  const handleSelectPricing = (value: string) => {
    let budget = 'Custom';
    if (value === 'Essential Landing Page') budget = '$1,200';
    else if (value === 'Full-Stack SaaS') budget = '$3,500';
    setPrefill({ service: value, budget });
  };

  return (
    <section
      id="services"
      className="py-24 bg-brand-950 border-t border-b border-white/5 relative overflow-hidden"
    >
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 gsap-reveal-fade">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <DollarSign className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              Tailored Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Services & Transparent Pricing
          </h2>
          <p className="text-slate-400 font-light leading-relaxed">
            No hidden fees or unexpected extras. Pure, custom-crafted digital development designed
            to grow your business securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {pricingTiers.map((tier) => {
            const containerClass = tier.highlighted
              ? 'bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/30 rounded-2xl p-8 flex flex-col justify-between relative group shadow-2xl shadow-blue-500/5 gsap-reveal'
              : 'bg-white/5 border border-white/5 hover:border-white/10 transition-all rounded-2xl p-8 flex flex-col justify-between relative group gsap-reveal';

            return (
              <div key={tier.title} className={containerClass}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-500 rounded-full text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className={`space-y-6 ${tier.highlighted ? 'mt-2' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold uppercase tracking-widest ${tier.highlighted ? 'text-blue-400' : 'text-slate-400'
                        }`}
                    >
                      {tier.badge}
                    </span>
                    <span
                      className={
                        tier.highlighted
                          ? 'px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : 'px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400'
                      }
                    >
                      {tier.badgeRight}
                    </span>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-white font-mono">
                      {tier.price}
                      <span className="text-sm font-normal text-slate-400">{tier.priceSuffix}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-2">{tier.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {tier.description}
                  </p>
                  <ul
                    className={`space-y-3 text-xs font-light border-t pt-6 ${tier.highlighted
                      ? 'text-slate-300 border-white/10'
                      : 'text-slate-400 border-white/5'
                      }`}
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check
                          className={`w-4 h-4 flex-shrink-0 ${tier.highlighted ? 'text-blue-400' : 'text-emerald-400'
                            }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8">
                  <a
                    href="#contact"
                    onClick={() => handleSelectPricing(tier.ctaValue)}
                    className={
                      tier.highlighted
                        ? 'block w-full text-center py-3 text-xs font-mono font-bold uppercase bg-white text-black hover:bg-blue-400 transition-all rounded'
                        : 'block w-full text-center py-3 text-xs font-mono font-bold uppercase border border-white/10 hover:border-white text-white rounded transition-colors'
                    }
                  >
                    {tier.ctaLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
