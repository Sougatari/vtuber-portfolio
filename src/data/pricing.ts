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
      price: 20, // ⚠️ EDIT_ME: Set your bust art price
      image: "images/pricing/modelo3.webp",
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
      price: 25, // ⚠️ EDIT_ME: Set your half body art price
      image: "images/pricing/modelo2.webp",
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
      price: 30, // ⚠️ EDIT_ME: Set your full body art price
      image: "images/pricing/modelo1.webp",
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
      price: 3, // ⚠️ EDIT_ME
      description: "Additional facial expression for your character.",
    },
    {
      id: "art-extra-arm",
      name: "Extra Arm / Hand Pose",
      price: 3, // ⚠️ EDIT_ME
      description: "Additional arm or hand position.",
    },
    {
      id: "art-extra-hairstyle",
      name: "Extra Hairstyle",
      price: 10, // ⚠️ EDIT_ME
      description: "Additional hairstyle variant for your character.",
    },
    {
      id: "art-extra-outfit",
      name: "Extra Outfit",
      price: 10, // ⚠️ EDIT_ME
      description: "Additional outfit design.",
    },
    {
      id: "art-extra-accessory",
      name: "Extra Accessory",
      price: 5, // ⚠️ EDIT_ME
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
      price: 20, // ⚠️ EDIT_ME: Set your bust rigging price
      image: "images/pricing/modelo3.webp",
      description: "Bust-level Live2D rigging with all included features.",
      includes: [
        "Full rigg package features",
        "VTube Studio ready (.moc3)",
        "Testing & adjustments",
      ],
    },
    {
      size: "halfBody",
      label: "Half Body",
      price: 25, // ⚠️ EDIT_ME: Set your half body rigging price
      image: "images/pricing/modelo2.webp",
      description:
        "Half body Live2D rigging with all included features plus torso movement.",
      includes: [
        "Full rigg package features",
        "VTube Studio ready (.moc3)",
        "Testing & adjustments",
      ],
    },
    {
      size: "fullBody",
      label: "Full Body",
      price: 30, // ⚠️ EDIT_ME: Set your full body rigging price
      image: "images/pricing/modelo1.webp",
      description:
        "Full body Live2D rigging with complete movement range and physics.",
      includes: [
        "Full rigg package features",
        "VTube Studio ready (.moc3)",
        "Testing & adjustments",
      ],
    },
  ],
  features: [
    { name: "Head X / Y / Z (45-degree turns)", included: true },
    { name: "Basic expressions: sad, happy, blushing", included: true },
    { name: "Eye tracking", included: true },
    { name: "Blinking", included: true },
    { name: "Mouth movement", included: true },
    { name: "Breathing", included: true },
    { name: "Hair physics", included: true },
    { name: "Clothing physics", included: true },
    { name: "Accessory physics", included: true },
    { name: "General physics", included: true },
    { name: "Body movement", included: true },
    { name: "VTube Studio compatibility", included: true },
  ],
  extras: [
    {
      id: "rig-extra-expression",
      name: "Rig of activatables without physics",
      price: 3, // ⚠️ EDIT_ME
      description: "Extra expression switches, hand poses, hats, masks.",
    },
    {
      id: "rig-extra-animation",
      name: "Special Animation",
      price: 10, // ⚠️ EDIT_ME
      description: "Custom animation or special movement.(transformations)",
    },
    {
      id: "rig-extra-accessory",
      name: "Additional Accessory with physics",
      price: 5, // ⚠️ EDIT_ME
      description: "Extra accessory rigging with physics.(hairstyles, wings, tails)",
    },
    {
      id: "rig-extra-custom",
      name: "Other Custom Rigg Work",
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
