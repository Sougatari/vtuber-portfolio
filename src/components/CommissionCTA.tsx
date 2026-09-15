import { Send } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function CommissionCTA() {
  const isOpen = siteConfig.commissionStatus === 'OPEN';

  // Don't show the floating CTA if commissions are closed and behavior is "disabled"
  if (!isOpen && siteConfig.closedBehavior === 'disabled') {
    return null;
  }

  return (
    <a
      href="#commission-request"
      className={`fixed z-40 transition-all duration-300 group ${
        isOpen
          ? 'bg-gold-500 hover:bg-gold-400 text-charcoal-950'
          : 'bg-charcoal-700 hover:bg-charcoal-600 text-cream-200'
      }
      /* Desktop: right sidebar button */
      bottom-6 right-6
      rounded-full
      px-5 py-3.5
      shadow-lg shadow-black/30
      hover:shadow-xl hover:shadow-black/40
      hover:-translate-y-0.5
      /* Mobile: compact circular */
      max-sm:p-3.5 max-sm:px-3.5
      `}
      aria-label={isOpen ? 'Request a Commission' : 'Join Waitlist'}
    >
      <span className="hidden sm:inline font-semibold text-sm tracking-wide">
        {isOpen ? 'Commission Me' : 'Waitlist'}
      </span>
      <Send
        size={18}
        className="sm:ml-2 transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}
