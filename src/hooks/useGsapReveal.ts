import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero intro timeline
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl.from('.hero-item', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        clearProps: 'all',
      });
      heroTl.from(
        '.hero-visual',
        { scale: 0.96, opacity: 0, duration: 1.2 },
        '-=0.8',
      );

      // Floating terminal
      gsap.to('.hero-visual > div', {
        y: -10,
        rotationZ: 0.5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      // Slide-up reveals
      gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((elem) => {
        gsap.fromTo(
          elem,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        );
      });

      // Fade-only reveals
      gsap.utils.toArray<HTMLElement>('.gsap-reveal-fade').forEach((elem) => {
        gsap.fromTo(
          elem,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        );
      });

      // Capability cards smooth stagger
      gsap.utils.toArray<HTMLElement>('.capability-grid').forEach((grid) => {
        const cards = gsap.utils.toArray<HTMLElement>(':scope > div', grid);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: grid,
              start: 'top 85%',
              once: true,
            },
          },
        );
      });

      // Experience timeline node animations
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item) => {
        const bullet = item.querySelector<HTMLElement>('div.absolute');
        const content = item.querySelector<HTMLElement>('.space-y-2');

        if (bullet) {
          gsap.fromTo(
            bullet,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              scrollTrigger: { trigger: item, start: 'top 80%', once: true },
            },
          );
        }

        if (content) {
          gsap.fromTo(
            content,
            { x: -20, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              scrollTrigger: { trigger: item, start: 'top 80%', once: true },
            },
          );
        }
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);
}
