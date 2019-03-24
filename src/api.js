import wretch from "wretch";

export const getPlanets = () => {
  return wretch()
    .url("https://findfalcone.herokuapp.com/planets")
    .get()
    .json()
    .catch();
};

export const getVehicles = () => {
  return wretch()
    .url("https://findfalcone.herokuapp.com/vehicles")
    .get()
    .json()
    .catch();
}