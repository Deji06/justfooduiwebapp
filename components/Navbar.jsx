"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Inter, Lobster } from "next/font/google";
import facebook from "@/assets/facebookIcon.jpg";
import twitter from "@/assets/twitter.jpg";
import instagram from "@/assets/instagram.jpg";
import { MdCancelPresentation } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const links = [
  { href: "/HomePage", label: "Home" },
  { href: "/About", label: "About us" },
  { href: "/Contact", label: "Contact" },
  { href: "/RecipePage", label: "Recipes" },
  { href: "/BlogPage", label: "Blog" },
];
// {/* <MdCancelPresentation onClick={closeMenuTab} className="sm:hidden" />


const Navbar = () => {
  const [openTab, setOpenTab] = useState(false);
  const handleMenuTab = () => {
    setOpenTab(!openTab);
  };
  const closeMenuTab = () => {
    setOpenTab(!openTab);
  };

  return (
    <>
        <nav className="flex justify-between items-center px-2 sm:px-10 py-3">
        <Link
            href={"/HomePage"}
            className={`${lobster.className} font-bold text-[24px]`}
        >
            Foodieland<span className="text-red-800">.</span>
        </Link>
        <GiHamburgerMenu onClick={handleMenuTab} className="sm:hidden" /> 
        {/* big screen */}
        <div className={`sm:flex hidden gap-x-3 font-medium`}>
         {links.map((link) => {
                return (
                <div key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                </div>
                );
            })}

        </div>
        <div className="sm:flex hidden items-center gap-x-3 mr-4">
            <Image className="w-[8px]" src={facebook} alt="facebook" />
            <Image className="w-[16px]" src={twitter} alt="twitter" />
            <Image className="w-[16px]" src={instagram} alt="instagram" />
        </div>
        </nav>
        {/* small screen */}
        {openTab ?
        <div className='flex flex-col text-center border recipebg font-medium  sm:hidden gap-y-3 '>
            {links.map((link) => {
                return (
                <div key={link.href}>
                    <Link onClick={handleMenuTab} href={link.href}>{link.label}</Link>
                </div>
                );
            })}
        </div>: '' }
    </>
  );
};

export default Navbar;