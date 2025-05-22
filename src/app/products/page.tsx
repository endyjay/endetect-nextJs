import React from 'react'
import ProductsList from '../../components/products/ProductsList'
import { FaCameraRetro } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { DatabaseZap } from 'lucide-react';
import { FaRegClock } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaRegKeyboard } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { FaUsb } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";

export const metadata = {
  title: "Products - EnDetect",
  description:
    "Recommended for Startups having less than 5 employees and want basic monitoring.",
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://endetect.com/products/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Products - EnDetect",
    description:
      "Recommended for Startups having less than 5 employees and want basic monitoring.",
    url: "https://endetect.com/products/",
    siteName: "EnDetect",
    images: [
      {
        url: "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
        width: 1200,
        height: 628,
        alt: "EnDetect Products Overview",
      },
    ],
    updatedTime: "2025-05-22T00:00:00+00:00",
    publishedTime: "2020-04-11T13:27:05+00:00",
    modifiedTime: "2025-05-22T00:00:00+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products - EnDetect",
    description:
      "Recommended for Startups having less than 5 employees and want basic monitoring.",
  },
};



const fromTrialProducts = [
    {
        title: 'Automatic Screenshots',
        icon: FaCameraRetro
    },{
        title:"Installed Software List",
        icon: FaCompactDisc
    },{
        title:"Internet Bandwidth Usage",
        icon: FaWifi
    },
    {
        title:"Time Sheet",
        icon:FaListAlt
    }
];

const fromLiteProducts = [
    {
        title:"Data is Encrypted and at Rest",
        icon:DatabaseZap
    },{
        title:"Idle Time Report",
        icon:FaRegClock
    },{
        title:"Active vs Idle Time Analysis",
        icon:FaUserClock
    },{
        title:"Website Visit History",
        icon:FaClockRotateLeft
    },{
        title:"Track Text Copy Operations",
        icon:FaCopy
    },{
        title:"Software Usage Report",
        icon:FaWindows
    },{
        title:"Social Media Activity Report",
        icon:FaFacebook
    },{
        title:"Video Access Report",
        icon:FaVideo
    },{
        title:"Team Productivity Analysis",
        icon:FaUsers
    },{
        title:"PC Info (Hardware, OS)",
        icon:RiComputerLine
    }
];

const fromProProducts = [
    {
        title:"Keyboard Activity Monitor",
        icon:FaRegKeyboard
    },{
        title:"Automated Triggers and Alerts",
        icon:FaStar
    },{
        title:"Advance Search",
        icon:FaSearchPlus
    },{
        title:"Block USB Drive",
        icon:FaUsb
    },{
        title:"Block Task Manager",
        icon:FaTasks
    },{
        title:"Block Registry Access",
        icon:FaStar
    },{
        title:"Data Storage on your Cloud",
        icon:MdCloudUpload
    },{
        title:"Malicious Behavior Detection",
        icon:FaStar
    },{
        title:"Team Productivity Analysis",
        icon:FaUsersCog
    },{
        title:"PC Info (Hardware, OS)",
        icon:RiComputerLine
    }
]

const Page = () => {
  return (
    <div className='min-h-[100vh] bg-[#F6F6F8] py-[10px]'>
      <div className='container'>
        <div className='pb-[23px]'>
          <h1 className='text-center uppercase font-[600]!'>Discover our exclusive features</h1>
          <span className='w-[100%] my-[15px] mx-auto block max-w-[145px] md:max-w-[235px] h-[1px] bg-black' />
        </div>
        <div className='mb-[60px]'>
            <div className='flex items-center gap-5'>
                <h4 className='text-uppercase font-[600]! text-[#08CCAD]!'>FROM TRIAL</h4>
                <span className='h-[1px] w-[500px] bg-[#cec7c7]'></span>
            </div>
            <p className='mb-[24px] mt-[10px]'><strong>Recommended for Startups having less than 5 employees and want basic monitoring.</strong></p>
            <div>
                <ProductsList products={fromTrialProducts}/>
            </div>
        </div>
        <div className='mb-[60px]'>
            <div className='flex items-center gap-5'>
                <h4 className='text-uppercase font-[600]! text-[#08CCAD]!'> FROM LITE</h4>
                <span className='h-[1px] w-[500px] bg-[#cec7c7]'></span>
            </div>
            <p className='mb-[24px] mt-[10px]'><strong>Recommended for small & medium businesses for advance monitoring.</strong></p>
            <div>
                <ProductsList products={fromLiteProducts}/>
            </div>
        </div>
        <div className='mb-[60px]'>
            <div className='flex items-center gap-5'>
                <h4 className='text-uppercase font-[600]! text-[#08CCAD]!'>FROM PRO</h4>
                <span className='h-[1px] w-[500px] bg-[#cec7c7]'></span>
            </div>
            <p className='mb-[24px] mt-[10px]'><strong>Recommended for any company, who wants proactive monitoring with intelligent threat & productivity management system.</strong></p>
            <div>
                <ProductsList products={fromProProducts}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Page