import Image from "next/image";
import React from "react";

const notFound = () => {
  return (
    <div className=" pt-[150px] flex flex-col items-center justify-center  h-fit bg-[linear-gradient(90deg,_rgba(171,195,244,1)_0%,_rgba(228,239,254,1)_27%,_rgba(214,221,253,1)_35%,_rgba(61,83,199,1)_89%)]">
        <h1 className="text-2xl font-bold text-yellow-300 text-shadow-2xs mb-2">Under Construction</h1>
      <Image
        src="/images/construction.webp"
        alt="404"
        objectFit="contain"
        width={300}
        className="opacity-90 rounded-2xl"
        height={100}
      />
    </div>
  );
};

export default notFound;
