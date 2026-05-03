export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  origin: string;
  image: string;
  category: "spice" | "tea";
  packaging?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  address: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
}

export interface TeaVariant {
  name: string;
  description: string;
  iconKey: string;
}

export interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
}
