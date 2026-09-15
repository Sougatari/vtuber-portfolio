import { Check } from 'lucide-react';
import type { IBodySizeOption } from '../types';

interface PricingCardProps {
  option: IBodySizeOption;
  onImageClick?: (image: string, alt: string) => void;
}

export default function PricingCard({ option, onImageClick }: PricingCardProps) {
  return (
    <div className="group relative bg-charcoal-800 rounded-2xl overflow-hidden border border-charcoal-700 hover:border-gold-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/5">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-900">
        {option.image ? (
          <img
            src={option.image}
            alt={`${option.label} example`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
            loading="lazy"
            onClick={() => onImageClick?.(option.image, `${option.label} example`)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-charcoal-600">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-charcoal-700 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <p className="text-sm">Image coming soon</p>
            </div>
          </div>
        )}

        {/* Size badge */}
        <div className="absolute top-3 left-3 bg-charcoal-950/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gold-400 border border-gold-500/20">
          {option.label}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-4">
          <span className="text-3xl font-heading font-bold text-gradient-gold">
            {option.price > 0 ? `$${option.price}` : 'TBD'}
          </span>
          <span className="text-cream-300 text-sm ml-1">USD</span>
        </div>

        {/* Description */}
        <p className="text-cream-200 text-sm leading-relaxed mb-4">
          {option.description}
        </p>

        {/* Includes list */}
        {option.includes.length > 0 && (
          <ul className="space-y-2">
            {option.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-cream-200">
                <Check size={16} className="text-gold-500 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
