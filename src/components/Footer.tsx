import { Heart } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-700/50 py-8 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-1.5 text-cream-300 text-sm">
          <span>© {year}</span>
          <span className="text-gold-400 font-heading font-semibold">
            {siteConfig.artistName}
          </span>
          <span>—</span>
          <span className="inline-flex items-center gap-1">
            Made with <Heart size={14} className="text-burgundy-600" fill="currentColor" />
          </span>
        </div>
      </div>
    </footer>
  );
}
