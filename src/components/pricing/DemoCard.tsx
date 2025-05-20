import Link from "next/link";

const DemoCard = () => {
  return (
    <section className="py-10 px-4  bg-white">
      <div className="bg-[#333333] container flex mx-auto  flex-col lg:flex-row justify-center px-[16px]  py-8 md:py-[60px]  gap-8 lg:gap-[98px]">
        {/* Text Content */}
        <div className="flex lg:text-left text-center  flex-col gap-4 ">
          <div>
            <h1 className="text-2xl lg:max-w-[664px] w-full sm:text-3xl md:text-[42px] mb-1.5 font-bold text-white!  leading-tight md:leading-[55px]">
            Not sure which edition to buy? Let our experts call you for a demo.
            </h1>
            <div className="w-[90px] lg:w-[133px] mx-auto lg:float-left border border-[#24C16F] "></div>
          </div>
          
        </div>
        {/* Button */}
        <div className="text-center  lg:text-left flex flex-col items-center justify-center ">
          <Link
            href="https://in.bigin.online/org60041256722/bookings/demo" // Original link: contact/index.html
            className="text-base sm:text-[16px]  text-white font-semibold bg-green-500 py-3 px-5 hover:bg-[#169050] flex items-center justify-center  w-fit duration-300 "
          >
            Click Here for Demo
            <span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoCard;
