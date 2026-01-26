import { assets } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion"; // fixed import
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 relative">
      <div className="absolute inset-0 bg-black/7 -z-10"></div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="rounded-full overflow-hidden"
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
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Kabiraj Budha{" "}
        <Image src={assets.hand_icon} width={32} height={32} alt="Hand Icon" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl sm:text-5xl lg:text-[50px] font-Ovo"
      >
        full stack web developer based in Nepal.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-xl mx-auto"
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
          href="#contact"
          className="px-10 py-3 border rounded-full border-white flex items-center gap-2 bg-black text-white dark:bg-transparent"
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} width={16} height={16} alt="Right Arrow" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/assets/sample-resume13.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume <Image src={assets.download_icon} width={24} height={24} alt="Download Icon" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
