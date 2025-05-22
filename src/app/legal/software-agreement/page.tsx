import React from 'react'
export const metadata = {
  title: "Software Agreement - EnDetect",
  description:
    "TERMS APPLICABLE TO YOUR USE OF THE SOFTWAREYour use of EnDetect Software or EnDetect Web Console is subject to the Terms of Service, Privacy Policy,",
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://endetect.com/legal/software-agreement/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Software Agreement - EnDetect",
    description:
      "TERMS APPLICABLE TO YOUR USE OF THE SOFTWAREYour use of EnDetect Software or EnDetect Web Console is subject to the Terms of Service, Privacy Policy,",
    url: "https://endetect.com/legal/software-agreement/",
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
    publishedTime: "2020-04-02T11:16:51+00:00",
    modifiedTime: "2025-05-22T00:00:00+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Agreement - EnDetect",
    description:
      "TERMS APPLICABLE TO YOUR USE OF THE SOFTWAREYour use of EnDetect Software or EnDetect Web Console is subject to the Terms of Service, Privacy Policy,",
  },
};

const Page = () => {
    return (
        <div className='min-h-[100vh] bg-[#F6F6F8] py-[10px]'>
            <div className='container'>
                <div className='pb-[23px]'>
                    <h1 className='text-center uppercase font-[600]!'>Software License Agreement
                    </h1>
                    <span className='w-[100%] my-[15px] mx-auto block max-w-[145px] md:max-w-[235px] h-[1px] bg-[#24C16F]' />
                </div>
                <div className="text-[14px] px-4 leading-[22px]">
                    <p className='mb-[24px]' >TERMS APPLICABLE TO YOUR USE OF THE SOFTWARE<br />
                        Your use of EnDetect Software or EnDetect Web Console is subject to the Terms of Service, Privacy Policy, Disclaimer, Refund Policy, Service Level Agreements or any other Agreements that are made available at www.endetect.com or otherwise accompany the use of such Software and will be agreed upon between you and Innocode Ventures ${`(Innocode)`}.</p>
                    <p className='mb-[24px]' >If there is a conflict or inconsistency between these Terms and any other Agreement${`(s)`} signed between you and InnoCode, the latter shall have precedence with respect to your access and use of that Software.</p>
                    <p className='mb-[24px]' >In the event that the Software is provided on or through the Website and has not been licensed to you through any specific Agreement or Terms of Service, you may use the Software subject to the following:</p>
                    <p className='mb-[24px]' >1. All rights, title, and interest in and to the Software are owned and retained exclusively by Innocode, including without limitation all software developed internally by Innocodeto provide the Website and all graphics, user interfaces, logos, and trademarks reproduced through the Website and the Software. This Agreement does not grant you any intellectual property license or rights in or to the Website, Software, or any of its components.
                        You recognize that the Website, Software or any of its components are protected by copyright and other laws.</p>
                    <p className='mb-[24px]' >2. As part of the Services, InnoCode will make available to you for download from the Website a software application to be installed on the computer of each of your employees or contractors ${`(your “Workforce”) `}whom you will monitor using Services ${`(the “Software”)`}. Subject to the Agreement read with other terms/agreements as provided upon the website. Innocode grants you a non-exclusive, non-transferable license to use the Software and its Web Control Panel for your internal business purposes.</p>
                    <p className='mb-[24px]' >3. If you are installing the EnDetect Free for evaluation purposes on one of your computers or server to evaluate the performance, this Agreement applies to the installation and/or use of the evaluation version of EnDetect on that particular computer or server only.</p>
                    <p className='mb-[24px]' >4. Except as explicitly provided herein, Licensee shall not: <br />&nbsp; &nbsp; &nbsp; &nbsp;${`(a)`} make available nor distribute all or part of the Software or Documentation to any third party by assignment, sublicense, or by any other means; <br />&nbsp; &nbsp; &nbsp; ${`(b)`} copy, adapt, reverse engineer, decompile, disassemble, or modify, in whole or in part, any of the Software or Documentation; or otherwise convert the Website and the Software to a human perceivable form; <br />&nbsp; &nbsp; &nbsp; &nbsp;${`(c)`} use the Software to operate in or as a time-sharing, outsourcing, or service bureau environment, or in any way allow third party access to the Software;
                        <br />&nbsp; &nbsp; &nbsp; &nbsp; ${`(d)`} remove, alter or conceal any copyright or other intellectual property notices from any copy of Software or any of written materials, if any, accompanying it.<br />&nbsp; &nbsp; &nbsp; &nbsp;${`(e)`} install or use the software on a number of machines in excess of number(s) for which you have obtained licenses or beyond the period for which you have obtained a license;</p>
                    <p className='mb-[24px]' >5. Licensee shall pay the Price in accordance with the payment plan set forth at www.endetect.com. Payment shall be made by Licensee to Licensor in full without any right of set-off or deduction, and Licensee shall pay the Price and such costs within 7 days from the date of invoice.</p>
                    <p className='mb-[24px]' >6. Support will be provided in accordance with the Service Level Agreement. For further information, you can refer to Terms of Use and in case of any questions/issues, you can mail us at legal@innocode.in.</p>
                </div>
            </div>
        </div>
    )
}

export default Page