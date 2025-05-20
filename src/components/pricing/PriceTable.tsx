import Link from 'next/link';
import React from 'react'

const plans = [
  {
    key: "core",
    name: "EnDetect CORE",
    priceOld: "Rs.280",
    price: "Rs.210/-",
    period: "per employee/month",
    billed: "(billed annually)",
    offer: "*Limited Time Offer",
    minUsers: "2 Employees",
    features: [
      true, // Time Sheet
      true, // Idle Time Report
      "every 10 - 45 minutes", // Active vs Idle Time Analysis
      true, // Automatic Screenshots
      true, // Software Usage Report
      true, // Internet Bandwidth Usage
    ],
  },
  {
    key: "pro",
    name: "EnDetect PRO",
    priceOld: "Rs.280",
    price: "Rs.210/-",
    period: "per employee/month",
    billed: "(billed annually)",
    offer: "*Limited Time Offer",
    minUsers: "5 Employees",
    features: [
      true,
      true,
      "every 5 - 45 minutes",
      true,
      true,
      true,
    ],
  },
  {
    key: "enterprise",
    name: "EnDetect ENTERPRISE",
    priceOld: "Rs.280",
    price: "Rs.210/-",
    period: "per employee/month",
    billed: "(billed annually)",
    offer: "*Limited Time Offer",
    minUsers: "20 Employees",
    features: [
      true,
      true,
      "every 1 - 45 minutes",
      true,
      true,
      true,
    ],
  },
];
const PriceTable = () => {
  return (
    <section className="bg-[#F6F6F8] pt-[165px]  py-[70px]   ">
      <div className="container flex flex-col items-center gap-[50px]">
        <div>
          <h1 className="text-5xl sm:text-3xl mb-1.5 md:text-[48px] font-bold  text-[#3A3A3A] leading-tight md:leading-[67px]">
            SIMPLE & TRANSPARENT PRICING        </h1>
          <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
        </div>
        <div className='w-full'>
          <table className="w-full border border-[#3D3D3C] h-full  bg-white text-left">
            <thead className='h-full' >
              <tr className='h-full' >
                <th className="bg-[#24C16F] flex items-center justify-start w-full h-full text-[39px] text-[#222222] leading-[55px] font-bold text-[#222] px-6 py-6 w-1/4 border-r border-[#3D3D3C]">Features</th>
                {plans.map((plan, idx) => (
                  <th
                    key={plan.key}
                    className={`bg-[#F0F0F2]  py w-1/4 align-top text-center ${idx !== plans.length - 1 ? 'border-r border-[#3D3D3C] ' : ''} ${idx === plans.length - 1 ? "" : ""}`}
                  >
                    <div className="font-bold text-[19px] leading-6 
font-['Sofia_Pro'] bg-[#130826] px-6 py-4 text-lg mb-2">{plan.name}</div>
                    <div className='flex flex-col gap-4' >
                      <div>
                        <div className="mb-1">
                          <span className="line-through text-[15px] leading-5 font-[500] text-gray-300 mr-1">{plan.priceOld}</span>
                          <span className="text-[#4ec08d] font-bold text-[19px] leading-6 
font-['Sofia_Pro']">{plan.price}</span>
                        </div>
                        <div className="text-[15px] text-[#000000] leading-5 font-[500] mb-1">{plan.period}</div>
                        <div className="text-[15px] text-[#000000] leading-5 font-[500] mb-1">{plan.billed}</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#4ec08d] font-[500]">{plan.offer}</div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Minimum user purchase */}
              <tr className="border-t 
border-[#3D3D3C] ">
                <td className="px-6 py-4 font-[500] text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C]">Minimum user purchase</td>
                {plans.map((plan, idx) => (
                  <td key={plan.key} className={`px-6 py-4 text-[#222] text-center ${idx !== plans.length - 1 ? 'border-r border-[#3D3D3C]' : ''}`}>{plan.minUsers}</td>
                ))}
              </tr>
              {/* Time Sheet */}
              <tr className="border-t 
border-[#3D3D3C] ">
                <td className="px-6 py-4 font-[500] text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C]">Time Sheet</td>
                {plans.map((plan, idx) => (
                  <td key={plan.key} className={`px-6 py-4 text-center ${idx !== plans.length - 1 ? 'border-r border-[#3D3D3C]' : ''}`}>
                    {plan.features[0] ? (
                      <span className="inline-block text-[#24C16F] text-2xl"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z" fill="#24C16F" />
                      </svg>
                      </span>
                    ) : null}
                  </td>
                ))}
              </tr>
              {/* Idle Time Report */}
              <tr className="border-t 
border-[#3D3D3C] ">
                <td className="px-6 py-4 font-[500] text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C]">Idle Time Report</td>
                {plans.map((plan, idx) => (
                  <td key={plan.key} className={`px-6 py-4 text-center ${idx !== plans.length - 1 ? 'border-r border-[#3D3D3C]' : ''}`}>
                    {plan.features[1] ? (
                      <span className="inline-block text-[#24C16F] text-2xl"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z" fill="#24C16F" />
                      </svg>
                      </span>
                    ) : null}
                  </td>
                ))}
              </tr>
              {/* Active vs Idle Time Analysis */}
              <tr className="border-t 
border-[#3D3D3C] ">
                <td className="px-6 py-4 font-[500] text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C]">Active vs Idle Time Analysis</td>
                {plans.map((plan, idx) => (
                  <td key={plan.key} className={`px-6 py-4 text-center ${idx !== plans.length - 1 ? 'border-r border-[#3D3D3C]' : ''}`}>
                    {typeof plan.features[2] === "string" ? (
                      <span className="text-[#222]">{plan.features[2]}</span>
                    ) : plan.features[2] ? (
                      <span className="inline-block text-[#24C16F] text-2xl"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z" fill="#24C16F" />
                      </svg>
                      </span>
                    ) : null}
                  </td>
                ))}
              </tr>
              {/* Automatic Screenshots */}
              <tr className="border-t 
border-[#3D3D3C] ">
                <td className="px-6 py-4 font-[500] text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C]">Automatic Screenshots</td>
                {plans.map((plan, idx) => (
                  <td key={plan.key} className={`px-6 py-4 text-center ${idx !== plans.length - 1 ? 'border-r border-[#3D3D3C]' : ''}`}>
                    {plan.features[3] ? (
                      <span className="inline-block text-[#24C16F] text-2xl"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z" fill="#24C16F" />
                      </svg>
                      </span>
                    ) : null}
                  </td>
                ))}
              </tr>
              {/* Software Usage Report */}
              <tr className="border-t 
border-[#3D3D3C] ">
                <td className="px-6 py-4 font-[500] text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C]">Software Usage Report</td>
                {plans.map((plan, idx) => (
                  <td key={plan.key} className={`px-6 py-4 text-center ${idx !== plans.length - 1 ? 'border-r border-[#3D3D3C]' : ''}`}>
                    {plan.features[4] ? (
                      <span className="inline-block text-[#24C16F] text-2xl"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z" fill="#24C16F" />
                      </svg>
                      </span>
                    ) : null}
                  </td>
                ))}
              </tr>
              {/* Internet Bandwidth Usage */}
              <tr className="border-t 
border-[#3D3D3C] ">
                <td className="px-6 py-4 font-[500] text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C]">Internet Bandwidth Usage</td>
                {plans.map((plan, idx) => (
                  <td key={plan.key} className={`px-6 py-4 text-center ${idx !== plans.length - 1 ? 'border-r border-[#3D3D3C]' : ''}`}>
                    {plan.features[5] ? (
                      <span className="inline-block text-[#24C16F] text-2xl"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z" fill="#24C16F" />
                      </svg>
                      </span>
                    ) : null}
                  </td>
                ))}
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t bg-[#f5f5f6] border-[#3D3D3C]">
                <td className="px-6 py-6 bg-white border-r bg-[#f5f5f6] border-[#3D3D3C]"></td>
                {plans.map((plan, idx) => (
                  <td key={plan.key} className={`px-6 py-6 text-center bg-white ${idx !== plans.length - 1 ? 'border-r border-[#3D3D3C]' : ''}`}>
                    <Link href={`https://in.bigin.online/org60041256722/bookings/demo`} className='bg-[#24C16F] --font-roboto hover:bg-endetect-green-dark text-white font-semibold  px-6 py-2 transition-colors duration-200'>
                      Schedule a Demo
                    </Link>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  )
}

export default PriceTable