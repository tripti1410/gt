import findingFalconeReducer from "./reducer";
import INITIAL_STATE from "./state";
import * as actions from "./actions";

const sampleAllPlanets = [
  { name: "Planet A", distance: 200 },
  { name: "Planet B", distance: 500 },
  { name: "Planet C", distance: 700 },
  { name: "Planet D", distance: 400 }
];

const sampleVehicles = [
  {name: "Vehicle A", "max_distance": 300, speed: 2},
  {name: "Vehicle B", "max_distance": 300, speed: 3},
  {name: "Vehicle C", "max_distance": 300, speed: 4},
]

const selectedPlanets = {'destination-1': {name: 'Planet A', distance: 200} }

describe("find falcone reducer tests", () => {
  test("Should set planets, when FETCH_PLANETS_SUCCESS action called", () => {
    const state = findingFalconeReducer(INITIAL_STATE, {
      type: actions.FETCH_PLANETS_SUCCESS,
      payload: { planets: sampleAllPlanets }
    });

    expect(state.allPlanets).toEqual(sampleAllPlanets);
    expect(state.ui.uniquePlanets).toEqual(sampleAllPlanets);
  });

  test("Should set vehicles, when FETCH_VEHICLES_SUCCESS action called", () => {
    const state = findingFalconeReducer(INITIAL_STATE, {
      type: actions.FETCH_VEHICLES_SUCCESS,
      payload: { vehicles: sampleVehicles }
    });
    expect(state.allVehicles).toEqual(sampleVehicles);
  });

  test("Should set selected planet, when SET_SELECTED_PLANET action called", () => {
    const state = findingFalconeReducer(INITIAL_STATE, {
      type: actions.SET_SELECTED_PLANET,
      payload: { destinationName: 'destination-1', planet: {name: 'Planet A', distance: 200} }
    });
    expect(state.app.selectedPlanets).toEqual(selectedPlanets);
  });

  test("Should set selected vehicle, when SET_SELECTED_VEHICLE action called", () => {
    const newState = {...INITIAL_STATE, app: { ...INITIAL_STATE.app, selectedPlanets}  }
    const state = findingFalconeReducer(newState, {
      type: actions.SET_SELECTED_VEHICLE,
      payload: { destinationName: 'destination-1', vehicle: {name: 'Vehicle A', speed: 2} }
    });
    expect(state.app.selectedVehicles).toEqual({'destination-1': 'Vehicle A'});
  });
});
