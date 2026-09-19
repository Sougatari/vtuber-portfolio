import { useTranslation } from 'react-i18next';
import { getFullPackagePrice } from '../data/pricing';
import type { BodySize } from '../types';

export default function FullPackageTable() {
  const { t } = useTranslation();

  const sizes: { size: BodySize; label: string }[] = [
    { size: 'bust', label: t('pricing.art.bust.label') },
    { size: 'halfBody', label: t('pricing.art.halfBody.label') },
    { size: 'fullBody', label: t('pricing.art.fullBody.label') },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gold-500/20">
            <th className="py-4 px-4 text-cream-200 font-medium text-sm">{t('common.size')}</th>
            <th className="py-4 px-4 text-cream-200 font-medium text-sm text-right">
              {t('commissions.tabs.art')}
            </th>
            <th className="py-4 px-4 text-cream-200 font-medium text-sm text-right">
              {t('commissions.tabs.rigging')}
            </th>
            <th className="py-4 px-4 text-gold-400 font-semibold text-sm text-right">
              {t('common.fullPackage')}
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
                  {pkg.artPrice > 0 ? `$${pkg.artPrice}` : t('common.tbd')}
                </td>
                <td className="py-4 px-4 text-cream-200 text-right">
                  {pkg.riggingPrice > 0 ? `$${pkg.riggingPrice}` : t('common.tbd')}
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="text-gold-400 font-bold text-lg">
                    {pkg.total > 0 ? `$${pkg.total}` : t('common.tbd')}
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
