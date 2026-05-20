import type { LucideIcon } from 'lucide-react';
import { Code2, Rocket, Search } from 'lucide-react';

export interface ApproachPhase {
  badgeTop: string;
  phase: string;
  phaseLabel: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const approachPhases: ApproachPhase[] = [
  {
    badgeTop: 'Foundation',
    phase: 'Phase 1',
    phaseLabel: 'Plan',
    icon: Search,
    title: 'Discovery & Planning',
    description:
      'I start by understanding your goals, target audience, and requirements. This phase includes research, strategy development, and creating a detailed project roadmap.',
    features: [
      'In-depth consultation and requirement gathering',
      'Market and competitor research',
      'Project scope definition and timeline planning',
      'Technology stack selection',
    ],
  },
  {
    badgeTop: 'Core Stage',
    phase: 'Phase 2',
    phaseLabel: 'Build',
    icon: Code2,
    title: 'Design & Development',
    description:
      'With a solid plan in place, I move on to designing and developing your project. This involves creating wireframes, implementing responsive designs, and writing clean, efficient code.',
    features: [
      'UI/UX design and wireframing',
      'Frontend and backend development',
      'Regular progress updates and feedback integration',
      'Thorough testing and quality assurance',
    ],
  },
  {
    badgeTop: 'Deliver',
    phase: 'Phase 3',
    phaseLabel: 'Launch',
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'Once development is complete, I help you launch your project and provide ongoing support to ensure everything runs smoothly and continues to meet your needs.',
    features: [
      'Final testing and optimization',
      'Deployment and launch assistance',
      'Training and documentation',
      'Ongoing maintenance and support options',
    ],
  },
];
