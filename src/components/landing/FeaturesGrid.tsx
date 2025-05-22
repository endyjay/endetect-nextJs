import Image from "next/image";

const features = [
  {
    iconSrc: "/images/internet.gif",
    title: "Website History",
    description: "Track all website visits within your organization",
  },
  {
    iconSrc:
      "/images/facebook-messenger-click.webp", 
    title: "Social Media Activity Report",
    description:
      "You can track all social media activity of your employee with URL and screenshots.",
  },
  {
    iconSrc:
      "images/list-is-empty.webp",
    title: "Time Sheet",
    description:
      "Tracks login and logout time of your employee with idle time logs and active and productive time analysis.",
  },
  {
    iconSrc: "/images/activity.webp",
    title: "Behaviors Analysis",
    description:
      "Tracks abusive, malicious and threat-full behavior within your organization",
  },
  {
    iconSrc:
      "/images/warning-blink.webp",
    title: "Alert Manager",
    description:
      "You can manage alerts on typed words, copied text, deleted/copied file, Website visits, Bandwidth usage etc",
  },
  {
    iconSrc:
      "/images/folder-with-files.webp", 
    title: "USB Storage",
    description:
      "Tracks and logs USB Storage inserts (Pen Drive, Hard Disk etc)",
  },
  {
    iconSrc:
      "/images/computer-display.webp", 
    title: "Screenshot",
    description: `Fetches screenshot of employee's computer every 10 minutes and can be customized`,
  },
  {
    iconSrc: "/images/settings.webp", 
    title: "Software Usage",
    description:
      "Tracks and records all software usage and employee productivity analysis",
  },
  {
    iconSrc: "/images/keyboard.webp", 
    title: "Keyboard Activity",
    description: "Logs all keystrokes, clipboard operations in real time",
  },
];

const FeaturesGrid = () => {
  return (
    <>
      <section className="py-[60px] px-4 bg-[#FBFBFB] flex ">
        <div className="container flex flex-col gap-[50px]">
          {" "}
          <div className="flex flex-col gap-5 text-center">
            <div>
              <h3 className=" mb-1.5  text-[#3A3A3A]">
                Real Time Monitoring and Analysis
              </h3>
              <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
            </div>
            <p className="text-base sm:text-[17px] leading-6 
font-['Sofia_Pro'] font-[400]  text-[#3A3A3A]  mx-auto">
              Best Employee Monitoring and Productivity Tracking Software
            </p>
          </div>
          <div className=" ">
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 ">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`
                 ${i == 0
                      ? "border-b sm:border-r"
                      : i == 1
                        ? "border-b lg:border-r lg:border-l"
                        : i == 2
                          ? "border-b sm:border-r lg:border-r-0 lg:border-l"
                          : i == 3
                            ? "lg:border-r  border-b lg:border-t"
                            : i == 4
                              ? "border-b sm:border-r lg:border-t lg:border-l"
                              : i == 5
                                ? "lg:border-t lg:border-l border-b"
                                : i == 6
                                  ? "lg:border-t sm:border-r border-b lg:border-b-0"
                                  : i == 7
                                    ? "lg:border-r border-b lg:border-b-0 lg:border-l lg:border-t"
                                    : i == 8 && "lg:border-t sm:border-r lg:border-r-0 lg:border-l lg:border-b-0"
                    }
                
                 text-center px-4 sm:px-6 flex  flex-col gap-2 py-8 md:py-[50px]  text-black `}
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={feature.iconSrc}
                      alt={feature.title}
                      width={50}
                      height={50}
                      unoptimized={true}
                    />
                  </div>
                  <h6 className="font-montserrat text-lg sm:text-xl md:text-[22px] font-semibold text-endetect-green mb-2.5">
                    {feature.title}
                  </h6>
                  <p className="font-sans text-black text-sm sm:text-base font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesGrid;
