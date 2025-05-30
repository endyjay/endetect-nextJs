import React from 'react'

const AboutEndetect = () => {
  return (
    <section className="bg-[#F6F6F8]   py-[70px] px-4 ">
      <div className="max-w-[866px] mx-auto flex flex-col items-center gap-5">
        <div>
          <h1 className="text-5xl sm:text-3xl mb-1.5 md:text-[48px] font-bold  text-[#3A3A3A] leading-tight md:leading-[67px]">
            About EnDetect
          </h1>
          <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
        </div>
        <div className="text-[#3A3A3A] text-[16px] leading-6 font-[400]  text-center max-w-[866px] ">
          <p>
            EnDetect is a subscription based software for Employee Monitoring,
            Workplace Performance, Productivity analysis and data theft
            prevention. We have catered use-case of verticals like tech,
            e-commerce, travel, call center, publishing, healthcare across the
            India.
          </p>
          <p>
            By deploying EnDetect our utmost priority is to provide innovative
            software solutions to SMBs in India and creating safe and productive
            environment for the employees and employers both.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutEndetect;
