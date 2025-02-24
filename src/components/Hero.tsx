
import React from 'react'
import NavBar from "./common/NavBar"
import Image from 'next/image'
const Hero = () => {
    return (
        <div id='home' className='bg-center  bg-cover  bg-no-repeat relative pb-16 overflow-hidden bg-hero-bg-image max-sm:bg-black/20' >
            <NavBar />
            {/* <Image className=' absolute xl:z-30 lg:top-[47%] md:top-[36%] top-[47%] xl:size-[402px] lg:size-[300px] md:size-[280px] size-[200px]' width={402} height={402} src="/assets/images/webp/dustbin.webp" alt="dustbin" /> */}
            <div className="container max-w-[1172px] mx-auto px-4 relative z-20">
                <div className="flex flex-col xl:pt-[170px] pt-[150px]">
                    <h1 className=" md:mt-[15px] lg:text-customMd md:text-6xl text-customXmd  font-normal text-white lg:max-w-[700px] max-w-[718px] mx-auto text-center max-lg:leading-customMd">
                        Unlock Knowledge with Our <span className='text-sky-blue font-bold'>Featured Articles</span>
                    </h1>
                    <p className='font-normal md:text-base text-xs text-white/70 pt-4 leading-customXxmd  max-w-[674px] mx-auto text-center'>Explore our latest articles, insights, and expert advice on industry trends. Stay informed, gain new perspectives, and discover valuable tips to help you stay ahead.</p>
                    <form className='pt-[30px]'>
                        <div className='flex gap-[10px] border border-white/20 py-[17px] pl-[30px] items-center max-w-[558px] mx-auto rounded-full'>
                            <Image src="/assets/images/svg/search.svg" height={18} width={18} alt='search-icon' className='stroke-white/70 inset-0'/>
                            <input type="text" placeholder='Search' className='bg-transparent text-white/70 text-base font-normal leading-customXmd  placeholder:text-white/70 outline-none' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero