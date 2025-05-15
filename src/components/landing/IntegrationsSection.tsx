import Image from "next/image";

const integrationLogos = [
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/slack-int.svg",
    alt: "Slack Integration",
  },
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/dropbox.svg",
    alt: "Dropbox Integration",
  },
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/logstash.svg",
    alt: "Logstash Integration",
  },
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/firebase.svg",
    alt: "Firebase Integration",
  },
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/web-api.svg",
    alt: "Web API Integration",
  },
];

const IntegrationsSection = () => {
  return (
    <section className="mt-5 py-10 bg-white">
      {/* ID from original: c1b9d4b */}
      {/* Original CSS: background-color: #FFFFFF; padding: 40px 0px; margin-top: 21px; */}
      {/* Using mt-5 (20px), py-10 (40px) */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-gray-800 mb-4">
          INTEGRATIONS
        </h1>
        <div className="w-24 h-1 bg-endetect-green mx-auto mb-12 md:mb-16"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {integrationLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120} // Adjust as needed
                height={60} // Adjust as needed
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
