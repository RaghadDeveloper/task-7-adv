import { footerLinksMenus, socialLinks } from "@/data/FooterLinks";
import SocialLink from "./SocialLink";
import FooterLinksMenu from "./FooterLinksMenu";

const Footer = () => {
  return (
    <footer className=" bg-zinc-700 py-10">
      <div className="w-[90%] mx-auto">
        <div className="border-b border-white pb-8">
          <img src="/assets/icons/logo.png" alt="Logo" className="w-20" />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-10 justify-between pb-8 border-b border-white">
          {footerLinksMenus.map((footerLinksMenu) => (
            <FooterLinksMenu
              key={footerLinksMenu.title}
              footerLinksMenu={footerLinksMenu}
            />
          ))}

          <div className="flex flex-col items-center">
            <h3 className="text-white text-xl font-extrabold mb-5">
              Social Media
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((socialLink, index) => (
                <SocialLink key={index} socialLink={socialLink} />
              ))}
            </div>
          </div>
        </div>

        <p className="text-white mt-8 text-center">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
