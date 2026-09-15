import SectionHeading from '../components/SectionHeading';
import CommissionForm from '../components/CommissionForm';

export default function CommissionRequestSection() {
  return (
    <section id="commission-request" className="section-padding bg-charcoal-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Request a Commission"
          subtitle="Fill out the form below with your project details. I'll review your request and get back to you with a quote."
        />
        <CommissionForm />
      </div>
    </section>
  );
}
