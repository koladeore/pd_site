"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { motion } from 'framer-motion';
import { useCart } from "@/hooks/useCart";
import { AiOutlineShopping } from 'react-icons/ai'
import { useRouter } from "next/navigation";

const NavBar = () => {
  const {
    open,
    setOpen,
    cartTotalQty: totalQuantities,
  } = useCart();
  const router = useRouter();
  const goToCart = () => {
    setOpen(false);
    router.push('/cart');
  };
  return (
    <motion.nav 
      className="bg-white sticky top-0 w-full shadow-xl z-50"
    >
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center h-16">
          <Link href="/" className="" onClick={() => setOpen(false)}>
            <Image
              src="/assets/pd_logo.png"
              alt="logo"
              height={70}
              width={70}
            />
          </Link>
          <div className="flex items-center md:hidden">
            <div onClick={goToCart} className="pr-2 cursor-pointer">
                <AiOutlineShopping fontSize="2em" className="relative" />
                <div className="bg-red-500 rounded flex items-center justify-center absolute w-4 h-4 top-8">
                  <span className="text-white text-sm font-light">{totalQuantities}</span>
                </div>
            </div>
            <div className="text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
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
          <NavLinks />
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/allMessages" className="py-7 px-3 inline-block">
              Messages
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/books" className="py-7 px-3 inline-block">
              Books
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <div onClick={goToCart} className="py-7 px-3 inline-block cursor-pointer">
              <AiOutlineShopping fontSize="2em" className="relative" />
              <div className="bg-red-500 rounded flex items-center justify-center absolute w-4 h-4 bottom-8">
                <span className="text-white text-sm font-light">{totalQuantities}</span>
              </div>
            </div>
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
          <li>
            <Link href="/about" className="py-7 px-3 inline-block" onClick={() => setOpen(!open)}>
              About
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/allMessages" className="py-7 px-3 inline-block" onClick={() => setOpen(!open)}>
              Messages
            </Link>
          </li>
          <li>
            <Link href="/books" className="py-7 px-3 inline-block" onClick={() => setOpen(!open)}>
              Books
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
