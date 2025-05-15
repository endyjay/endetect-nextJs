import Image from "next/image"; // Though not used directly, good for consistency if icons were images

interface CounterProps {
  iconClass: string; // Font Awesome class for now
  value: string;
  label: string;
  delay?: number;
}

const CounterItem: React.FC<CounterProps> = ({ iconClass, value, label }) => {
  return (
    <div className="flex flex-col gap-[20px] items-start  ">
      <div className=" text-[#24C16F] ">
        <i className={`${iconClass}  text-[50px]`}></i>
      </div>
      <div className="text-[20px] leading-6 font-bold text-[#282938] ">
        {value}
      </div>
      <div className="text-[17px] text-[#282938] font-[400]">{label}</div>
    </div>
  );
};

const AboutStatsSection = () => {
  const stats = [
    { iconClass: "fas fa-shield-alt", value: "3", label: "Editions" },
    {
      iconClass: "fas fa-desktop",
      value: "5000+",
      label: "Endpoints Monitored",
    },
    {
      iconClass: "far fa-list-alt",
      value: "100M+",
      label: "Millions Activity Logged",
    }, // Original was 100+, made it 100M+ as it is common
    { iconClass: "fas fa-check-circle", value: "100+", label: "Features" },
  ];

  return (
    <section className="py-[60px] px-[80px] bg-[#F6F6F8]">
      <div className="flex justify-between items-center">
        {/* Column 1: About Us */}
        <div className="w-[50%] flex flex-col gap-[20px]">
          <div>
            <h1 className="text-[39px] font-bold  text-[#3A3A3A] leading-[55px]">
              About Us
            </h1>
            <div className="w-[133px] border border-[#24C16F]"></div>
          </div>
          <div>
            <p className="text-[#3A3A3A] text-[15px] leading-6 font-[400]">
              EnDetect is a subscription based software for Employee Monitoring,
              Workplace Performance, Productivity analysis and data theft
              prevention. We have catered use-case of verticals like tech,
              e-commerce, travel, call center, publishing, healthcare across the
              India.
            </p>
            <p className="text-[#3A3A3A] text-[15px] leading-6 font-[400]">
              By deploying EnDetect our utmost priority is to provide innovative
              software solutions to SMBs in India and creating safe and
              productive environment for the employees and employers both.
            </p>
          </div>
        </div>

        {/* Column 2 & 3: Stats (Combined into 2 columns of stats) */}
        <div className=" flex  w-1/2  gap-[50px] justify-end items-center">
          <div className="flex flex-col gap-[50px]">
            <CounterItem {...stats[0]} />
            <CounterItem {...stats[1]} />
          </div>
          <div className="flex flex-col gap-[50px]">
            <CounterItem {...stats[2]} />
            <CounterItem {...stats[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
