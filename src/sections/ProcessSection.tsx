import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { artProcess, riggingProcess, processCommunicationNote } from '../data/process';
import SectionHeading from '../components/SectionHeading';
import ProcessTimeline from '../components/ProcessTimeline';
import NoTranslate from '../components/NoTranslate';

type ProcessTab = 'art' | 'rigging';

export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState<ProcessTab>('art');

  return (
    <section id="process" className="section-padding bg-charcoal-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Process"
          subtitle="A clear overview of how we work together from start to finish."
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
              <NoTranslate>Art</NoTranslate> + <NoTranslate>PSD</NoTranslate>
            </button>
            <button
              onClick={() => setActiveTab('rigging')}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'rigging'
                  ? 'bg-gold-500 text-charcoal-950 shadow-md'
                  : 'text-cream-200 hover:text-cream-50'
              }`}
            >
              <NoTranslate>Live2D</NoTranslate> <NoTranslate>Rigging</NoTranslate>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          {activeTab === 'art' && (
            <div>
              <h3 className="text-xl font-heading font-semibold text-cream-50 mb-6">
                {artProcess.title}
              </h3>
              <ProcessTimeline steps={artProcess.steps} />
            </div>
          )}
          {activeTab === 'rigging' && (
            <div>
              <h3 className="text-xl font-heading font-semibold text-cream-50 mb-6">
                {riggingProcess.title}
              </h3>
              <ProcessTimeline steps={riggingProcess.steps} />
            </div>
          )}
        </div>

        {/* Communication note */}
        <div className="bg-charcoal-800/50 rounded-xl border border-gold-500/20 p-6 flex gap-4">
          <MessageCircle size={24} className="text-gold-500 shrink-0 mt-0.5" />
          <p className="text-cream-200 text-sm leading-relaxed italic">
            {processCommunicationNote}
          </p>
        </div>
      </div>
    </section>
  );
}
