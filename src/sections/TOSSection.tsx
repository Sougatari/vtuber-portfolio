import { useState } from 'react';
import { tosCategories } from '../data/tos';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';

export default function TOSSection() {
  const [activeCategory, setActiveCategory] = useState(tosCategories[0]?.id || 'general');
  const currentCategory = tosCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="tos" className="section-padding bg-charcoal-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Terms of Service"
          subtitle="Please review the applicable terms before requesting a commission."
        />

        {/* Category tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center bg-charcoal-800 rounded-xl p-1 border border-charcoal-700 gap-0.5">
            {tosCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-gold-500 text-charcoal-950 shadow-md'
                    : 'text-cream-200 hover:text-cream-50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Category description */}
        {currentCategory && (
          <div>
            <p className="text-cream-200 text-sm text-center mb-8 max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
            <Accordion items={currentCategory.items} allowMultiple />
          </div>
        )}

        {/* Full Model note */}
        <p className="text-cream-300 text-xs text-center mt-8">
          Clients purchasing the Full Model package are subject to the applicable Art + PSD
          and Rigging terms, plus the General Terms.
        </p>
      </div>
    </section>
  );
}
