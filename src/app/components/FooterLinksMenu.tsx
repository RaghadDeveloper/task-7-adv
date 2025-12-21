import { FooterLinksMenuType } from "@/interfaces";

const FooterLinksMenu = ({
  footerLinksMenu,
}: {
  footerLinksMenu: FooterLinksMenuType;
}) => {
  return (
    <div className="text-white">
      <h3 className="text-xl font-extrabold mb-5">{footerLinksMenu.title}</h3>
      <ul className="flex flex-col gap-2.5">
        {footerLinksMenu.links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-lg">
              {link.Icon ? (
                <div className="flex items-center gap-2">
                  <link.Icon className="text-orange-400" />
                  <span>{link.p}</span>
                </div>
              ) : (
                link.p
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksMenu;
