import { assets } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "4b24fd01-8a78-4dfd-b1ac-1f4e46d63df6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-4 sm:px-6 lg:px-[12%] pb-10 scroll-mt-20
            bg-[url("/footer-bg-color.png")] bg-cover bg-center dark:bg-[url("/footer-bg-color-dark.png")] dark:bg-cover dark:bg-center dark:bg-darkTheme'
    >
      <motion.h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</motion.h4>
      <motion.h2 className="text-center text-5xl font-Ovo">Get in touch</motion.h2>
      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form onSubmit={onSubmit} className="max-w-[70%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-6">
          <motion.input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="w-full p-3 bg-gray-100 border border-black rounded-xl outline-none text-gray-800 placeholder-black focus:border-gray-500 text-sm dark:bg-darkHover/30 dark:border-white/90 dark:text-white dark:placeholder:text-white"
          />
          <motion.input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="w-full p-3 bg-gray-100 border border-black rounded-xl outline-none text-gray-800 placeholder-black focus:border-gray-500 text-sm dark:bg-darkHover/30 dark:border-white/90 dark:text-white dark:placeholder:text-white"
          />
        </div>

        <motion.textarea
          rows="4"
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-3 bg-gray-100 border border-black rounded-xl outline-none text-gray-800 placeholder-black focus:border-gray-500 text-sm dark:bg-darkHover/30 dark:border-white dark:text-white dark:placeholder:text-white"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="mt-4 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition text-sm dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} width={16} height={16} alt="Right Arrow" />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
