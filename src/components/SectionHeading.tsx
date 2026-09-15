import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  id,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`} id={id}>
      {/* Ornamental top line */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/60" />
        <div className="w-2 h-2 rotate-45 border border-gold-500/60" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/60" />
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gradient-gold tracking-wide">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-cream-200 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Ornamental bottom line */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold-500/40" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold-500/40" />
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold-500/40" />
      </div>
    </div>
  );
}
