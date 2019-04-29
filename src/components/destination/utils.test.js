import { isPotentialVehicle } from "./utils";

const testCase0 = [
  "When planets distance is less than vehicle's max_distance",
  {},
  { name: "vehicle B", max_distance: 600, speed: 10, total_no: 1 },
  "destination-1",
  { name: "Planet A", distance: 300 },
  false
];

const testCase1 = [
  "When planets distance is more than vehicle's max_distance",
  {},
  { name: "vehicle D", max_distance: 200, speed: 2, total_no: 1 },
  "destination-1",
  { name: "Planet A", distance: 300 },
  true
];

describe("isPotentialVehicle: Should check if vehicle from a list of vehicles can go to the selected planet", () => {
  test.each([testCase0, testCase1])(
    `(%s)`,
    (
      title,
      selectedVehicles,
      vehicle,
      currentDestination,
      selectedPlanet,
      expected
    ) => {
      expect(
        isPotentialVehicle(
          selectedVehicles,
          vehicle,
          currentDestination,
          selectedPlanet
        )
      ).toEqual(expected);
    }
  );
});

const testCase3 = [
  "When current vehicle is same as selected vehicle for same destination",
  { "destination-1": "vehicle B" },
  { name: "vehicle B", max_distance: 600, speed: 10, total_no: 1 },
  "destination-1",
  { name: "Planet A", distance: 300 },
  false
];

const testCase4 = [
  "When current vehicle is same as selected vehicle for same destination, Also selected for other destination as well",
  { "destination-1": "vehicle B", "destination-2": "vehicle B" },
  { name: "vehicle B", max_distance: 600, speed: 10, total_no: 1 },
  "destination-2",
  { name: "Planet A", distance: 300 },
  false
];

const testCase5 = [
  "When current vehicle is not same as selected vehicle for same destination",
  { "destination-1": "vehicle B", "destination-2": "vehicle C" },
  { name: "vehicle B", max_distance: 600, speed: 10, total_no: 1 },
  "destination-2",
  { name: "Planet A", distance: 300 },
  true
];

const testCase6 = [
  "When current vehicle is same as selected vehicle for same destination, Also selected for other destination as well. But total no. is more than 1",
  { "destination-1": "vehicle B", "destination-2": "vehicle B" },
  { name: "vehicle B", max_distance: 600, speed: 10, total_no: 2 },
  "destination-2",
  { name: "Planet A", distance: 300 },
  false
];

describe("isPotentialVehicle: Should check if vehicle is available to go to planet", () => {
  test.each([testCase3, testCase4, testCase5, testCase6])(
    `(%s)`,
    (
      title,
      selectedVehicles,
      vehicle,
      currentDestination,
      selectedPlanet,
      expected
    ) => {
      expect(
        isPotentialVehicle(
          selectedVehicles,
          vehicle,
          currentDestination,
          selectedPlanet
        )
      ).toEqual(expected);
    }
  );
});
