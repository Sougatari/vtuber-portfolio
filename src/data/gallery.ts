import type { IGalleryItem, IShowcase } from "../types";

// ============================================================
// GALLERY DATA
// Add/remove gallery images and YouTube showcases here.
// To add a new item:
//   1. Place the optimized image in public/images/art/
//   2. Add an entry below
// No component code changes needed.
// ============================================================

export const galleryItems: IGalleryItem[] = [
  // ⚠️ EDIT_ME: Add your gallery items below
   {
     id: "art-001",
     title: "Character Name",
     image: "images/art/full.webp",
     thumbnail: "images/art/full.webp",
     category: "fullBody",
     alt: "Full body illustration of Character Name",
     description: "Commission for @client — Full body VTuber art with PSD",
   },
];

// All available gallery filter categories
export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "fullBody", label: "Full Body" },
  { id: "halfBody", label: "Half Body" },
  { id: "bust", label: "Bust" },
  { id: "expressions", label: "Expressions" },
  { id: "other", label: "Other" },
] as const;

// ============================================================
// LIVE2D SHOWCASES
// YouTube videos demonstrating rigging work.
// Videos use lazy loading — iframe loads only on user click.
//
// youtubeId accepts any format:
//   - Direct ID: "vCPt4wCoPhU"
//   - Full URL:  "https://www.youtube.com/watch?v=vCPt4wCoPhU"
//   - Short URL: "https://youtu.be/vCPt4wCoPhU"
//   - With params: "https://youtu.be/vCPt4wCoPhU?si=..."
//
// thumbnail is optional — if omitted, YouTube's auto-thumbnail is used.
// ============================================================

export const showcaseItems: IShowcase[] = [
  // ⚠️ EDIT_ME: Add your YouTube showcase videos below
  // Example:
   {
     id: "showcase-001",
     title: "Character Name — Live2D Showcase",
     youtubeId: "https://youtu.be/vCpT4wCoPhU?si=2Ri8VY4R2Um8tUBt",
     description: "Full body rigging showcase with physics and expressions.",
     features: ["Full body movement", "Hair physics", "3 expressions"],
   },
];
