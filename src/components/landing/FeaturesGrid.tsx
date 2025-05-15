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
    <section className="py-16 md:py-24 bg-white">
      {/* ID from original: elementor-element-faxx2kw */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-5 border text-black border-gray-200"
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

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-gray-800 mb-4">
            BENEFITS OF ENDETECT
          </h1>
          <div className="w-24 h-1 bg-endetect-green mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
