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
export interface AboutSecData {
  image: string;
  subTitle: string;
  title: string;
  description: string;
  aboutInfos: InfoBlockType[];
  page: string;
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
export interface ServiceCardType {
  image: string;
  title: string;
  description: string;
}
export interface InputFieldType {
  label: string;
  placeholder: string;
  type?: string;
  options?: string[];
}
export interface PackageFeature {
  Icon: React.ElementType;
  text: string;
}
export interface PackageCardType {
  image: string;
  title: string;
  price: string;
  features: PackageFeature[];
}
export interface TestimonialCardType {
  image: string;
  name: string;
  text: string;
}
export interface FeatureCardType {
  icon: string;
  description: string;
}
