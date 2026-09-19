import { useTranslation } from 'react-i18next';
import { tosData } from '../data/tos';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';

export default function TOSSection() {
  const { t } = useTranslation();

  // Map TOS items
  const accordionItems = tosData[0].items.map((item) => ({
    id: item.id,
    title: t(item.titleKey),
    content: <span dangerouslySetInnerHTML={{ __html: t(item.contentKey) }} />,
  }));

  return (
    <section id="tos" className="section-padding bg-charcoal-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('tos.title')}
          subtitle={t('tos.subtitle')}
        />

        {/* Single flat accordion list — no categories */}
        <Accordion items={accordionItems} allowMultiple />
      </div>
    </section>
  );
}
