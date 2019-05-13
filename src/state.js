const INITIAL_STATE = {
  allVehicles: [],
  allPlanets: [],
  destinations: [
    {
      name: "Destination 1",
      value: "destination-1"
    },
    {
      name: "Destination 2",
      value: "destination-2"
    },
    {
      name: "Destination 3",
      value: "destination-3"
    },
    {
      name: "Destination 4",
      value: "destination-4"
    }
  ],
  app: {
    selectedPlanets: {},
    selectedVehicles: {}
  },
  ui: {
    uniquePlanets: [],
    totalTimeTravelled: 0,
    successDestination: ''
  }
};

export default INITIAL_STATE;
