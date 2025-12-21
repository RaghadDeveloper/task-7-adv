export interface Link {
  Icon?: React.ElementType;
  p: string;
  href?: string;
}
export interface FooterLinksMenuType {
  title: string;
  links: Link[];
}
export interface SocialLink {
  Icon: React.ElementType;
  href: string;
}
export interface HeroFormData {
  Icon: React.ElementType;
  label: string;
  options: string[];
}
