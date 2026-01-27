import { assets } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion"; // fixed import
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="rounded-full overflow-hidden shadow-2xl hover-lift"
      >
        <Image
          src={assets.profile_img}
          width={150}
          height={150}
          alt="Profile Image"
          className="rounded-full"
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-shadow"
      >
        Hi! I'm Kabiraj Budha{" "}
        <motion.div
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Image
            src={assets.hand_icon}
            width={32}
            height={32}
            alt="Hand Icon"
          />
        </motion.div>
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl sm:text-5xl lg:text-[50px] font-Ovo text-shadow bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
      >
        full stack web developer based in Nepal.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-xl mx-auto text-gray-600 dark:text-gray-300"
      >
        Hi, I’m Kabiraj Budha, a Full-Stack Developer building modern,
        responsive web apps with Next.js, React, Node.js, and MongoDB. I turn
        ideas into real products.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          href="#contact"
          className="px-10 py-3 border rounded-full border-white flex items-center gap-2 bg-black text-white dark:bg-transparent hover:bg-gray-800 dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          contact me{" "}
          <Image
            src={assets.right_arrow_white}
            width={16}
            height={16}
            alt="Right Arrow"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          href="/assets/sample-resume13.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:bg-gray-50 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          my resume{" "}
          <Image
            src={assets.download_icon}
            width={24}
            height={24}
            alt="Download Icon"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
