import type { ISocialLink, IAboutData } from "../types";

// ============================================================
// SOCIAL LINKS & ABOUT DATA
// Edit social media links and about text here.
// Adding a new platform requires only adding an entry below.
// ============================================================

export const socialLinks: ISocialLink[] = [
  // ⚠️ EDIT_ME: Replace URLs with your actual social links
  {
    platform: "x",
    label: "X (Twitter)",
    url: "https://x.com/sougatari",
    icon: "twitter",
  },
  {
    platform: "vgen",
    label: "VGen",
    url: "https://vgen.co/pablito",
    icon: "palette",
  },
  {
    platform: "kofi",
    label: "Ko-fi",
    url: "https://ko-fi.com/sougatari",
    icon: "coffee",
  },
  {
    platform: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/@sougatari",
    icon: "youtube",
  },
];

export const aboutData: IAboutData = {
  heading: "about.title",
  // ⚠️ EDIT_ME: Replace with your actual bio paragraphs
  paragraphs: [
    "about.paragraph1",
    "about.paragraph2",
    "about.paragraph3",
  ],
  // ⚠️ EDIT_ME: Add path to your avatar image
  avatar: "images/ui/perfil.webp",
};
