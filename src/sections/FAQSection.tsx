import { useTranslation } from 'react-i18next';
import { faqData } from '../data/faq';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';

export default function FAQSection() {
  const { t } = useTranslation();

  // Map FAQ items to accordion format
  const accordionItems = faqData.map((item) => ({
    id: item.id,
    title: t(item.questionKey),
    content: <span dangerouslySetInnerHTML={{ __html: t(item.answerKey) }} />,
  }));

  return (
    <section id="faq" className="section-padding bg-charcoal-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
        />

        <Accordion items={accordionItems} />
      </div>
    </section>
  );
}
