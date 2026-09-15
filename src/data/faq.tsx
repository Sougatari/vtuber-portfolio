import type { IFAQItem } from "../types";
import NoTranslate from "../components/NoTranslate";

// ============================================================
// FAQ DATA
// Edit questions and answers here. Components render from this data.
// ============================================================

export const faqItems: IFAQItem[] = [
  {
    id: "faq-1",
    question: "What services do you offer?",
    answer: (
      <>
        I offer <NoTranslate>VTuber</NoTranslate> Art + <NoTranslate>PSD</NoTranslate> Preparation, <NoTranslate>Live2D</NoTranslate> Rigging, and a Full Model package combining both services.
      </>
    ),
  },
  {
    id: "faq-2",
    question: "Can I commission only the artwork?",
    answer: (
      <>
        Yes. The Art + <NoTranslate>PSD</NoTranslate> Preparation service includes the illustration and a layered <NoTranslate>PSD</NoTranslate> prepared specifically for <NoTranslate>Live2D</NoTranslate> rigging.
      </>
    ),
  },
  {
    id: "faq-3",
    question: "Can I commission only the rigging?",
    answer: (
      <>
        Yes. You can provide your own <NoTranslate>Live2D</NoTranslate>-ready <NoTranslate>PSD</NoTranslate> and commission me for the rigging only. I will review the <NoTranslate>PSD</NoTranslate> before confirming the final price.
      </>
    ),
  },
  {
    id: "faq-4",
    question: "Do you accept existing PSD files for rigging?",
    answer: (
      <>
        Yes, as long as the <NoTranslate>PSD</NoTranslate> is properly separated and contains the necessary layers for rigging. I will review your file before accepting the commission. Additional separation or art fixes may require an extra fee.
      </>
    ),
  },
  {
    id: "faq-5",
    question: "What is included in your rigging?",
    answer: (
      <>
        My rigging is offered as one package, with the included features listed in the Rigging section of my portfolio. Additional or more complex features may require an extra fee.
      </>
    ),
  },
  {
    id: "faq-6",
    question: "How much does a commission cost?",
    answer: (
      <>
        Prices depend on the body size, service, and complexity of the model. You can find the starting prices in the Commissions section. For more complex designs, I will provide a final quote after reviewing your references.
      </>
    ),
  },
  {
    id: "faq-7",
    question: "How does the payment work?",
    answer: (
      <>
        I use a 50/50 payment system. The first 50% is required before I begin working, and the remaining 50% must be paid before the final files are delivered.
      </>
    ),
  },
  {
    id: "faq-8",
    question: "Can I request changes during the commission?",
    answer: (
      <>
        Yes. You will have opportunities to review the work during the process. The number and type of revisions included depend on the stage and service. Major changes requested after approval may require an additional fee.
      </>
    ),
  },
  {
    id: "faq-9",
    question: "How long does a commission take?",
    answer: (
      <>
        The delivery time depends on the complexity of the model, the selected service, and the current commission queue. I will provide an estimated timeframe when your commission is confirmed.
      </>
    ),
  },
  {
    id: "faq-10",
    question: "Do you accept commercial use?",
    answer: (
      <>
        Yes. Commercial use is available according to my Terms of Service. Please mention your intended use when submitting your commission request so I can include it in the quote if necessary.
      </>
    ),
  },
  {
    id: "faq-11",
    question: "Can I use the model for streaming and monetized content?",
    answer: (
      <>
        Yes, provided that your commission includes the appropriate commercial-use rights. Please specify your intended use when requesting a commission.
      </>
    ),
  },
  {
    id: "faq-12",
    question: "Can I request an urgent commission?",
    answer: (
      <>
        Urgent commissions may be accepted depending on my current workload. An additional fee may apply. Please contact me with your deadline before placing a request.
      </>
    ),
  },
  {
    id: "faq-13",
    question: "What happens if I need to cancel my commission?",
    answer: (
      <>
        Cancellation and refund conditions depend on how far the commission has progressed. Please read my Terms of Service before commissioning.
      </>
    ),
  },
  {
    id: "faq-14",
    question: "Can you keep my commission private?",
    answer: (
      <>
        Yes, if you offer a private commission option. This should be explicitly agreed upon before work begins, as otherwise completed work may be used in my portfolio and promotional content.
      </>
    ),
  },
  {
    id: "faq-15",
    question: "What files will I receive?",
    answer: (
      <>
        For Art + <NoTranslate>PSD</NoTranslate> Preparation, you will receive the final artwork and the layered <NoTranslate>PSD</NoTranslate> prepared for <NoTranslate>Live2D</NoTranslate>. For Rigging, you will receive the completed rigging files and the files necessary for use in the agreed setup.
      </>
    ),
  },
  {
    id: "faq-16",
    question: "Will you help me set up the model in VTube Studio?",
    answer: (
      <>
        I can provide basic guidance for importing and using the model in <NoTranslate>VTube Studio</NoTranslate>. Full technical troubleshooting outside the delivered model may not be included.
      </>
    ),
  },
  {
    id: "faq-17",
    question: "How do I request a commission?",
    answer: (
      <>
        Use the Request a Commission button and fill out the commission form with your character references, desired service, deadline, budget, and other relevant information. I will review your request and contact you with the next steps.
      </>
    ),
  },
];
