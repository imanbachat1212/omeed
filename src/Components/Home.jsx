import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <h1 className="title">
          WHO IS <span className="om">OMEED?</span>
        </h1>
        <h3 className="subtitle">
          As a leader, team or organization you’re facing unprecedented change
          and uncertainty. You wonder how you can sustainably keep winning, at
          business and at life, and what will be your legacy? Omeed brings
          unfair advantage in realizing results and the fulfillment required to
          sustain them. You’re ready for action. There’s no time like the
          present. Let’s get started.
        </h3>
        <div className="btn">
          <button class="button">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Get in Touch</span>
            </span>
          </button>
          <button class="button">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Learn More</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
