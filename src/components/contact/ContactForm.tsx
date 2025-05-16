import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="px-4 sm:px-8 md:px-[80px] py-[60px] bg-white">
        <div className="container flex flex-col items-center gap-[50px]">
          <div>
            <h1 className="text-5xl sm:text-3xl mb-1.5 md:text-[48px] font-bold  text-[#3A3A3A] leading-tight md:leading-[67px]">
              Contact Us
            </h1>
            <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
          </div>
          <div className="  ">
            <form className="w-full flex flex-col gap-[20px] border-[1px] p-[50px] border-[#E2E8F0] ">
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-center items-center gap-[30px]">
                  <label htmlFor="name">Contact Person*</label>
                  <input type="text" id="name" placeholder="Brian Clark" />
                  <label htmlFor="company">Company Name*</label>
                  <input
                    type="email"
                    id="company"
                    placeholder="example@youremail.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div></div>
              <div></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
