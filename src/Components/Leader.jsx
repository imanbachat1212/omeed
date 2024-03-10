import React from "react";
import "./Leader.css";

const Leader = () => {
  return (
    <div className="main-leader">
      <h3 className="leader">
        TRUSTED BY LEADERS IN TECHNOLOGY, BUSINESS AND EDUCATION
      </h3>
      <div className="swiper">
        <img src={require("../images/google.png")} alt="Omeed" />
        <img src={require("../images/bcg.png")} alt="Omeed" />
        <img src={require("../images/stanford.png")} alt="Omeed" />
      </div>
    </div>
  );
};

export default Leader;
