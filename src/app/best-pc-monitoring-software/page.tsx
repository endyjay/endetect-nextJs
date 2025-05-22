import FeaturesHead from '@/components/features/FeaturesHead'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
export const metadata = {
  title:
    "Work from Home Tracking Software For Productive Teams, Remote Employee Monitoring",
  description:
    "Work from home tracking Software - Track all the activities of Employee with EnDetect. EnDetect helps you to manage 100% transparency and increase your business productivity by 40%. Ask for a Demo now.",
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://endetect.com/best-pc-monitoring-software/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title:
      "Work from Home Tracking Software For Productive Teams, Remote Employee Monitoring",
    description:
      "Work from home tracking Software - Track all the activities of Employee with EnDetect. EnDetect helps you to manage 100% transparency and increase your business productivity by 40%. Ask for a Demo now.",
    url: "https://endetect.com/best-pc-monitoring-software/",
    siteName: "EnDetect",
    images: [
      {
        url: "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
        width: 1200,
        height: 628,
        alt: "EnDetect Employee Monitoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Work from Home Tracking Software For Productive Teams, Remote Employee Monitoring",
    description:
      "Work from home tracking Software - Track all the activities of Employee with EnDetect. EnDetect helps you to manage 100% transparency and increase your business productivity by 40%. Ask for a Demo now.",
    images: [
      "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
    ],
  },
};

const page = () => {
  return (
    <div >
        <FeaturesHead />
      <div className='bg-[#FFFFFF] px-4 w-full' >
      <div className="relative max-w-[977px] mx-auto flex justify-center items-center py-[40px] md:py-[60px] w-full z-10 ">
        <div className="px-2 md:px-2 items-center flex flex-col gap-6 md:gap-6 text-white w-full">
         <div className='max-w-[840px] mx-auto'>
         <h3 className=" text-[#3A3A3A]! text-center">
          Track all the activities that the employees do during the workday.
          </h3>
          <span className='w-[100%] my-[15px] mx-auto block max-w-[190px] md:max-w-[133px] h-[1px] bg-[#24C16F]' />
         
         </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-start w-full --font-roboto gap-5">
            <div className="flex flex-col gap-3 items-center md:items-start justify-center w-full">
              <span className="text-[16px] text-[#282938] flex md:items-center items-start md:justify-start justify-center text-start font-[600]">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full min-h-5 min-w-5  h-5! w-5! block" />
                Employee Tracking to manage 100% transparency.
              </span>
              <span className="text-[16px] text-[#282938] flex md:items-center items-start md:justify-start justify-center text-start font-[600] ">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full min-h-5 min-w-5 h-5! w-5! block" />
                Increase Efficiency and Productivity by analyzing the working style.
              </span>
            </div>
            <div className="flex flex-col gap-3 items-start md:items-start justify-center w-full">
              <span className="text-[16px] text-[#282938] flex md:items-center items-start md:justify-start justify-center text-start font-[600]">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full min-h-5 min-w-5 h-5! w-5! block" />
                Increase your business productivity by 40%.
              </span>

              <span className="flex text-[#282938] md:items-centeritems-start  md:justify-start justify-center text-start font-[600]">
                <Check className="mr-2 bg-[#24C16F] text-white rounded-full min-h-5 min-w-5 h-5! w-5! block" />
                Motivates employees to further perform better and boost their productivity and overall working efficiency.
              </span>
            </div>
          </div>
          <Link
            href="/pricing"
            className="text-nowrap flex bg-[#24C16F] items-center justify-center hover:bg-[#169050] text-white text-base md:text-lg py-3 px-5 font-[500] duration-300 "
          >
            Pricing and Plans
            <span className='hidden'>
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default page