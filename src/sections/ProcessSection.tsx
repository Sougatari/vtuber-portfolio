import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { processWorkflows } from '../data/process';
import SectionHeading from '../components/SectionHeading';
import ProcessTimeline from '../components/ProcessTimeline';

type ProcessTab = 'art' | 'rigging';

export default function ProcessSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ProcessTab>('art');

  const artProcess = processWorkflows.find(p => p.id === 'art');
  const riggingProcess = processWorkflows.find(p => p.id === 'rigging');

  return (
    <section id="process" className="section-padding bg-charcoal-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('process.title')}
          subtitle={t('process.subtitle')}
        />

        {/* Workflow toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-charcoal-800 rounded-xl p-1 border border-charcoal-700">
            <button
              onClick={() => setActiveTab('art')}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'art'
                  ? 'bg-gold-500 text-charcoal-950 shadow-md'
                  : 'text-cream-200 hover:text-cream-50'
              }`}
            >
              {t('commissions.tabs.art')}
            </button>
            <button
              onClick={() => setActiveTab('rigging')}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'rigging'
                  ? 'bg-gold-500 text-charcoal-950 shadow-md'
                  : 'text-cream-200 hover:text-cream-50'
              }`}
            >
              {t('commissions.tabs.rigging')}
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          {activeTab === 'art' && artProcess && (
            <div>
              <h3 className="text-xl font-heading font-semibold text-cream-50 mb-6">
                {t(artProcess.titleKey)}
              </h3>
              <ProcessTimeline steps={artProcess.steps} />
            </div>
          )}
          {activeTab === 'rigging' && riggingProcess && (
            <div>
              <h3 className="text-xl font-heading font-semibold text-cream-50 mb-6">
                {t(riggingProcess.titleKey)}
              </h3>
              <ProcessTimeline steps={riggingProcess.steps} />
            </div>
          )}
        </div>

        {/* Communication note */}
        <div className="bg-charcoal-800/50 rounded-xl border border-gold-500/20 p-6 flex gap-4">
          <MessageCircle size={24} className="text-gold-500 shrink-0 mt-0.5" />
          <p className="text-cream-200 text-sm leading-relaxed italic">
            {t('process.communicationNote')}
          </p>
        </div>
      </div>
    </section>
  );
}
