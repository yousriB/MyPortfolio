const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="py-12 bg-brand-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="font-mono text-white text-base font-bold">
            YB<span className="text-blue-500">.</span>
          </div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Yousri Ben Ali. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6 text-xs font-mono text-slate-400">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
