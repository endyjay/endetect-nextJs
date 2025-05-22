import Addresses from '@/components/contact/Addresses'
import ContactForm from '@/components/contact/ContactForm'
import React from 'react'
export const metadata = {
  title: "Contact - EnDetect",
  description:
    "GET IN TOUCH Schedule a Demo Email info@endetect.com sales@endetect.com support@endetect.com billing@endetect.com Marketing Address A-1, Bavdhan Nagar,",
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://endetect.com/contact/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Contact - EnDetect",
    description:
      "GET IN TOUCH Schedule a Demo Email info@endetect.com sales@endetect.com support@endetect.com billing@endetect.com Marketing Address A-1, Bavdhan Nagar,",
    url: "https://endetect.com/contact/",
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
    title: "Contact - EnDetect",
    description:
      "GET IN TOUCH Schedule a Demo Email info@endetect.com sales@endetect.com support@endetect.com billing@endetect.com Marketing Address A-1, Bavdhan Nagar,",
    images: [
      "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
    ],
  },
};

const page = () => {
  return (
    <div className='px-4 h-full'>
        <Addresses />
        <ContactForm/>
    </div>
  )
}

export default page