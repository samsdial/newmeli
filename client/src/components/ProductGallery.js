import React, { useState } from "react";

const ProductGallery = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="gallery">
      <div className="gallery__thumbnails">
        {items.map((item, index) => (
          <div
            key={index}
            className={`gallery__thumb ${
              activeIndex === index ? "gallery__thumb--active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              className="gallery__thumb-image"
              src={item.src}
              alt={`thumb-${index}`}
            />
            {item.type === "video" && (
              <div className="gallery__overlay gallery__overlay--play">▶</div>
            )}
            {item.type === "more" && (
              <div className="gallery__overlay gallery__overlay--more">
                +{item.count}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="gallery__thumbnails--numbers">
        <span>1<span >/</span>{items.length}</span>
      </div>
      <div className="gallery__main">
        <figure className="gallery__main-figure">
          <img
            className="gallery__main-image"
            src={items[activeIndex].src}
            alt="Main"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductGallery;
