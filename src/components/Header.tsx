import { useState } from 'react';
import { Menu, Shield, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#security', label: 'Security', accent: true },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services & Pricing' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 bg-brand-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-3 group">
          <span className="font-mono text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            YB<span className="text-blue-500">.</span>
          </span>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest hidden sm:inline-block border-l border-white/10 pl-3">
            Creative Engineer
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              {link.accent && <Shield className="w-4 h-4 text-emerald-400" />}
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold tracking-wider text-black bg-white hover:bg-blue-400 transition-all duration-300 rounded uppercase"
          >
            Build Project
          </a>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 w-screen h-screen bg-brand-950 px-6 pt-28 pb-8 space-y-4 overflow-y-auto transform transition-transform duration-500 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        aria-hidden={!mobileOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className={`block text-lg hover:text-white py-2 border-b border-white/5 ${link.accent ? 'text-emerald-400 flex items-center gap-2' : ''
              }`}
          >
            {link.accent && <Shield className="w-5 h-5" />}
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMobile}
          className="inline-block w-full text-center py-3 text-xs font-mono font-bold uppercase bg-white text-black rounded mt-4"
        >
          Build Project
        </a>
      </div>
    </header>
  );
}
