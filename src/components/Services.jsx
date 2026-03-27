import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const locations = [
    "Dindigul",
    "Theni",
    "Madurai",
    "karur",
    "Tirchirapalli",
    "Namakkal",
    "Salem",
    "Thiruvannamalai",
    "Coimbatore",
    "Vellore",
   "Pollachi",
   "Palani",
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2>Service Areas in TamilNadu</h2>

        <div className="services-grid">
          {locations.map((loc, i) => (
            <div className="service-card" key={i}>
              <FaMapMarkerAlt className="service-icon" />
              <span>{loc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;