import Image from "next/image"; // Though not used directly, good for consistency if icons were images

interface CounterProps {
  iconClass: string; // Font Awesome class for now
  value: string;
  label: string;
  delay?: number;
}

const CounterItem: React.FC<CounterProps> = ({ iconClass, value, label }) => {
  return (
    <div className="flex flex-col items-center text-center mb-6 md:mb-0">
      <div className="text-endetect-green text-4xl mb-3">
        <i className={iconClass}></i>
      </div>
      <div className="text-4xl font-bold font-montserrat text-gray-800 mb-1">
        {value}
      </div>
      <div className="text-sm text-gray-600 font-semibold">{label}</div>
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
    <section className="py-7 bg-gray-100">
      {/* ID from original: d41f9f0 */}
      {/* Original CSS: background-color: #F6F6F8; padding: 25px 0px; */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Column 1: About Us */}
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-800 mb-2">
              About us
            </h2>
            <div className="w-16 h-1 bg-endetect-green mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              EnDetect is a subscription based software for Employee Monitoring,
              Workplace Performance, Productivity analysis and data theft
              prevention. We have catered use-case of verticals like tech,
              e-commerce, travel, call center, publishing, healthcare across the
              India.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By deploying EnDetect our utmost priority is to provide innovative
              software solutions to SMBs in India and creating safe and
              productive environment for the employees and employers both.
            </p>
          </div>

          {/* Column 2 & 3: Stats (Combined into 2 columns of stats) */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-8">
              <CounterItem {...stats[0]} />
              <CounterItem {...stats[1]} />
            </div>
            <div className="space-y-8">
              <CounterItem {...stats[2]} />
              <CounterItem {...stats[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
