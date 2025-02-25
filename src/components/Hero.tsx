"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import NavBar from "./common/NavBar";
import Image from "next/image";
import { BLOGS_CARD } from "@/utils/helper";
import CommonButton from "./common/CommonButton";

interface HeroProps {
    pageIndex: number;
    onPageChange: (newPageIndex: number) => void;
}

const Hero: React.FC<HeroProps> = ({ pageIndex, onPageChange }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pageQuery = Number(searchParams.get("page")) || 1;

    const [blogs, setBlogs] = useState(BLOGS_CARD);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const storedBlogs = localStorage.getItem("blogsData");
        if (storedBlogs) {
            setBlogs(JSON.parse(storedBlogs)); 
        } else {
            localStorage.setItem("blogsData", JSON.stringify(BLOGS_CARD)); 
        }
    }, []);

    const handlePageChange = (newIndex: number) => {
        router.push(`/blog?page=${newIndex}`, { scroll: false });

        const newBlogs = [
            {
                id: blogs.length + 1,
                title: `Real-Time Market Insights`,
                category: "Productivity",
                readTime: 5,
                description: "Stay ahead with AI-driven analytics, real-time news updates, and expert market research to make informed decisions.",
                author: "Jerome Bell",
                authorImage: "/assets/images/png/jerome.png",
                date: "31 Jan 2025",
                image: "/assets/images/png/real-time.png",
            },
            {
                id: blogs.length + 2,
                title: `Advanced Trading Platform ${blogs.length + 2}`,
                category: "Productivity",
                readTime: 5,
                description: "Experience lightning-fast execution, customizable charts, and an intuitive interface designed for traders of all levels.",
                author: "Eleanor Pena",
                authorImage: "/assets/images/png/eleanor.png",
                date: "29 Jan 2025",
                image: "/assets/images/png/trading.png",
            },
            {
                id: blogs.length + 3,
                title: `Mastering The Markets ${blogs.length + 3}`,
                category: "Productivity",
                readTime: 5,
                description: "Mastering the markets involves developing a comprehensive understanding of how financial markets work, creating.",
                author: "Wade Warren",
                authorImage: "/assets/images/png/wade.png",
                date: "20 Dec 2024",
                image: "/assets/images/png/mastring.png",
            },
        ];

        const updatedBlogs = [...blogs, ...newBlogs];
        setBlogs(updatedBlogs);

        localStorage.setItem("blogsData", JSON.stringify(updatedBlogs));
        localStorage.setItem("pageIndex", newIndex.toString());
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div id="home" className="bg-center bg-cover bg-no-repeat pb-16 bg-hero-bg-image max-sm:bg-black/20 relative overflow-hidden">
            <NavBar />
            <div className="container max-w-[1220px] mx-auto px-4 relative z-20">
                <div className="flex flex-col xl:pt-[170px] pt-[140px]">
                    <h1 className="md:mt-[15px] lg:text-customMd md:text-6xl text-customXmd font-normal text-white lg:max-w-[700px] max-w-[718px] mx-auto text-center max-lg:leading-customMd">
                        Unlock Knowledge with Our <span className="text-sky-blue font-bold">Featured Articles</span>
                    </h1>
                    <p className="font-normal md:text-base text-xs text-white/70 pt-4 leading-customXxmd max-w-[674px] mx-auto text-center">
                        Explore our latest articles, insights, and expert advice on industry trends. Stay informed, gain new perspectives, and discover valuable tips to help you stay ahead.
                    </p>
                    <form className="pt-[30px]">
                        <div className="flex gap-[10px] border border-white/20 py-[17px] pl-[30px] items-center max-w-[558px] mx-auto rounded-full">
                            <Image src="/assets/images/svg/search.svg" height={18} width={18} alt="search-icon" className="stroke-white/70 inset-0" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by title..."
                                className="bg-transparent text-white/70 text-base font-normal leading-customXmd placeholder:text-white/70 outline-none"
                            />
                        </div>
                    </form>
                </div>

                <div className="pt-[70px]">
                    {filteredBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto justify-center">
                            {filteredBlogs.map((blog) => (
                                <div key={blog.id} className="bg-gradient-to-bl from-sky-blue/0 to-sky-blue/100 p-[1px] rounded-[10px] max-w-[364px] w-full sm:w-[80%] md:w-auto mx-auto">
                                    <div className="bg-black/90 text-white relative rounded-[10px] overflow-hidden">
                                        <p className="text-white text-base font-semibold leading-customXmd absolute top-4 right-4">{blog.date}</p>
                                        <Image src={blog.image} alt={blog.title} width={364} height={237} className="w-full h-[237px] object-cover rounded-md mb-4" />
                                        <div className="px-3 pb-[39px]">
                                            <div className="flex gap-2 mb-2">
                                                <span className="border-sky-blue border rounded-full leading-customXmd hover:border-white text-xs px-[42px] h-[37px] py-[3px] flex items-center">{blog.category}</span>
                                                <span className="text-white/70 bg-light-black font-normal leading-customXmd text-sm border-white border h-[37px] flex items-center rounded-full px-[41px] py-[9.5px]">{blog.readTime} min read</span>
                                            </div>
                                            <h3 className="text-xl font-semibold">{blog.title}</h3>
                                            <p className="text-white/70 mb-3 font-normal leading-customXmd text-base">{blog.description}</p>
                                            <div className="flex items-center gap-2 mt-6">
                                                <Image src={blog.authorImage} alt={blog.author} width={50} height={50} className="size-[50px] rounded-full" />
                                                <p className="text-white text-base leading-customXmd font-semibold">{blog.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-white/70 text-xl mt-6">No blogs found</p>
                    )}
                    <button
                        onClick={() => handlePageChange(pageIndex + 1)}
                        className="mt-6 bg-sky-blue text-black text-base font-semibold hover:text-sky-blue px-[26.7px] py-[14.6px] flex mx-auto rounded-full hover:bg-transparent border border-sky-blue transition-all duration-500"
                    >
                        See All Blogs
                    </button>
                    {/* <CommonButton onClick={() => handlePageChange(pageIndex + 1)}  text=" See All Blogs" myClass="!mt-6 !px-[26.7px] !py-[14.6px] !flex !mx-auto !border-sky-blue !bg-sky-blue !text-black hover:!text-sky-blue hover:!bg-transparent"/> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
