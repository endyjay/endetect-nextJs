import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturesHead = () => {
  return (
    <>
      <section className="py-[40px] px-4 md:py-[60px] relative bg-[url('/images/features-1.png')] md:bg-[length:600px] bg-[length:300px] bg-top-right bg-no-repeat bg-[#F6F6F8]">
        <div className="flex  container md:flex-row flex-col-reverse justify-between items-center gap-[50px] md:gap-4 relative z-10">
          <div>
            <h4 className="md:max-w-[433px] md:text-left text-center max-w-full! mb-1.5 font-bold text-[#3A3A3A]">
              Employee Tracking and Work from Home Software to Manage Activities
              and Productivity
            </h4>
            <div className="w-[90px] md:m-0 sm:w-[133px] mx-auto border border-[#24C16F]"></div>
            <Link
              href="https://calendly.com/endetect/demo/"
              target="_blank"
              className="text-nowrap shadow-lg mx-auto flex w-fit mt-5 font-[400] bg-[#24C16F] items-center justify-center md:mx-0 hover:bg-[#169050] text-white text-base md:text-lg py-3 px-5  duration-300 "
            >
              Ask Demo
            </Link>
          </div>

          <div className=" w-full! md:w-1/2">
            <div>
              <Image
                src={"/images/features-2.png"}
                alt="feature-head"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesHead;
