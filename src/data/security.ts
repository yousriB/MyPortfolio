export type ThreatType = 'sql' | 'xss' | 'ddos';

export interface ThreatDefinition {
  type: ThreatType;
  title: string;
  description: string;
}

export const threats: ThreatDefinition[] = [
  {
    type: 'sql',
    title: 'SQL Injection',
    description: 'Bypassing authentication inputs using SQL bypass scripts.',
  },
  {
    type: 'xss',
    title: 'Cross-Site Scripting (XSS)',
    description: 'Injecting malicious client-side JavaScript payloads.',
  },
  {
    type: 'ddos',
    title: 'Spam / DDOS Flooding',
    description: 'Overwhelming server APIs with rapid form submissions.',
  },
];

interface ConsoleLine {
  tone: 'red' | 'emerald-light' | 'emerald' | 'slate-light' | 'slate';
  text: string;
}

export const threatLogs: Record<ThreatType, ConsoleLine[]> = {
  sql: [
    { tone: 'red', text: "[ATTACK] Suspicious login payload detected: ' OR '1'='1'--" },
    { tone: 'emerald-light', text: '[SHIELD COMPLIANCE] ORM sanitization activated. Malicious input parameterized.' },
    { tone: 'emerald', text: '[SHIELD STATUS] Threat isolated. 0 rows leaked. Attack neutralized.' },
  ],
  xss: [
    { tone: 'red', text: '[ATTACK] DOM Injection payload detected: <script>fetch(steal)...</script>' },
    { tone: 'emerald-light', text: '[SHIELD COMPLIANCE] Escaping entities. Content Security Policy (CSP) headers applied.' },
    { tone: 'emerald', text: '[SHIELD STATUS] Threat blocked. Malicious script denied execution permissions.' },
  ],
  ddos: [
    { tone: 'red', text: '[ATTACK] Flood warning: 120 API hits received in 120ms from target IP.' },
    { tone: 'emerald-light', text: '[SHIELD COMPLIANCE] Triggering exponential rate limiter (max 60 req/min).' },
    { tone: 'emerald', text: '[SHIELD STATUS] IP temporarily jailed. Service uptime intact.' },
  ],
};

export const initialConsoleLines: ConsoleLine[] = [
  { tone: 'slate', text: '[SYSTEM INITIATION] Initializing secure default protocol wrappers...' },
  { tone: 'emerald-light', text: '[SHIELD] Ready. Awaiting trigger event logs.' },
  { tone: 'slate-light', text: '$ listening on port 443 with HSTS enabled...' },
];

export const resetConsoleLines: ConsoleLine[] = [
  { tone: 'slate', text: '[SYSTEM REBOOT] Re-initializing shield parameters...' },
  { tone: 'emerald-light', text: '[SHIELD] Clear. System in passive telemetry monitoring mode.' },
];

export const toneClass: Record<ConsoleLine['tone'], string> = {
  red: 'text-red-400',
  'emerald-light': 'text-emerald-400',
  emerald: 'text-emerald-500',
  'slate-light': 'text-slate-400',
  slate: 'text-slate-500',
};

export type { ConsoleLine };
