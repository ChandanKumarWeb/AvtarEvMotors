"use client";

import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import ServicesSection from "@/Components/ServicesSection";
import AboutSection from "@/Components/AboutSection";
import ContactPage from "@/Components/ContactPage";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <ContactPage/>
      <Footer/>
    </>
  );
}
