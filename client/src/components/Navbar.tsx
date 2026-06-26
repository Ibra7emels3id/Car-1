import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'حول', href: '#about' },
    { name: 'الخدمات', href: '#services' },
    { name: 'العروض', href: '#offers' },
    { name: 'الفريق', href: '#team' },
    { name: 'التواصل', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 order-last md:order-first hover:opacity-80 transition-opacity">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499897206/CCkw3q6qpHFnwjd87y3LZR/atoan-logo_3291afab.png" alt="ATOAN" className="h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 order-first md:order-none">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-amber-500 transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block order-last">
            <a
              href="#contact"
              className="px-6 py-2 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-colors duration-300 text-sm"
            >
              احجز الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-amber-500 transition-colors order-first"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-amber-500 transition-colors duration-300 text-sm px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-2 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-colors duration-300 text-sm text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                احجز الآن
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
