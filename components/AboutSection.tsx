import React from "react";

const AboutSection = ({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className: string;
}) => {
  return (
    <>
      <div
        className={`w-auto ${className} flex justify-center gap-5 items-center`}
      >
        <h1 className="text-2xl font-bold text-white">{value}</h1>
        <h1 className="text-2xl font-bold text-white">{label}</h1>
      </div>
    </>
  );
};

export default AboutSection;
