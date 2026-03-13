import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Project from "@/components/Project";

const page = () => {
  return (
    <div className="pt-20">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </div>
  );
};

export default page;
