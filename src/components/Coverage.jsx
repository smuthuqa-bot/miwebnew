import React from "react";
import { FaGlobeAsia } from "react-icons/fa";
import "./Coverage.css";

const Coverage = () => {
  const states = [
    {
      name: "Tamil Nadu",
      desc: "Chennai, Coimbatore, Madurai",
    },
    {
      name: "Kerala",
      desc: "All districts covered",
    },
    {
      name: "Andhra Pradesh",
      desc: "Major cities covered",
    },
  ];

  return (
    <section className="coverage">
      <div className="coverage-container">
        <h2>Service Coverage Across South India</h2>

        <div className="coverage-grid">
          {states.map((item, i) => (
            <div className="coverage-card" key={i}>
              <div className="coverage-icon">
                <FaGlobeAsia />
              </div>

              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;