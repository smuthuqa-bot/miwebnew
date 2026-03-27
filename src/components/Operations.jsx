import React from "react";
import { FaTasks, FaLaptop, FaUserCheck } from "react-icons/fa";
import "./Operations.css";

const Operations = () => {
  const data = [
    {
      icon: <FaTasks />,
      title: "Pre-scheduled Assignments",
      desc: "Efficient scheduling system for timely inspections and delivery.",
    },
    {
      icon: <FaLaptop />,
      title: "Advanced Digital Reporting",
      desc: "Real-time reports with accurate digital documentation.",
    },
    {
      icon: <FaUserCheck />,
      title: "Continuous Training",
      desc: "Regular training programs to maintain high-quality standards.",
    },
  ];

  return (
    <section className="operations">
      <div className="operations-container">
        <h2>Operational Excellence</h2>

        <div className="operations-grid">
          {data.map((item, i) => (
            <div className="operation-card" key={i}>
              <div className="operation-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Operations;