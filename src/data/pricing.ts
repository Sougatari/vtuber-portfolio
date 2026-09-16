import type { IArtPricing, IRiggingPricing } from "../types";

// ============================================================
// PRICING DATA
// Edit prices, descriptions, and extras here.
// Full Package prices are calculated automatically — DO NOT duplicate.
// ============================================================

export const artPricing: IArtPricing = {
  title: "VTuber Art + PSD Preparation",
  subtitle:
    "Custom VTuber illustration with layered PSD file prepared for Live2D rigging.",
  options: [
    {
      size: "bust",
      label: "Bust",
      price: 12, // ⚠️ EDIT_ME: Set your bust art price
      image: "images/pricing/art-bust.webp",
      description:
        "Head and shoulders illustration, perfect for a focused VTuber model.",
      includes: [
        "High-resolution illustration",
        "Layered PSD prepared for Live2D",
        "Up to 2 revisions at sketch stage",
      ],
    },
    {
      size: "halfBody",
      label: "Half Body",
      price: 12, // ⚠️ EDIT_ME: Set your half body art price
      image: "images/pricing/art-halfbody.webp",
      description:
        "Waist-up illustration showing more of your character's design and outfit.",
      includes: [
        "High-resolution illustration",
        "Layered PSD prepared for Live2D",
        "Up to 2 revisions at sketch stage",
      ],
    },
    {
      size: "fullBody",
      label: "Full Body",
      price: 13, // ⚠️ EDIT_ME: Set your full body art price
      image: "images/pricing/art-fullbody.webp",
      description:
        "Complete character illustration from head to toe with full outfit details.",
      includes: [
        "High-resolution illustration",
        "Layered PSD prepared for Live2D",
        "Up to 2 revisions at sketch stage",
      ],
    },
  ],
  extras: [
    {
      id: "art-extra-expression",
      name: "Extra Expression",
      price: 14, // ⚠️ EDIT_ME
      description: "Additional facial expression for your character.",
    },
    {
      id: "art-extra-arm",
      name: "Extra Arm / Hand Pose",
      price: 15, // ⚠️ EDIT_ME
      description: "Additional arm or hand position.",
    },
    {
      id: "art-extra-hairstyle",
      name: "Extra Hairstyle",
      price: 15, // ⚠️ EDIT_ME
      description: "Additional hairstyle variant for your character.",
    },
    {
      id: "art-extra-outfit",
      name: "Extra Outfit",
      price: 15, // ⚠️ EDIT_ME
      description: "Additional outfit design.",
    },
    {
      id: "art-extra-accessory",
      name: "Extra Accessory",
      price: 0, // ⚠️ EDIT_ME
      description: "Additional accessory item for your character.",
    },
  ],
};

export const riggingPricing: IRiggingPricing = {
  title: "Live2D Rigging",
  subtitle:
    "Professional Live2D rigging for your prepared PSD. One comprehensive package.",
  description:
    "Full Live2D rigging service. You provide a properly prepared and separated PSD file, and I bring your character to life with smooth, expressive movements.",
  options: [
    {
      size: "bust",
      label: "Bust",
      price: 1, // ⚠️ EDIT_ME: Set your bust rigging price
      image: "images/pricing/rig-bust.webp",
      description: "Bust-level Live2D rigging with all included features.",
      includes: [
        "Full rigging package features",
        "VTube Studio ready (.moc3)",
        "Testing & adjustments",
      ],
    },
    {
      size: "halfBody",
      label: "Half Body",
      price: 2, // ⚠️ EDIT_ME: Set your half body rigging price
      image: "images/pricing/rig-halfbody.webp",
      description:
        "Half body Live2D rigging with all included features plus torso movement.",
      includes: [
        "Full rigging package features",
        "VTube Studio ready (.moc3)",
        "Testing & adjustments",
      ],
    },
    {
      size: "fullBody",
      label: "Full Body",
      price: 3, // ⚠️ EDIT_ME: Set your full body rigging price
      image: "images/pricing/rig-fullbody.webp",
      description:
        "Full body Live2D rigging with complete movement range and physics.",
      includes: [
        "Full rigging package features",
        "VTube Studio ready (.moc3)",
        "Testing & adjustments",
      ],
    },
  ],
  features: [
    { name: "Head X / Y / Z", included: true },
    { name: "Body movement", included: true },
    { name: "Eye tracking", included: true },
    { name: "Blinking", included: true },
    { name: "Mouth movement", included: true },
    { name: "Breathing", included: true },
    { name: "Hair physics", included: true },
    { name: "Clothing physics", included: true },
    { name: "Accessory physics", included: true },
    { name: "General physics", included: true },
    { name: "Expressions / toggles", included: true },
    { name: "VTube Studio compatibility", included: true },
  ],
  extras: [
    {
      id: "rig-extra-expression",
      name: "Additional Expression",
      price: 0, // ⚠️ EDIT_ME
      description: "Extra expression toggle for your Live2D model.",
    },
    {
      id: "rig-extra-physics",
      name: "Additional Physics",
      price: 0, // ⚠️ EDIT_ME
      description: "Extra physics setup for additional elements.",
    },
    {
      id: "rig-extra-animation",
      name: "Special Animation",
      price: 0, // ⚠️ EDIT_ME
      description: "Custom animation or special movement.",
    },
    {
      id: "rig-extra-accessory",
      name: "Additional Accessory",
      price: 0, // ⚠️ EDIT_ME
      description: "Extra accessory rigging with physics.",
    },
    {
      id: "rig-extra-custom",
      name: "Other Custom Rigging Work",
      price: 0, // ⚠️ EDIT_ME
      description: "Custom rigging request — contact for details.",
    },
  ],
};

// ============================================================
// FULL PACKAGE — AUTO-CALCULATED
// DO NOT manually set prices here. They derive from art + rigging.
// ============================================================
export function getFullPackagePrice(
  size: "bust" | "halfBody" | "fullBody"
): {
  artPrice: number;
  riggingPrice: number;
  total: number;
} {
  const artOption = artPricing.options.find((o) => o.size === size);
  const rigOption = riggingPricing.options.find((o) => o.size === size);

  const artPrice = artOption?.price ?? 0;
  const riggingPrice = rigOption?.price ?? 0;

  return {
    artPrice,
    riggingPrice,
    total: artPrice + riggingPrice,
  };
}
