import { useEffect, useRef, useState } from 'react';
import { Activity, Lock, Shield, ShieldAlert, ShieldCheck, Terminal } from 'lucide-react';
import {
  initialConsoleLines,
  resetConsoleLines,
  threatLogs,
  threats,
  toneClass,
} from '../data/security';
import type { ConsoleLine, ThreatType } from '../data/security';

export default function Security() {
  const [lines, setLines] = useState<ConsoleLine[]>(initialConsoleLines);
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [lines]);

  const triggerThreat = (type: ThreatType) => {
    const header: ConsoleLine = {
      tone: 'slate',
      text: `[TRIGGERING THREAT SYSTEM: ${type.toUpperCase()}]`,
    };
    setLines((prev) => [...prev, header, ...threatLogs[type]]);
  };

  const resetConsole = () => setLines(resetConsoleLines);

  return (
    <section
      id="security"
      className="py-24 bg-brand-950 border-t border-b border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 gsap-reveal-fade">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Core Engineering Standard
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Secure by default, not as an afterthought.
          </h2>
          <p className="text-slate-400 leading-relaxed font-light">
            Many builders optimize for visuals first and bolt on protection later. I architect
            systems with robust security gates built directly into the codebase. Explore the
            interactive security console below to see the defense shields in action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-6 gsap-reveal">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-blue-400" />
                Threat Protection Dashboard
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Simulate potential application-level breaches:
              </p>

              <div className="space-y-4">
                {threats.map((threat) => (
                  <button
                    key={threat.type}
                    onClick={() => triggerThreat(threat.type)}
                    className="w-full text-left p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all flex items-start justify-between group"
                  >
                    <div className="space-y-1">
                      <div className="font-bold text-white flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        {threat.title}
                      </div>
                      <p className="text-xs text-slate-400 max-w-[280px]">{threat.description}</p>
                    </div>
                    <div className="text-xs font-mono py-1 px-2.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 group-hover:bg-red-500/20 transition-all">
                      Attack
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>
                Server status: <strong className="text-emerald-400">SECURE</strong>
              </span>
              <span>Uptime: 99.99%</span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-brand-950 border border-white/10 rounded-2xl p-6 flex flex-col justify-between font-mono text-sm relative gsap-reveal">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 animate-bounce" />
                <span className="text-white font-bold text-xs tracking-wide">
                  YOUSRI SHIELD FIREWALL — VERSION 2.5
                </span>
              </div>
              <button
                onClick={resetConsole}
                className="text-xs text-slate-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded"
              >
                Reset Logs
              </button>
            </div>

            <div
              ref={consoleRef}
              className="flex-grow space-y-3 min-h-[300px] max-h-[400px] overflow-y-auto"
            >
              {lines.map((line, i) => (
                <p key={i} className={toneClass[line.tone]}>
                  {line.text}
                </p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Input Sanitization & Injection Block</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Content Security Policies (CSP)</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>API Rate Limiting & Auth Shields</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
