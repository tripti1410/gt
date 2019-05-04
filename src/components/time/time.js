import React from "react";
import Clock from "../icons/clock";
import "./time.css";

const Time = ({totalTimeTravelled}) => {
  return (
    <div className="time-container">
      <time>{totalTimeTravelled === 0 ? <Clock /> : totalTimeTravelled}</time>
    </div>
  );
};

export default Time;