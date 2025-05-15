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

const HostingProviders = () => {
  return (
    <section className="pt-12 md:pt-20 pb-10 bg-white">
      {/* ID from original: elementor-element-13f7e5b */}
      {/* Original background: #FFFFFF (white) */}
      {/* Original padding: 0px 0px 40px 0px (pt-12/md:pt-20 pb-10) */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800 mb-4">
            EnDetect can be hosted with
          </h1>
          <div className="w-20 h-1 bg-endetect-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 items-center">
          {providers.map((provider) => (
            <div key={provider.name} className="flex justify-center">
              <Image
                src={provider.src}
                alt={provider.alt}
                width={150} // Adjust as needed for logo sizes
                height={80} // Adjust as needed for logo sizes
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingProviders;
