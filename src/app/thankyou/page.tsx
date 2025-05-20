import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className="bg-[url('/images/tyfinal.jpg')] bg-center bg-cover  pt-[200px] px-4 pb-[250px]">
        <div>
            <h2 className='text-white! mb-[20px] text-center text-[25px] md:text-[42px] font-[600]!'>Thanks For contacting us we will get back to you soon!!</h2>
            <div className='w-full text-center'>
            <Link href={"/features"} className='text-center inline-flex mx-auto justify-center bg-[#5cb85c] py-[17px] px-[30px]'>
            <span className='text-[15px] leading-[1] text-white'>BACK TO SITE</span>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Page