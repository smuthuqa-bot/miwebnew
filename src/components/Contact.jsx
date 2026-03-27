import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const phone = e.target[1].value;
    const message = e.target[2].value;

    const text = `Hello, I want LPG Inspection.%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="contact">
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Reach out for LPG inspection services</p>
        </div>

        <div className="contact-grid">

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Quick Enquiry</h3>

            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Message" rows="4"></textarea>

            <button type="submit">
              Get Instant Quote on WhatsApp
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="contact-info">

            <h3>Get in Touch</h3>

            <div className="info-item">
              <FaMapMarkerAlt />
              <p>
                MI Success Inspection Pvt Ltd <br />
                Near RI Office,Theni
                625531, Tamil Nadu, India
              </p>
            </div>

            <div className="info-item">
              <FaPhoneAlt />
              <p>+91 9942614625</p>
            </div>

            <div className="info-item">
              <FaEnvelope />
              <p>
                <a href="mailto:successmilpg@gmail.com">
                  successmilpg@gmail.com
                </a>
              </p>
            </div>

            <div className="info-item">
              <FaGlobe />
              <p>
                <a href="https://www.misuccess.in" target="_blank" rel="noreferrer">
                  www.misuccess.in
                </a>
              </p>
            </div>

            {/* SOCIAL */}
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
            </div>

            {/* MAP */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps?q=Theni&output=embed"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "10px" }}
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