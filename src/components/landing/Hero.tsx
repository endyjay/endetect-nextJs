import { ArrowRight, Check, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative mt-[125px] w-full h-[550px] flex items-center justify-center">
      {/* Background overlay with opacity */}
      <div
        className="absolute inset-0 bg-[url('/images/hero-image.png')] bg-cover bg-center opacity-25 z-0"
        aria-hidden="true"
      ></div>
      {/* Content */}
      <div className="relative flex justify-center items-center py-[102px] px-[235px] w-full z-10">
        {/* Overlay from .elementor-background-overlay */}
        <div className="px-4 items-center flex flex-col gap-6 text-white">
          <h1 className="text-5xl text-center md:text-5xl leading-[67px] lg:text-5xl font-bold font-montserrat ">
            Employee Monitoring and <br />
            Productivity Tracking Solution
          </h1>
          <div className=" items-center  w-full flex justify-between md:text-xl  font-bold roboto ">
            <div className="flex flex-col gap-2 items-start justify-center">
              <span className="text-[16px] flex items-center roboto">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full p-1 h-5 w-5" />
                Monitor employees in real time{" "}
              </span>
              <span className="text-[16px] flex items-center roboto">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full p-1 h-5 w-5" />
                Productivity and behavior analysis
              </span>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <span className="text-[16px] flex items-center roboto">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full p-1 h-5 w-5" />
                Data Protection and Peace of Mind
              </span>

              <span className="text-[16px] flex items-center roboto">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full p-1 h-5 w-5" />
                Motivates employees to further perform better{" "}
              </span>
            </div>
          </div>  
          <Link
            href="/features" // Assuming best-pc-monitoring-software/index.html maps to /features
            className=" text-nowrap flex  bg-[#24C16F] items-center justify-center hover:bg-[#169050] text-white text-lg py-3 px-5 font-[500]  duration-300 "
          >
            Know More{" "}
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
