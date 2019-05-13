import INITIAL_STATE from "./state";
import * as actions from "./actions";
import { getTotalTimeTravelled, getUniquePlanets } from "./pages/utils";

function findingFalconeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        allPlanets: action.payload.planets,
        ui: {
          ...state.ui,
          uniquePlanets: action.payload.planets
        }
      };
      break;
    case actions.FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        allVehicles: action.payload.vehicles
      };
      break;
    case actions.SET_SELECTED_PLANET:
      return {
        ...state,
        app: {
          ...state.app,
          selectedPlanets: {
            ...state.app.selectedPlanets,
            [action.payload.destinationName]: action.payload.planet
          }
        },
        ui: {
          ...state.ui,
          uniquePlanets: getUniquePlanets(state.allPlanets, [
            ...Object.values(state.app.selectedPlanets),
            action.payload.planet
          ])
        }
      };
    case actions.SET_SELECTED_VEHICLE:
      return {
        ...state,
        app: {
          ...state.app,
          selectedVehicles: {
            ...state.app.selectedVehicles,
            [action.payload.destinationName]: action.payload.vehicle.name
          }
        },
        ui: {
          ...state.ui,
          totalTimeTravelled: getTotalTimeTravelled(
            state.ui.totalTimeTravelled,
            state.app.selectedPlanets[action.payload.destinationName],
            action.payload.vehicle
          )
        }
      };
    case actions.FIND_FALCONE_SUCCESS_FOUND:
      return {
        ...state,
        ui: {
          ...state.ui,
          successDestination: action.payload.planet
        }
      }
    default:
      return state;
      break;
  }
}

export default findingFalconeReducer;
