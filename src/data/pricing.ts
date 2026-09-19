import type { IArtPricing, IRiggingPricing } from "../types";

// ============================================================
// PRICING DATA
// Edit prices, descriptions, and extras here.
// Full Package prices are calculated automatically — DO NOT duplicate.
// ============================================================

export const artPricing: IArtPricing = {
  title: "pricing.art.title",
  subtitle: "pricing.art.subtitle",
  options: [
    {
      size: "bust",
      label: "pricing.art.bust.label",
      price: 20, // ⚠️ EDIT_ME: Set your bust art price
      image: "images/pricing/modelo3.webp",
      description: "pricing.art.bust.description",
      includes: [
        "pricing.art.bust.includes.0",
        "pricing.art.bust.includes.1",
        "pricing.art.bust.includes.2",
      ],
    },
    {
      size: "halfBody",
      label: "pricing.art.halfBody.label",
      price: 25, // ⚠️ EDIT_ME: Set your half body art price
      image: "images/pricing/modelo2.webp",
      description: "pricing.art.halfBody.description",
      includes: [
        "pricing.art.halfBody.includes.0",
        "pricing.art.halfBody.includes.1",
        "pricing.art.halfBody.includes.2",
      ],
    },
    {
      size: "fullBody",
      label: "pricing.art.fullBody.label",
      price: 30, // ⚠️ EDIT_ME: Set your full body art price
      image: "images/pricing/modelo1.webp",
      description: "pricing.art.fullBody.description",
      includes: [
        "pricing.art.fullBody.includes.0",
        "pricing.art.fullBody.includes.1",
        "pricing.art.fullBody.includes.2",
      ],
    },
  ],
  extras: [
    {
      id: "art-extra-expression",
      name: "pricing.art.extras.expression.name",
      price: 3, // ⚠️ EDIT_ME
      description: "pricing.art.extras.expression.description",
    },
    {
      id: "art-extra-arm",
      name: "pricing.art.extras.arm.name",
      price: 3, // ⚠️ EDIT_ME
      description: "pricing.art.extras.arm.description",
    },
    {
      id: "art-extra-hairstyle",
      name: "pricing.art.extras.hairstyle.name",
      price: 10, // ⚠️ EDIT_ME
      description: "pricing.art.extras.hairstyle.description",
    },
    {
      id: "art-extra-outfit",
      name: "pricing.art.extras.outfit.name",
      price: 10, // ⚠️ EDIT_ME
      description: "pricing.art.extras.outfit.description",
    },
    {
      id: "art-extra-accessory",
      name: "pricing.art.extras.accessory.name",
      price: 5, // ⚠️ EDIT_ME
      description: "pricing.art.extras.accessory.description",
    },
  ],
};

export const riggingPricing: IRiggingPricing = {
  title: "pricing.rigging.title",
  subtitle: "pricing.rigging.subtitle",
  description: "pricing.rigging.description",
  options: [
    {
      size: "bust",
      label: "pricing.rigging.bust.label",
      price: 20, // ⚠️ EDIT_ME: Set your bust rigging price
      image: "images/pricing/modelo3.webp",
      description: "pricing.rigging.bust.description",
      includes: [
        "pricing.rigging.bust.includes.0",
        "pricing.rigging.bust.includes.1",
        "pricing.rigging.bust.includes.2",
      ],
    },
    {
      size: "halfBody",
      label: "pricing.rigging.halfBody.label",
      price: 25, // ⚠️ EDIT_ME: Set your half body rigging price
      image: "images/pricing/modelo2.webp",
      description: "pricing.rigging.halfBody.description",
      includes: [
        "pricing.rigging.halfBody.includes.0",
        "pricing.rigging.halfBody.includes.1",
        "pricing.rigging.halfBody.includes.2",
      ],
    },
    {
      size: "fullBody",
      label: "pricing.rigging.fullBody.label",
      price: 30, // ⚠️ EDIT_ME: Set your full body rigging price
      image: "images/pricing/modelo1.webp",
      description: "pricing.rigging.fullBody.description",
      includes: [
        "pricing.rigging.fullBody.includes.0",
        "pricing.rigging.fullBody.includes.1",
        "pricing.rigging.fullBody.includes.2",
      ],
    },
  ],
  features: [
    { name: "pricing.rigging.features.headXYZ", included: true },
    { name: "pricing.rigging.features.expressions", included: true },
    { name: "pricing.rigging.features.eyeTracking", included: true },
    { name: "pricing.rigging.features.blinking", included: true },
    { name: "pricing.rigging.features.mouthMovement", included: true },
    { name: "pricing.rigging.features.breathing", included: true },
    { name: "pricing.rigging.features.hairPhysics", included: true },
    { name: "pricing.rigging.features.clothingPhysics", included: true },
    { name: "pricing.rigging.features.accessoryPhysics", included: true },
    { name: "pricing.rigging.features.generalPhysics", included: true },
    { name: "pricing.rigging.features.bodyMovement", included: true },
    { name: "pricing.rigging.features.vtubeStudioCompatibility", included: true },
  ],
  extras: [
    {
      id: "rig-extra-expression",
      name: "pricing.rigging.extras.expression.name",
      price: 3, // ⚠️ EDIT_ME
      description: "pricing.rigging.extras.expression.description",
    },
    {
      id: "rig-extra-animation",
      name: "pricing.rigging.extras.animation.name",
      price: 10, // ⚠️ EDIT_ME
      description: "pricing.rigging.extras.animation.description",
    },
    {
      id: "rig-extra-accessory",
      name: "pricing.rigging.extras.accessory.name",
      price: 5, // ⚠️ EDIT_ME
      description: "pricing.rigging.extras.accessory.description",
    },
    {
      id: "rig-extra-custom",
      name: "pricing.rigging.extras.custom.name",
      price: 0, // ⚠️ EDIT_ME
      description: "pricing.rigging.extras.custom.description",
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
