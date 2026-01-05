import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          width={144}
          height={36}
          className="mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
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
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-700 transition-colors">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/kabirajbudha" target="_blank" className="hover:text-blue-400 transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.fiverr.com/yourusername" target="_blank" className="hover:text-blue-600 transition-colors">
              Fiverr
            </a>
          </li>
          <li>
            <a href="https://www.upwork.com/freelancers/~yourprofile" target="_blank" className="hover:text-blue-400 transition-colors">
              Upwork
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
