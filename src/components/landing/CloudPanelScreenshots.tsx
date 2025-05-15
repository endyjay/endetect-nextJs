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
    <section className="py-16 md:py-24 bg-gray-100">
      {/* ID from original: elementor-element-9e62393 */}
      {/* Original background: #F6F6F8 (close to bg-gray-100) */}
      {/* Original padding: 60px 0px (py-16 is 64px) */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-gray-800 mb-4">
            Few Screenshots of EnDetect Cloud Panel
          </h1>
          <div className="w-24 h-1 bg-endetect-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {screenshotImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600} // Provide appropriate base width for aspect ratio
                height={338} // Provide appropriate base height for aspect ratio (approx 16:9 for some)
                layout="responsive"
                className="transform transition-transform duration-300 group-hover:scale-105"
              />
              {/* Captions could be added here if needed, using image.originalName */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudPanelScreenshots;
