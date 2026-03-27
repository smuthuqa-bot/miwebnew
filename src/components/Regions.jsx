import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Regions.css";

const Regions = () => {
  const regions = [
    {
      name: "Tamil Nadu Regional Office",
      desc: "Chennai, Coimbatore, Madurai",
    }
  ];

  return (
    <section className="regions">
      <div className="regions-container">
        <h2>Regional Headquarters</h2>

        <div className="regions-grid">
          {regions.map((item, i) => (
            <div className="region-card" key={i}>
              <div className="region-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Regions;