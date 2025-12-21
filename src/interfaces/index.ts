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
export interface DestinantionCardType {
  image: string;
  title: string;
  price: number;
  date: string;
  capacity: string;
  description: string;
}
export interface InfoBlockType {
  value: number;
  text: string;
}
