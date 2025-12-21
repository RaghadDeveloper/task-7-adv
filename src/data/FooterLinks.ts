import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";

export const footerLinksMenus = [
  {
    title: "Services",
    links: [
      { p: "Bike and Rickshaw rental", href: "/" },
      { p: "Guided Tours of Lucca", href: "/" },
      { p: "Guided Bike Tour of Lucca", href: "/" },
      { p: "Trip In The Tuscan Hills", href: "/" },
      { p: "Transportation With Luxury Cars", href: "/" },
      { p: "Wine Tours By Bus With Guide", href: "/" },
    ],
  },
  {
    title: "Home",
    links: [
      { p: "Home", href: "/" },
      { p: "About Us", href: "/" },
      { p: "Tour Packages", href: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { p: "Terms of Use", href: "/" },
      { p: "Provicy Policy", href: "/" },
    ],
  },
  {
    title: "Contacts",
    links: [
      {
        Icon: FaLocationDot,
        p: "Piazza Napoleone, Lucca, Tuscany",
        href: `https://www.google.com/maps`,
      },
      { Icon: FaPhoneAlt, p: "	+39 346 368 5708", href: "tel:+393463685708" },
      {
        Icon: MdEmail,
        p: "	italiainlimo@gmail.com",
        href: "mailto:italiainlimo@gmail.com",
      },
    ],
  },
];

export const socialLinks = [
  { Icon: FaTwitter, href: "https://www.twitter.com" },
  { Icon: TiSocialFacebook, href: "https://www.facebook.com" },
  { Icon: FaInstagram, href: "https://www.instagram.com" },
];
