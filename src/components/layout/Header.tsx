"use client";
import Link from "next/link";
import Image from "next/image"; // Will be used for the logo
import React, { useEffect, useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu on route change (optional, for better UX)
  useEffect(() => {
    if (mobileMenuOpen) {
      const handleResize = () => {
        if (window.innerWidth >= 768) setMobileMenuOpen(false);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [mobileMenuOpen]);

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
          <div className=" w-full container  flex justify-between items-center">
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

            {/* Desktop Nav & Buttons */}
            <div className="hidden  md:flex items-center justify-between gap-[33px] text-nowrap  ">
              <nav className="  w-full  " aria-label="Site Navigation: Top Nav">
                <ul className="text-[#3A3A3A] leading-[150%]  text-[18px] font-[400]  flex gap-[24px]">
                  {navLinks.map((link) => (
                    <li
                      key={link.href}
                      className="menu-item hover:text-[#24C16F] hover:underline hover:font-[700]"
                    >
                      <Link
                        href={link.href}
                        className="leading-[150%] text-lg font-[400] --font-sofia-sans"
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

            {/* Hamburger Button for Mobile */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span
                className={`block w-7 h-0.5 bg-[#24C16F] mb-1 transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-0.5 bg-[#24C16F] mb-1 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-0.5 bg-[#24C16F] transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4 border-t border-gray-200 animate-fade-in-down">
            <nav aria-label="Mobile Navigation">
              <ul className="flex flex-col gap-4 mb-4">
                {navLinks.map((link) => (
                  <li key={link.href} className="menu-item">
                    <Link
                      href={link.href}
                      className="block text-[#3A3A3A] text-lg font-medium py-2 hover:text-[#24C16F] hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-3">
              <a
                href="https://calendly.com/endetect"
                target="_blank"
                rel="noopener noreferrer"
                className="ast-custom-button text-white bg-[#24C16F] hover:bg-[#189c56] text-[16px] font-[500] px-[20px] py-[12px] text-center transition-colors duration-300"
              >
                Schedule a Demo
              </a>
              <a
                href="https://app.endetect.com/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="ast-custom-button text-white bg-[#E56902] hover:bg-[#b0550b] text-[16px] font-[500] px-[20px] py-[12px] text-center transition-colors duration-300"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>

      {/* TODO: Mobile Header (#ast-mobile-header) */}
      {/* TODO: Sticky Header (#ast-fixed-header) - though this might be controlled by scroll listeners and conditional classes on the main header */}
    </header>
  );
};

export default Header;
