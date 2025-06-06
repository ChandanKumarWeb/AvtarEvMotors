"use client";
import Navbar from "@/app/Components/Navbar";
import HeroSection from "@/app/Components/HeroSection";
import ServicesSection from "@/app/Components/ServicesSection";
import AboutSection from "@/app/Components/AboutSection";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
    </div>
  );
}
