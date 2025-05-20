import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='py-[50px]'>
        <div className="container">
            <div className="bg-[#f2f2f2] shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-[10px] p-[20px] max-w-[1024px] mx-auto">
                <div className="flex flex-col-reverse md:flex-row gap-[30px]">
                    <div className="w-full md:w-1/2">
                        <Image
                            src={'/images/download-page-img.png'}
                            alt='download-page-img'
                            width={500}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className='flex flex-col items-center  w-full md:w-1/2'>
                        <h3 className='font-[600]!'>Download</h3>
                        <div className='w-[114px] h-[1px] bg-black my-[15px] mt-[7px]'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page