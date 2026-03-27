import React from "react";
import { FaTasks, FaLaptop, FaUserCheck } from "react-icons/fa";
import "./Operations.css";

const Operations = () => {
  const data = [
    {
      icon: <FaTasks />,
      title: "Pre-scheduled Assignments",
      desc: "Daily meetings to brief field officers on inspection lists, consumer data, and street-wise execution plans for maximized efficiency and targeted LPG safety audit coverage.",
    },
    {
      icon: <FaLaptop />,
      title: "Advanced Digital Reporting",
      desc: "Utilizing dedicated mobile applications for real-time reporting, mobile number updates, and instant syncing of all mandatory inspection data with OMC systems (SDMS/DBC). This ensures data integrity, fast compliance reporting, and immediate visibility of field operations to OMC partners.",
    },
    {
      icon: <FaUserCheck />,
      title: "Continuous Training",
      desc: "Mandatory, continuous training for our certified field officers ensures they maintain the highest technical knowledge and adhere strictly to LPG safety protocols and professional standards.",
    },
  ];

  return (
    <section className="operations">
      <div className="operations-container">
        <h2>Operational Excellence: Our Daily Execution Strategy</h2>
        <h4>Our operations are designed to ensure rigorous compliance, efficient execution, and real-time reporting for our OMC partners.</h4>

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