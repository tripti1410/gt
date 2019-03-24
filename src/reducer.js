import INITIAL_STATE from "./state";

function findingFalcone (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "PLANETS_SUCCESS_ACTION":
      return {
        ...state,
        allPlanets: action.payload.planets
      }
      break;
    default:
      return state
      break;
  }
}

export default findingFalcone;