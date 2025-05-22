import ContactForm from "@/components/contact/ContactForm";
import React from "react";
export const metadata = {
  title: "Premium-Quote - Endetect",
  description:
    "Get a Quote Please enable JavaScript in your browser to complete this form.Contact Person *Company Name *Email *Phone Number *No. of Employees * Submit",
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://endetect.com/premium-quote/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Premium-Quote - Endetect",
    description:
      "Get a Quote Please enable JavaScript in your browser to complete this form.Contact Person *Company Name *Email *Phone Number *No. of Employees * Submit",
    url: "https://endetect.com/premium-quote/",
    siteName: "Endetect",
    updatedTime: "2025-02-16T08:57:15+00:00",
    publishedTime: "2025-02-16T08:54:02+00:00",
    modifiedTime: "2025-02-16T08:57:15+00:00",
    images: [
      {
        url: "https://i0.wp.com/endetect.com/wp-content/uploads/2020/05/quote_Mesa-de-trabajo-1.png",
        width: 500,
        height: 501,
        alt: "Premium-Quote",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium-Quote - Endetect",
    description:
      "Get a Quote Please enable JavaScript in your browser to complete this form.Contact Person *Company Name *Email *Phone Number *No. of Employees * Submit",
    image:
      "https://i0.wp.com/endetect.com/wp-content/uploads/2020/05/quote_Mesa-de-trabajo-1.png",
    label1: "Time to read",
    data1: "Less than a minute",
  },
};

const page = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default page;
