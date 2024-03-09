import React, { useState, useEffect } from "react";
import "./Leader.css";

const images = [
  require("../images/google.png"),
  require("../images/bcg.png"),
  require("../images/stanford.png"),
];

const Leader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length); // Loop back to the first image
    }, 1000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="main-leader">
      <h3 className="leader">
        TRUSTED BY LEADERS IN TECHNOLOGY, BUSINESS AND EDUCATION
      </h3>
      <div className="swiper">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            style={{
              opacity: index === activeIndex ? 1 : 0,
              transition: "opacity 0.5s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Leader;
