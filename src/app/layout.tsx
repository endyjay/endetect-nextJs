import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Roboto, Montserrat, Sofia_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-montserrat",
});

const sofia_sans = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-sofia-sans",
});

export const metadata: Metadata = {
  title: "EnDetect - Employee Monitoring Software",
  description:
    "EnDetect provides advanced employee monitoring and productivity tracking solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.className} ${montserrat.variable} ${sofia_sans.variable}`}
    >
      <body className={`flex bg-white flex-col min-h-screen font-['Sofia_Pro']`}>
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
