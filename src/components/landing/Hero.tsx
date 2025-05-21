import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center min-h-[600px] overflow-hidden">
      {/* Background image container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-[url('/images/hero-image.png')] bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ transform: "translateZ(0)" }}
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      </div>

      <div className="relative max-w-[785px] mx-auto flex justify-center items-center py-[70px] md:py-[102px] w-full z-10">
        <div className="px-2 md:px-2 items-center flex flex-col gap-5 md:gap-6 text-white w-full">
          <h1 className=" text-white! text-center">
            Employee Monitoring and Productivity Tracking Solution
          </h1>
          <div className="flex py-1 flex-col md:flex-row items-center w-full --font-roboto justify-between md:text-xl font-bold  gap-5 md:gap-0">
            <div className="flex flex-col gap-2 items-center justify-center w-full md:w-auto">
              <span className="text-[15px] md:text-[16px] flex items-center ">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full  h-5 w-5" />
                Monitor employees in real time{" "}
              </span>
              <span className="text-[16px] flex items-center font-[600] ">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full  h-5 w-5" />
                Productivity and behavior analysis
              </span>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start justify-center w-full md:w-auto">
              <span className="text-[16px] flex items-center font-[600]">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full  h-5 w-5" />
                Data Protection and Peace of Mind
              </span>

              <span className="flex items-center font-[600]">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full  h-5 w-5" />
                Motivates employees to further perform better{" "}
              </span>
            </div>
          </div>
          <Link
            href="https://in.bigin.online/org60041256722/bookings/demo" // Assuming best-pc-monitoring-software/index.html maps to /features
            className="text-nowrap flex bg-[#24C16F] items-center justify-center hover:bg-[#169050] text-white text-base md:text-lg py-3 px-5 font-[500] duration-300 "
          >
            Schedule a Demo{" "}
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
