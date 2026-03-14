import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <div className="pt-20">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
    </div>
  );
};

export default page;
