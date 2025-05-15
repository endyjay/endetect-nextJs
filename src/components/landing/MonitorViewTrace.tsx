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
    <section className="py-16 md:py-24 bg-white">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-gray-800 mb-4">
          BENEFITS OF ENDETECT
        </h1>
        <div className="w-24 h-1 bg-endetect-green mx-auto"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:gap-12">
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="https://i0.wp.com/endetect.com/wp-content/uploads/2021/08/activtiy_endy-01-copy.png?w=1160&ssl=1"
              alt="EnDetect Activity Monitoring Dashboard"
              width={1160}
              height={670}
              layout="responsive"
              className="rounded-lg "
              unoptimized={true}
            />
          </div>

          {/* Right Column: Text Content & Button */}
          <div className="w-full lg:w-1/2">
            {iconBoxData.map((item, index) => (
              <div key={index} className="flex items-start mb-6 md:mb-8">
                {/* <ArrowRightCircleIcon className="w-7 h-7 text-endetect-green mr-4 flex-shrink-0 mt-1" /> */}
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold font-montserrat text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 font-sans">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="mt-8 md:mt-10 text-center lg:text-left">
              <Link
                href="/contact" // Original link: contact/index.html
                className="inline-block bg-endetect-orange hover:bg-endetect-orange-dark text-white font-semibold bg-green-500 py-3 px-8 rounded-md text-lg transition-colors duration-300 shadow-md"
              >
                Start Monitoring Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitorViewTrace;
