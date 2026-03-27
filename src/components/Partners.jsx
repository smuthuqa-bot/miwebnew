import React from "react";
import "./Partners.css";

const Partners = () => {
  const logos = [
    "/logos/hp.png",
    "/logos/iocl.png",
    "/logos/bpcl.png",
  ];

  return (
    <section className="partners">
      <div className="partners-container">
        <h2>Trusted Partner to India's Major Oil Marketing Companies (OMCs)</h2>

        <div className="partners-grid">
          {logos.map((logo, i) => (
            <div className="partner-item" key={i}>
              <img src={logo} alt={`partner-${i}`} />
            </div>
          ))}
        </div>
        <p className="partner-note">
          We are proud to be the chosen partner for India's leading OMCs, including IOCL, HPCL, and BPCL, in their mission to ensure LPG safety and regulatory compliance across their distribution networks.
        </p>
      </div>
    </section>
  );
};

export default Partners;