"use client";
import Link from "next/link";
import Image from "next/image"; // Will be used for the logo
import React, { useEffect, useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
    { href: "/support", label: "Support" },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < 50) {
            setShowHeader(true);
          } else if (currentScrollY > lastScrollY) {
            setShowHeader(false); // scrolling down
          } else {
            setShowHeader(true); // scrolling up
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white shadow-lg ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ willChange: "transform" }}
    >
      {/* Above Header Section */}
      <div className="ast-above-header-wrap bg-gray-50 border-b border-gray-200">
        <div className="py-2 text-center bg-[#24C16F] w-full text-white font-[500]">
          <p className="text-[14px] underline leading-[150%] ">
            <span className="">Call for Demo +91 </span>
            <a href="tel:+919711286969" className=" ">
              9711 28 6969
            </a>
          </p>
        </div>

        {/* Main Header Section */}
        <div className="px-[80px] py-[16px]  bg-white">
          <div className=" w-full  flex justify-between items-center">
            <div className="w-[162px]  h-[54px]">
              <Link href="/" aria-current="page">
                {/* TODO: Replace with actual logo using next/image */}
                <Image
                  src="https://i0.wp.com/endetect.com/wp-content/uploads/2020/04/logo_new.png?resize=768%2C251&ssl=1"
                  alt="Endetect"
                  width={200}
                  height={200}
                  priority
                />
              </Link>
            </div>

            <div className="flex items-center justify-between gap-10 text-nowrap  ">
              <nav className="  w-full  " aria-label="Site Navigation: Top Nav">
                <ul className="text-[#3A3A3A] leading-[150%]  text-[15px] font-[400]  flex gap-[24px]">
                  {navLinks.map((link) => (
                    <li
                      key={link.href}
                      className="menu-item hover:text-[#24C16F] hover:underline hover:font-[700]"
                    >
                      <Link
                        href={link.href}
                        className="menu-link  hover:text-endetect-green rounded-md text-lg font-medium"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="w-full  flex items-center gap-[16px]">
                <div className="">
                  <a
                    href="https://calendly.com/endetect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ast-custom-button text-white bg-[#24C16F]  hover:bg-[#189c56] text-[16px] sm:text-[18px] font-[500]  px-[20px] sm:px-[30px] py-[12px] sm:py-[12px] transition-colors duration-300"
                  >
                    Schedule a Demo
                  </a>
                </div>
                <div className="ast-header-button-2">
                  <a
                    href="https://app.endetect.com/login.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ast-custom-button text-white bg-[#E56902] hover:bg-[#b0550b] text-[16px] sm:text-[18px] font-[500]  px-[20px] sm:px-[30px] py-[12px] sm:py-[12px] transition-colors duration-300"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: Mobile Header (#ast-mobile-header) */}
      {/* TODO: Sticky Header (#ast-fixed-header) - though this might be controlled by scroll listeners and conditional classes on the main header */}
    </header>
  );
};

export default Header;
