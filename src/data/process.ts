import type { IProcessWorkflow } from "../types";

// ============================================================
// PROCESS DATA
// Edit workflow steps and descriptions here.
// ============================================================

export const artProcess: IProcessWorkflow = {
  title: "Art + PSD Preparation",
  steps: [
    {
      number: 1,
      title: "Commission Request",
      description: "You submit the commission form with your character details, references, and requirements.",
    },
    {
      number: 2,
      title: "Quote",
      description: "I review your request, assess complexity, and confirm the final quote.",
    },
    {
      number: 3,
      title: "Sketch",
      description: "I create the initial sketch based on your brief and references.",
    },
    {
      number: 4,
      title: "50% Payment",
      description: "You pay the first 50% via our supported platforms (PayPal, Takenos, VGen, etc.) to begin work on your commission.",
    },
    {
      number: 5,
      title: "Lineart + Color",
      description: "The illustration is developed with clean lineart and full coloring.",
    },
    {
      number: 6,
      title: "PSD Preparation",
      description: "The artwork is separated into layers and organized for Live2D rigging.",
    },
    {
      number: 7,
      title: "Final Review",
      description: "You review the final result and request any included revisions.",
    },
    {
      number: 8,
      title: "Remaining 50%",
      description: "The remaining balance is paid via the agreed platform before final delivery.",
    },
    {
      number: 9,
      title: "Delivery",
      description: "The final high-resolution files and layered PSD are delivered to you.",
    },
  ],
};

export const riggingProcess: IProcessWorkflow = {
  title: "Live2D Rigging",
  steps: [
    {
      number: 1,
      title: "Commission Request",
      description: "You submit the commission form with your rigging requirements.",
    },
    {
      number: 2,
      title: "PSD Review",
      description: "I check whether your PSD is suitable for the requested rig.",
    },
    {
      number: 3,
      title: "Quote",
      description: "I confirm the final price based on the PSD and requirements.",
    },
    {
      number: 4,
      title: "50% Payment",
      description: "You pay the first 50% via our supported platforms (PayPal, Takenos, VGen, etc.) to begin work.",
    },
    {
      number: 5,
      title: "Rigg",
      description: "Your model is rigged according to the selected package features.",
    },
    {
      number: 6,
      title: "Progress Samples",
      description: "I share previews and progress samples during development.",
    },
    {
      number: 7,
      title: "Revisions",
      description: "You review the work and request any included changes.",
    },
    {
      number: 8,
      title: "Remaining 50%",
      description: "The remaining balance is paid via the agreed platform before final delivery.",
    },
    {
      number: 9,
      title: "Delivery",
      description: "The final .moc3 file and related assets are delivered, ready for VTube Studio.",
    },
  ],
};

// ⚠️ EDIT_ME: Customize this communication note
export const processCommunicationNote =
  "During the process, we will stay in contact so I can share progress previews and make the included revisions or modifications according to the commission terms.";
