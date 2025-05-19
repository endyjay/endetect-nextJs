import Link from "next/link";

const DemoCard = () => {
  return (
    <section className="py-10 px-4 sm:px-8 md:px-20 bg-endetect-blue-dark bg-white">
      <div className="bg-[#333333] container flex flex-col lg:flex-row justify-between px-4 sm:px-8 md:px-[90px] py-8 md:py-[60px] items-center gap-8 lg:gap-0">
        {/* Text Content */}
        <div className="flex flex-col gap-4 w-full max-w-[664px]">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-[42px] mb-1.5 font-bold text-white leading-tight md:leading-[55px]">
            Not sure which edition to buy? Let our experts call you for a demo.
            </h1>
            <div className="w-[90px] sm:w-[133px] border border-[#24C16F] "></div>
          </div>
          
        </div>
        {/* Button */}
        <div className="text-center lg:text-left w-full lg:w-auto">
          <Link
            href="https://in.bigin.online/org60041256722/bookings/demo" // Original link: contact/index.html
            className="text-base sm:text-[16px] -ml-2 text-white font-semibold bg-green-500 py-3 px-5 hover:bg-[#169050] flex items-center justify-center  w-fit duration-300 "
          >
            Click Here for Demo
            
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoCard;
