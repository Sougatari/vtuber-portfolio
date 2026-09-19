import { ArrowDown, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../data/config';
import StatusBadge from '../components/StatusBadge';
import Button from '../components/Button';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-charcoal-950" />

        {/* Diamond pattern overlay */}
        <div className="absolute inset-0 bg-diamond-pattern opacity-30" />

        {/* Theatrical curtain — left */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-curtain-left opacity-60" />

        {/* Theatrical curtain — right */}
        <div className="absolute inset-y-0 right-0 w-1/4 bg-curtain-right opacity-60" />

        {/* Central vignette */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-charcoal-950/40 to-charcoal-950/90" />

        {/* Top gradient fade for navbar readability */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-charcoal-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Commission status */}
        <div className="mb-8">
          <StatusBadge />
        </div>

        {/* Ornamental top frame */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-gold-500/60" />
          <Sparkles className="w-5 h-5 text-gold-500/60" />
          <div className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-gold-500/60" />
        </div>

        {/* Artist name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-gradient-gold tracking-wider mb-4">
          {siteConfig.artistName}
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-heading text-cream-200 tracking-wide mb-2">
          {t('hero.tagline')}
        </p>

        {/* Ornamental bottom frame */}
        <div className="flex items-center justify-center gap-3 mt-8 mb-10">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-500/40" />
          <div className="w-2 h-2 rotate-45 border border-gold-500/40" />
          <div className="h-px w-8 sm:w-14 bg-gold-500/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold-500/30" />
          <div className="h-px w-8 sm:w-14 bg-gold-500/30" />
          <div className="w-2 h-2 rotate-45 border border-gold-500/40" />
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-500/40" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="#commission-request">
            {t('hero.requestCommission')}
          </Button>
          <Button variant="secondary" size="lg" href="#commissions">
            {t('hero.explorePortfolio')}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#commissions"
          className="text-cream-300/40 hover:text-gold-400 transition-colors"
          aria-label={t('hero.scrollDown')}
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
