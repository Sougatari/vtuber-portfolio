import { tosCategories } from '../data/tos';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';

export default function TOSSection() {
  return (
    <section id="tos" className="section-padding bg-charcoal-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Terms of Service"
          subtitle="Please review all terms before requesting a commission."
        />

        {/* Unified vertical TOS — all categories visible, no tabs */}
        <div className="space-y-12">
          {tosCategories.map((category) => (
            <div key={category.id}>
              {/* Category subheading */}
              <div className="mb-4">
                <h3 className="text-lg font-heading font-semibold text-gold-400 uppercase tracking-wider mb-1">
                  {category.title}
                </h3>
                {category.description && (
                  <p className="text-cream-200 text-sm">{category.description}</p>
                )}
              </div>

              {/* Accordions for this category */}
              <Accordion items={category.items} allowMultiple />
            </div>
          ))}
        </div>

        {/* Full Model note */}
        <p className="text-cream-300 text-xs text-center mt-10">
          Clients purchasing the Full Model package are subject to the applicable Art + PSD
          and Rigging terms, plus the General Terms.
        </p>
      </div>
    </section>
  );
}
