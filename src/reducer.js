import { differenceBy } from "lodash";

import INITIAL_STATE from "./state";
import * as actions from "./actions";

function findingFalcone(state = INITIAL_STATE, action) {
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
            [action.payload.destination]: action.payload.planet
          }
        },
        ui: {
          ...state.ui,
          uniquePlanets: differenceBy( [...state.allPlanets], [...Object.values(state.app.selectedPlanets), action.payload.planet], "name" )
        }
      };
    case actions.SET_SELECTED_VEHICLE:
      return {
        ...state,
        app: {
          ...state.app,
          selectedVehicles: {
            ...state.app.selectedVehicles,
            [action.payload.destinationName]: action.payload.vehicleName
          }
        }
      };
    default:
      return state;
      break;
  }
}

export default findingFalcone;
