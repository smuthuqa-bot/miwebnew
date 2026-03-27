import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Values from "./components/Values";
import Regions from "./components/Regions";
import Services from "./components/Services";
import Coverage from "./components/Coverage";
import Gallery from "./components/Gallery";
import Operations from "./components/Operations";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ServicesSection from "./components/ServicesSection";



function App() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="values">
        <Values />
      </section>

      <section id="regions">
        <Regions />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="coverage">
        <Coverage />
        <ServicesSection />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="operations">
        <Operations />
      </section>

      <section id="partners">
        <Partners />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <WhatsAppFloat />
    </div>
  );
}

export default App;