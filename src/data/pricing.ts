export interface PricingTier {
  badge: string;
  badgeRight: string;
  price: string;
  priceSuffix: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaValue: string;
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    badge: 'Essential',
    badgeRight: 'For Startups',
    price: 'FROM 1200 TND',
    priceSuffix: ' / proj',
    title: 'Creative Landing Page',
    description:
      'Highly responsive, conversion-focused single-page landing site with customized micro-interactions and rapid SEO indexing.',
    features: [
      'Customized Next.js/Tailwind Framework',
      'High Performance Tuning (95+ Lighthouse Score)',
      'Basic SEO Meta tags & Sitemap setup',
      'Fully responsive across all devices',
    ],
    ctaLabel: 'Choose Essential',
    ctaValue: 'Essential Landing Page',
  },
  {
    badge: 'Full-Stack Scale',
    badgeRight: 'Recommended',
    price: 'FROM 3500 TND',
    priceSuffix: ' / proj',
    title: 'Full-Stack SaaS Platform',
    description:
      'Complete dynamic application backed by customized authentication gates, resilient cloud databases, and bespoke secure payment triggers.',
    features: [
      'Custom Next.js + DB Stack (SQL/Supabase)',
      '"Secure by Default" Protection Protocol',
      'Authentication & User Role Gates',
      '1 Month post-launch support & tuning',
    ],
    ctaLabel: 'Get Started Now',
    ctaValue: 'Full-Stack SaaS',
    highlighted: true,
  },
  {
    badge: 'Creative Custom',
    badgeRight: 'Cinematic',
    price: 'Custom',
    priceSuffix: ' Pricing',
    title: 'Creative & Three.js',
    description:
      'For brands requiring bleeding-edge aesthetics: highly complex interactive web experiences leveraging WebGL/Three.js or GSAP parallax.',
    features: [
      'Custom Three.js/WebGL interactive scenes',
      'Framer Motion & Complex GSAP animations',
      'High-converting premium art direction',
      'Custom asset pipeline and compression',
    ],
    ctaLabel: 'Request Quote',
    ctaValue: 'Creative Animated Site',
  },
];
