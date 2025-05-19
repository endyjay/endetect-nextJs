import Link from 'next/link';
import React from 'react'

const Button = ({ title, className, link }: { title: string, className?: string, link: string }) => {
    return (
        <Link href={link} className={`w-fit font-medium px-[20px] py-[12px] bg-[#25C16F] text-white hover:bg-[#169150] flex items-center justify-center gap-[4px] text-base leading-none tracking-[-0.02em] transition-all duration-300 text-center ${className}`}>
            {title}
            <span><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.38452 2.38074L10.6999 6.49995L6.38452 10.6192" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.7 6.5L2.30005 6.5" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>
        </Link>
    )
}

export default Button;