import Link from "next/link";
import Image from "next/image";

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLinkItem: React.FC<FooterLinkProps> = ({ href, text }) => (
  <li className="mb-2">
    <Link href={href} className="
font-['Sofia_Pro'] ">
      {text}
    </Link>
  </li>
);

const socialLinks = [
  {
    href: "https://www.facebook.com/EnDetect/",
    label: "Facebook",
    icon: <i className="fa-brands fa-facebook"></i>,
  }, // Placeholder icon
  {
    href: "https://twitter.com/EnDetect",
    label: "Twitter",
    icon: <i className="fa-brands fa-twitter"></i>,
  },
  {
    href: "https://www.instagram.com/endetect/",
    label: "Instagram",
    icon: <i className="fa-brands fa-instagram"></i>,
  },
  {
    href: "https://www.linkedin.com/company/endetect",
    label: "LinkedIn",
    icon: <i className="fa-brands fa-linkedin"></i>,
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
    <footer className="bg-[#EEEEEE] text-[#3A3A3A]">
      <div className="py-[50px] px-4 sm:px-8 md:px-[80px]">
        <div className="flex container flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0">
          {/* Column 1: Logo, Address, Social */}
          <div className="flex flex-col gap-[20px] mb-8 lg:mb-0 w-full lg:w-auto">
            <Link href="/" className="inline-block">
              <Image
                src="https://i0.wp.com/endetect.com/wp-content/uploads/2019/12/logo.png?resize=768%2C251&ssl=1"
                alt="EnDetect Logo"
                width={300}
                height={98} // Approx ratio from 300x98
                objectFit="contain"
              />
            </Link>
            <p className="text-sm sm:text-[15px] leading-[23px] font-[400]">
              Office Address:
              <br />
              A-1, Bavdhan Nagar,
              <br />
              Pune-411021,
              <br />
              MH, India
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-[40px] lg:gap-[70px] w-full lg:w-auto">
            {/* Column 2: Useful Links */}
            <div className="flex flex-col gap-[30px] w-full sm:w-auto">
              <ul>
                <h6 className="text-base sm:text-lg leading-6 mb-3 font-bold ">
                  Useful Links
                </h6>
                {usefulLinks.map((link) => (
                  <FooterLinkItem key={link.text} {...link} />
                ))}
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="flex flex-col gap-[30px] w-full sm:w-auto">
              <ul>
                <h6 className="text-base sm:text-lg leading-6 mb-3 font-bold">
                  Legal
                </h6>
                {legalLinks.map((link) => (
                  <FooterLinkItem key={link.text} {...link} />
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-[12px] w-full sm:w-auto mt-6 sm:mt-0">
              <h6 className="text-base sm:text-lg leading-6 font-bold ">
                Social
              </h6>
              <div className="flex gap-[12px]">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-2xl sm:text-3xl"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex container justify-center items-center">
          <hr className="text-[#C1C1C1] w-full my-[20px]" />
        </div>
        <p className="text-center text-sm sm:text-[15px] leading-[23px] font-[400]">
          Copyright © {new Date().getFullYear()} Endetect.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
