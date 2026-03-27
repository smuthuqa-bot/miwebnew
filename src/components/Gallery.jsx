import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
    "/gallery/img7.jpg",
    "/gallery/img8.jpg",
  ];

  return (
    <section className="gallery">
      <div className="gallery-container">
        <h2>Our Work Gallery</h2>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              className="gallery-item"
              key={i}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt="" />
              <div className="overlay">View</div>
            </div>
          ))}
        </div>

        {/* 🔥 LIGHTBOX */}
        {selectedImg && (
          <div className="lightbox" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="preview" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;