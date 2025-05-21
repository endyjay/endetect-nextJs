"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

const customers = [
  {
    src: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/luggage.png?fit=85%2C85&ssl=1",
    alt: "",
    name: "",
  },
  {
    src: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/plane.png?fit=85%2C85&ssl=1",
    alt: "",
    name: "",
  },
  {
    src: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/cart.png?fit=85%2C85&ssl=1",
    alt: "",
    name: "",
  },
  {
    src: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/cms.png?fit=85%2C85&ssl=1",
    alt: "",
    name: "",
  },
  {
    src: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/book.png?fit=85%2C85&ssl=1",
    alt: "",
    name: "",
  },
  {
    src: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/icons8-insurance-agent-100.png?fit=85%2C85&ssl=1",
    alt: "",
    name: "",
  },
  {
    src: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/hospital.png?fit=85%2C85&ssl=1",
    alt: "",
    name: "",
  },

  // Add more customers here if they were in the carousel
];
const softwares = [
  {
    src: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/05/three-1.jpg?w=296&h=185&ssl=1",
    alt: "Secure Transaction",
  },
  {
    src: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/05/one-1.jpg?w=296&h=185&ssl=1",
    alt: "GDPR Compliance",
  },
  {
    src: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/05/four-1.jpg?w=296&h=185&ssl=1",
    alt: "Data Protection",
  },
  {
    src: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/05/two-1.jpg?w=296&h=185&ssl=1",
    alt: "ISO",
  },
];

const Softwares = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
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
    <section className="py-[60px] px-4 sm:px-8 md:px-20 flex flex-col gap-[60px] bg-white">
      {/* ID from original: c1b9d4b */}
      {/* Original CSS: background-color: #FFFFFF; padding: 40px 0px; margin-top: 21px; */}
      {/* Using mt-5 (20px), py-10 (40px) */}
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl sm:text-3xl mb-1.5 md:text-[39px] font-bold text-center text-[#3A3A3A] leading-tight md:leading-[55px]">
            The most trusted software
          </h1>
          <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
        </div>

        {/* Mobile and Tablet Slider */}
        <div className="lg:hidden px-4">
          <Slider {...sliderSettings}>
            {softwares.map((logo, index) => (
              <div key={index} className="px-2">
                <div className="flex justify-center items-center h-[60px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:flex flex-wrap justify-center gap-4 sm:gap-[20px] items-center">
          {softwares.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center px-[30px] py-[20px] items-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl mb-1.5 text-center sm:text-3xl md:text-[39px] font-bold  text-[#3A3A3A] leading-tight md:leading-[55px]">
            Our Customers{" "}
          </h1>
          <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
        </div>
        <p
          className="text-base 
font-['Sofia_Pro'] sm:text-[17px] leading-6 font-[400] mb-4 text-[#3A3A3A]  mx-auto"
        >
          EnDetect is helping thousands of customers around the globe making the
          workplace a productive zone.
        </p>

        {/* Mobile and Tablet Slider */}
        <div className="lg:hidden px-4">
          <Slider {...sliderSettings}>
            {customers.map((provider, index) => (
              <div key={index} className="px-2">
                <div className="flex justify-center items-center h-[65px]">
                  <Image
                    src={provider.src}
                    alt={provider.alt}
                    width={65}
                    height={65}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:flex flex-wrap justify-center gap-4 sm:gap-[20px] items-center">
          {customers.map((provider) => (
            <div
              key={provider.name}
              className="flex justify-center items-center px-[30px] py-[20px]"
            >
              <Image
                src={provider.src}
                alt={provider.alt}
                width={65}
                height={65}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Softwares;
