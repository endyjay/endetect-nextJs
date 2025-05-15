import Image from "next/image";

const screenshotImages = [
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/Screenshot-1061.png",
    alt: "EnDetect Cloud Panel Screenshot 1",
    originalName: "Screenshot (1061)", // from image title/alt in HTML
  },
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/Screenshot-1063.png",
    alt: "EnDetect Cloud Panel Screenshot 2",
    originalName: "Screenshot (1063)",
  },
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/Screenshot-1065-1.png",
    alt: "EnDetect Cloud Panel Screenshot 3",
    originalName: "Screenshot (1065)",
  },
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/Screenshot-1068.png",
    alt: "EnDetect Cloud Panel Screenshot 4",
    originalName: "Screenshot (1068)",
  },
  {
    src: "https://endetect.com/wp-content/uploads/2021/08/endetect-software.png",
    alt: "EnDetect Software Interface Screenshot",
    originalName: "endetect-software",
  },
];

const CloudPanelScreenshots = () => {
  return (
    <section className="py-[60px] px-4 sm:px-8 md:px-[80px] gap-[50px] flex flex-col bg-[#F6F6F8]">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-[39px] font-bold text-center  text-[#3A3A3A] leading-tight md:leading-[55px]">
          Few Screenshots of EnDetect Cloud Panel
        </h1>
        <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {screenshotImages.map((image, index) => (
          <div key={index} className="overflow-hidden w-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={200}
              height={200}
              layout="responsive"
              className="transform transition-transform duration-300 "
            />
            {/* Captions could be added here if needed, using image.originalName */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudPanelScreenshots;
