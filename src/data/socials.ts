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
    url: "https://vgen.co/EDIT_ME",
    icon: "palette",
  },
  {
    platform: "kofi",
    label: "Ko-fi",
    url: "https://ko-fi.com/EDIT_ME",
    icon: "coffee",
  },
  {
    platform: "youtube",
    label: "YouTube",
    url: "https://youtube.com/@EDIT_ME",
    icon: "youtube",
  },
];

export const aboutData: IAboutData = {
  heading: "About Me",
  // ⚠️ EDIT_ME: Replace with your actual bio paragraphs
  paragraphs: [
    "Hi! I'm a VTuber artist and Live2D rigger specializing in bringing original characters to life.",
    "I create high-quality character illustrations with layered PSD files specifically prepared for Live2D, and I rig them with smooth, expressive movements ready for VTube Studio.",
    "My goal is to help VTubers stand out with unique, professionally crafted models that capture their personality and vision.",
  ],
  // ⚠️ EDIT_ME: Add path to your avatar image
  avatar: "/images/ui/avatar.webp",
};
