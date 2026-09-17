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
  heading: "About Me",
  // ⚠️ EDIT_ME: Replace with your actual bio paragraphs
  paragraphs: [
    "Hi! I'm a VTuber artist, Live2D rigger, programmer, 2D animator, and pianist who loves Japanese culture",
    "I am currently just a systems engineering student, but I give my all in every project or task so I can keep improving in what I love",
    "My goal is to leave a mark in the Vtuber industry with some big project and be the next Spanish-speaking Hololive",
  ],
  // ⚠️ EDIT_ME: Add path to your avatar image
  avatar: "images/ui/perfil.webp",
};
