"use client";

import { motion } from "framer-motion";
import { sora } from "@/lib/fonts";
import { ABOUT_CONTENT } from "@/constants/constants";
import AboutSection from "./AboutSection";

const About = () => {
  return (
    <div
      className={`w-full h-auto px-20 py-5 ${sora.className} bg-linear-to-br from-transparent via-muted to-card`}
    >
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-5 w-full h-0.75 bg-linear-to-r from-primary to-transparent rounded-full"
      />
      <motion.h2
        initial={{ opacity: 0, translateY: -30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-4 text-lg font-semibold tracking-wide"
      >
        Passionate developer with experience in building web applications using
        my moder tech stacks. I love to create paerforment and beautiful web
        experiences.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex mt-7 justify-center items-center px-8 py-8 border-2 border-sidebar-border rounded-lg gap-10"
      >
        {ABOUT_CONTENT.map((item: any, idx: any) => (
          <AboutSection
            key={idx}
            label={item.label}
            value={item.value}
            className="flex-1"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default About;
