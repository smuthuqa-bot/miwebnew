import React from "react";
import { FaCheckCircle, FaShieldAlt, FaBalanceScale } from "react-icons/fa";
import "./Values.css";

const Values = () => {
  const data = [
    {
      icon: <FaCheckCircle />,
      title: "Certified Inspection",
      desc: "High quality safety checks with certified professionals.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety First",
      desc: "Strict LPG safety standards followed in every inspection.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Compliance",
      desc: "Government approved processes and compliance systems.",
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