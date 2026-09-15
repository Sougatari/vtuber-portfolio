import { getFullPackagePrice } from '../data/pricing';
import type { BodySize } from '../types';
import NoTranslate from './NoTranslate';

const sizes: { size: BodySize; label: React.ReactNode }[] = [
  { size: 'bust', label: <NoTranslate>Bust</NoTranslate> },
  { size: 'halfBody', label: <NoTranslate>Half Body</NoTranslate> },
  { size: 'fullBody', label: <NoTranslate>Full Body</NoTranslate> },
];

export default function FullPackageTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gold-500/20">
            <th className="py-4 px-4 text-cream-200 font-medium text-sm">Size</th>
            <th className="py-4 px-4 text-cream-200 font-medium text-sm text-right">
              <NoTranslate>Art</NoTranslate> + <NoTranslate>PSD</NoTranslate>
            </th>
            <th className="py-4 px-4 text-cream-200 font-medium text-sm text-right">
              <NoTranslate>Rigging</NoTranslate>
            </th>
            <th className="py-4 px-4 text-gold-400 font-semibold text-sm text-right">
              Full Package
            </th>
          </tr>
        </thead>
        <tbody>
          {sizes.map(({ size, label }) => {
            const pkg = getFullPackagePrice(size);
            return (
              <tr
                key={size}
                className="border-b border-charcoal-700/50 hover:bg-charcoal-800/50 transition-colors"
              >
                <td className="py-4 px-4 text-cream-100 font-medium">{label}</td>
                <td className="py-4 px-4 text-cream-200 text-right">
                  {pkg.artPrice > 0 ? `$${pkg.artPrice}` : 'TBD'}
                </td>
                <td className="py-4 px-4 text-cream-200 text-right">
                  {pkg.riggingPrice > 0 ? `$${pkg.riggingPrice}` : 'TBD'}
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="text-gold-400 font-bold text-lg">
                    {pkg.total > 0 ? `$${pkg.total}` : 'TBD'}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
