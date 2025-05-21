import Image from "next/image";


const allImages = [
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
]

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
  }
];

const lastTwoImages = [
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
    <section className="py-[60px] px-4 sm:px-8 md:px-[80px]  bg-[#F6F6F8]">
      <div className="container gap-[50px] flex flex-col">
        <div>
          <h3 className=" mb-1.5 font-bold text-center  text-[#3A3A3A]">
            Few Screenshots of EnDetect Cloud Panel
          </h3>
          <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
        </div>

        <div className="hidden lg:block">
        <div className=" hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
            </div>
          ))}
        </div>
        <div className=" mt-5 hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          {lastTwoImages.map((image, index) => (
            <div key={index} className="overflow-hidden w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                layout="responsive"
                className="transform transition-transform duration-300 "
              />
            </div>
          ))}
        </div>
        </div>
        <div className=" grid lg:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {allImages.map((image, index) => (
            <div key={index} className="overflow-hidden w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                layout="responsive"
                className="transform transition-transform duration-300 "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudPanelScreenshots;
