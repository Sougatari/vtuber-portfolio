import type { IExtra } from '../types';

interface ExtraItemProps {
  extra: IExtra;
}

export default function ExtraItem({ extra }: ExtraItemProps) {
  return (
    <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-charcoal-800/50 border border-charcoal-700/50 hover:border-gold-500/20 transition-colors">
      <div className="flex items-center gap-3">
        {extra.image && (
          <img
            src={`${import.meta.env.BASE_URL}${extra.image}`}
            alt={extra.name}
            className="w-8 h-8 rounded object-cover"
            loading="lazy"
          />
        )}
        <div>
          <span className="text-cream-100 font-medium text-sm">{extra.name}</span>
          {extra.description && (
            <p className="text-cream-300 text-xs mt-0.5">{extra.description}</p>
          )}
        </div>
      </div>
      <span className="text-gold-400 font-semibold text-sm whitespace-nowrap ml-4">
        {extra.price > 0 ? `+$${extra.price}` : 'TBD'}
      </span>
    </div>
  );
}
