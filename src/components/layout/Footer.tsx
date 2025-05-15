import Link from "next/link";
import Image from "next/image";

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLinkItem: React.FC<FooterLinkProps> = ({ href, text }) => (
  <li className="mb-2">
    <Link
      href={href}
      className="text-gray-400 hover:text-endetect-orange transition-colors duration-300 flex items-center"
    >
      {/* Placeholder for icon, e.g., <FaAngleDoubleRight className="mr-2" /> */}
      <span className="mr-2">{`->`}</span> {/* Simple arrow placeholder */}
      {text}
    </Link>
  </li>
);

const socialLinks = [
  { href: "https://www.facebook.com/EnDetect/", label: "Facebook", icon: "FB" }, // Placeholder icon
  { href: "https://twitter.com/EnDetect", label: "Twitter", icon: "TW" },
  {
    href: "https://www.instagram.com/endetect/",
    label: "Instagram",
    icon: "IG",
  },
  {
    href: "https://www.linkedin.com/company/endetect",
    label: "LinkedIn",
    icon: "LI",
  },
];

const usefulLinks: FooterLinkProps[] = [
  { href: "/", text: "Home" },
  { href: "/about-us", text: "About" },
  { href: "/best-pc-monitoring-software", text: "Features" }, // Assuming this is the features page
  { href: "/pricing", text: "Pricing" },
  { href: "/contact", text: "Contact" },
];

const legalLinks: FooterLinkProps[] = [
  { href: "/legal/pricing-policy", text: "Pricing Policy" },
  { href: "/legal/privacy-policy-2", text: "Privacy Policy" }, // Note: original has -2
  { href: "/legal/terms-of-service", text: "Terms of Service" },
  { href: "/legal/disclaimer", text: "Disclaimer" },
  { href: "/legal/refund-policy", text: "Refund Policy" },
  { href: "/legal/cancellation-policy", text: "Cancellation Policy" },
  { href: "/legal/software-agreement", text: "Software License Agreement" },
  { href: "/legal/service-agreements", text: "Service Level Agreement" },
];

const Footer = () => {
  return (
    <footer className="bg-endetect-blue-dark bg-[#EEEEEE] font-semibold text-[#54595F]">
      {/* Main footer section (original: elementor-element-f4b9dc0) */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Upper section with 3 columns (original: elementor-element-31d895e) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Column 1: Logo, Address, Social */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="https://i0.wp.com/endetect.com/wp-content/uploads/2019/12/logo.png?resize=768%2C251&ssl=1"
                alt="EnDetect Logo"
                width={180}
                height={59} // Approx ratio from 300x98
                objectFit="contain"
              />
            </Link>
            <p className="text-sm">
              Office Address:
              <br />
              A-1, Bavdhan Nagar,
              <br />
              Pune-411021,
              <br />
              MH, India
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className=" hover:text-endetect-orange transition-colors duration-300 border border-gray-600 hover:border-endetect-orange rounded-full p-2 w-10 h-10 flex items-center justify-center"
                >
                  {/* Placeholder for actual icon library, e.g. <FaFacebookF /> */}
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="space-y-4">
            <h6 className="text-lg font-semibold  font-montserrat mb-3">
              Useful Links
            </h6>
            <ul>
              {usefulLinks.map((link) => (
                <FooterLinkItem key={link.text} {...link} />
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h6 className="text-lg font-semibold  font-montserrat mb-3">
              Legal
            </h6>
            <ul>
              {legalLinks.map((link) => (
                <FooterLinkItem key={link.text} {...link} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright section (original: elementor-element-10fbf7b) */}
      <div className="bg-black bg-opacity-20 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} Endetect. All Rights Reserved.
          {/* Original said 2025, using current year for dynamic update */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
