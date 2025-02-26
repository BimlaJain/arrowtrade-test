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
      <Suspense>
      <Hero  />
      <LatestArticle />
      <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
};

export default Page;
