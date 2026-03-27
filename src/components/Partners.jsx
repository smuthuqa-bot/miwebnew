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
        <h2>Our Trusted Partners</h2>

        <div className="partners-grid">
          {logos.map((logo, i) => (
            <div className="partner-item" key={i}>
              <img src={logo} alt={`partner-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;