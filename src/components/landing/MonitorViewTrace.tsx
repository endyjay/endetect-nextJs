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
    <section className="py-[50px] gap-[40px] flex flex-col bg-white">
      <div>
        <h1 className="text-[39px] font-bold text-center  text-[#3A3A3A] leading-[55px]">
          BENEFITS OF ENDETECT
        </h1>
        <div className="w-[133px] border border-[#24C16F] mx-auto"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:gap-12">
          {/* Left Column: Image */}
          <div className=" w-[635px] h-[367px]">
            <Image
              src="https://i0.wp.com/endetect.com/wp-content/uploads/2021/08/activtiy_endy-01-copy.png?w=1160&ssl=1"
              alt="EnDetect Activity Monitoring Dashboard"
              width={200}
              height={200}
              layout="responsive"
              className="rounded-lg "
              unoptimized={true}
            />
          </div>

          {/* Right Column: Text Content & Button */}
          <div className="w-[455px] flex flex-col gap-6">
            {iconBoxData.map((item, index) => (
              <div key={index} className="flex items-start  ">
                {/* <ArrowRightCircleIcon className="w-7 h-7 text-endetect-green mr-4 flex-shrink-0 mt-1" /> */}
                <div>
                  <h4 className="text-lg flex  leading-[24px] font-bold font-montserrat text-[#282938] ">
                    <ArrowRight className="w-5 h-5 text-[#24C16F] -ml-2 mr-2 " /> {item.title}
                  </h4>
                  <p className="text-[#282938] ml-5 text-[15px] leading-[23px] font-[400] font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <div className=" text-center lg:text-left">
              <Link
                href="/contact" // Original link: contact/index.html
                className="text-[16px]  -ml-2  text-white font-semibold bg-green-500 py-3 px-5 hover:bg-[#169050] flex items-center justify-center text-lg w-fit duration-300 "
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
    </section>
  );
};

export default MonitorViewTrace;
