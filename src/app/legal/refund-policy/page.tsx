import React from "react";
export const metadata = {
  title: "Refund Policy - EnDetect",
  description:
    "At Innocode Ventures, we strive our best to make sure that a customer is completely satisfied with our products and/or services. Accordingly, our team",
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://endetect.com/legal/refund-policy/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Refund Policy - EnDetect",
    description:
      "At Innocode Ventures, we strive our best to make sure that a customer is completely satisfied with our products and/or services. Accordingly, our team",
    url: "https://endetect.com/legal/refund-policy/",
    siteName: "EnDetect",
    images: [
      {
        url: "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
        width: 1200,
        height: 628,
        alt: "EnDetect Employee Monitoring",
      },
    ],
    updatedTime: "2025-05-22T00:00:00+00:00",
    publishedTime: "2020-04-02T11:16:40+00:00",
    modifiedTime: "2025-05-22T00:00:00+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy - EnDetect",
    description:
      "At Innocode Ventures, we strive our best to make sure that a customer is completely satisfied with our products and/or services. Accordingly, our team",
  },
};

const Page = () => {
  return (
    <div className="pricing-policy min-h-[100vh] bg-[#F6F6F8] py-[10px]">
      <div className="container">
        <div className="pb-[23px]">
          <h1 className="text-center uppercase font-[600]!">
            Refund & CANCELLATION Policy
          </h1>
          <span className="w-[100%] my-[15px] mx-auto block max-w-[145px] md:max-w-[235px] h-[1px] bg-[#24C16F]" />
        </div>
        <div className="elementor-widget-container px-4">
          <p>
            At Innocode Ventures, we strive our best to make sure that a
            customer is completely satisfied with our products and/or services.
            Accordingly, our team facilitates processing orders efficiently and
            makes sure that the process is completed, to the complete
            satisfaction of our customer.
            <br />
            Free/Demo/Trial version:
            <br />
            Our EnDetect software and related services are available for
            purchase on our website and with our partners and affiliates. We
            provide various free trial periods and demos so that you could
            easily evaluate our products before you make a purchase decision.
            The trial period helps you evaluate the product to make sure that
            the software meets all your desired needs before you purchase a
            license. All of our software is functional during the trial period
            and may require registration to enable its primary functionality.
            <br />
            Final Version:
            <br />
            On the actual/final purchase of software and post-payment clearance,
            your license to use the software will be activated. After the
            activation of the license, in normal circumstances, you won&apos;t
            be entitled to any refunds. For more details in this regard, you can
            mail us at billing@endetect.com
            <br />
            In some special circumstances, say, you have a special
            request/concern in this regard, the decision as to refund by the
            Innocode management will be final and binding. You can write to us
            at billing@endetect.com with proper details and supporting
            documents. Management may decide on the request received, after
            taking into consideration the facts and circumstances of the case.
          </p>
          <p>
            Customer Support
            <br />
            If you have any queries, do call our help desk at{" "}
            <strong>+91</strong> <strong>97112 86969</strong> or email us at{" "}
            <strong>support@endetect.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
