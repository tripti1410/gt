import INITIAL_STATE from "./state";
import * as actions from "./actions";

function findingFalcone(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        allPlanets: action.payload.planets
      };
      break;
    case actions.FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        allVehicles: action.payload.vehicles
      };
      break;
    default:
      return state;
      break;
  }
}

export default findingFalcone;
