export type ProjectTech = 'nextjs' | 'creative';

export interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  tech: ProjectTech;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
  extra?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Quiter FB Moto',
    description:
      'A modern, high-performance electric scooter website built with Next.js, featuring smooth animations, dynamic product displays, and optimized UX.',
    image: '/projects/quiter-fb-moto.png',
    alt: 'Quiter FB Moto',
    tech: 'nextjs',
    tags: ['Next.js', 'Tailwind', 'Product Showcase', 'Animation'],
    liveUrl: 'https://www.fbmotoquieter.com/',
    sourceUrl: 'https://github.com/yousriB/minimalistbike',
  },
  {
    title: 'Hedi Coiffure',
    description:
      'A modern, elegant barber shop website built with Next.js. Clean professional design with smooth animations and seamless UX for services and gallery.',
    image: '/projects/coiffeur.png',
    alt: 'Hedi Coiffure',
    tech: 'nextjs',
    tags: ['Next.js', 'Tailwind', 'Portfolio', 'Animation'],
    liveUrl: 'https://hediportfolio.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/gulf-grooms',
  },
  {
    title: 'Cocktails GSAP Website',
    description:
      'A cinematic GSAP-powered React site with scroll-triggered video, parallax effects, and polished transitions across multiple interactive sections.',
    image: '/projects/cocktail.png',
    alt: 'Cocktails GSAP Website',
    tech: 'creative',
    tags: ['React', 'Tailwind', 'GSAP', 'Parallax'],
    liveUrl: 'https://cocktails-bice.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/gsap_cocktails',
  },
  {
    title: 'Gaming Platform',
    description:
      'An interactive gaming platform with smooth animations and a dynamic user experience powered by Next.js and Framer Motion.',
    image: '/projects/gaming.png',
    alt: 'Gaming Platform',
    tech: 'creative',
    tags: ['Next.js', 'Framer Motion', 'Tailwind', 'Animation'],
    liveUrl: 'https://gaming-two-teal.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/gaming',
  },
  {
    title: 'Ellisa Center for Professional Excellence',
    description:
      'A training center website that transforms ambition into success with a simple and attractive design.',
    image: '/projects/ellisa.png',
    alt: 'Ellisa Center for Professional Excellence',
    tech: 'nextjs',
    tags: ['Next.js', 'Tailwind', 'Formation'],
    liveUrl: 'https://ellisa-three.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/Ellisa',
  },
  {
    title: 'ForumAuto Gabès',
    description:
      'A modern car exhibition website presenting a wide selection of cars with full details and elegant design.',
    image: '/projects/forum.png',
    alt: 'ForumAuto Gabès',
    tech: 'nextjs',
    tags: ['Next.js', 'Tailwind', 'Car Showcase'],
    liveUrl: 'https://www.forumautogabes.com/',
    sourceUrl: 'https://github.com/yousriB/autogabes',
  },
  {
    title: 'Modern Bank',
    description:
      'A clean, modern neobank website featuring intuitive navigation, secure account management, and interactive tools like calculators and testimonials.',
    image: '/projects/bank.png',
    alt: 'Modern Bank',
    tech: 'nextjs',
    tags: ['React', 'Tailwind', 'Banking'],
    liveUrl: 'https://bankmodern.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/bank_modern_app',
    extra: true,
  },
  {
    title: 'SmileWell Dental Clinic',
    description:
      'A modern dental clinic website featuring services, team profiles, and a simple, reliable appointment booking system.',
    image: '/projects/smille.png',
    alt: 'SmileWell Dental Clinic',
    tech: 'nextjs',
    tags: ['React', 'Tailwind', 'Healthcare', 'Booking System'],
    liveUrl: 'https://smile-well.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/SmileWell',
    extra: true,
  },
  {
    title: 'DreamHouse Luxury Estates',
    description:
      'A sleek real estate website showcasing luxury properties with search filters and a blog for market insights.',
    image: '/projects/houses.png',
    alt: 'DreamHouse Luxury Estates',
    tech: 'nextjs',
    tags: ['React', 'Tailwind', 'Real Estate', 'Search Filters'],
    liveUrl: 'https://dreamhouse-elegance.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/dreamhouse-elegance-frontend',
    extra: true,
  },
  {
    title: 'SolarTech',
    description:
      'A clean and modern website promoting solar energy solutions with product displays and easy quote requests.',
    image: '/projects/solair.png',
    alt: 'SolarTech',
    tech: 'nextjs',
    tags: ['React', 'Tailwind', 'Renewable Energy', 'Lead Generation'],
    liveUrl: 'https://solartech-web-oasis.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/solartech-web-oasis',
    extra: true,
  },
  {
    title: 'Bus Management System',
    description:
      'A platform for managing bus transport including route tracking, trip scheduling, and driver data.',
    image: '/projects/bus.png',
    alt: 'Bus Management System',
    tech: 'nextjs',
    tags: ['Next.js', 'Tailwind', 'Transportation'],
    liveUrl: 'https://busses-pi.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/busses',
    extra: true,
  },
  {
    title: 'Elegant Events',
    description:
      'A stylish event planning website showcasing services, testimonials, and a consultation booking system.',
    image: '/projects/wedding.png',
    alt: 'Elegant Events',
    tech: 'nextjs',
    tags: ['React', 'Tailwind', 'UI/UX', 'Event Booking'],
    liveUrl: 'https://eventsplanning.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/Events',
    extra: true,
  },
  {
    title: 'Serenity Beauty Salon',
    description:
      'A luxury beauty salon website that displays services and allows easy appointment booking with a calm, attractive design.',
    image: '/projects/sallon.png',
    alt: 'Serenity Beauty Salon',
    tech: 'nextjs',
    tags: ['React', 'Tailwind', 'Beauty', 'Booking System'],
    liveUrl: 'https://beauty-salon-delta-lilac.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/BeautySalon',
    extra: true,
  },
  {
    title: 'Tunisian Dates (Tamr Tounes)',
    description:
      'A website showcasing premium, authentic Tunisian dates with the product story and easy order options.',
    image: '/projects/dagla.png',
    alt: 'Tunisian Dates',
    tech: 'nextjs',
    tags: ['React', 'Tailwind', 'E-commerce', 'Multilingual'],
    liveUrl: 'https://dagla.vercel.app/',
    sourceUrl: 'https://github.com/yousriB/dagla',
    extra: true,
  },
];
