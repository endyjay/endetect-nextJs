import { ArrowRight } from "lucide-react";
import Link from "next/link";

const QueryCTA = () => {
  return (
    <section className="py-10 px-4 sm:px-8 md:px-20 bg-endetect-blue-dark bg-white">
      <div className="bg-[#333333] container flex flex-col lg:flex-row justify-between px-4 sm:px-8 md:px-[90px] py-8 md:py-[60px] items-center gap-8 lg:gap-0">
        {/* Text Content */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-[42px] mb-1.5 font-bold text-white! leading-tight md:leading-[55px]">
              Have Queries?
            </h1>
            <div className="w-[90px] sm:w-[133px] border border-[#24C16F] "></div>
          </div>
          <p className="text-white text-base sm:text-[17px] leading-6 mb-6 md:mb-0">
            Whether you have a question about software, pricing, or anything
            else, our team is ready to answer all your questions.
          </p>
        </div>
        {/* Button */}
        <div className="text-center lg:text-left w-full lg:w-auto">
          <Link
            href="/contact" // Original link: contact/index.html
            className="text-base sm:text-[16px] -ml-2 text-white font-semibold bg-green-500 py-3 px-5 hover:bg-[#169050] flex items-center justify-center  w-fit duration-300 "
          >
            Contact Us
            <span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QueryCTA;
