import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        <h5 className="hero-subtitle">
          Certified Inspection Company
        </h5>

        <h1>
          Specialists in <span>LPG Safety</span> Inspection
          
        </h1>

        <p>
          Delivering high-quality, government-mandated safety compliance and consumer awareness programs across the core states of Tamil Nadu,Kerala, and Andhra Pradesh.
        </p>

        <button className="hero-btn">
          Book WhatsApp Enquiry
        </button>

      </div>
    </section>
  );
};

export default Hero;