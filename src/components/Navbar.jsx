import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Sticky shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <nav className={`navbar ${sticky ? "sticky" : ""}`}>
  
  <div className="nav-container">
    
    {/* Logo */}
   <div className="logo">
  <img src="/logo.png" alt="logo" />

  <div className="logo-text">
    <span className="main-title">MI SUCCESS</span>
    <span className="sub-title">The Man Power Solution</span>
  </div>
</div>
    {/* Menu */}
    <div className={`nav-links ${menuOpen ? "active" : ""}`}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
    </div>

    {/* Button */}
   <button 
    className="contact-btn"
    onClick={() => window.location.href = "tel:+91942614625"}
  >
    📞
  </button>

    {/* Mobile */}
    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
      ☰
    </div>

  </div>

</nav>
  );
};

export default Navbar;