"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import NavBar from "./common/NavBar";
import Image from "next/image";
import { BLOGS_CARD } from "@/utils/helper";
import Link from "next/link";

const Hero: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const pageQuery = Number(searchParams.get("page")) || 1;
    const searchQueryFromUrl = searchParams.get("search") || "";

    const [searchQuery, setSearchQuery] = useState(searchQueryFromUrl);
    const [currentPage, setCurrentPage] = useState(pageQuery);

    const initialBlogs = 6;
    const loadMoreCount = 3;

    const filteredBlogs = BLOGS_CARD.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const displayedBlogs = filteredBlogs.slice(0, initialBlogs + (currentPage - 1) * loadMoreCount);

    const handlePageChange = () => {
        const newPage = currentPage + 1;
        setCurrentPage(newPage);

        router.push(`/blog?page=${newPage}`, { scroll: false });
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (value.trim() === "") {
            router.push(`/blog`, { scroll: false });
        } else {
            router.push(`/blog?search=${value}`, { scroll: false });
        }
    };

    const handleCardClick = (blogTitle: string) => {
        const formattedSlug = blogTitle.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
        router.push(`/blog/${formattedSlug}`);
    };
    const formatTitle = (title: string) =>
        title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

    return (
        <div id="home" className="bg-center bg-cover bg-no-repeat relative overflow-hidden">
            <NavBar />
            <div className="container max-w-[1220px] mx-auto px-4 relative z-20">
                <div className="flex flex-col xl:pt-[170px] pt-[140px]">
                    <h1 className="md:mt-[15px] lg:text-customMd md:text-6xl text-customXmd font-normal text-white lg:max-w-[700px] mx-auto text-center">
                        Unlock Knowledge with Our <span className="text-sky-blue font-bold">Featured Articles</span>
                    </h1>
                    <p className="text-white/70 text-base pt-4 max-w-[674px] mx-auto text-center">
                        Explore our latest articles, insights, and expert advice on industry trends.
                    </p>
                    <form className="pt-[30px]">
                        <div className="flex gap-[10px] border border-white/20 py-[17px] pl-[30px] items-center max-w-[558px] mx-auto rounded-full">
                            <Image src="/assets/images/svg/search.svg" height={18} width={18} alt="search-icon" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search by title..."
                                className="bg-transparent text-white/70 text-base placeholder:text-white/70 outline-none"
                            />
                        </div>
                    </form>
                </div>

                <div className="pt-[70px]">
                    {displayedBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto justify-center">
                                {displayedBlogs.map((blog) => (
                                  <Link key={blog.id} href={`/blog/${formatTitle(blog.title)}`}>
                                    <div onClick={() => handleCardClick(blog.title)} className="bg-gradient-to-bl from-sky-blue/0 to-sky-blue/100 p-[1px] rounded-[10px] max-w-[364px] mx-auto">
                                        <div className="bg-black/90 text-white relative h-[498px] rounded-[10px] overflow-hidden">
                                            <p className="text-white absolute top-4 right-4">{blog.date}</p>
                                            <Image src={blog.image} alt={blog.title} width={364} height={237} className="w-full h-[237px] object-cover rounded-md mb-4" />
                                            <div className="px-3 pb-[39px]">
                                                <div className="flex md:gap-5 gap-2 mb-2 absolute top-[41%]">
                                                    <span className="border-sky-blue border rounded-full bg-simple-black text-xs px-[42px] h-[37px] flex items-center">{blog.category}</span>
                                                    <span className="text-white/70 bg-light-black text-sm border-white border h-[37px] flex items-center rounded-full px-[41px]">{blog.readTime} min read</span>
                                                </div>
                                                <h3 className="text-xl font-semibold pt-5 pb-3">{blog.title}</h3>
                                                <p className="text-white/70 mb-3 text-base">{blog.description}</p>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-2 mt-6">
                                                        <Image src={blog.authorImage} alt={blog.author} width={50} height={50} className="size-[50px] rounded-full" />
                                                        <p className="text-white text-base font-semibold">{blog.author}</p>
                                                    </div>
                                                    <Image src="/assets/images/svg/right-arrow.svg" alt="right-arrow" width={20} height={18} className="mt-5 hover:translate-x-1 transition-all duration-500" />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                    ) : (
                        <p className="text-center text-white/70 text-xl mt-6">No blogs found</p>
                    )}

                    {displayedBlogs.length < filteredBlogs.length && (
                        <button
                            onClick={handlePageChange}
                            className="mt-6 bg-sky-blue text-black text-base font-semibold hover:text-sky-blue px-[26.7px] py-[14.6px] flex mx-auto rounded-full hover:bg-transparent border border-sky-blue transition-all duration-500"
                        >
                            See All Blogs
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero;
