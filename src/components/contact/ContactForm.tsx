"use client"
import React from "react";

const ContactForm = () => {

  return (
    <div className="md:py-[60px] py-[40px] px-4 h-full box-border overflow-auto bg-[#FFF] bg-no-repeat bg-[length:100%_100%]">
      <div className="w-full max-w-[700px] mx-auto ">
        <div>
          <h2 className="text-center">Contact Us</h2>
          <span className='w-[100%] my-[6px] mx-auto block max-w-[120px] md:max-w-[133px] h-[1px] bg-[#24C16F]' />
        </div>
        <div className="rounded-[2px] mx-auto mt-[50px] border-[#E2E8F0] bg-white text-[#222] shadow-[0px_0px_2px_0_#00000033]">
        <form 
          className="md:px-[50px] md:py-[50px] px-[24px] py-[30px] font-['Arial'] relative text-[15px]" 
          data-ux-form-alignment="top" 
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-5">
              <div className="pb-[10px] text-[17px] md:text-[20px] text-[#3A3A3A] break-words">Name*</div>
              <div className={`relative text-left break-words border-0 ${errors["Last Name"] ? "animate-shake" : ""}`}>
                <div className="relative flex flex-1">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff6a6a] rounded-l-[4px] z-[2]"></div>
                  <input
                    name="Last Name"
                    maxLength={80}
                    type="text"
                    placeholder="John Doe"
                    value={formData["Last Name"]}
                    onChange={handleChange}
                    className={`w-full border border-[#BDC8D3] rounded-[4px] p-[10px_15px] min-h-[38px] text-[15px] font-inherit appearance-none focus:border-[#1AB16D] focus:outline-none ${
                      errors["Last Name"] ? "border-[#FD6B6D] shadow-[0_0_1px_1px_#F4A2A2]" : ""
                    }`}
                  />
                </div>
                {errors["Last Name"] && (
                  <div className="text-[#FF5050] text-[12px] mt-1 block animate-shake">
                    {errors["Last Name"]}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-5">
              <div className="pb-[10px] break-words text-[17px] md:text-[20px] text-[#3A3A3A]">Mobile*</div>
              <div className={`relative text-left break-words border-0 ${errors.Mobile ? "animate-shake" : ""}`}>
                <div className="relative flex flex-1">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff6a6a] rounded-l-[4px] z-[2]"></div>
                  <input
                    name="Mobile"
                    maxLength={30}
                    type="text"
                    placeholder="(123) 456 - 7890"
                    value={formData.Mobile}
                    onChange={handleChange}
                    className={`w-full border border-[#BDC8D3] rounded-[4px] p-[10px_15px] min-h-[38px] text-[15px] font-inherit appearance-none focus:border-[#1AB16D] focus:outline-none ${
                      errors.Mobile ? "border-[#FD6B6D] shadow-[0_0_1px_1px_#F4A2A2]" : ""
                    }`}
                  />
                </div>
                {errors.Mobile && (
                  <div className="text-[#FF5050] text-[12px] mt-1 block animate-shake">
                    {errors.Mobile}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-5">
              <div className="pb-[10px] break-words text-[17px] md:text-[20px] text-[#3A3A3A]">Email*</div>
              <div className={`relative text-left break-words border-0 ${errors.Email ? "animate-shake" : ""}`}>
                <div className="relative flex flex-1">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff6a6a] rounded-l-[4px] z-[2]"></div>
                  <input
                    name="Email"
                    maxLength={100}
                    placeholder="example@mail.com"
                    type="text"
                    value={formData.Email}
                    onChange={handleChange}
                    className={`w-full border border-[#BDC8D3] rounded-[4px] p-[10px_15px] min-h-[38px] text-[15px] font-inherit appearance-none focus:border-[#1AB16D] focus:outline-none ${
                      errors.Email ? "border-[#FD6B6D] shadow-[0_0_1px_1px_#F4A2A2]" : ""
                    }`}
                  />
                </div>
                {errors.Email && (
                  <div className="text-[#FF5050] text-[12px] mt-1 block animate-shake">
                    {errors.Email}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-5">
              <div className="pb-[10px] break-words text-[17px] md:text-[20px] text-[#3A3A3A]">Description*</div>
              <div className={`relative text-left break-words border-0 ${errors.Description ? "animate-shake" : ""}`}>
                <div className="relative flex flex-1">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff6a6a] rounded-l-[4px] z-[2]"></div>
                  <textarea
                    name="Description"
                    placeholder="Enter your message here"
                    maxLength={32000}
                    value={formData.Description}
                    onChange={handleChange}
                    className={`w-full border border-[#BDC8D3] rounded-[4px] p-[10px_15px] min-h-[100px] max-h-[200px] text-[15px] font-inherit resize-y focus:border-[#1AB16D] focus:outline-none ${
                      errors.Description ? "border-[#FD6B6D] shadow-[0_0_1px_1px_#F4A2A2]" : ""
                    }`}
                  />
                </div>
                {errors.Description && (
                  <div className="text-[#FF5050] text-[12px] mt-1 block animate-shake">
                    {errors.Description}
                  </div>
                )}
              </div>
            </div>

            {errors.submit && (
              <div className="text-[#FF5050] text-[12px] mt-1 block animate-shake mb-5">
                {errors.submit}
              </div>
            )}

            <div className="flex mt-10 items-center justify-start flex-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-5 py-2.5 rounded-[4px] text-[15px] cursor-pointer font-bold font-inherit transition-all duration-300 bg-[#1AB16D] text-white border border-[#1AB16D] ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
