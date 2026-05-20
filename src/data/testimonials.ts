export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Yousri delivered a professional and responsive website for our dealership that truly impressed our clients. His work on the Forum Auto Gabès platform has helped us showcase our cars better and attract more leads.',
    name: 'Khaled Ben Youssef',
    role: 'Director, Forum Auto Gabès',
    initials: 'KB',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    quote:
      'Yousri turned our vision into a clean, functional, and beautiful website. His ability to translate business needs into intuitive design is what sets him apart.',
    name: 'Mouna Dhouib',
    role: 'Founder, Elegant Events',
    initials: 'MD',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    quote:
      'I hired Yousri for a freelance project and he delivered beyond expectations. From booking systems to animations, everything was optimized and smooth.',
    name: 'Nidhal Khemiri',
    role: 'Project Manager, SolarTech Project',
    initials: 'NK',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    quote:
      'Working with Yousri on our beauty salon site was a game changer. The user experience, aesthetics, and responsiveness were exactly what we needed to boost our online presence.',
    name: 'Rania Bouazizi',
    role: 'Owner, Beauty Salon',
    initials: 'RB',
    gradient: 'from-amber-500 to-orange-500',
  },
];
