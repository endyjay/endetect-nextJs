import Link from 'next/link'
import React from 'react'
export const metadata = {
  title: "Thankyou - EnDetect",
  description:
    "Thanks For contacting us we will get back to you soon!! BACK TO SITE",
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://endetect.com/thankyou/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Thankyou - EnDetect",
    description:
      "Thanks For contacting us we will get back to you soon!! BACK TO SITE",
    url: "https://endetect.com/thankyou/",
    siteName: "EnDetect",
    images: [
      {
        url: "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
        width: 1200,
        height: 628,
        alt: "EnDetect Support Information",
      },
    ],
    updatedTime: "2020-07-29T09:19:50+00:00",
    publishedTime: "2020-07-28T10:06:58+00:00",
    modifiedTime: "2020-07-29T09:19:50+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thankyou - EnDetect",
    description:
      "Thanks For contacting us we will get back to you soon!! BACK TO SITE",
    label1: "Time to read",
    data1: "Less than a minute",
    images: [
      {
        url: "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
        width: 1200,
        height: 628,
        alt: "EnDetect Support Information",
      },
    ],
  },
};

const Page = () => {
  return (
    <div className="bg-[url('/images/tyfinal.jpg')] bg-center bg-cover  pt-[200px] px-4 pb-[250px]">
        <div>
            <h2 className='text-white! mb-[20px] text-center text-[25px] md:text-[42px] font-[600]!'>Thanks For contacting us we will get back to you soon!!</h2>
            <div className='w-full text-center'>
            <Link href={"/best-pc-monitoring-software"} className='text-center inline-flex mx-auto justify-center bg-[#5cb85c] py-[17px] px-[30px]'>
            <span className='text-[15px] leading-[1] text-white'>BACK TO SITE</span>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Page