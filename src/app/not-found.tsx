import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="min-h-screen pt-[120px] bg-white flex flex-col gap-6 items-center justify-center">
      <i className="fa-solid fa-ghost text-5xl text-[#E56902]"></i>
      <h1 className="text-2xl font-bold text-gray-600">404 - Page Not Found</h1>
      <p className="text-gray-500">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        className="bg-[#24C16F] p-2 flex items-center hover:bg-[#24C16F]/80 transition-all duration-300 gap-2 text-white font-semibold "
        href="/"
      >
        <ArrowLeft />
        Go back Home
      </Link>
    </div>
  );
};

export default notFound;
