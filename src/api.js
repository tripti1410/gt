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
};

export const getToken = () => {
  return wretch()
    .url("https://findfalcone.herokuapp.com/token")
    .headers({accept: 'application/json'})
    .post()
    .json()
    .catch()
};

export const findfalcone = (request) => {
  return wretch()
    .url('https://findfalcone.herokuapp.com/find')
    .headers({accept: 'application/json', 'content-type': 'application/json'})
    .post(request)
    .json()
    .catch()
}