import type { ReactNode } from 'react';

/**
 * Inline wrapper that prevents browser auto-translators (Google / Edge)
 * from modifying industry-specific terms like "Live2D", "Rigging", etc.
 *
 * Usage: <NoTranslate>Live2D</NoTranslate>
 */
export default function NoTranslate({ children }: { children: ReactNode }) {
  return (
    <span translate="no" className="notranslate">
      {children}
    </span>
  );
}
