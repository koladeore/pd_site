"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { motion } from 'framer-motion';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white fixed w-full shadow-xl z-50">
      <div  className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center h-16">
          <Link href="/" className="">
            <Image
              src="/assets/pd_logo.png"
              alt="logo"
              height={70}
              width={70}
            />
          </Link>
          <div className="text-3xl md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? (
              <Image
                src="/assets/close-svgrepo.svg"
                alt="hamburger-menu"
                height={24}
                width={24}
              />
            ) : (
              <Image
                src="/assets/hamburger-menu.svg"
                alt="hamburger-menu"
                width={24}
                height={24}
              />
            )}
          </div> 
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/about" className="py-7 px-3 inline-block">
              About
            </Link>
          </motion.li>
          <NavLinks  />
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/" className="py-7 px-3 inline-block">
              Speaking Invite
            </Link>
          </motion.li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block" onClick={() => setOpen(!open)}>
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/about" className="py-7 px-3 inline-block" onClick={() => setOpen(!open)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Speaking Invite
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
