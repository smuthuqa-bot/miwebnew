import React from "react";
import "./ServicesSection.css";

const services = [
  {
    title: "Mandatory Safety Check & Compliance Audits",
    desc: "We execute mandatory LPG safety inspections as stipulated by regulatory bodies. Our certified technicians perform rigorous checks on the entire gas connection, including regulator, safety hose, and stove/burner assembly, ensuring statutory compliance and identifying potential leakage points to prevent domestic accidents."
  },
  {
    title: "Dormant Connection Revival Program",
    desc: "A critical service focused on reactivating dormant LPG connections. We conduct full safety checks and consumer documentation updates, ensuring the connection is safe and compliant before activation, helping OMCs achieve their target of 70% active consumer coverage."
  },
  {
    title: "Consumer Safety Camps & Education",
    desc: "Conducting localized LPG Safety Camps to increase consumer awareness. Our programs educate users on critical safety protocols, proper usage of LPG equipment, and emergency procedures, significantly reducing accident potential."
  },
  {
    title: "Gas Pipeline Integrity Assessment",
    desc: "A key component of our safety audit is the meticulous inspection of the gas pipeline and associated fittings to check for corrosion, wear, or improper installation, safeguarding the entire consumer setup."
  },
  {
    title: "Real-time SDMS/DBC Data Sync",
    desc: "We leverage dedicated mobile applications for real-time field reporting, instant mobile number updates, and immediate syncing of inspection results with the OMC's SDMS/DBC systems, ensuring data integrity and fast compliance reporting."
  },
  {
    title: "Certified & Uniformed Personnel",
    desc: "Our field officers are highly trained and adhere to a strict Uniform Dress Code and carry official I.D. Cards, establishing immediate trust and professionalism with consumers during crucial safety inspections."
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="title">
          Specialized Mandatory LPG Safety Inspection Services
        </h2>

        <p className="subtitle">
          Our core competencies ensure rigorous compliance, enhanced safety,
          and efficient consumer service delivery for our OMC partners.
        </p>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;