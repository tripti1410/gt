import {map} from "lodash";
import { getPlanets, getVehicles, getToken, findfalcone } from "./api";
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

export const findFalcone = () => async (dispatch, getState) => {
  const planets =  map(Object.values(getState().app.selectedPlanets), planet => planet.name)
  const vehicles =  Object.values(getState().app.selectedVehicles);
  try {
    const response = await getToken();
    const falconeResponse = await findfalcone({token: response.token,'planet_names': planets, 'vehicle_names': vehicles}); 
    if(falconeResponse.status) {
      dispatch(findFalconeSuccessFound(falconeResponse["planet_name"]))
    } else {
      dispatch(findFalconeSuccessNotFound())
    }
    
  } catch (e) {
    // dispatch(findFalconeFailure(e.error));
  }
}
