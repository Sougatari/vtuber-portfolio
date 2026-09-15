import type { IProcessStep } from '../types';

interface ProcessTimelineProps {
  steps: IProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/20 to-transparent" />

      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.number} className="relative flex gap-5 pl-2">
            {/* Step number circle */}
            <div className="relative z-10 shrink-0 w-9 h-9 rounded-full bg-charcoal-800 border-2 border-gold-500/40 flex items-center justify-center">
              <span className="text-gold-400 text-xs font-bold">
                {String(step.number).padStart(2, '0')}
              </span>
            </div>

            {/* Content */}
            <div className="pb-2 pt-1">
              <h4 className="text-cream-50 font-semibold text-base mb-1">
                {step.title}
              </h4>
              <p className="text-cream-200 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
