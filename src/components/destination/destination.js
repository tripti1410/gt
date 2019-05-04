import React from "react";
import cx from "classnames";
import Select from "../select/select";
import RadioButton from "../radio-button/radio-button";
import { isPotentialVehicle } from "./utils";

import "./destination.css";

const Destination = ({
  destination,
  selectedPlanets,
  onPlanetChange,
  onChangeOfVehicle,
  selectedVehicles,
  uniquePlanets,
  allVehicles
}) => {
  return (
    <div className="destination-container">
      <Select
        id={destination.value}
        label={destination.name}
        options={uniquePlanets}
        value={selectedPlanets[destination.value]}
        getOptionLabel={planet => planet.name}
        getOptionValue={planet => planet.name}
        onChange={planet => onPlanetChange(destination.value, planet)}
      />
      {selectedPlanets && selectedPlanets[destination.value] && (
        <div className="vehicles-container">
          {allVehicles.map((vehicle, index) => (
            <div
              key={`vehicle-${index}`}
              className={cx("vehicles-container__vehicle", {
                "is-disabled": isPotentialVehicle(
                  selectedVehicles,
                  vehicle,
                  destination.value,
                  selectedPlanets[destination.value]
                )
              })}
            >
              <RadioButton
                label={vehicle.name}
                id={`${destination.value}-${vehicle.name}`}
                name={destination.value}
                disabled={isPotentialVehicle(
                  selectedVehicles,
                  vehicle,
                  destination.value,
                  selectedPlanets[destination.value]
                )}
                onChange={value =>
                  onChangeOfVehicle(destination.value, vehicle)
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Destination;
