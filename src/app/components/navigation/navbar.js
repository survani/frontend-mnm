"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../../../../public/logo.svg";
import { useStore } from "../../state/useStore";
import React from "react";
import { set } from "react-hook-form";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { myths, fetchMyths } = useStore();

  useEffect(() => {
    fetchMyths();
  }, [fetchMyths]);

  //Opens and Closes Mobile Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsDropdownOpen(false);
    }
  };

  //Opens and Closes Dropdown Link For Mobile
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const uniqueArray = myths.filter(
    (element, index, self) =>
      self.findIndex((e) => e.topic === element.topic) === index
  );

  return (
    <>
      <nav className="container flex items-center justify-between w-full h-[3.5rem] mx-auto">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center">
            <div
              onClick={toggleMenu}
              className="pl-10 cursor-pointer lg:hidden"
            >
              {isMenuOpen ? (
                <HiX className="text-xl" />
              ) : (
                <HiMenu className="text-xl" />
              )}
            </div>
            <Link href="/">
              <div className="items-center lg:flex">
                {isMenuOpen ? (
                  <Image
                    src={Logo} // Replace with your logo image URL
                    alt="Logo"
                    className="hidden h-10 lg:block w-50 lg:w-20"
                    width={400}
                    height={400}
                  />
                ) : (
                  <Image
                    src={Logo} // Replace with your logo image URL
                    alt="Logo"
                    className="h-10 w-50 lg:w-20"
                    width={400}
                    height={400}
                  />
                )}
              </div>
            </Link>
          </div>
          <div
            className={`flex items-center space-x-3 lg:space-x-5 ${
              isMenuOpen ? "block" : "hidden lg:flex"
            }`}
          >
            <ul className="flex items-center space-x-3 lg:space-x-5">
              <li>
                <Link href="/" className="cursor-pointer">
                  Home
                </Link>
              </li>
              <li className="relative cursor-pointer " onClick={toggleDropdown}>
                {/* Toggle dropdown menu on click */}
                Topics
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 space-y-2 w-[200px] h-fit border bg-white rounded-lg z-10 p-5">
                    {/* Dropdown menu items */}
                    {uniqueArray.map((myth) => (
                      <React.Fragment key={myth.id}>
                        <Link href={`/topic/${myth.topic.toLowerCase()}`}>
                          <li
                            className="py-0.5 hover:bg-gray-100 hover:rounded p-2.5 mb-1"
                            onClick={toggleDropdown}
                          >
                            {myth.topic}
                          </li>
                        </Link>
                      </React.Fragment>
                    ))}
                    {/* Add more dropdown items as needed */}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-full py-2 font-bold text-center bg-gray-200 ">
        MythsNoMore is under development. #BuildInPublic
      </div>
    </>
  );
};

export default Navbar;
