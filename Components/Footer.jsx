import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20 animate-slide-up">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          width={144}
          height={36}
          className="mx-auto mb-2 hover-lift"
        />

        <div className="w-max flex items-center gap-2 mx-auto glass-effect px-4 py-2 rounded-full">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail"
            width={24}
            height={24}
          />
          kabirajbudha23@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex sm:items-center sm:justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 dark:border-t-white">
        <p className="text-gray-500 text-sm dark:text-white">
          © 2025 Kabiraj Budha. All rights reserved.
        </p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/kabiraj-budha/"
              target="_blank"
              className="hover:text-blue-700 transition-colors hover:scale-110"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kabirajbudha"
              target="_blank"
              className="hover:text-blue-400 transition-colors hover:scale-110"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.fiverr.com/s/38Q0XKV"
              target="_blank"
              className="hover:text-blue-600 transition-colors hover:scale-110"
            >
              Fiverr
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/~0154b4cf506d072bbb"
              target="_blank"
              className="hover:text-blue-400 transition-colors hover:scale-110"
            >
              Upwork
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
