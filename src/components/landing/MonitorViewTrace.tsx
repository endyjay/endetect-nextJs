import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"; // Placeholder icon

const iconBoxData = [
  {
    title: "MONITOR",
    description:
      "Monitor and record all your employee working on computers anywhere from the world.",
  },
  {
    title: "VIEW",
    description: "View your employee screen anytime, anywhere.",
  },
  {
    title: "TRACE",
    description:
      "Trace if your employee is stealing your valuable data or customer leads.",
  },
];

const MonitorViewTrace = () => {
  return (
    <section className="py-[50px] px-4 sm:px-8 md:px-20  bg-white">
      <div className="container gap-[40px] flex flex-col">
        <div>
          <h3 className="  text-center mb-1.5   ">
            BENEFITS OF ENDETECT
          </h3>
          <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
        </div>
        <div className="container mx-auto px-0 sm:px-4">
          <div className="flex flex-col lg:flex-row items-center lg:gap-12 gap-8">
            {/* Left Column: Image */}
            <div className="w-full max-w-[635px] h-auto lg:h-[367px] mb-6 lg:mb-0">
              <Image
                src="/images/benifits.webp"
                alt="EnDetect Activity Monitoring Dashboard"
                width={1160}
                height={367}
                layout="responsive"
                className="rounded-lg "
                unoptimized={true}
              />
            </div>

            {/* Right Column: Text Content & Button */}
            <div className="w-full max-w-[455px] flex flex-col gap-6">
              {iconBoxData.map((item, index) => (
                <div key={index} className="flex items-start  ">
                  {/* <ArrowRightCircleIcon className="w-7 h-7 text-endetect-green mr-4 flex-shrink-0 mt-1" /> */}
                  <div className="w-full lg:text-left text-center flex  flex-col">
                    <p className="text-base lg:text-left text-center flex lg:flex-row  flex-col  w-full sm:text-lg  leading-[24px] font-bold font-montserrat text-[#282938] ">
                      <ArrowRight className=" h-5 text-[#24C16F] lg:text-left  text-center lg:w-fit w-full lg:-ml-2 lg:mr-2 " />{" "}
                      <span className="">
                        {item.title}
                      </span>
                    </p>
                    <p className="text-[#282938] ml-5 text-sm sm:text-[15px] leading-[23px] font-[400] font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/contact" // Original link: contact/index.html
                  className="text-[15px] sm:text-[16px]  md:-ml-2 text-white font-semibold bg-green-500 py-3 px-5 hover:bg-[#169050] flex items-center justify-center text-lg w-fit duration-300 "
                >
                  Start Monitoring Now
                  <span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitorViewTrace;
