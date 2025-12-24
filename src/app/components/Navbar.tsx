"use client";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/Navbar";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full py-5 text-white z-10 transition-all ${
        scrolled ? "bg-black/30 backdrop-blur-md" : "bg-white/20 "
      }`}
    >
      <div className="w-[90%] mx-auto flex items-center justify-between text-nowrap gap-3">
        <img src="/assets/icons/logo.png" alt="logo" className="w-20" />

        <div className="min-w-[65%] hidden md:flex items-center text-lg lg:text-xl justify-between gap-3">
          <div className="flex gap-3 lg:gap-8 ">
            {navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className={
                  pathname === link.url ? "border-b-2 border-orange-400" : ""
                }
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            <select name="lng">
              <option value="eng">Eng</option>
              <option value="arab">Arab</option>
            </select>
            <Button className="noBg">Login</Button>
            <Button className="primary">Sign Up</Button>
          </div>
        </div>

        <span
          className="block md:hidden cursor-pointer text-3xl"
          onClick={() => setOpen(!open)}
        >
          <RxHamburgerMenu />
        </span>

        {open && (
          <>
            <div
              className="absolute z-10 top-12 right-9 block md:hidden cursor-pointer text-black text-3xl"
              onClick={() => setOpen(!open)}
            >
              <IoMdClose />
            </div>

            <div className=" absolute top-0 left-0  w-full bg-orange-100 text-black h-screen flex md:hidden flex-col items-center justify-center text-lg lg:text-xl gap-3">
              <div className="flex flex-col gap-3 lg:gap-8 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    className={
                      pathname === link.url
                        ? "border-b-2 border-orange-400"
                        : ""
                    }
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 items-center">
                <select>
                  <option value="eng">Eng</option>
                  <option value="arab">Arab</option>
                </select>
                <Button className="noBg">Login</Button>
                <Button className="primary">Sign Up</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
