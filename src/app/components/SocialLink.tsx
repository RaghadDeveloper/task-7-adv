import type { SocialLink } from "@/interfaces";
import { TiSocialFacebook } from "react-icons/ti";

const SocialLink = ({ socialLink }: { socialLink: SocialLink }) => {
  return (
    <a
      href={socialLink.href}
      className="w-13 aspect-square p-2 text-3xl bg-orange-400 text-zinc-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all"
    >
      <socialLink.Icon />
    </a>
  );
};

export default SocialLink;
