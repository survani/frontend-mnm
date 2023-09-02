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
      <header className="bg-[#1f2937] border-b-2 border-gray-700 text-white fixed top-0 w-full h-16 flex items-center justify-between  shadow">
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
                    className="hidden h-10 ml-3 lg:block w-50 lg:w-20 lg:ml-10"
                    width={400}
                    height={400}
                  />
                ) : (
                  <Image
                    src={Logo} // Replace with your logo image URL
                    alt="Logo"
                    className="h-10 ml-3 w-50 lg:w-20 lg:ml-10"
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
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li
                className="relative text-gray-300 hover:text-white cursor-pointer"
                onClick={toggleDropdown}
              >
                {/* Toggle dropdown menu on click */}
                Topics
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 space-y-2 w-[200px] h-fit bg-gray-800 text-white border border-gray-300 rounded-lg z-10 p-5">
                    {/* Dropdown menu items */}
                    {uniqueArray.map((myth) => (
                      <React.Fragment key={myth.id}>
                        <li
                          className="py-0.5 hover:bg-gray-900"
                          onClick={toggleDropdown}
                        >
                          <Link href={`/topic/${myth.topic.toLowerCase()}`}>
                            {myth.topic}
                            <hr />
                          </Link>
                        </li>
                      </React.Fragment>
                    ))}
                    {/* Add more dropdown items as needed */}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="fixed bottom-0 w-full py-2 text-center text-white font-bold bg-[#131a27]">
        MythsNoMore is under development. #BuildInPublic
      </div>
    </>
  );
};

export default Navbar;
