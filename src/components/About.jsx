import React from "react";
import "./About.css";
import aboutImg from "../assets/aboutlogo.png";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          <h2>Our Foundation</h2>

          <p className="about-desc">
            MI SUCCESS INSPECTION PRIVATE LIMITED provides trusted LPG safety
            inspections with strong compliance, reliability, and industry expertise.
          </p>

          <div className="about-highlight">
            Commitment to LPG Safety Compliance
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img src={aboutImg} alt="LPG Inspection" />
        </div>

      </div>
    </section>
  );
};

export default About;