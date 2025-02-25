"use client"
import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LatestArticle from "@/components/LatestArticle";
import BackToTop from "@/components/common/BackToTop";
import { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Hero pageIndex={0} onPageChange={() => {}} />
      <LatestArticle />
      <Footer />
      <BackToTop/>
    </div>
  );
};

export default Page;
