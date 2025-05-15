import { ArrowRight } from "lucide-react";
import Link from "next/link";

const QueryCTA = () => {
  return (
    <section className="py-10 px-20 bg-endetect-blue-dark bg-[#F6F6F8]">
      <div className=" bg-[#333333] flex justify-between px-[90px] py-[60px] items-center ">
        {/* Text Content */}
        <div className=" flex flex-col gap-4 w-[50%]">
          <div>
            <h1 className="text-[42px] font-bold   text-white leading-[55px]">
              Have Queries?
            </h1>
            <div className="w-[133px] border border-[#24C16F] "></div>
          </div>
          <p className="text-white text-[17px] leading-6 mb-6 md:mb-0">
            Whether you have a question about software, pricing, or anything
            else, our team is ready to answer all your questions.
          </p>
        </div>
        {/* Button */}
        <div className=" text-center lg:text-left">
          <Link
            href="/contact" // Original link: contact/index.html
            className="text-[16px]  -ml-2  text-white font-semibold bg-green-500 py-3 px-5 hover:bg-[#169050] flex items-center justify-center text-lg w-fit duration-300 "
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
