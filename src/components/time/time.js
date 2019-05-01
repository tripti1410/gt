import React from "react";
import "./time.css";

const Time = ({totalTimeTravelled}) => {
  return (
    <div className="time-container">
      <span>Time taken: </span>
      <time>{totalTimeTravelled}</time>
    </div>
  );
};

export default Time;