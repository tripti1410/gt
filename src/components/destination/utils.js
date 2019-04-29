export function isPotentialVehicle(selectedVehicles, vehicle, currentDestination, selectedPlanet) {
  if(selectedPlanet.distance > vehicle["max_distance"]) {
    return true;
  }
  const count = Object.values(selectedVehicles).filter(
    selectedVehicle => selectedVehicle === vehicle.name
  ).length
  if (selectedVehicles[currentDestination] === vehicle.name) {
    return false;
  } else if (count === vehicle["total_no"]) {
    return true;
  } else {
    return false;
  }
}