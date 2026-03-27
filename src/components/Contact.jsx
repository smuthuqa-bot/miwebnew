import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const phone = e.target[1].value;
    const message = e.target[2].value;

    const text = `Hello, I want LPG Inspection.%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/91942614625?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="contact">
      <div className="contact-container">

        <div className="contact-header">
          <h2>Contact</h2>
           <p>Immediate WhatsApp Inquiry</p>
        </div>

        <div className="contact-grid">

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone" required />
            <textarea placeholder="Message" rows="2"></textarea>

            <button type="submit">WhatsApp</button>
          </form>

          {/* INFO */}
          <div className="contact-info">

            <div className="info-item">
              <FaMapMarkerAlt />
              <p>Theni, Tamil Nadu</p>
            </div>

            <div className="info-item">
              <FaPhoneAlt />
              <p><a href="tel:+91942614625">+91 9942614625 (Managing Director)</a></p>
            </div>

            <div className="info-item">
              <FaEnvelope />
              <p><a href="mailto:successmilpg@gmail.com">successmilpg@gmail.com</a></p>
            </div>

            <div className="info-item">
              <FaGlobe />
              <p><a href="https://www.misuccess.in" target="_blank">misuccess.in</a></p>
            </div>

            {/* REGIONAL */}
            <div className="regional">
              📍 TamilNadu : Theni (625531) <br /><br /> 📍 Kerala : Palakkadu (678009) <br /><br /> 📍 Andhra Pradesh : chittoor (517125)
            </div>

            {/* SMALL MAP */}
            <div className="map-small">
              <iframe
                src="https://www.google.com/maps?q=Theni&output=embed"
                loading="lazy"
                title="map"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;