import type { Metadata } from "next";
import { Sofia_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal"],
  variable: "--font-sofia-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-montserrat",
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
    <html lang="en" className={`${sofia.variable} ${montserrat.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
