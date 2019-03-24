import { getPlanets, getVehicles } from "./api";

export const listAllPlanets = () => {
  getPlanets().then(planets =>
    ({ type: "PLANETS_SUCCESS_ACTION", payload: { planets } })
  );
};

export const listAllVehicles = () => dispatch => {
  // getVehicles().then(vehicles =>
  //   dispatch({ type: "VEHICLES_SUCCESS_ACTION", payload: { vehicles } })
  // );
};
