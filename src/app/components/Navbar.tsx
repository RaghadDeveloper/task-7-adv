"use client";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className="fixed w-full py-5 bg-white/20 text-white">
      <div className="w-[90%] mx-auto flex items-center justify-between text-nowrap gap-3">
        <img src="/assets/icons/logo.png" alt="logo" className="w-20" />

        <div className="min-w-[65%] hidden md:flex items-center text-lg lg:text-xl justify-between gap-3">
          <div className="flex gap-3 lg:gap-8 ">
            <Link href="/home">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/packages">Tour Packages</Link>
            <Link href="/contsct">Contact Us</Link>
          </div>
          <div className="flex gap-3">
            <select>
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
                <Link href="/home">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/packages">Tour Packages</Link>
                <Link href="/contsct">Contact Us</Link>
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
