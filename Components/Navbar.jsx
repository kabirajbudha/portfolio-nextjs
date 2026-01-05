import { assets } from "@/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setisDarkMode }) => {
  const [isscrool, setisscrool] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => sideMenuRef.current.style.transform = "translateX(0)";
  const closeMenu = () => sideMenuRef.current.style.transform = "translateX(100%)";

  useEffect(() => {
    const handleScroll = () => setisscrool(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-full -z-20 translate-y-[80%]">
        <Image
          src={assets.header_bg_color}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isscrool ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            width={150}
            height={50}
            className="w-28 cursor-pointer lg:w-40"
            alt="Logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isscrool
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          <li><a className="font-Ovo" href="#services">Services</a></li>
          <li><a className="font-Ovo" href="#work">My work</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setisDarkMode(pre => !pre)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              width={24}
              height={24}
              alt="Theme Toggle"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image src={assets.arrow_icon} width={16} height={16} alt="Arrow Icon" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              width={24}
              height={24}
              alt="Menu Icon"
            />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 translate-x-full transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              width={24}
              height={24}
              alt="Close Icon"
              className="cursor-pointer"
            />
          </div>
          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">My work</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
