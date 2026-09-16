import { siteConfig } from '../data/config';
import type { CommissionStatus } from '../types';
import NoTranslate from './NoTranslate';

interface StatusBadgeProps {
  status?: CommissionStatus;
  className?: string;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const currentStatus = status ?? siteConfig.commissionStatus;
  const isOpen = currentStatus === 'OPEN';

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase border ${
        isOpen
          ? 'border-green-500/40 bg-green-500/10 text-green-400'
          : 'border-red-500/40 bg-red-500/10 text-red-400'
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'
        }`}
      />
      <NoTranslate>Commissions</NoTranslate>{' '}{currentStatus}
    </div>
  );
}
