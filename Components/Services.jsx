import { assets, serviceData } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-5 scroll-mt-20"
    >
      <motion.h4 className="text-center mb-2 text-lg font-Ovo">
        What I offer
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-Ovo">
        My Services
      </motion.h2>

      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I create modern, responsive, and user-friendly digital experiences using
        the latest web technologies.
      </motion.p>

      <motion.div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="border border-gray-400 rounded-lg px-5 py-8 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white glass-effect"
            key={index}
          >
            <div className="w-10 h-10 relative">
              <Image src={icon} alt="" fill className="object-contain" />
            </div>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image
                alt=""
                src={
                  isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow
                }
                width={16}
                height={16}
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
