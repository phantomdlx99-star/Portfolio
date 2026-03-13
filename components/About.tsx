import React, { Fragment } from "react";
import { sora } from "@/lib/fonts";
import { ABOUT_CONTENT } from "@/constants/constants";
import AboutSection from "./AboutSection";

const About = () => {
  return (
    <div className={`w-full h-auto px-20 py-5 ${sora.className}`}>
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="mt-5 w-full h-0.75 bg-linear-to-r from-primary to-transparent rounded-full" />
      <h2 className="mt-4 text-lg font-semibold tracking-wide">
        Passionate developer with experience in building web applications using
        my moder tech stacks. I love to create paerforment and beautiful web
        experiences.
      </h2>
      <div className="flex mt-7 justify-center items-center px-8 py-8 border-2 border-sidebar-border rounded-lg gap-10">
        {ABOUT_CONTENT.map((item: any, idx: any) => (
          <AboutSection
            key={idx}
            label={item.label}
            value={item.value}
            className="flex-1"
          />
        ))}
      </div>
    </div>
  );
};

export default About;
