"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <WhyUs />
        <About />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </LazyMotion>
  );
}
