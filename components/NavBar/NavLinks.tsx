import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "./MyLinks";
import { useCart } from "@/hooks/useCart";

const NavLinks = () => {
  const [openSublink, setOpenSublink] = useState("");
  const { open, setOpen } = useCart();
  return (
    <>
      {links.map((topLevelLink) => (
        <div key={topLevelLink.name}>
          <div className="px-3 text-left cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5"
              onClick={() => {
                setOpenSublink(openSublink === topLevelLink.name ? "" : topLevelLink.name);
              }}
            >
              {topLevelLink.name}
              <span className="text-xl md:hidden inline">
                {openSublink === topLevelLink.name ? (
                  <Image
                    src="/assets/chevron-up.svg"
                    alt="chevron-up"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src="/assets/chevron-down.svg"
                    alt="chevron-down"
                    width={24}
                    height={24}
                  />
                )}
              </span>
              <span className="text-xl md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <Image
                  src="/assets/chevron-down.svg"
                  alt="chevron-down"
                  width={24}
                  height={24}
                />
              </span>
            </h1>
            {topLevelLink.submenu && (
              <div>
                <div className="absolute top-13 -mt-5 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-3 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5">
                    {topLevelLink.sublinks.map((sublink) => (
                      <div key={sublink.name}>
                        <ul className="text-lg font-semibold">
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link href={sublink.link} className="hover:text-primary">
                              {sublink.name}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* mobile menus */}
          <div className={`${openSublink === topLevelLink.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {topLevelLink.sublinks &&
              topLevelLink.sublinks.map((sublink) => (
                <div key={sublink.name}>
                  <div onClick={() => setOpen(!open)}>
                    <ul className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center">
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link href={sublink.link} className="hover:text-primary">
                              {sublink.name}
                            </Link>
                          </li>
                      </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
