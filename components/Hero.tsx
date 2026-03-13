"use client";

import { sora } from "@/lib/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`w-full gap-4 min-h-[90dvh] max-h-dvh bg-linear-to-br from-blue-950 to-secondary flex flex-col items-start justify-between ${sora.className} md:flex-row md:items-center md:justify-between p-10`}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <h1 className="text-[#6b6a96] text-4xl font-bold">Hi, I'm Alex.</h1>
        <h1 className="text-4xl font-bold mt-5">I Build Web Applications.</h1>
        <div className="flex justify-start items-center gap-5 mt-5 text-[#6b6a96]">
          <h3>Full-Stack Developer</h3>
          <div className="w-1 h-6 rounded-2xl bg-[#6b6a96]" />
          <h3>JavaScript Enthusiast</h3>
        </div>
        <div className="mt-10 flex justify-start gap-5 w-full">
          <button className="px-16 py-3 bg-linear-to-r from-blue-600 to-purple-700 rounded-xl text-xl hover:scale-106 transition cursor-pointer active:scale-100 shadow-lg">
            View My Work
          </button>
          <button className="px-16 py-3 border-gray-500 rounded-xl text-xl hover:scale-106 transition cursor-pointer active:scale-100 border-2">
            Contact Me
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 flex justify-end pr-10"
      >
        <Image
          src={"/portfolio-image.jpeg"}
          width={350}
          height={350}
          alt="Portfolio_Image"
          className="rounded-2xl shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
