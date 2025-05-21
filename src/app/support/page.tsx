import React from 'react'

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
        <div className="text-white flex flex-col sm:flex-row gap-10 text-[16px] leading-6 font-[400]  text-center max-w-[866px] ">
          <div className='bg-[#24C16F] p-4 sm:p-10 md:p-16 lg:p-20 flex justify-center items-center rounded-lg'>
            
            <p className='hover:underline'>
              Phone: <a href="tel:+919711286969">+91 9711 28 6969</a>
            </p>
            
          </div>
          <div className='bg-[#24C16F] p-4 sm:p-10 md:p-16 lg:p-20 flex justify-center items-center rounded-lg'>
          <p className='hover:underline'>
              Email: <a href="mailto:support@endetect.com">support@endetect.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;