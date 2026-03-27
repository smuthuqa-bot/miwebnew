import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      className="whatsapp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsApp;