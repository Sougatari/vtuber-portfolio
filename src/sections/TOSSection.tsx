import { tosItems } from '../data/tos';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';

export default function TOSSection() {
  // Map TOS items so HTML in content (e.g. notranslate spans) renders correctly
  const accordionItems = tosItems.map((item) => ({
    id: item.id,
    title: item.title,
    content: <span dangerouslySetInnerHTML={{ __html: item.content }} />,
  }));

  return (
    <section id="tos" className="section-padding bg-charcoal-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Terms of Service"
          subtitle="Please review all terms before requesting a commission."
        />

        {/* Single flat accordion list — no categories */}
        <Accordion items={accordionItems} allowMultiple />
      </div>
    </section>
  );
}
