import DemoCard from '@/components/pricing/DemoCard'
import PriceTable from '@/components/pricing/PriceTable'
import React from 'react'
export const metadata = {
  title:
    "Pricing - Track your employees Remotely with EnDetect, Employee Monitoring System",
  description:
    "EnDetect motivates employees to further perform better and boost their productivity and overall working efficiency. Ask for a Demo now.",
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://endetect.com/pricing/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title:
      "Pricing - Track your employees Remotely with EnDetect, Employee Monitoring System",
    description:
      "EnDetect motivates employees to further perform better and boost their productivity and overall working efficiency. Ask for a Demo now.",
    url: "https://endetect.com/pricing/",
    siteName: "Endetect",
    images: [
      {
        url: "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
        width: 1200,
        height: 628,
        alt: "EnDetect Employee Monitoring",
      },
    ],
    updatedTime: "2025-05-22T00:00:00+00:00",
    publishedTime: "2020-04-11T09:20:11+00:00",
    modifiedTime: "2025-05-22T00:00:00+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pricing - Track your employees Remotely with EnDetect, Employee Monitoring System",
    description:
      "EnDetect motivates employees to further perform better and boost their productivity and overall working efficiency. Ask for a Demo now.",
  },
};

const page = () => {
  return (
    <div>
      <PriceTable />
      <DemoCard />
    </div>
  )
}

export default page