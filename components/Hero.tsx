import { sora } from "@/lib/fonts";

const Hero = () => {
  return (
    <div
      className={`w-full px-10 gap-4 min-h-[90dvh] bg-linear-to-br from-blue-950 to-secondary flex flex-col items-start justify-between ${sora.className} md:flex-row p-10`}
    >
      <div className="flex-1">
        <h1 className="text-[#6b6a96] text-4xl font-bold">Hi, I'm Alex.</h1>
        <h1 className="text-4xl font-bold mt-5">I Build Web Applications.</h1>
        <div className="flex justify-start items-center gap-5 mt-5 text-[#6b6a96]">
          <h3>Full-Stack Developer</h3>
          <div className="w-1 h-6 rounded-2xl bg-[#6b6a96]" />
          <h3>JavaScript Enhusiast</h3>
        </div>
        <div className="mt-10 flex justify-start gap-5 w-full">
          <button className="px-16 py-3 bg-linear-to-r from-blue-600 to-purple-700 rounded-xl text-xl hover:scale-106 transition cursor-pointer active:scale-100">
            View My Work
          </button>
          <button className="px-16 py-3 border-gray-500 rounded-xl text-xl hover:scale-106 transition cursor-pointer active:scale-100 border-2">
            Contact Me
          </button>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Hero;
