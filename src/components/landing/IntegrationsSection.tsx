"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

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
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderSettingsV2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-[60px] pb-[30px]   bg-white">
      <div className="container flex flex-col gap-[5px]">
        <div className="flex flex-col gap-5">
          <div className="px-4">
            <h3 className=" mb-1.5  text-center  ">
              INTEGRATIONS
            </h3>
            <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
          </div>

          {/* Mobile and Tablet Slider */}
          <div>
            <Slider {...sliderSettings}>
              {integrationLogos.map((logo, index) => (
                <div key={index} className="px-2">
                  <div className="flex justify-center items-center ">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={80}
                      className="object-contain max-w-[200px] w-fit h-auto"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Grid */}
          <div className="hidden  flex-wrap justify-center gap-4 sm:gap-[20px] items-center">
            {integrationLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-[39px] mb-1.5 font-bold text-center text-[#3A3A3A] leading-tight md:leading-[55px]">
              EnDetect can be hosted with
            </h3>
            <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
          </div>

          {/* Mobile and Tablet Slider */}
          <div className="mt-4">
            <Slider {...sliderSettingsV2}>
              {providers.map((provider) => (
                <div key={provider.name} className="px-2">
                  <div className="flex justify-center items-center h-[60px]">
                    <Image
                      src={provider.src}
                      alt={provider.alt}
                      width={150}
                      height={60}
                      className=" object-contain max-w-[200px] w-fit h-auto"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Grid */}
          <div className="hidden  flex-wrap justify-center gap-4 sm:gap-[20px] items-center">
            {providers.map((provider) => (
              <div
                key={provider.name}
                className="flex justify-center items-center"
              >
                <Image
                  src={provider.src}
                  alt={provider.alt}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
