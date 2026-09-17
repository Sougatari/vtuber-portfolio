import type { ReactNode } from 'react';

// ============================================================
// VTuber Portfolio — TypeScript Type Definitions
// All business data interfaces live here.
// Components consume these types via props/imports.
// ============================================================

// --- Commission Status ---
export type CommissionStatus = "OPEN" | "CLOSED";
export type ClosedBehavior = "disabled" | "waitlist" | "message";

export interface ISiteConfig {
  artistName: string;
  tagline: string;
  commissionStatus: CommissionStatus;
  closedBehavior: ClosedBehavior;
  closedMessage: string;
  contactEmail: string;
  paymentMethods: string[];
}

// --- Pricing ---
export type BodySize = "bust" | "halfBody" | "fullBody";

export interface IBodySizeOption {
  size: BodySize;
  label: string;
  price: number;
  image: string;
  description: string;
  includes: string[];
}

export interface IExtra {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface IArtPricing {
  title: string;
  subtitle: string;
  options: IBodySizeOption[];
  extras: IExtra[];
}

export interface IRiggingFeature {
  name: string;
  included: boolean;
}

export interface IRiggingPricing {
  title: string;
  subtitle: string;
  description: string;
  options: IBodySizeOption[];
  features: IRiggingFeature[];
  extras: IExtra[];
}

// --- Gallery ---
export type GalleryCategory =
  | "fullBody"
  | "halfBody"
  | "bust"
  | "expressions"
  | "other";

export interface IGalleryItem {
  id: string;
  title: string;
  image: string;
  thumbnail: string;
  category: GalleryCategory;
  alt: string;
  description?: string;
  /** Mark true for wide/horizontal images — they will span 2 columns in the grid */
  isWide?: boolean;
}

export interface IShowcase {
  id: string;
  title: string;
  thumbnail?: string;
  youtubeId: string;
  description: string;
  features?: string[];
}

// --- Process ---
export interface IProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface IProcessWorkflow {
  title: string;
  steps: IProcessStep[];
}

// --- TOS ---
export interface ITOSItem {
  id: string;
  title: string;
  content: string;
}

export interface ITOSCategory {
  id: string;
  title: string;
  description: string;
  items: ITOSItem[];
}

// --- FAQ ---
export interface IFAQItem {
  id: string;
  question: ReactNode;
  answer: ReactNode;
}

// --- Socials ---
export type SocialPlatform =
  | "x"
  | "vgen"
  | "kofi"
  | "youtube"
  | "discord"
  | "instagram"
  | "twitch"
  | "bluesky";

export interface ISocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  icon: string;
}

// --- About ---
export interface IAboutData {
  heading: string;
  paragraphs: string[];
  avatar?: string;
}

// --- Navigation ---
export interface INavItem {
  label: string;
  href: string;
}
