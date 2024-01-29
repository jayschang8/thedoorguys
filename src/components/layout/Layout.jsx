import React from "react";
import Footer3 from "../footer/Footer3";
import Header from "../header/Header";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

function Layout({ children }) {
  useBodyClass("home-dark2");
  return (
    <>
     <Head>
        <title>
          Softconic- Software Agency and creative IT solution NEXTJS Template
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>
      <Header />
      {children}
      <Footer3 />
    </>
  );
}

export default Layout;
