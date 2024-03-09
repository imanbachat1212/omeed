import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <>
      <div className="services">
        <h1 className="title-service">Our Services</h1>
        <h4 className="subtitle-service2">
          As a coach, executive and consultant Google and the Boston Consulting
          group, I empower leaders, their teams and organizations to realize
          transformational results.​
        </h4>
        <div className="main">
          <div className="cards">
            <div className="card" data-aos="zoom-in">
              <div className="image">
                <img src={require("../images/carousel1.jpg")} alt="Coaching" />
                <p className="note" id="team">
                  {" "}
                  <img
                    src={require("../images/icons8-learning.gif")}
                    alt="MostafaBachat"
                    id="img-team"
                  />
                  Executive Coaching
                </p>
              </div>
              <div className="card__content">
                {/* <h2 className="card_title">
                  Farmstand Salad <span className="pipe">|</span> $9
                </h2> */}
                <p className="list-label">
                  {" "}
                  Together, we will develop and execute your unique personal
                  development program by:
                </p>
                <ul className="service-ul">
                  <li>
                    {" "}
                    Clarifying the root from the fruit of the problem you’re
                    trying to solve.
                  </li>
                  <li>
                    Applying a systems lens to architect a resilient strategy
                    that positions you to be future ready in the face of
                    constant change.
                  </li>
                  <li>
                    {" "}
                    Executing and sustaining your transformation with proven
                    methods that serve to win the hearts and minds of those who
                    matter most.
                  </li>
                </ul>
              </div>
            </div>

            <div className="card" data-aos="zoom-in">
              <div className="image">
                <img
                  src={require("../images/carousel2.jpg")}
                  alt="Team Coaching"
                />
                <p className="note" id="team">
                  {" "}
                  <img
                    src={require("../images/icons8-team (1).gif")}
                    alt=""
                    id="img-team"
                  />
                  Team Coaching
                </p>
              </div>

              <div className="card__content">
                <p>
                  By coming together, teams aim to go further, better, and
                  oftentimes faster. While agile execution is paramount, teams
                  regularly get caught up in issues of trust, alignment,
                  decision making, and communications. We’ll uncover what is
                  uniquely getting in your way to unleash the capabilities that
                  have been latent for far too long.
                </p>
              </div>
            </div>

            <div className="card" data-aos="zoom-in">
              <div className="image">
                <img src={require("../images/carousel3.png")} alt="Business" />
                <p className="note" id="team">
                  <img
                    src={require("../images/icons8-transformation.gif")}
                    alt="MostafaBachat"
                    id="img-team"
                  />
                  Business Transition{" "}
                </p>
              </div>
              <div className="card__content">
                <p>
                  Over two thirds of all large transformation programs fail.
                  Winning organizations take an “always on” transformation
                  approach. We will shape the organization’s strategic direction
                  while hardwiring the behavioral and operational changes
                  required to turn the odds of success in your favor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
