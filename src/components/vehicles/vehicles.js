import React from "react";
import cx from "classnames";
import RadioButton from "../radio-button/radio-button";
import "./vehicles.css";

const Vehicles = ({
  vehicles,
  onChangeOfVehicle,
  destinationName,
  allPlanets
}) => {
  return (
    <div className="vehicles-container">
      {vehicles.map((vehicle, index) => (
        <div
          key={`vehicle-${index}`}
          className={cx("vehicles-container__vehicle", {
            "is-disabled": false
          })}
        >
          <RadioButton
            label={vehicle.name}
            id={`vehicle-${vehicle["max_distance"]}`}
            name={destinationName}
            onChange={value => onChangeOfVehicle(vehicle.name, value)}
          />
          <span>{`(${vehicle["total_no"]})`}</span>
        </div>
      ))}
    </div>
  );
};

export default Vehicles;
