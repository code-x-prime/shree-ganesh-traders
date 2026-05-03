import type { NavLink, ContactInfo } from "@/types";

export const COMPANY = {
  name: "Sree Ganesh Traders",
  tagline: "Pure Roots. Natural Goodness.",
  subTagline: "From Nature, For Better Living",
  location: "Guwahati, Assam, North East India",
  phone: "6003312525",
  facebook: "Sree Ganesh Traders",
  facebookUrl: "https://www.facebook.com/SreeGaneshTraders",
  instagram: "@sreeganeshtraders",
  instagramUrl: "https://www.instagram.com/sreeganeshtraders",
  whatsapp: "916003312525",
  address: "Guwahati, Assam, North East India",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT_INFO: ContactInfo = {
  phone: "6003312525",
  address: "Guwahati, Assam, North East India",
  facebook: "Sree Ganesh Traders",
  instagram: "@sreeganeshtraders",
  whatsapp: "916003312525",
};

export const TRUST_BADGE_LABELS = [
  { key: "natural", label: "100% Natural" },
  { key: "chemical", label: "Chemical Free" },
  { key: "delivery", label: "Pan India Delivery" },
  { key: "quality", label: "Premium Quality" },
  { key: "packed", label: "Hygienically Packed" },
];

export const WHY_CHOOSE_US = [
  { key: "farm", title: "Direct Farm Sourcing", description: "From 5 North East states, sourced directly from farmers." },
  { key: "natural", title: "100% Natural", description: "No chemicals, no additives — pure as nature intended." },
  { key: "pack", title: "Hygienic Packaging", description: "Sealed and food-safe packaging to preserve freshness." },
  { key: "truck", title: "Pan India Delivery", description: "Fast, safe, and on-time delivery across all of India." },
  { key: "bulk", title: "Bulk B2B Orders", description: "Custom wholesale quantities tailored to your business." },
  { key: "star", title: "Premium Quality", description: "Every batch carefully selected and quality verified." },
];

export const HOW_IT_WORKS = [
  { step: "01", title: "Enquire", description: "Contact us via WhatsApp or call to start your inquiry." },
  { step: "02", title: "Share Requirements", description: "Tell us the products and quantities you need." },
  { step: "03", title: "Get Best Price", description: "We give you the best competitive wholesale pricing." },
  { step: "04", title: "Receive Delivery", description: "Fast, safe delivery right to your doorstep." },
];

export const MILESTONES = [
  { year: "2019", title: "Company Founded", description: "Sree Ganesh Traders established in Guwahati, Assam." },
  { year: "2020", title: "Expanded Product Range", description: "Added premium turmeric and cardamom to our product lineup." },
  { year: "2021", title: "Pan India Delivery", description: "Launched nationwide delivery network for B2B partners." },
  { year: "2022", title: "Tea Distribution", description: "Became official distribution partner for Assam Gold Premium Tea." },
  { year: "2023", title: "500+ Business Partners", description: "Crossed the milestone of 500 satisfied B2B customers." },
  { year: "2024", title: "North East Expansion", description: "Extended sourcing network across all 7 North East states." },
];
