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
  delay,
}) => {
  return (
    <div
      className="flex flex-col rounded-lg items-center text-center p-6 py-28 bg-[#110C22] text-white  shadow-lg h-full"
      // data-settings={{ animation: "fadeIn", animation_delay: delay }} // Placeholder for animation if implemented
    >
      <div className="mb-4">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={80}
          height={80}
          objectFit="contain"
        />
      </div>
      <h6 className="text-lg font-semibold font-montserrat  mb-2">
        {title}
      </h6>
      <p className="text-sm  leading-relaxed">{description}</p>
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
    <section className="pt-16 md:pt-24 pb-20 md:pb-32 bg-white">
      {/* ID from original: elementor-element-4bfa0da */}
      {/* Original background: #FFFFFF (white) */}
      {/* Original padding: 0px 0px 120px 0px (and 50px 25px 35px 25px in other rules) */}
      {/* Using pt-16 md:pt-24 pb-20 md:pb-32 */}
      <div className=" px-4">
        <div className="flex gap-8 items-stretch">
          {/* Left Column: Title and Logo */}
          <div className="md:col-span-1 px-10  flex flex-col justify-center items-center md:items-start text-center md:text-left p-4">
            <h2 className="text-2xl  md:text-3xl text-nowrap font-bold font-montserrat text-gray-800 mb-3">
              IMPACT OF SOFTWARE
            </h2>
            <div className=" h-1 bg-endetect-green mb-6 mx-auto md:mx-0"></div>
            <div className="w-72">
              {" "}
              {/* Container for logo to control its size */}
              <Image
                src="https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/logo_new.png?resize=768%2C251&ssl=1"
                alt="EnDetect Logo"
                width={100}
                height={60}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Right Columns: Impact Items */}
          {impactItemsData.map((item, index) => (
            <div key={index} className="md:col-span-1 ">
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
