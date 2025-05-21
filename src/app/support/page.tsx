import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";


const page = () => {
  return (
    <section className="bg-[#F6F6F8]  h-full  py-[50px] px-4  ">
      <div className="container flex flex-col items-center gap-[50px]">
        <div>
          <h3 className=" mb-1.5 text-center  font-bold  text-[#3A3A3A] leading-tight md:leading-[67px]">
          Contact us via following details for support
          </h3>
          <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
        </div>
        <div className="text-white flex flex-col w-full md:flex-row gap-10 text-[16px] leading-6 font-[400]  text-center max-w-[866px] ">
          <div className='bg-[#24C16F] flex-col p-4 sm:py-10 md:py-16 py-6 w-full sm:p-10 md:p-16 flex justify-center items-center rounded-lg'>
            <div className='text-center mb-2'>
              <IoCall className='size-13'/>
            </div>
            <p className='hover:underline text-xl'>
              Phone: <a href="tel:+919711286969">+91 9711 28 6969</a>
            </p>
            
          </div>
          <div className='bg-[#24C16F] p-4 flex-col w-full sm:py-10 md:py-16 py-6 sm:p-10 md:p-16 flex justify-center items-center rounded-lg'>
            <div className='text-center mb-2'>
              <IoMdMail className='size-13'/>
            </div>
          <p className='hover:underline text-xl'>

              Email: <a href="mailto:support@endetect.com">support@endetect.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;