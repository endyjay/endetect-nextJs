"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

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
    features: [true, true, "every 5 - 45 minutes", true, true, true],
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
    features: [true, true, "every 1 - 45 minutes", true, true, true],
  },
];

const featureList = [
  "Minimum user purchase",
  "Time Sheet",
  "Idle Time Report",
  "Active vs Idle Time Analysis",
  "Automatic Screenshots",
  "Software Usage Report",
  "Internet Bandwidth Usage",
];

const PriceTable = () => {
  const [current, setCurrent] = useState(0);
  const [pressed, setPressed] = useState<"prev" | "next" | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  // Smooth scroll effect on plan change
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [current]);

  const handlePrev = () => {
    setPressed("prev");
    setTimeout(() => setPressed(null), 150);
    setCurrent((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setPressed("next");
    setTimeout(() => setPressed(null), 150);
    setCurrent((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#F6F6F8] px-4 pt-[20px] py-[70px] overflow-x-auto">
      <div className="container flex flex-col items-center gap-[50px]">
        <div>
          <h1 className="text-5xl sm:text-3xl mb-1.5 md:text-[48px] font-bold text-[#3A3A3A] leading-tight md:leading-[67px] text-center">
            SIMPLE & TRANSPARENT PRICING
          </h1>
          <div className="w-[90px] sm:w-[133px] border border-[#24C16F] mx-auto"></div>
        </div>
        {/* Desktop Table */}
        <div className="w-full overflow-x-auto hidden md:block">
          <div className="min-w-[800px]">
            <table className="w-full border border-[#3D3D3C] h-full bg-white text-left">
              <thead className="h-full">
                <tr className="h-full">
                  <th className="bg-[#24C16F] --font-montserrat flex items-center justify-start w-full h-full text-[39px] sm:text-[39px] leading-[55px] font-bold text-[#222] px-6 py-6  border-r border-[#3D3D3C]">
                    Features
                  </th>
                  {plans.map((plan, idx) => (
                    <th
                      key={plan.key}
                      className={`bg-[#F0F0F2]  py w-1/4 align-top text-center ${
                        idx !== plans.length - 1
                          ? "border-r border-[#3D3D3C] "
                          : ""
                      }`}
                    >
                      <div className="font-bold text-[19px] sm:text-[16px] leading-6 font-['Sofia_Pro'] bg-[#130826] px-6 py-4 text-lg mb-2">
                        {plan.name}
                      </div>
                      <div className="flex flex-col gap-4">
                        <div>
                          <div className="mb-1">
                            <span className="line-through text-[18px]  leading-5 font-[500] text-gray-300 mr-1">
                              {plan.priceOld}
                            </span>
                            <span className="text-[#4ec08d] font-bold text-[19px] sm:text-[16px] leading-6 font-['Sofia_Pro']">
                              {plan.price}
                            </span>
                          </div>
                          <div className="text-[18px]  text-[#000000] leading-5 font-[500] mb-1">
                            {plan.period}
                          </div>
                          <div className="text-[18px]  text-[#000000] leading-5 font-[500] mb-1">
                            {plan.billed}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-[#4ec08d] font-[500]">
                            {plan.offer}
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Minimum user purchase */}
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-6 py-4 font-bold --font-montserrat text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C] text-[18px] leading-6 ">
                    Minimum user purchase
                  </td>
                  {plans.map((plan, idx) => (
                    <td
                      key={plan.key}
                      className={`px-6 py-4 text-[#222] leading-6 text-center text-[17px]  ${
                        idx !== plans.length - 1
                          ? "border-r border-[#3D3D3C]"
                          : ""
                      }`}
                    >
                      {plan.minUsers}
                    </td>
                  ))}
                </tr>
                {/* Time Sheet */}
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-6 py-4 font-bold --font-montserrat text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C] text-[18px] leading-6 ">
                    Time Sheet
                  </td>
                  {plans.map((plan, idx) => (
                    <td
                      key={plan.key}
                      className={`px-6 py-4 text-center ${
                        idx !== plans.length - 1
                          ? "border-r border-[#3D3D3C]"
                          : ""
                      }`}
                    >
                      {plan.features[0] ? (
                        <span className="inline-block text-[#24C16F] text-2xl">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                              fill="#24C16F"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </td>
                  ))}
                </tr>
                {/* Idle Time Report */}
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-6 py-4 font-bold --font-montserrat text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C] text-[18px] leading-6 ">
                    Idle Time Report
                  </td>
                  {plans.map((plan, idx) => (
                    <td
                      key={plan.key}
                      className={`px-6 py-4 text-center ${
                        idx !== plans.length - 1
                          ? "border-r border-[#3D3D3C]"
                          : ""
                      }`}
                    >
                      {plan.features[1] ? (
                        <span className="inline-block text-[#24C16F] text-2xl">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                              fill="#24C16F"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </td>
                  ))}
                </tr>
                {/* Active vs Idle Time Analysis */}
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-6 py-4 font-bold --font-montserrat text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C] text-[18px] leading-6 ">
                    Active vs Idle Time Analysis
                  </td>
                  {plans.map((plan, idx) => (
                    <td
                      key={plan.key}
                      className={`px-6 py-4 text-center ${
                        idx !== plans.length - 1
                          ? "border-r border-[#3D3D3C]"
                          : ""
                      }`}
                    >
                      {typeof plan.features[2] === "string" ? (
                        <span className="text-[#222] text-[18px] ">
                          {plan.features[2]}
                        </span>
                      ) : plan.features[2] ? (
                        <span className="inline-block text-[#24C16F] text-2xl">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                              fill="#24C16F"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </td>
                  ))}
                </tr>
                {/* Automatic Screenshots */}
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-6 py-4 font-bold --font-montserrat text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C] text-[18px] leading-6 ">
                    Automatic Screenshots
                  </td>
                  {plans.map((plan, idx) => (
                    <td
                      key={plan.key}
                      className={`px-6 py-4 text-center ${
                        idx !== plans.length - 1
                          ? "border-r border-[#3D3D3C]"
                          : ""
                      }`}
                    >
                      {plan.features[3] ? (
                        <span className="inline-block text-[#24C16F] text-2xl">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                              fill="#24C16F"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </td>
                  ))}
                </tr>
                {/* Software Usage Report */}
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-6 py-4 font-bold --font-montserrat text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C] text-[18px] leading-6 ">
                    Software Usage Report
                  </td>
                  {plans.map((plan, idx) => (
                    <td
                      key={plan.key}
                      className={`px-6 py-4 text-center ${
                        idx !== plans.length - 1
                          ? "border-r border-[#3D3D3C]"
                          : ""
                      }`}
                    >
                      {plan.features[4] ? (
                        <span className="inline-block text-[#24C16F] text-2xl">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                              fill="#24C16F"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </td>
                  ))}
                </tr>
                {/* Internet Bandwidth Usage */}
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-6 py-4 font-bold --font-montserrat text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C] text-[18px] leading-6 ">
                    Internet Bandwidth Usage
                  </td>
                  {plans.map((plan, idx) => (
                    <td
                      key={plan.key}
                      className={`px-6 py-4 text-center ${
                        idx !== plans.length - 1
                          ? "border-r border-[#3D3D3C]"
                          : ""
                      }`}
                    >
                      {plan.features[5] ? (
                        <span className="inline-block text-[#24C16F] text-2xl">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                              fill="#24C16F"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </td>
                  ))}
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t bg-[#f5f5f6] border-[#3D3D3C]">
                  <td className="px-6 py-6  border-r  border-[#3D3D3C]"></td>
                  {plans.map((plan, idx) => (
                    <td
                      key={plan.key}
                      className={`px-6 py-6 text-center bg-white ${
                        idx !== plans.length - 1
                          ? "border-r border-[#3D3D3C]"
                          : ""
                      }`}
                    >
                      <Link
                        href={`https://in.bigin.online/org60041256722/bookings/demo`}
                        className="bg-[#24C16F]  text-white font-[500] px-6 py-2 transition-colors duration-200 text-[16px]  whitespace-nowrap"
                      >
                        Schedule a Demo
                      </Link>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        {/* Mobile Slider */}
        <div className="w-full px-4 md:hidden">
          <div
            ref={tableRef}
            className="border bg-white overflow-x-auto  scroll-smooth"
          >
            <table className="h-full">
              <thead className="h-full bg-amber-200">
                <tr className="h-full bg-amber-600">
                  <th className="bg-[#24C16F] border border-b-0 flex h-full w-full text-2xl text-[#222] font-bold flex-col px-4 py-4 text-left "></th>
                  <th className="bg-[#130826]  text-white font-bold px-4 py-4 text-center w-1/2  border-[#3D3D3C]">
                    {plans[current].name}
                  </th>
                </tr>
                <tr>
                  <td className="bg-[#24C16F] border-l flex h-full w-full text-2xl text-[#222] font-bold flex-col px-4 py-4 text-left  ">
                    Features
                  </td>
                  <td className="bg-[#F0F0F2] px-4 py-2 text-center border border-[#3D3D3C]">
                    <div className="mb-1">
                      <span className="line-through text-[13px] leading-5 font-[500] text-gray-300 mr-1">
                        {plans[current].priceOld}
                      </span>
                      <span className="text-[#4ec08d] font-bold text-[16px] leading-6">
                        {plans[current].price}
                      </span>
                    </div>
                    <div className="text-[13px] text-[#000000] leading-5 font-[500] mb-1">
                      {plans[current].period}
                    </div>
                    <div className="text-[13px] text-[#000000] leading-5 font-[500] mb-1">
                      {plans[current].billed}
                    </div>
                    <div className="text-xs text-[#4ec08d] font-[500]">
                      {plans[current].offer}
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-[15px] font-semibold --font-montserrat text-[#000] bg-[#f5f5f6] text-left border border-[#3D3D3C]">
                    Minimum user purchase
                  </td>
                  <td className="px-4 py-3 text-center border border-[#3D3D3C]">
                    {typeof plans[current].minUsers === "string" ? (
                      <span className="leading-[22px] text-[#000] font-[400] text-[15px] ">
                        {plans[current].minUsers}
                      </span>
                    ) : plans[current].minUsers ? (
                      <span className="inline-block text-[#24C16F] text-2xl">
                        {plans[current].minUsers}
                      </span>
                    ) : null}
                  </td>
                </tr>
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-4 py-3 text-[15px] font-semibold  text-[#000] bg-[#f5f5f6] text-left border border-[#3D3D3C]">
                    Time Sheet
                  </td>
                  <td className="px-4 py-3 text-center border border-[#3D3D3C]">
                    {plans[current].features[0] ? (
                      <span className="inline-block text-[#24C16F] text-2xl">
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                            fill="#24C16F"
                          />
                        </svg>
                      </span>
                    ) : null}
                  </td>
                </tr>
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-4 py-3 text-[15px] font-semibold  text-[#000] bg-[#f5f5f6] text-left border border-[#3D3D3C]">
                    Idle Time Report
                  </td>
                  <td className="px-4 py-3 text-center border border-[#3D3D3C]">
                    {plans[current].features[1] ? (
                      <span className="inline-block text-[#24C16F] text-2xl">
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                            fill="#24C16F"
                          />
                        </svg>
                      </span>
                    ) : null}
                  </td>
                </tr>
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-4 py-3 text-[15px] font-semibold  text-[#000] bg-[#f5f5f6] text-left border border-[#3D3D3C]">
                    Active vs Idle Time Analysis
                  </td>
                  <td className="px-4 py-3 text-center border border-[#3D3D3C]">
                    {typeof plans[current].features[2] === "string" ? (
                      <span className="leading-[22px] text-[#000] font-[400] text-[15px] ">
                        {plans[current].features[2]}
                      </span>
                    ) : plans[current].features[2] ? (
                      <span className="inline-block text-[#24C16F] text-2xl">
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                            fill="#24C16F"
                          />
                        </svg>
                      </span>
                    ) : null}
                  </td>
                </tr>
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-4 py-3 text-[15px] font-semibold  text-[#000] bg-[#f5f5f6] text-left border border-[#3D3D3C]">
                    Automatic Screenshots
                  </td>
                  <td className="px-4 py-3 text-center border border-[#3D3D3C]">
                    {plans[current].features[3] ? (
                      <span className="inline-block text-[#24C16F] text-2xl">
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                            fill="#24C16F"
                          />
                        </svg>
                      </span>
                    ) : null}
                  </td>
                </tr>
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-4 py-3 text-[15px] font-semibold  text-[#000] bg-[#f5f5f6] text-left border border-[#3D3D3C]">
                    Software Usage Report
                  </td>
                  <td className="px-4 py-3 text-center border border-[#3D3D3C]">
                    {plans[current].features[4] ? (
                      <span className="inline-block text-[#24C16F] text-2xl">
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                            fill="#24C16F"
                          />
                        </svg>
                      </span>
                    ) : null}
                  </td>
                </tr>
                <tr className="border-t border-[#3D3D3C]">
                  <td className="px-4 py-3 text-[15px] font-semibold  text-[#000] bg-[#f5f5f6] text-left border border-[#3D3D3C]">
                    Internet Bandwidth Usage
                  </td>
                  <td className="px-4 py-3 text-center border border-[#3D3D3C]">
                    {plans[current].features[5] ? (
                      <span className="inline-block text-[#24C16F] text-2xl">
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.49997 8.58597L2.20697 5.29297L0.792969 6.70697L5.49997 11.414L15.207 1.70697L13.793 0.292969L5.49997 8.58597Z"
                            fill="#24C16F"
                          />
                        </svg>
                      </span>
                    ) : null}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="px-4 py-4 bg-white border border-[#3D3D3C]"></td>
                  <td className="px-4 py-4 text-center bg-white border border-[#3D3D3C]">
                    <Link
                      href={`https://in.bigin.online/org60041256722/bookings/demo`}
                      className="bg-[#24C16F]  text-white font-[500] px-6 py-2 transition-colors duration-200 text-[13px] whitespace-nowrap"
                    >
                      Schedule a Demo
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
            {/* Slider Arrows */}
            <div className="flex justify-center gap-6 py-4">
              <button
                onClick={handlePrev}
                className={`border border-[#24C16F]  py-3 min-w-[40px] text-[#24C16F] transition-colors duration-150 flex items-center justify-center ${
                  pressed === "prev" ? "bg-[#24C16F] text-white" : "bg-white"
                }`}
                aria-label="Previous plan"
                style={{ outline: "none" }}
              >
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 5.625C12 5.44033 11.9259 5.26322 11.7941 5.13264C11.6622 5.00206 11.4834 4.9287 11.297 4.9287H3.15146L6.17034 1.94017C6.30235 1.80942 6.37652 1.63209 6.37652 1.44718C6.37652 1.26228 6.30235 1.08495 6.17034 0.9542C6.03833 0.823453 5.85928 0.75 5.67258 0.75C5.48589 0.75 5.30684 0.823453 5.17483 0.9542L0.956547 5.13202C0.891074 5.1967 0.839129 5.27354 0.803687 5.35813C0.768245 5.44272 0.75 5.53341 0.75 5.625C0.75 5.71659 0.768245 5.80728 0.803687 5.89187C0.839129 5.97646 0.891074 6.0533 0.956547 6.11798L5.17483 10.2958C5.30684 10.4265 5.48589 10.5 5.67258 10.5C5.85928 10.5 6.03833 10.4265 6.17034 10.2958C6.30235 10.1651 6.37652 9.98772 6.37652 9.80282C6.37652 9.61791 6.30235 9.44058 6.17034 9.30983L3.15146 6.3213H11.297C11.4834 6.3213 11.6622 6.24794 11.7941 6.11736C11.9259 5.98678 12 5.80967 12 5.625Z"
                    fill={`${pressed == "prev" ? "#fff" : "#24C16F"}`}
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className={`border border-[#24C16F]  py-3 min-w-[40px] text-[#24C16F] transition-colors duration-150 flex items-center justify-center ${
                  pressed === "next" ? "bg-[#24C16F] text-white" : "bg-white"
                }`}
                aria-label="Next plan"
                style={{ outline: "none" }}
              >
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 5.625C0 5.44033 0.0740709 5.26322 0.205918 5.13264C0.337764 5.00206 0.516587 4.9287 0.703046 4.9287H8.84854L5.82966 1.94017C5.69765 1.80942 5.62348 1.63209 5.62348 1.44718C5.62348 1.26228 5.69765 1.08495 5.82966 0.9542C5.96167 0.823453 6.14072 0.75 6.32742 0.75C6.51411 0.75 6.69316 0.823453 6.82517 0.9542L11.0435 5.13202C11.1089 5.1967 11.1609 5.27354 11.1963 5.35813C11.2318 5.44272 11.25 5.53341 11.25 5.625C11.25 5.71659 11.2318 5.80728 11.1963 5.89187C11.1609 5.97646 11.1089 6.0533 11.0435 6.11798L6.82517 10.2958C6.69316 10.4265 6.51411 10.5 6.32742 10.5C6.14072 10.5 5.96167 10.4265 5.82966 10.2958C5.69765 10.1651 5.62348 9.98772 5.62348 9.80282C5.62348 9.61791 5.69765 9.44058 5.82966 9.30983L8.84854 6.3213H0.703046C0.516587 6.3213 0.337764 6.24794 0.205918 6.11736C0.0740709 5.98678 0 5.80967 0 5.625Z"
                    fill={`${pressed == "next" ? "#fff" : "#24C16F"}`}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
