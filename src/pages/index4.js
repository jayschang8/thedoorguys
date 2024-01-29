import Banner6 from "@/components/bannner/Banner6";
import CaseStudy6 from "@/components/caseStudy/CaseStudy6";
import Choose6 from "@/components/choose/Choose6";
import WhatWeDo6 from "@/components/choose/WhatWeDo6";
import Home6Contact from "@/components/contact/Home6Contact";
import Footer6 from "@/components/footer/Footer6";
import Header6 from "@/components/header/Header6";
import Partnar6 from "@/components/partner/Partnar6";
import Review6 from "@/components/review/Review6";
import Solution6 from "@/components/solutions/Solution6";
import Testimonial6 from "@/components/testimonial/Testimonial6";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";
import React from "react";

function HomePage4() {
  useBodyClass("bg-6");
  return (
    <>
      <Head>
        <title>
          Softconic- Software Agency and creative IT solution NEXTJS Template
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>
      <Header6 />
      <Banner6 />
      <Review6 />
      <Choose6 />
      <Solution6 />
      <CaseStudy6 />
      <Partnar6 />
      <Testimonial6 />
      <WhatWeDo6 />
      <Home6Contact />
      <Footer6 />
    </>
  );
}

export default HomePage4;
