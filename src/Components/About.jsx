import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="title-about">About</h1>

      <div className="subabout">
        <img
          src={require("../images/about.jpg")}
          alt="Omeed"
          className="omeed"
          data-aos="fade-right"
        />
        <div className="about-section">
          <h1 className="title-about1">
            Omeed works with mission driven leaders, teams and organizations to
            achieve uncompromised results and fulfillment.
          </h1>
          <p>
            Mission-driven leaders and teams are the folks who call Omeed to
            achieve “more.” Our work often starts by seeking to answer the
            question “why?” Where we land is almost never where we started.
            Listening and having insights to ask the right questions has been
            pivotal to my clients’ achievements.
          </p>
          <p>
            My passion for enabling results has taken me across five continents,
            where I’ve worked for leading organizations (e.g. Google, Boston
            Consulting Group) to deliver innovative solutions for individuals,
            start-ups, Fortune 100 companies and heads of state. I am known for
            my people-centric approach that drives the behavioral changes
            required to produce enhanced results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
