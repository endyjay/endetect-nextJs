import Button from "../ui/Button";

const features = [
  {
    title: "Monitor employees in real time",
  },
  {
    title: "Data Protection and Peace of Mind",
  },
  {
    title: "Productivity and behavior analysis",
  },
  {
    title: "Motivates employees to further perform better",
  },
];

const HeroBanner = () => {
  return (
    <div className="relative">
      <div className="bg-[#000000] opacity-70 transition-all duration-300 absolute h-full w-full left-0 top-0"></div>
      <section
        className="pt-[102px]   bg-fixed  bg-[url('/images/hero-image.png')] bg-cover bg-center  pb-[113px] mt-[125px] "
        aria-hidden="true"
      >
        <div className="max-w-[776px]  mx-auto relative z-10">
          <h1>Employee Monitoring and Productivity Tracking Solution</h1>
          <div>
            {features.map((item) => (
              <div key={item.title} className="flex items-center gap-[12px]">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_10_9442)">
                      <rect width="20" height="20" rx="10" fill="white" />
                      <path
                        d="M10 0C4.48622 0 0 4.48622 0 10C0 15.5138 4.48622 20 10 20C15.5138 20 20 15.5138 20 10C20 4.48622 15.5138 0 10 0ZM15.589 7.36842L9.198 13.7093C8.82206 14.0852 8.22055 14.1103 7.81955 13.7343L4.43609 10.6516C4.03509 10.2757 4.01003 9.64912 4.3609 9.24812C4.73684 8.84712 5.36341 8.82206 5.76441 9.198L8.44612 11.6541L14.1604 5.93985C14.5614 5.53885 15.188 5.53885 15.589 5.93985C15.99 6.34085 15.99 6.96742 15.589 7.36842Z"
                        fill="#24C16F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_9442">
                        <rect width="20" height="20" rx="10" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div>{item.title}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button title="Know More" link="/" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
