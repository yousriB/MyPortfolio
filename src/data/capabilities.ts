import type { LucideIcon } from 'lucide-react';
import { Activity, Layers, Sparkles, Terminal } from 'lucide-react';

export interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    icon: Layers,
    title: 'Full-Stack Development',
    description:
      'Designing modular frontend applications using React and Next.js, tied seamlessly to fast Node.js backends.',
  },
  {
    icon: Terminal,
    title: 'Modern Web Stack',
    description:
      'Crafting responsive web architectures styled in Tailwind CSS, backed by strict TypeScript and robust performance profiling.',
  },
  {
    icon: Activity,
    title: 'User-Centered & Fast',
    description:
      'Obsessively optimizing code bundles for micro-second load times, dynamic UI micro-interactions, and accessible designs.',
  },
  {
    icon: Sparkles,
    title: 'Scalable Architecture',
    description:
      'Writing reusable component modules, keeping codebases maintainable, and writing strict tests to prevent degradation.',
  },
];
