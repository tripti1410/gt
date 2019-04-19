import { getPlanets, getVehicles } from "./api";
import {
  fetchPlanetsRequestAction,
  fetchPlanetsSuccessAction,
  fetchPlanetsFailureAction,
  fetchVehiclesFailureAction,
  fetchVehiclesSuccessAction,
  fetchVehiclesRequestAction
} from "./action-creators";

export const listAllPlanets = () => async (dispatch) => {
  dispatch(fetchPlanetsRequestAction());
  try {
    const planets = await getPlanets();
    dispatch(fetchPlanetsSuccessAction(planets));
  } catch (error) {
    dispatch(fetchPlanetsFailureAction(error));
  }
};

export const listAllVehicles = () => async (dispatch) => {
  dispatch(fetchVehiclesRequestAction());
  try {
    const vehicles = await getVehicles();
    dispatch(fetchVehiclesSuccessAction(vehicles));
  } catch (error) {
    dispatch(fetchVehiclesFailureAction(error));
  }
};
