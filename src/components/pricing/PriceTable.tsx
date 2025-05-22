"use client";
import { featureList, plans } from "@/lib/plans";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";


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
                      <h5 className="text-[#fff]! bg-[#130826] px-6 py-4  mb-2">
                        {plan.name}
                      </h5>
                      <div className="flex flex-col gap-4">
                        <div>
                          <div className="mb-1">
                            <span className="line-through text-[16px]  leading-5 font-[500] text-gray-900  mr-1">
                              {plan.priceOld}
                            </span>
                            <span className="text-[#24C16F] font-bold text-[16px] sm:text-[19px] leading-6 font-['Sofia_Pro']">
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
                          <div className="text-xs text-[#24C16F] font-[500]">
                            {plan.offer}
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureList.map((feature, i) => (
                  <tr key={feature} className="border-t border-[#3D3D3C]">
                    <td className="px-6 py-4 font-bold --font-montserrat text-[#000] bg-[#f5f5f6] border-r border-[#3D3D3C] text-[18px] leading-6 ">
                      {feature}
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
                        {typeof plan.features[i] === "string" ? (
                          <span className="text-[#222]">
                            {plan.features[i]}
                          </span>
                        ) : plan.features[i] ? (
                          <span className="inline-block text-[#24C16F] text-2xl align-middle">
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
                        ) : (
                          <span className="inline-block text-[#24C16F] text-2xl align-middle">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.00016 4.93934L10.2428 0.696701L11.3035 1.75736L7.06083 6L11.3035 10.2426L10.2428 11.3033L6.00016 7.06066L1.75752 11.3033L0.696854 10.2426L4.93949 6L0.696854 1.75736L1.75752 0.696701L6.00016 4.93934Z"
                                fill="#FF4D4F"
                              />
                            </svg>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
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
                        className="bg-[#24C16F]  text-white font-[500] px-6 py-3 block w-fit mx-auto transition-colors duration-200 text-[16px]  whitespace-nowrap"
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
            className=" overflow-x-auto  scroll-smooth"
          >
            <table className="h-full mx-auto">
              <thead className="h-full ">
                <tr className="h-full ">
                  <th className="bg-[#24C16F] border border-b-0 flex h-full w-full text-2xl text-[#222] font-bold flex-col px-4 py-4 text-left "></th>
                  <th className="bg-[#130826]  text-white! font-bold px-4 py-4 text-center w-1/2  border-[#3D3D3C]">
                    {plans[current].name}
                  </th>
                </tr>
                <tr>
                  <td className="bg-[#24C16F] border-l border-t-0 flex h-full w-full text-2xl text-[#222] font-bold flex-col px-4 py-4 text-left  ">
                    Features
                  </td>
                  <td className="bg-[#F0F0F2] px-4 py-2 text-center border border-[#3D3D3C]">
                    <div className="mb-1">
                      <span className="line-through text-[13px] leading-5 font-[500] text-gray-900 mr-1">
                        {plans[current].priceOld}
                      </span>
                      <span className="text-[#24C16F] font-bold text-[16px] leading-6">
                        {plans[current].price}
                      </span>
                    </div>
                    <div className="text-[13px] text-[#000000] leading-5 font-[500] mb-1">
                      {plans[current].period}
                    </div>
                    <div className="text-[13px] text-[#000000] leading-5 font-[500] mb-1">
                      {plans[current].billed}
                    </div>
                    <div className="text-xs text-[#24C16F] font-[500]">
                      {plans[current].offer}
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {featureList.map((feature, i) => (
                  <tr key={feature} className="border-t border-[#3D3D3C]">
                    <td className="px-4 py-3 text-[15px] font-semibold  text-[#000] bg-[#f5f5f6] text-left border border-[#3D3D3C]">
                      {feature}
                    </td>
                    <td className="px-4 py-3 text-center border border-[#3D3D3C]">
                      {typeof plans[current].features[i] === "string" ? (
                        <span className="text-[#222]">
                          {plans[current].features[i]}
                        </span>
                      ) : plans[current].features[i] ? (
                        <span className="inline-block text-[#24C16F] text-2xl align-middle">
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
                      ) : (
                        <span className="inline-block text-[#24C16F] text-2xl align-middle">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.00016 4.93934L10.2428 0.696701L11.3035 1.75736L7.06083 6L11.3035 10.2426L10.2428 11.3033L6.00016 7.06066L1.75752 11.3033L0.696854 10.2426L4.93949 6L0.696854 1.75736L1.75752 0.696701L6.00016 4.93934Z"
                              fill="#FF4D4F"
                            />
                          </svg>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="px-4 py-4 bg-white border border-[#3D3D3C]"></td>
                  <td className="px-4 py-4 text-center bg-white border border-[#3D3D3C]">
                    <Link
                      href={`https://in.bigin.online/org60041256722/bookings/demo`}
                      className="bg-[#24C16F]  text-white font-[500] px-6 py-3 block w-fit mx-auto transition-colors duration-200 text-[13px] whitespace-nowrap"
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
