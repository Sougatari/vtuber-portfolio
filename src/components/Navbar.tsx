import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '../data/config';
import StatusBadge from './StatusBadge';
import Button from './Button';
import NoTranslate from './NoTranslate';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -75% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold-500/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Artist name */}
          <a
            href="#home"
            className="font-heading text-xl md:text-2xl font-bold text-gradient-gold hover:opacity-80 transition-opacity"
          >
            <NoTranslate>{siteConfig.artistName}</NoTranslate>
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-gold-400 bg-gold-500/10'
                    : 'text-cream-200 hover:text-cream-50 hover:bg-cream-100/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + Status */}
          <div className="hidden lg:flex items-center gap-4">
            <StatusBadge className="text-xs" />
            <Button variant="primary" size="sm" href="#commission-request">
              <NoTranslate>Commission Me</NoTranslate>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-cream-100 hover:text-gold-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-gold-500/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-gold-400 bg-gold-500/10'
                    : 'text-cream-200 hover:text-cream-50 hover:bg-cream-100/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 px-4 flex flex-col gap-3">
              <StatusBadge />
              <Button variant="primary" size="md" href="#commission-request" onClick={handleNavClick}>
                <NoTranslate>Commission Me</NoTranslate>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
