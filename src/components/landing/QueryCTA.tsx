import { ArrowRight } from "lucide-react";
import Link from "next/link";

const QueryCTA = () => {
  return (
    <section className="py-10 px-4  bg-white">
      <div className="bg-[#333333] container flex mx-auto  flex-col lg:flex-row justify-center px-[16px]  py-8 md:py-[60px]  gap-8 lg:gap-[222px]">
        {/* Text Content */}
        <div className="flex lg:text-left text-center  flex-col gap-4 ">
          <div>
            <h2 className=" mb-1.5  text-white! ">
              Have Queries?
            </h2>
            <div className="w-[90px] lg:w-[133px] mx-auto lg:float-left border border-[#24C16F] "></div>
          </div>
          <p className="text-white w-full lg:max-w-[586px] text-base sm:text-[17px] leading-6 mb-6 md:mb-0">
            Whether you have a question about software, pricing, or anything
            else, our team is ready to answer all your questions.
          </p>
        </div>
        {/* Button */}
        <div className="text-center  lg:text-left flex flex-col items-center justify-center ">
          <Link
            href="/contact" // Original link: contact/index.html
            className="text-base sm:text-[16px]  text-white font-semibold bg-[#24C16F] py-3 px-5 hover:opacity-80 flex items-center justify-center  w-fit duration-300 "
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
