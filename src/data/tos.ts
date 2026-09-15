import type { ITOSCategory } from "../types";

// ============================================================
// TERMS OF SERVICE DATA
// Edit legal texts here. Components render from this data.
// Structure: General + Art+PSD + Rigging (NO duplicated Full Model TOS)
// ============================================================

export const tosCategories: ITOSCategory[] = [
  {
    id: "general",
    title: "General Terms",
    description:
      "These terms apply to all commission types. Clients purchasing the Full Model package are subject to the applicable Art + PSD and Rigging terms plus these General terms.",
    items: [
      {
        id: "gen-acceptance",
        title: "Commission Acceptance",
        content:
          "Submitting a commission request does not guarantee acceptance. I reserve the right to decline any commission for any reason.",
      },
      {
        id: "gen-payment",
        title: "Payment",
        content:
          "All commissions use a 50/50 payment structure: 50% is due before work begins, and the remaining 50% is due before final delivery. Payments are securely processed via PayPal, Takenos (Credit/Debit Card), VGen, or Ko-fi. Invoices will be sent through the agreed platform.",
      },
      {
        id: "gen-revisions",
        title: "Revisions",
        content:
          "Minor revisions included in the agreed stage are allowed. Major changes that alter an already approved stage may incur an additional fee. The number and scope of included revisions are defined per service.",
      },
      {
        id: "gen-refunds",
        title: "Refunds",
        content:
          "Once the sketch stage has been completed and approved, payments are non-refundable. Refund policies before that point will be discussed during the quote stage.",
      },
      {
        id: "gen-deadlines",
        title: "Deadlines",
        content:
          "Estimated delivery times may vary depending on complexity, revisions, current workload, and client response time. Urgent deadlines may require an additional fee or may be unavailable.",
      },
      {
        id: "gen-client-delays",
        title: "Client Delays",
        content:
          "If you do not provide required references, feedback, or approvals within a reasonable period, the delivery schedule may be delayed accordingly.",
      },
      {
        id: "gen-commercial",
        title: "Commercial Use",
        content:
          "Commercial use is permitted according to the agreed commission terms. Please discuss commercial licensing requirements during the quote stage.",
      },
      {
        id: "gen-portfolio",
        title: "Portfolio Rights",
        content:
          "I may display completed work in my portfolio, social media, and promotional material unless a private commission option is agreed upon.",
      },
      {
        id: "gen-credit",
        title: "Credit",
        content:
          "Please credit me as the artist when using the commissioned work publicly. Specific credit requirements will be discussed during the commission process.",
      },
      {
        id: "gen-copyright",
        title: "Copyright",
        content:
          "You receive the agreed usage rights, but I retain authorship and copyright unless a separate written agreement states otherwise.",
      },
      {
        id: "gen-ai",
        title: "AI Policy",
        content:
          "The use of my commissioned artwork for AI training, AI generation, or any AI-related purposes is strictly prohibited unless explicitly agreed upon in writing.",
      },
      {
        id: "gen-cancellation",
        title: "Cancellation",
        content:
          "If either party needs to cancel after work has started, the terms will depend on the current stage of progress. Completed work up to the cancellation point is non-refundable.",
      },
    ],
  },
  {
    id: "art",
    title: "Art + PSD Terms",
    description: "Specific terms for the VTuber Art + PSD Preparation service.",
    items: [
      {
        id: "art-payment",
        title: "Payment",
        content:
          "Art commissions follow the 50/50 payment structure outlined in the General Terms.",
      },
      {
        id: "art-revisions",
        title: "Revisions",
        content:
          "Revisions are available at the sketch stage as outlined in the commission agreement. Changes requested after sketch approval may incur additional fees.",
      },
      {
        id: "art-sketch",
        title: "Sketch Approval",
        content:
          "The sketch must be approved before proceeding to lineart and color. Once approved, returning to the sketch stage counts as a major revision.",
      },
      {
        id: "art-psd",
        title: "PSD Separation",
        content:
          "The delivered PSD is a layered file prepared for Live2D rigging. The specific layer organization and separation standards will be confirmed during the quote stage.",
      },
      {
        id: "art-references",
        title: "Client-Provided References",
        content:
          "Please provide clear and detailed character references. The more information you provide, the more accurately I can bring your character to life.",
      },
      {
        id: "art-commercial",
        title: "Commercial Use",
        content: "See General Terms — Commercial Use section.",
      },
      {
        id: "art-copyright",
        title: "Copyright",
        content: "See General Terms — Copyright section.",
      },
      {
        id: "art-portfolio",
        title: "Portfolio Use",
        content: "See General Terms — Portfolio Rights section.",
      },
      {
        id: "art-refunds",
        title: "Refunds",
        content: "See General Terms — Refunds section.",
      },
      {
        id: "art-delivery",
        title: "Delivery",
        content:
          "Final files are delivered digitally. You will receive the high-resolution illustration and the layered PSD file prepared for Live2D.",
      },
    ],
  },
  {
    id: "rigging",
    title: "Rigging Terms",
    description: "Specific terms for the Live2D Rigging service.",
    items: [
      {
        id: "rig-psd-req",
        title: "PSD Requirements",
        content:
          "You must provide a properly prepared and separated PSD file suitable for Live2D rigging. I will review the PSD before confirming the final quote.",
      },
      {
        id: "rig-payment",
        title: "Payment",
        content:
          "Rigging commissions follow the 50/50 payment structure outlined in the General Terms.",
      },
      {
        id: "rig-scope",
        title: "Rigging Scope",
        content:
          "Only the features listed in the rigging package description are guaranteed. 'Full rigging' does not mean unlimited custom animation — it refers to the specific feature set described in the package.",
      },
      {
        id: "rig-revisions",
        title: "Revisions",
        content:
          "Included revisions cover adjustments to the rigged features. Requests for additional features not in the original scope may incur extra fees.",
      },
      {
        id: "rig-additional",
        title: "Additional Requests",
        content:
          "Features beyond the selected package can be added as extras at additional cost. Please discuss these during the quote stage.",
      },
      {
        id: "rig-physics",
        title: "Physics",
        content:
          "Physics simulation for hair, clothing, and accessories is included as described in the package. Additional physics setups are available as extras.",
      },
      {
        id: "rig-expressions",
        title: "Expressions / Toggles",
        content:
          "The number of included expressions and toggles is defined in the package description. Additional expressions are available as extras.",
      },
      {
        id: "rig-technical",
        title: "Technical Limitations",
        content:
          "Live2D rigging results depend on PSD quality and preparation. Poorly separated or organized PSDs may limit what can be achieved.",
      },
      {
        id: "rig-vtube",
        title: "VTube Studio Compatibility",
        content:
          "All rigs are delivered as .moc3 files compatible with VTube Studio. Compatibility with other Live2D software may vary.",
      },
      {
        id: "rig-commercial",
        title: "Commercial Use",
        content: "See General Terms — Commercial Use section.",
      },
      {
        id: "rig-copyright",
        title: "Copyright",
        content: "See General Terms — Copyright section.",
      },
      {
        id: "rig-portfolio",
        title: "Portfolio Use",
        content: "See General Terms — Portfolio Rights section.",
      },
      {
        id: "rig-refunds",
        title: "Refunds",
        content: "See General Terms — Refunds section.",
      },
      {
        id: "rig-delivery",
        title: "Delivery",
        content:
          "Final files are delivered digitally. You will receive the .moc3 file and related assets ready for use in VTube Studio.",
      },
    ],
  },
];
