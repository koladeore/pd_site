"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { motion } from 'framer-motion';
import { useCart } from "@/hooks/useCart";
import { AiOutlineShopping } from 'react-icons/ai'
import { useRouter, usePathname } from "next/navigation";
import useMenuActive from "@/hooks/useMenuActive";
import { menuItems } from "./MyLinks";

const NavBar = () => {
  const {
    open,
    setOpen,
    cartTotalQty: totalQuantities,
  } = useCart();
  const router = useRouter();
  const pathname = usePathname();
  const goToCart = () => {
    setOpen(false);
    router.push('/cart');
  };
  // const menuItems = [
  //   { href: '/', label: 'Home' },
  //   { href: '/about', label: 'About' },
  //   { href: '/allMessages', label: 'Messages' },
  //   { href: '/books', label: 'Books' },
  // ];
  return (
    <motion.nav className="bg-white sticky top-0 w-full shadow-xl z-50">
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
                <span className="text-white text-sm font-light">
                  {totalQuantities}
                </span>
              </div>
            </div>
            <div
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(!open)}
            >
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
          {menuItems.map((menuItem) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const isActive = useMenuActive(menuItem.href);
            return (
              <motion.li key={menuItem.label} whileHover={{ scale: 1.1 }}>
                <Link
                  href={menuItem.href}
                  className={`py-7 px-3 inline-block ${
                    isActive ? "text-pink-500" : ""
                  }`}
                >
                  {menuItem.label}
                </Link>
              </motion.li>
            );
          })}
          <NavLinks />
          <motion.li whileHover={{ scale: 1.1 }}>
            <div
              onClick={goToCart}
              className="py-7 px-3 inline-block cursor-pointer"
            >
              <AiOutlineShopping fontSize="2em" className="relative" />
              <div className="bg-red-500 rounded flex items-center justify-center absolute w-4 h-4 bottom-8">
                <span className="text-white text-sm font-light">
                  {totalQuantities}
                </span>
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
          {menuItems.map((menuItem) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const isActive = useMenuActive(menuItem.href);
            return (
              <li key={menuItem.label}>
                <Link
                  href={menuItem.href}
                  className={`py-7 px-3 inline-block ${
                    isActive ? "text-pink-500" : ""
                  }`}
                  onClick={() => setOpen(!open)}
                >
                  {menuItem.label}
                </Link>
              </li>
            );
          })}
          <NavLinks />
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
