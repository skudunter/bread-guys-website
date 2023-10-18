"use client";

import { useEffect } from "react";
import Header from "@/components/ui/header";
import Banner from "@/components/banner";
import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "@/components/page-illustration";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <Header />
      <main className="grow">
        <PageIllustration />

        {children}
      </main>

      <Footer />
      <Banner />
    </>
  );
}
