"use client";
import React from "react";

import Hero from "@/components/Hero"; 
import LatestArticle from "@/components/LatestArticle";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const Page = () => {

  return (
    <div>
      <Suspense>
        <Hero />
        <LatestArticle />
        <Footer />
    </Suspense>
    </div>
  );
};

export default Page;
