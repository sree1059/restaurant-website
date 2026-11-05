import React, { useEffect } from "react";
import Nav from "@/components/vantillu/Nav";
import Hero from "@/components/vantillu/Hero";
import Story from "@/components/vantillu/Story";
import ServicesAndAmenities from "@/components/vantillu/ServicesAndAmenities";
import Experience from "@/components/vantillu/Experience";
import DigitalMenu from "@/components/vantillu/DigitalMenu";
import Collaboration from "@/components/vantillu/Collaboration";
import Testimonials from "@/components/vantillu/Testimonials";
import Gallery from "@/components/vantillu/Gallery";
import Contact from "@/components/vantillu/Contact";
import FinalCTA from "@/components/vantillu/FinalCTA";
import Footer from "@/components/vantillu/Footer";

export const Landing: React.FC = () => {
  useEffect(() => {
    document.title = "Vantillu | Authentic Telugu Flavors — Kamareddy";
  }, []);

  return (
    <main className="bg-[#F9F6F0] text-[#2C1E16] overflow-x-hidden">
      <Nav />
      <Hero />
      <Story />
      <ServicesAndAmenities />
      <Experience />
      <DigitalMenu />
      <Collaboration />
      <Testimonials />
      <Gallery />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Landing;
