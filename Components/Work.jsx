import { assets, workData } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Work = ({ isDarkMode }) => {
  const [showMenus, setShowMenus] = useState({});
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-5 scroll-mt-20"
    >
      <motion.h4 className="text-center mb-2 text-lg font-Ovo">
        My portfolio
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-Ovo">
        My latest work
      </motion.h2>
      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Here are some of my latest web and UI projects that reflect my skills,
        creativity, and development experience.
      </motion.p>

      <motion.div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {workData.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group hover-lift"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-Ovo font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              {project.links.length === 1 ? (
                <a
                  href={project.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                >
                  <Image
                    src={assets.send_icon}
                    alt="Send Icon"
                    width={24}
                    height={24}
                  />
                </a>
              ) : (
                <div
                  onClick={() =>
                    setShowMenus((prev) => ({ ...prev, [index]: !prev[index] }))
                  }
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition cursor-pointer"
                >
                  <Image
                    src={assets.send_icon}
                    alt="Send Icon"
                    width={24}
                    height={24}
                  />
                </div>
              )}
            </div>
            {showMenus[index] && project.links.length > 1 && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white rounded-md p-2 shadow-lg z-10">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1 px-3 hover:bg-gray-100 text-sm"
                    onClick={() =>
                      setShowMenus((prev) => ({ ...prev, [index]: false }))
                    }
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href=""
        className="w-max flex item-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-2 px-5 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show More{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          width={36}
          height={36}
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
