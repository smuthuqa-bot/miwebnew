import React from "react";
import "./About.css";
import aboutImg from "../assets/aboutlogo.png";

/* 🔥 Highlight Component */
const Highlight = ({ children }) => {
  return <span className="highlight">{children}</span>;
};

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          <h2>
            Our Foundation Experience, Trust, and LPG Safety Expertise
          </h2>

          <p className="about-desc">
            MI SUCCESS INSPECTION PRIVATE LIMITED provides trusted LPG safety
            inspections with strong compliance, reliability, and industry expertise.
          </p>

          <p className="about-desc">
            <Highlight>MI SUCCESS INSPECTION PRIVATE LIMITED</Highlight>, 
            established in <Highlight>2019</Highlight>, is recognized as one of India's most reliable customer service associates specializing in mandatory LPG safety inspection and compliance services. We commenced operations in Theni, Tamil Nadu.
          </p>

          <p className="about-desc">
            Our track record includes successfully serving customers for major national partners, including BPCL (Bharat Petroleum), HPCL (Hindustan Petroleum), and IOCL (Indian Oil Corporation Ltd.). This extensive experience makes us a proven authority in the field of statutory gas safety compliance. We also maintain a critical operational collaboration with{" "}
            <Highlight>CLASSIC PRO</Highlight> located in Kerala,{" "}
            <Highlight>EVERY STEP</Highlight>, a highly esteemed firm located in Chittoor, Andhra Pradesh and other regional partners, ensuring comprehensive service coverage across South India.
          </p>

          <div className="about-highlight">
            <h3>Commitment to LPG Statutory Compliance</h3>
            MI SUCCESS INSPECTION PRIVATE LIMITED was founded with the explicit goal of upholding the highest standards of safety as mandated by OMCs. Our partnerships, starting with IOCL from day one, attest to our capability to manage large-scale, regulatory-driven inspection programs. We have evolved into a Total Solution Provider, specializing in safety audits that protect consumers and maintain the integrity of the LPG distribution network.
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