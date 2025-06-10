"use client";

import Navbar from "@/app/Components/Navbar";
import HeroSection from "@/app/Components/HeroSection";
import ServicesSection from "@/app/Components/ServicesSection";
import AboutSection from "@/app/Components/AboutSection";
import ContactPage from "@/app/Components/ContactPage";
import Footer from "@/app/Components/Footer";

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
