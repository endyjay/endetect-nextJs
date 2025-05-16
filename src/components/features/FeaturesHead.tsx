import Image from "next/image";
import React from "react";

const FeaturesHead = () => {
  return (
    <>
      <section className="py-[60px] relative px-4 pt-[180px] sm:px-8 md:px-[80px] bg-[#F6F6F8]">
        <div className="absolute top-38 right-0  -mt-[100px]  ">
          <Image
            src={"/images/features-1.png"}
            alt="feature-head"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col container lg:flex-row justify-between items-center gap-10 lg:gap-0">
          <div>
            <h1 className="text-2xl max-w-[433px] mb-1.5 font-bold text-[#3A3A3A] leading-tight md:leading-[34px]">
              Employee Tracking and Work from Home Software to Manage Activities
              and Productivity
            </h1>
            <div className="w-[90px] sm:w-[133px] border border-[#24C16F]"></div>
          </div>

          <div className="w-1/2 z-10 ">
            <div>
              <Image
                src={"/images/features-2.png"}
                alt="feature-head"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesHead;
