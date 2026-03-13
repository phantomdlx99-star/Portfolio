"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "SaaS Dashboard",
    image: "/projects/saas-dashboard.png",
  },
  {
    title: "Portfolio Website",
    image: "/projects/portfolio-website.png",
  },
  {
    title: "E-Commerce App",
    image: "/projects/ecommerce-app.png",
  },
];

const Project = () => {
  return (
    <section className="w-full py-16 px-6 md:px-20 lg:px-32 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col gap-4"
            >
              <div className="relative aspect-[1.4/1] w-full group cursor-pointer">
                {/* Image Container with Hover Effects */}
                <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 bg-card transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.4)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <motion.h3
                initial={{ opacity: 0, translateX: -25 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1, delay: index * 0.6 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-white tracking-wide"
              >
                {project.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button className="px-10 py-3 rounded-lg border border-white/20 bg-[#12141d] text-white font-medium transition-all duration-300 hover:bg-[#1a1c2e] hover:border-white/40 hover:scale-105 active:scale-95 shadow-xl cursor-pointer">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
