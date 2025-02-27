import React from 'react';
import Image from 'next/image';
import { DISCLAIMERS, NAV_LINKS, SOCIAL_LINKS } from '@/utils/helper';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div id='arrow' className='bg-cover bg-no-repeat bg-dark-grey pt-[60px]' style={{ backgroundImage: `url(/assets/images/webp/footer-bg.webp)` }}>
            <div className="container max-w-[1220px] mx-auto px-4">
                <Image src="/assets/images/png/logo.png" alt="real-time"
                    className="max-w-[150px] w-full object-cover pointer-events-none mb-[30px]" width={150} height={44} />

                <div className="flex flex-wrap sm:gap-6 gap-3 pb-[30px]">
                    {NAV_LINKS.map((link, index) => (
                        <p key={index} className='text-base text-white font-semibold leading-customXmd hover:text-sky-blue transition-all duration-500'>{link}</p>
                    ))}
                </div>

                {DISCLAIMERS.map((item, index) => (
                    <div key={index} className="pb-[30px]">
                        <h4 className='text-base text-white font-semibold leading-customXmd pb-[10px]'>{item.title}</h4>
                        <p className='md:text-base text-base text-white/80 font-normal leading-customXmd max-w-[1140px]'>{item.content} <br></br><span>{ item.extraContent}</span></p>
                    </div>
                ))}

                <div className='flex gap-6 md:mb-20 mb-7'>
                    {SOCIAL_LINKS.map((social, index) => (
                        <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                            <img src={social.src} alt={social.alt} className='hover:scale-105 transition-all duration-100 ease-linear' />
                        </a>
                    ))}
                </div>
            </div>

            <div className='w-full border border-light-black'></div>
            <p className=" md:text-base text-sm font-normal leading-6 text-center text-white/80 py-4 px-4">
                Copyright © {year} Implenia. Alle Rechte vorbehalten.
            </p>
        </div>
    );
};

export default Footer;
