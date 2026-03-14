"use client";

import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

const Skills = () => {
  const skills = [
    { href: "nextjs-icon.svg" },
    { href: "react-logo.svg" },
    { href: "tailwind-css.svg" },
    { href: "Vue.js.svg" },
  ];
  return (
    <div className="w-full h-auto px-20 py-5 bg-linear-to-br from-transparent via-muted to-card">
      <h1 className="text-4xl font-bold">My Skills</h1>
      <h2 className="text-lg font-semibold mt-5 text-muted-foreground">
        Technologies is work with.
      </h2>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex mt-7 justify-evenly items-center px-5 py-8 border-2 border-sidebar-border rounded-lg gap-10"
      >
        {skills.map((item: any, idx: any) => (
          <Fragment key={idx}>
            <Image
              src={`/skills/${item.href}`}
              alt={item.href}
              width={100}
              height={100}
              className="object-contain hover:scale-110 transition-all duration-300"
            />
            {idx <= 2 && (
              <div className="w-1 h-18 rounded-full bg-linear-to-b from-transparent via-input to-transparent" />
            )}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
