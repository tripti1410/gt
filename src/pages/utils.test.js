import { getUniquePlanets, getTotalTimeTravelled } from "./utils";

const planets = [
  { name: "Planet A", distance: 200 },
  { name: "Planet B", distance: 500 },
  { name: "Planet C", distance: 700 },
  { name: "Planet D", distance: 400 }
];

const selectedPlanets = ["Planet A"];

const testCase0 = [
  planets,
  [{ name: "Planet A", distance: 200 }],
  [
    { name: "Planet B", distance: 500 },
    { name: "Planet C", distance: 700 },
    { name: "Planet D", distance: 400 }
  ]
];

const testCase1 = [
  planets,
  [{ name: "Planet A", distance: 200 }, { name: "Planet B", distance: 500 }, { name: "Planet D", distance: 400 }],
  [{ name: "Planet C", distance: 700 }]
];

describe("getUniquePlanets", () => {
  test.each([testCase0, testCase1])(
    "Should return unique planet: test case(%#)",
    (planets, selectedPlanets, expected) => {
      expect(getUniquePlanets(planets, selectedPlanets)).toEqual(expected);
    }
  );
});

const testCase2 = [
  20,
  { name: "Planet A", distance: 200 },
  { name: 'Vehicle A', speed: 2, 'max_distance': 300},
  120
]

const testCase3 = [
  0,
  { name: "Planet A", distance: 200 },
  { name: 'Vehicle A', speed: 2, 'max_distance': 300},
  100
]


describe("getTotalTimeTravelled", () => {
  test.each([testCase2, testCase3])('Should give total time: test case (%#)', (existingTime, selectedPlanet, selectedVehicle, expected) => {
    expect(getTotalTimeTravelled(existingTime, selectedPlanet, selectedVehicle)).toEqual(expected)
  })
})
