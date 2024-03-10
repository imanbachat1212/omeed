import React, { useState, useEffect } from "react";
import "./Reputation.css";

const Counter = ({ target, children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // If target is a high number, you can increase the increment value
    const increment = Math.ceil(target / 200);

    const timer = setInterval(() => {
      start += increment;
      setCount(start);
      if (start > target) {
        clearInterval(timer);
        setCount(target);
      }
    }, 10);

    // Clean-up function
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="number">
      {count.toLocaleString()} {children}
    </div>
  );
};

const Reputation = () => {
  return (
    <div className="main-stat">
      <div className="stat">
        <img
          src={require("../images/calender.gif")}
          alt="Meetings"
          className="stat-img"
        />
        <div className="static">
          <Counter target={15000}>+</Counter>
          <div>Meetings booked</div>
        </div>
      </div>

      <div className="stat">
        <img
          src={require("../images/organization.png")}
          alt="Meetings"
          className="stat-img"
        />
        <div className="static">
          <Counter target={3000}>+</Counter>
          <div>Organizations served</div>
        </div>
      </div>

      <div className="stat">
        <img
          src={require("../images/organization.png")}
          alt="Meetings"
          className="stat-img"
        />
        <div className="static">
          <Counter target={10000}>+ </Counter>
          <div>Individual</div>
        </div>
      </div>
    </div>
  );
};

export default Reputation;
