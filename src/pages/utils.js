import { differenceBy } from "lodash";

function calculateTravelTime(distance, speed) {
  return distance / speed;
}

export function getTotalTimeTravelled(
  existingTime,
  selectedPlanet,
  selectedVehicle
) {
  return (
    existingTime +
    calculateTravelTime(selectedPlanet.distance, selectedVehicle.speed)
  );
}

export function getUniquePlanets(allPlanets, selectedPlanets) {
  return differenceBy(allPlanets, selectedPlanets, "name");
}
