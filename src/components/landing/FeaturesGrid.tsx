import Image from "next/image";

const features = [
  {
    iconSrc: "https://endetect.com/wp-content/uploads/2020/04/internet.gif", // Original: internet7b20.gif
    title: "Website History",
    description: "Track all website visits within your organization",
  },
  {
    iconSrc:
      "https://endetect.com/wp-content/uploads/2020/04/facebook-messenger-click.gif", // Original: facebook-messenger-click7b20.gif
    title: "Social Media Activity Report",
    description:
      "You can track all social media activity of your employee with URL and screenshots.",
  },
  {
    iconSrc:
      "https://endetect.com/wp-content/uploads/2020/04/list-is-empty.gif", // Original: list-is-empty7b20.gif
    title: "Time Sheet",
    description:
      "Tracks login and logout time of your employee with idle time logs and active and productive time analysis.",
  },
  {
    iconSrc: "https://endetect.com/wp-content/uploads/2020/04/activity.gif", // Original: activity7b20.gif
    title: "Behaviors Analysis",
    description:
      "Tracks abusive, malicious and threat-full behavior within your organization",
  },
  {
    iconSrc:
      "https://endetect.com/wp-content/uploads/2020/04/warning-blink.gif", // Original: warning-blink7b20.gif
    title: "Alert Manager",
    description:
      "You can manage alerts on typed words, copied text, deleted/copied file, Website visits, Bandwidth usage etc",
  },
  {
    iconSrc:
      "https://endetect.com/wp-content/uploads/2020/04/folder-with-files.gif", // Original: folder-with-files7b20.gif
    title: "USB Storage",
    description:
      "Tracks and logs USB Storage inserts (Pen Drive, Hard Disk etc)",
  },
  {
    iconSrc:
      "https://endetect.com/wp-content/uploads/2020/04/computer-display.gif", // Original: computer-display7b20.gif
    title: "Screenshot",
    description: `Fetches screenshot of employee's computer every 10 minutes and can be customized`,
  },
  {
    iconSrc: "https://endetect.com/wp-content/uploads/2020/04/settings.gif", // Original: settings7b20.gif
    title: "Software Usage",
    description:
      "Tracks and records all software usage and employee productivity analysis",
  },
  {
    iconSrc: "https://endetect.com/wp-content/uploads/2020/04/Untitled-1-1.gif", // Original: Untitled-1-17b20.gif
    title: "Keyboard Activity",
    description: "Logs all keystrokes, clipboard operations in real time",
  },
];

const FeaturesGrid = () => {
  return (
    <>
      <section className="py-[60px] px-20 bg-[#F6F6F8] flex flex-col gap-[50px]">
        <div className="flex flex-col gap-5 text-center">
          <div>
            <h1 className="text-[39px] font-bold  text-[#3A3A3A] leading-[55px]">
              Real Time Monitoring and Analysis
            </h1>
            <div className="w-[133px] border border-[#24C16F] mx-auto"></div>
          </div>
          <p className="text-[17px] leading-6 font-[400]  text-[#3A3A3A]  mx-auto">
            Best Employee Monitoring and Productivity Tracking Software
          </p>
        </div>

        <div className=" ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`
                 ${
                   i == 0
                     ? "border-b border-r"
                     : i == 1
                     ? "border-b border-r border-l"
                     : i == 2
                     ? "border-b border-l"
                     : i == 3
                     ? "border-r border-b border-t"
                     : i == 4
                     ? "border-b border-r border-t border-l"
                     : i == 5
                     ? "border-t border-l border-b"
                     : i == 6
                     ? "border-t border-r"
                     : i == 7
                     ? "border-r border-l border-t"
                     : i == 8 && "border-t border-l"
                 }
                
                 text-center px-6 flex flex-col gap-2 py-[50px]  text-black `}
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
                <h6 className="font-montserrat text-[22px] font-semibold text-endetect-green mb-2.5">
                  {feature.title}
                </h6>
                <p className="font-sans text-black text-base font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesGrid;
