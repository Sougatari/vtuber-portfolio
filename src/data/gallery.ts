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
    title: "Kim Noriega",
    image: "images/art/Kim1.webp",
    thumbnail: "images/art/Kim1.webp",
    category: "fullBody",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-002",
    title: "Bocchi",
    image: "images/art/Bo.webp",
    thumbnail: "images/art/Bo.webp",
    category: "fullBody",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-003",
    title: "Kim Noriega",
    image: "images/art/Kim2.webp",
    thumbnail: "images/art/Kim2.webp",
    category: "fullBody",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",

  },
  {
    id: "art-004",
    title: "Sougatari",
    image: "images/art/Yo.webp",
    thumbnail: "images/art/Yo.webp",
    category: "halfBody",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-005",
    title: "Sougatari",
    image: "images/art/YoTog1.webp",
    thumbnail: "images/art/YoTog1.webp",
    category: "other",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-006",
    title: "Sougatari",
    image: "images/art/YoTog2.webp",
    thumbnail: "images/art/YoTog2.webp",
    category: "other",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-007",
    title: "Kim Noriega",
    image: "images/art/KimTog1.webp",
    thumbnail: "images/art/KimTog1.webp",
    category: "other",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-008",
    title: "Kim Noriega",
    image: "images/art/KimTog2.webp",
    thumbnail: "images/art/KimTog2.webp",
    category: "other",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-009",
    title: "Kim Noriega",
    image: "images/art/KimTog3.webp",
    thumbnail: "images/art/KimTog3.webp",
    category: "other",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-010",
    title: "Kim Noriega",
    image: "images/art/KimEx1.webp",
    thumbnail: "images/art/KimEx1.webp",
    category: "expressions",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-011",
    title: "Kim Noriega",
    image: "images/art/KimEx2.webp",
    thumbnail: "images/art/KimEx2.webp",
    category: "expressions",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-012",
    title: "Kim Noriega",
    image: "images/art/KimEx3.webp",
    thumbnail: "images/art/KimEx3.webp",
    category: "expressions",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-013",
    title: "Kim Noriega",
    image: "images/art/KimEx4.webp",
    thumbnail: "images/art/KimEx4.webp",
    category: "expressions",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-014",
    title: "Bocchi",
    image: "images/art/BoEx1.webp",
    thumbnail: "images/art/BoEx1.webp",
    category: "expressions",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-015",
    title: "Bocchi",
    image: "images/art/BoEx2.webp",
    thumbnail: "images/art/BoEx2.webp",
    category: "expressions",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-016",
    title: "Bocchi",
    image: "images/art/BoEx3.webp",
    thumbnail: "images/art/BoEx3.webp",
    category: "expressions",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-017",
    title: "Bocchi",
    image: "images/art/BoEx4.webp",
    thumbnail: "images/art/BoEx4.webp",
    category: "expressions",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-018",
    title: "Bocchi",
    image: "images/art/BoEx5.webp",
    thumbnail: "images/art/BoEx5.webp",
    category: "expressions",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-019",
    title: "Bocchi",
    image: "images/art/BoEx6.webp",
    thumbnail: "images/art/BoEx6.webp",
    category: "expressions",
    alt: "Full body illustration of Character Name",
    description: "Commission for @client — Full body VTuber art with PSD",
  },
  {
    id: "art-020",
    title: "Bocchi",
    image: "images/art/BoEx7.webp",
    thumbnail: "images/art/BoEx7.webp",
    category: "expressions",
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
    title: "Sougatari — Live2D Showcase",
    youtubeId: "https://youtu.be/vCpT4wCoPhU?si=2Ri8VY4R2Um8tUBt",
    description: "Half body rigging showcase with physics and expressions.",
    features: ["Half body movement", "Hair physics", "2 accessories"],
  },
  {
    id: "showcase-002",
    title: "Bocchi — Live2D Showcase",
    youtubeId: "https://youtu.be/xP0ZITQJJa4?si=DHTqh-my0BxKtaMX",
    description: "Full body rigging showcase with physics and expressions.",
    features: ["Full body movement", "Hair physics", "More than 5 expressions"],
  },
];
