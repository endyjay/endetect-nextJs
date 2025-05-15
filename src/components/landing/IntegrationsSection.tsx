import Image from "next/image";
const providers = [
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/aws.svg",
    alt: "AWS logo",
    name: "AWS",
  },
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/azure.svg",
    alt: "Azure logo",
    name: "Azure",
  },
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/digital-ocean.svg",
    alt: "Digital Ocean logo",
    name: "Digital Ocean",
  },
  // Add more providers here if they were in the carousel
];
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
    <section className="py-[60px] px-4 sm:px-8 md:px-20 flex flex-col gap-[60px] bg-white">
      {/* ID from original: c1b9d4b */}
      {/* Original CSS: background-color: #FFFFFF; padding: 40px 0px; margin-top: 21px; */}
      {/* Using mt-5 (20px), py-10 (40px) */}
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-[39px] font-bold text-center text-[#3A3A3A] leading-tight md:leading-[55px]">
            INTEGRATIONS
          </h1>
          <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-[20px] items-center">
          {integrationLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-[39px] font-bold text-center text-[#3A3A3A] leading-tight md:leading-[55px]">
            EnDetect can be hosted with
          </h1>
          <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-[20px] items-center">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="flex justify-center items-center"
            >
              <Image
                src={provider.src}
                alt={provider.alt}
                width={120}
                height={40}
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
