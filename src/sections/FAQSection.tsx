import { faqItems } from '../data/faq';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';

export default function FAQSection() {
  // Map FAQ items to accordion format
  const accordionItems = faqItems.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  return (
    <section id="faq" className="section-padding bg-charcoal-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="FAQ"
          subtitle="Frequently asked questions about commissions and services."
        />

        <Accordion items={accordionItems} />
      </div>
    </section>
  );
}
