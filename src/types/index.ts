export interface NavItem {
  label: string;
  href: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface Colorway {
  name: string;
  image: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export interface TrustBadge {
  name: string;
  image: string;
  alt: string;
  stat?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  source: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
