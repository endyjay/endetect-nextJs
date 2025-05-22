import Image from "next/image";

interface ImpactItemProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  delay?: number; // for animation
}

const ImpactItem: React.FC<ImpactItemProps> = ({
  iconSrc,
  iconAlt,
  title,
  description,
 
}) => {
  return (
    <div className="flex flex-col items-center text-center px-4 gap-[20px] py-8 sm:py-[32px] bg-[#333333] text-white">
      <div className="mb-4">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>
      <h6 className=" sm:text-lg  text-white! leading-6 font-bold">{title}</h6>
      <p className="text-sm sm:text-[15px] leading-[23px] font-[400]">
        {description}
      </p>
    </div>
  );
};

const impactItemsData: ImpactItemProps[] = [
  {
    iconSrc:
      "https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/company-growth-01-01-1.png?fit=100%2C100&ssl=1",
    iconAlt: "Company Growth Icon",
    title: "FAST COMPANY GROWTH",
    description:
      "This software enables you to track your employees productivity and employee performance regularly.",
    delay: 200,
  },
  {
    iconSrc:
      "https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/data-prevention-01-01-1.png?fit=100%2C100&ssl=1",
    iconAlt: "Data Leakage Prevention Icon",
    title: "DATA LEAKAGE PREVENTION",
    description:
      "This software can track all file and text copy paste activity, file copy activity and storage device inserts.",
    delay: 300,
  },
  {
    iconSrc:
      "https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/monitring-01-01-1.png?fit=100%2C100&ssl=1",
    iconAlt: "Real Time Monitoring Icon",
    title: "REAL TIME MONITORING",
    description:
      "You can monitor your employee in real time, in every 10 minutes, this software will fetch Screenshot",
    delay: 400,
  },
];

const ImpactSection = () => {
  return (
    <section className="px-4 sm:px-8 md:px-[80px] py-[60px] bg-white">
      <div className="flex flex-col gap-[50px] container">
        {/* Left Column: Title and Logo */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          <div className="w-full lg:w-auto">
            <h3 className=" text-center lg:text-left ">
              IMPACT OF SOFTWARE
            </h3>
            <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto lg:mx-0"></div>
          </div>
          <div className="w-48 sm:w-60 md:w-72 mt-6 lg:mt-0">
            {/* Container for logo to control its size */}
            <Image
              src="/images/logo_new.webp"
              alt="EnDetect Logo"
              width={300}
              height={98}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[20px]">
          {impactItemsData.map((item, index) => (
            <div key={index} className="">
              <ImpactItem
                iconSrc={item.iconSrc}
                iconAlt={item.iconAlt}
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

export default ImpactSection;
