import type { ISiteConfig, INavItem } from "../types";

// ============================================================
// SITE CONFIGURATION
// Edit this file to change commission status, artist name, etc.
// ============================================================

export const siteConfig: ISiteConfig = {
  // ⚠️ EDIT_ME: Replace with your artist name
  artistName: "Sōgatari",

  tagline: "VTuber Artist & Live2D Rigger",

  // Change to "CLOSED" to disable commissions site-wide
  commissionStatus: "OPEN",

  // When CLOSED: "disabled" | "waitlist" | "message"
  closedBehavior: "message",

  // Shown when commissions are CLOSED and closedBehavior is "message"
  closedMessage:
    "Commissions are currently closed. Follow my socials for announcements on when they reopen!",

  // ⚠️ Contact email for FormSubmit.co — loaded from environment variable
  // Create a .env file with VITE_CONTACT_EMAIL=your_email@gmail.com
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || "779pablochambi@gmail.com",

  // Supported payment methods to display globally
  paymentMethods: ["PayPal", "Takenos (Credit/Debit Card)", "Ko-fi"],
};

// Navigation items — matches Blueprint Section 1
export const navItems: INavItem[] = [
  { labelKey: "nav.home", href: "#home" },
  { labelKey: "nav.gallery", href: "#gallery" },
  { labelKey: "nav.commissions", href: "#commissions" },
  { labelKey: "nav.process", href: "#process" },
  { labelKey: "nav.tos", href: "#tos" },
  { labelKey: "nav.faq", href: "#faq" },
  { labelKey: "nav.about", href: "#about" },
];
