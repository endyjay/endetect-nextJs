import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative mt-[125px] w-full  flex items-center justify-center">
      {/* Background overlay with opacity */}
      <div
        className="  fixed top-0 left-0 inset-0 bg-[url('/images/hero-image.png')] bg-cover bg-center opacity-30 -z-10"
        aria-hidden="true"
      ></div>
      {/* Content */}
      <div className="relative max-w-[776px] mx-auto flex justify-center items-center py-12 md:py-[102px]  w-full z-10">
        {/* Overlay from .elementor-background-overlay */}
        <div className="px-2 md:px-2 items-center flex flex-col gap-6 text-white w-full">
          <h1 className="text-2xl text-white! sm:text-3xl md:text-5xl text-center leading-tight md:leading-[67px] lg:text-5xl font-bold  ">
            Employee Monitoring and 
            Productivity Tracking Solution
          </h1>
          <div className="flex flex-col md:flex-row items-center w-full --font-roboto justify-between md:text-xl font-bold  gap-5 md:gap-0">
            <div className="flex flex-col gap-2 items-start justify-center w-full md:w-auto">
              <span className="text-[15px] md:text-[16px] flex items-center ">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full  h-5 w-5" />
                Monitor employees in real time{" "}
              </span>
              <span className="text-[15px] md:text-[16px] flex items-center ">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full  h-5 w-5" />
                Productivity and behavior analysis
              </span>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center w-full md:w-auto">
              <span className="text-[15px] md:text-[16px] flex items-center ">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full  h-5 w-5" />
                Data Protection and Peace of Mind
              </span>

              <span className="text-[15px] md:text-[16px] flex items-center ">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full  h-5 w-5" />
                Motivates employees to further perform better{" "}
              </span>
            </div>
          </div>
          <Link
            href="/features" // Assuming best-pc-monitoring-software/index.html maps to /features
            className="text-nowrap flex bg-[#24C16F] items-center justify-center hover:bg-[#169050] text-white text-base md:text-lg py-3 px-5 font-[500] duration-300 "
          >
            Know More
            <span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
