import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>MI SUCCESS INSPECTION PVT LTD</h3>

      <p>
        Specialists in LPG Safety Inspection across India with certified
        compliance and trusted service.
      </p>

      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </div>

      <p className="copyright">
        © 2026 MI SUCCESS Inspection Pvt Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;