export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    period: '2024 - Present',
    role: 'Full Stack Developer',
    company: 'Forum Auto Gabès',
    description:
      'Building and maintaining the official showroom exhibition portal. Programmed responsive interfaces, vehicle catalogue querying systems, and optimized asset delivery sizes.',
    tags: ['Next.js', 'Tailwind CSS', 'UI/UX'],
    current: true,
  },
  {
    period: '2022 - 2023',
    role: 'Full Stack Developer',
    company: 'Freelance & Personal Projects',
    description:
      'Delivered bespoke, rapid web architectures and private administrative dashboards for local businesses. Engineered interactive appointment systems and localized secure databases.',
    tags: ['Angular', 'TypeScript', 'MongoDB'],
  },
  {
    period: '2021 - 2022',
    role: 'Junior Developer',
    company: 'StartUp Innovations',
    description:
      'Contributed to modular design setups and performance debugging under agile development sprints. Built layouts using CSS utilities and structured raw responsive mockups.',
    tags: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
  },
];
