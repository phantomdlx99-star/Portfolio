"use client";

import Link from "next/link";
import { sora } from "@/lib/fonts";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigation = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/projects",
      title: "Projects",
    },
    {
      href: "/blog",
      title: "Blog",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];
  return (
    <motion.nav
      style={{ transformOrigin: "top left" }}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="fixed z-50 top-0 right-0 left-0 backdrop-blur-xl"
    >
      <div
        className={`w-full ${sora.className} h-auto px-16 py-4 border-b-2 border-gray-900 flex justify-between items-center`}
      >
        <h1 className={`${sora.className} text-3xl`}>Alex</h1>
        <div className="flex gap-8 items-center">
          {navigation.map((item: any, idx: any) => (
            <Link
              href={item.href}
              key={idx}
              className="relative translate-x-15 group"
            >
              {item.title}
              <div className="opacity-0 group-hover:opacity-100 origin-center absolute h-0.75 w-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out -bottom-1 left-0 right-0 bg-linear-to-tr from-pink-500 to-indigo-500 rounded-full" />
            </Link>
          ))}
        </div>
        <button className="px-10 py-2 border-sidebar-border border-2 rounded-xl relative overflow-hidden group transition-all duration-300 hover:text-white cursor-pointer hover:scale-104 ">
          {/* The Animated Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[300%] bg-linear-to-tr from-pink-400 to-indigo-800 transition-transform duration-500 ease-in-out scale-0 group-hover:scale-100 rounded-[50%] -z-10 origin-top-left" />
          <span className="relative z-10">Download CV</span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
