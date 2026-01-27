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

      <motion.div className="grid grid-cols-auto my-10 gap-8 dark:text-black">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-darkTheme/60 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.bgImage}
                layout="fill"
                objectFit="cover"
                alt={project.title}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="font-Ovo font-semibold text-xl mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                {project.links.length === 1 ? (
                  <a
                    href={project.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    View Project
                    <Image
                      src={assets.send_icon}
                      alt="Send Icon"
                      width={16}
                      height={16}
                    />
                  </a>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() =>
                        setShowMenus((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      }
                      className="flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      View Links
                      <Image
                        src={assets.send_icon}
                        alt="Send Icon"
                        width={16}
                        height={16}
                      />
                    </button>
                    {showMenus[index] && (
                      <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 rounded-md p-2 shadow-lg z-10 w-32">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-1 px-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-800 dark:text-white"
                            onClick={() =>
                              setShowMenus((prev) => ({
                                ...prev,
                                [index]: false,
                              }))
                            }
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
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
