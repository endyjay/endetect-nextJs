interface addressesDataProps {
  iconClass: string;
  title: string;
  description: string;
  delay?: number; // for animation
}

const AddressesItem: React.FC<addressesDataProps> = ({
  iconClass,

  title,
  description,
}) => {
  return (
    <div className="flex flex-col min-h-[320px]  md:max-w-[360px] mx-auto justify-center items-center text-center py-[30px] md:py-[32px] bg-[#333333] text-white">
      <div className="mb-4">
        <i className={`${iconClass} text-[90px] text-[#24C16F]`}></i>
      </div>
      <h5 className="text-[#FFFFFF]! mb-[10px]">{title}</h5>
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className="text-sm  sm:text-[15px] leading-[23px] font-[400]"
      ></p>
    </div>
  );
};

const addressesData: addressesDataProps[] = [
  {
    iconClass: "fas fa-map-marker-alt",
    title: "Marketing Address",
    description: "A-1, Bavdhan Nagar, <br/> Pune-411021, <br/> MH, India",
    delay: 200,
  },
  {
    iconClass: "fa-regular fa-envelope",
    title: "Email",
    description:
      "info@endetect.com <br/> sales@endetect.com <br/> support@endetect.com <br/> billing@endetect.com",
    delay: 300,
  },
  {
    iconClass: "fas fa-location-dot",
    title: "Registered Address",
    description:
      "RWEBSOFT, Sankalp Tower, Plot No. 8, Cabin No. 50, <br/> Khatipura Jaipur, <br/> Rajasthan 302021",
    delay: 400,
  },
];

const Addresses = () => {
  return (
    <section className="px-4 sm:px-8 md:px-[80px]  py-[60px] bg-[#F6F6F8]">
      <div className="flex flex-col gap-[50px] container ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          <div className="w-full lg:w-auto">
            <h1 className="text-2xl sm:text-3xl mb-1.5 md:text-[39px] font-bold text-center text-[#3A3A3A] leading-tight md:leading-[55px]">
              GET IN TOUCH
            </h1>
            <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto lg:mx-0"></div>
          </div>
          <div className="">
            <a
              href="https://calendly.com/endetect/demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="ast-custom-button block text-white bg-[#24C16F]  hover:bg-[#189c56] text-[16px] sm:text-[18px] font-[500]  px-[20px] sm:px-[30px] py-[12px] sm:py-[12px] transition-colors duration-300"
            >
              Schedule a Demo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[20px]">
          {addressesData.map((item, index) => (
            <div key={index} className="flex-1">
              <AddressesItem
                iconClass={item.iconClass}
                title={item.title}
                description={item.description}
                delay={item.delay}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Addresses;
