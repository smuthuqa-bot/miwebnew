import React from "react";
import { FaCheckCircle, FaShieldAlt, FaBalanceScale } from "react-icons/fa";
import "./Values.css";

const Values = () => {
  const data = [
    {
      icon: <FaCheckCircle />,
      title: "Our Mission: Hazard Prevention",
      desc: "To be one of the foremost Mandatory Inspection firms, operating with a strict protocol for protecting customers from any hazard related to LPG usage through certified inspections and timely intervention.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Our Vision: Ethical Safety Practices", 
      desc: "To be an entrusted firm in fire & safety by establishing a high level of ethical practice in every inspection and working collaboratively with customers to meet all statutory safety objectives.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Our Goals: Compliance & Continuity",
      desc: "To ensure 100% compliance with OMC safety mandates, achieve a 70% active consumer base through our Dormant Connection Revival Program, and maintain a consistent track record of zero safety incidents in all our operations.",
    },
  ];

  return (
    <section className="values">
      <div className="values-container">
        {data.map((item, i) => (
          <div className="value-card" key={i}>
            <div className="value-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;