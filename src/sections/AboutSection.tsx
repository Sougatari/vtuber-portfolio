import {
  AtSign,
  Palette,
  Coffee,
  PlayCircle,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { aboutData, socialLinks } from '../data/socials';
import SectionHeading from '../components/SectionHeading';

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  twitter: AtSign,
  palette: Palette,
  coffee: Coffee,
  youtube: PlayCircle,
};

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding bg-charcoal-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t(aboutData.heading)} />

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Avatar */}
          {aboutData.avatar && (
            <div className="shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gold-500/30 bg-charcoal-800">
                <img
                  src={`${import.meta.env.BASE_URL}${aboutData.avatar}`}
                  alt={`${t(aboutData.heading)} avatar`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Hide image if not found
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          )}

          {/* Bio + Socials */}
          <div className="flex-1 text-center md:text-left">
            {aboutData.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-cream-200 leading-relaxed mb-4 last:mb-0"
              >
                {t(paragraph)}
              </p>
            ))}

            {/* Social links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon] || ExternalLink;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-charcoal-800 border border-charcoal-700 text-cream-200 hover:text-gold-400 hover:border-gold-500/30 transition-all text-sm"
                    aria-label={`Visit ${social.label}`}
                  >
                    <Icon size={18} />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
