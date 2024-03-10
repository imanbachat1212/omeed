import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <h1 className="title-service">Our Services</h1>
      <h4 className="subtitle-service2">
        As a coach, executive and consultant Google and the Boston Consulting
        group, I empower leaders, their teams and organizations to realize
        transformational results.
      </h4>
      <div className="service-items">
        <div className="service-item" data-aos="zoom-in">
          <img
            src={require("../images/learning.gif")}
            alt="Executive Coaching"
          />
          <h3 className="service-title">
            Executive Coaching
            <span className='"text-white bg-white w-full h-[2px] block mb-[1px] '></span>
            <span className='"text-white bg-white w-full h-[2px] block mb-[1px] '></span>
          </h3>
          <p className="service-description">
            Together, we will create your unique personal development program
            by: 1) Clarifying the real problem(s) we're solving 2) Applying a
            systems lens to architect a resilient strategy 3) Executing and
            sustaining your transformation in ways that win the hearts and minds
            of those who matter most.
          </p>
        </div>

        <div className="service-item" data-aos="zoom-in">
          <img src={require("../images/team.gif")} alt="Team Coaching" />
          <h3 className="service-title " id="team">
            Team Coaching
            <span className='"text-white bg-white w-full h-[2px] block mb-[1px] '></span>
            <span className='"text-white bg-white w-full h-[2px] block mb-[1px] '></span>
          </h3>
          <p className="service-description">
            Teams aim to go further, better and together. Too often, teams get
            caught up in issues of trust, alignment, decision making, and
            communications. We’ll uncover what is getting in your way to unleash
            latent capabilities that multiply results.
          </p>
        </div>

        <div className="service-item" data-aos="zoom-in">
          <img
            src={require("../images/transformation.gif")}
            alt="Business Transition"
          />
          <h3 className="service-title">
            Business Transition
            <span className='"text-white bg-white w-full h-[2px] block mb-[1px] '></span>
            <span className='"text-white bg-white w-full h-[2px] block mb-[1px] '></span>
          </h3>
          <p className="service-description">
            Over two thirds of all large transformation programs fail. Winning
            organizations take an “always on” transformation approach. We will
            shape the organization’s strategic direction while hardwiring the
            behavioral and operational changes required to turn the odds of
            success in your favor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
