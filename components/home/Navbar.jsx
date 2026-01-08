"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full padding-x fixed py-4 top-0 inset-x-0 z-50 bg-white ${
        scrolled ? "custom-shadow" : ""
      }`}
    >
      <nav className="w-full flex items-center justify-between">
        <Link href="/">
          <img
            src="/GiveXchangenewlogo.png"
            alt="logo"
            className="w-[80px] md:w-[120px] object-contain"
          />
        </Link>
        <ul className="hidden lg:flex items-center justify-center gap-x-10">
          <li>
            <Link href={`/`} className="font-medium text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <a href={`/#about`} className="font-medium text-gray-500">
              What It Is
            </a>
          </li>
          <li>
            <a href={`/#workflow`} className="font-medium text-gray-500">
              How It Works
            </a>
          </li>

          <li>
            <a
              href={`/#why-we-are-different`}
              className="font-medium text-gray-500"
            >
              Why Us
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4 justify-end">
          <a
            href={`/#contact`}
            className="primary-bg text-white px-6 py-3 rounded-full text-sm font-semibold hidden lg:block"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => toggleSidebar()}
            className="block lg:hidden"
          >
            <LuMenu className="text-2xl" />
          </button>
        </div>

        <div
          className={`w-full lg:hidden absolute h-screen bg-transparent inset-0 z-50 ${
            openSidebar ? "-translate-x-0" : "translate-x-full"
          } transition-all duration-700`}
        >
          <div className="w-[60%] md:w-[40%] h-full float-end shadow-lg p-5 relative bg-white">
            <button type="button" onClick={() => toggleSidebar()}>
              <IoClose className="text-3xl md:text-xl" />
            </button>

            <ul className="flex  flex-col items-start justify-start gap-4 mt-10">
              <li>
                <a href={`/`} className="font-medium text-gray-500">
                  Home
                </a>
              </li>
              <li>
                <a href={`#about`} className="font-medium text-gray-500">
                  About
                </a>
              </li>
              <li>
                <a href={`#workflow`} className="font-medium text-gray-500">
                  Workflow
                </a>
              </li>

              <li>
                <a
                  href={`#why-we-are-different`}
                  className="font-medium text-gray-500"
                >
                  Why we
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
