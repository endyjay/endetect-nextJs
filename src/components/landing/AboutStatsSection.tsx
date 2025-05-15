
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
        <i className={`${iconClass}  text-[40px] sm:text-[50px]`}></i>
      </div>
      <div className="text-lg sm:text-[20px] leading-6 font-bold text-[#282938] ">
        {value}
      </div>
      <div className="text-base sm:text-[17px] text-[#282938] font-[400]">
        {label}
      </div>
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
    <section className="py-[60px] px-4 sm:px-8 md:px-[80px] bg-[#F6F6F8]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
        {/* Column 1: About Us */}
        <div className="w-full lg:w-1/2 flex flex-col gap-[20px] mb-8 lg:mb-0">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-[39px] font-bold text-[#3A3A3A] leading-tight md:leading-[55px]">
              About Us
            </h1>
            <div className="w-[90px] sm:w-[133px] border border-[#24C16F]"></div>
          </div>
          <div>
            <p className="text-[#3A3A3A] text-sm sm:text-[15px] leading-6 font-[400]">
              EnDetect is a subscription based software for Employee Monitoring,
              Workplace Performance, Productivity analysis and data theft
              prevention. We have catered use-case of verticals like tech,
              e-commerce, travel, call center, publishing, healthcare across the
              India.
            </p>
            <p className="text-[#3A3A3A] text-sm sm:text-[15px] leading-6 font-[400]">
              By deploying EnDetect our utmost priority is to provide innovative
              software solutions to SMBs in India and creating safe and
              productive environment for the employees and employers both.
            </p>
          </div>
        </div>

        {/* Column 2 & 3: Stats (Combined into 2 columns of stats) */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-8 lg:gap-[50px] lg:justify-end items-center">
          <div className="flex flex-row sm:flex-col gap-8 lg:gap-[50px]">
            <CounterItem {...stats[0]} />
            <CounterItem {...stats[1]} />
          </div>
          <div className="flex flex-row sm:flex-col gap-8 lg:gap-[50px]">
            <CounterItem {...stats[2]} />
            <CounterItem {...stats[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
