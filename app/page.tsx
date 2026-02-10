"use client";

import { useEffect } from "react";
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Manifesto from "./components/landing/Manifesto";
import GridGallery from "./components/landing/GridGallery";
import Showcase from "./components/landing/Showcase";
import CTA from "./components/landing/CTA";
import Footer from "./components/landing/Footer";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-[#fbfbfb]">
      <Navbar />
      <Hero />
      <Manifesto />
      <GridGallery />
      <Showcase />
      <CTA />
      <Footer />
    </main>
  );
}
