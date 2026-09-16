import { useState } from 'react';
import { Check } from 'lucide-react';
import { artPricing, riggingPricing } from '../data/pricing';
import SectionHeading from '../components/SectionHeading';
import PricingCard from '../components/PricingCard';
import ExtraItem from '../components/ExtraItem';
import FullPackageTable from '../components/FullPackageTable';
import NoTranslate from '../components/NoTranslate';
import { siteConfig } from '../data/config';

type ServiceTab = 'art' | 'rigging' | 'fullModel';

const tabs: { id: ServiceTab; label: React.ReactNode }[] = [
  { id: 'art', label: <><NoTranslate>Art</NoTranslate>{' '}+{' '}<NoTranslate>PSD</NoTranslate></> },
  { id: 'rigging', label: <><NoTranslate>Live2D</NoTranslate>{' '}<NoTranslate>Rigging</NoTranslate></> },
  { id: 'fullModel', label: <>Full Model</> },
];

export default function CommissionsSection() {
  const [activeTab, setActiveTab] = useState<ServiceTab>('art');

  return (
    <section id="commissions" className="section-padding bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Commissions"
          subtitle="Choose the service that fits your project. All prices are in USD."
        />

        {/* Service tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-charcoal-800 rounded-xl p-1 border border-charcoal-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gold-500 text-charcoal-950 shadow-md'
                    : 'text-cream-200 hover:text-cream-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Art + PSD Tab */}
        {activeTab === 'art' && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-semibold text-cream-50 mb-2">
                {artPricing.title}
              </h3>
              <p className="text-cream-200 max-w-2xl mx-auto">{artPricing.subtitle}</p>
            </div>

            {/* Pricing cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {artPricing.options.map((option) => (
                <PricingCard key={option.size} option={option} />
              ))}
            </div>

            {/* Extras */}
            {artPricing.extras.length > 0 && (
              <div className="max-w-2xl mx-auto">
                <h4 className="text-lg font-heading font-semibold text-cream-50 mb-4 text-center">
                  <NoTranslate>Art</NoTranslate>{' '}/{' '}<NoTranslate>PSD</NoTranslate>{' '}Extras
                </h4>
                <div className="space-y-2">
                  {artPricing.extras.map((extra) => (
                    <ExtraItem key={extra.id} extra={extra} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Rigging Tab */}
        {activeTab === 'rigging' && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-semibold text-cream-50 mb-2">
                {riggingPricing.title}
              </h3>
              <p className="text-cream-200 max-w-2xl mx-auto">
                {riggingPricing.subtitle}
              </p>
            </div>

            {/* Pricing cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {riggingPricing.options.map((option) => (
                <PricingCard key={option.size} option={option} />
              ))}
            </div>

            {/* Rigging description + features */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-charcoal-800 rounded-2xl p-8 border border-charcoal-700">
                <h4 className="text-lg font-heading font-semibold text-cream-50 mb-4">
                  <NoTranslate>Rigging</NoTranslate>{' '}Package Includes
                </h4>
                <p className="text-cream-200 mb-6">{riggingPricing.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {riggingPricing.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check
                        size={16}
                        className={
                          feature.included
                            ? 'text-gold-500 shrink-0'
                            : 'text-charcoal-600 shrink-0'
                        }
                      />
                      <span
                        className={
                          feature.included ? 'text-cream-100' : 'text-charcoal-500 line-through'
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rigging extras */}
            {riggingPricing.extras.length > 0 && (
              <div className="max-w-2xl mx-auto">
                <h4 className="text-lg font-heading font-semibold text-cream-50 mb-4 text-center">
                  <NoTranslate>Rigging</NoTranslate>{' '}Extras
                </h4>
                <div className="space-y-2">
                  {riggingPricing.extras.map((extra) => (
                    <ExtraItem key={extra.id} extra={extra} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Full Model Tab */}
        {activeTab === 'fullModel' && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-semibold text-cream-50 mb-2">
                Full Model — Art + Rigging
              </h3>
              <p className="text-cream-200 max-w-2xl mx-auto">
                Get the complete package: custom{' '}<NoTranslate>VTuber</NoTranslate>{' '}art with prepared{' '}<NoTranslate>PSD</NoTranslate>{' '}and
                professional{' '}<NoTranslate>Live2D</NoTranslate>{' '}rigging, all in one commission.
              </p>
            </div>

            {/* Full package price table */}
            <div className="max-w-2xl mx-auto bg-charcoal-800 rounded-2xl p-6 border border-charcoal-700">
              <FullPackageTable />
            </div>

            <p className="text-center text-cream-300 text-sm mt-6">
              Additional options available from Art and Rigging extras.
            </p>
          </div>
        )}

        {/* Global Payment Methods Note */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-cream-200 text-sm mb-3">
            Accepted payment methods:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {siteConfig.paymentMethods.map((method) => (
              <span
                key={method}
                className="px-3 py-1 rounded-full bg-charcoal-800 border border-charcoal-700 text-cream-100 text-xs font-medium"
              >
                <NoTranslate>{method}</NoTranslate>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
