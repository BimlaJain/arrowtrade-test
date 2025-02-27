import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { BLOGS_CARD } from "../utils/helper";

const Articles = () => {
    const featuredBlogs = BLOGS_CARD.filter((blog) => blog.isFeatured);

    return (
        <div className="relative container max-xl:px-4 max-w-[1170px] mx-auto lg:py-[180px] md:py-24 py-16">
            <h1 className="md:mt-[15px] lg:text-5xl md:text-4xl text-3xl font-normal text-white text-center md:pb-[70px] pb-10">
                Latest <span className="text-sky-blue font-bold">Articles</span>
            </h1>

            {featuredBlogs.length > 0 ? (
                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}
                        modules={[Navigation, Pagination]}
                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                        pagination={{
                            clickable: true,
                            el: ".swiper-pagination",
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10, centeredSlides: true },
                            768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
                            1024: { slidesPerView: 3, spaceBetween: 24, centeredSlides: false },
                        }}
                    >
                        {featuredBlogs.map((blog, index) => (
                            <SwiperSlide key={blog.id || index}>
                                <div className="bg-gradient-to-b cursor-pointer from-sky-blue/0 to-sky-blue/100 p-[1px] rounded-[10px]">
                                    <div className="bg-black/90 text-white relative rounded-[10px]">
                                        <p className="text-white text-base font-semibold absolute top-4 right-4">{blog.date}</p>
                                        <Image src={blog.image} alt={blog.title} width={364} height={237} className="w-full h-[237px] object-cover rounded-md mb-4" />
                                        <div className="px-3 pb-[39px] flex flex-col">
                                            <div className="flex gap-2 relative top-[10px]">
                                                <span className="border-sky-blue border rounded-full whitespace-nowrap bg-black leading-custom-lg hover:bg-sky-blue hover:text-black text-xs px-6 xl:px-[42px] h-[37px] flex items-center">
                                                    {blog.category}
                                                </span>
                                                <span className="text-white/70 bg-light-black font-normal text-sm border-white hover:bg-sky-blue hover:text-black hover:border-sky whitespace-nowrap border h-[37px] flex items-center rounded-full xl:px-[41px] px-6 py-[9.5px]">
                                                    {blog.readTime} min read
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-semibold mt-12 mb-[10px]">{blog.title}</h3>
                                            <p className="text-white/90 font-normal text-base">{blog.description}</p>
                                            <div className="flex justify-between items-center mt-6">
                                                <div className="flex items-center gap-[10px]">
                                                    <Image src={blog.authorImage} alt={blog.author} width={50} height={50} className="size-[50px] rounded-full" />
                                                    <p className="text-white text-base font-semibold">{blog.author}</p>
                                                </div>
                                                <Image src="/assets/images/svg/right-arrow.svg" alt="right-arrow" width={20} height={18} className="mt-5 hover:translate-x-1 transition-all duration-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination lg:mt-16 mt-24 xl:hidden"></div>
                </>
            ) : (
                <p className="text-center text-white/70 text-xl mt-6">No blogs data found</p>
            )}
            {featuredBlogs.length > 0 && (
                <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
                    <button className="swiper-button-prev size-[60px] bg-sky-blue border border-sky-blue group rounded-full transition-all duration-300">
                        <Image src="/assets/images/svg/slider-arrow.svg" alt="slider-arrow" width={30} height={27} className="w-[30px] group-hover:invert invert-0 brightness-0" />
                    </button>
                    <button className="swiper-button-next size-[60px] bg-sky-blue border border-sky-blue group rounded-full transition-all duration-300">
                        <Image src="/assets/images/svg/slider-right-arrow.svg" alt="slider-right-arrow" width={30} height={27} className="w-[30px] group-hover:invert invert-0 brightness-0" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Articles;
