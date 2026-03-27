import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppFloat.css";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloat;