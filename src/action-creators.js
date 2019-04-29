import { getPlanets, getVehicles } from "./api";
import * as actions from "./actions";

export const fetchPlanetsRequestAction = () => ({
  type: actions.FETCH_PLANETS_REQUEST
});
export const fetchPlanetsSuccessAction = (planets) => ({
  type: actions.FETCH_PLANETS_SUCCESS, payload: { planets }
});
export const fetchPlanetsFailureAction = (error) => ({
  type: actions.FETCH_PLANETS_FAILURE, payload: { error }
});

export const fetchVehiclesRequestAction = () => ({
  type: actions.FETCH_VEHICLES_REQUEST
});
export const fetchVehiclesSuccessAction = (vehicles) => ({
  type: actions.FETCH_VEHICLES_SUCCESS, payload: { vehicles }
});
export const fetchVehiclesFailureAction = (error) => ({
  type: actions.FETCH_VEHICLES_FAILURE, payload: { error }
});

export const setSelectedPlanet = (destination, planet) => ({
  type: actions.SET_SELECTED_PLANET, payload: { destination, planet }
})

export const onChangeOfVehicle = (destinationName, vehicleName) => ({
  type: actions.SET_SELECTED_VEHICLE, payload: { destinationName, vehicleName }
})


