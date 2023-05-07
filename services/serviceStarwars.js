let roots = {
  films: "https://swapi.dev/api/films/",
  people: "https://swapi.dev/api/people/",
  planets: "https://swapi.dev/api/planets/",
  species: "https://swapi.dev/api/species/",
  starships: "https://swapi.dev/api/starships/",
  vehicles: "https://swapi.dev/api/vehicles/",
};

const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getFilms = () => {
  return fetchData(roots.films);
};

export const getPeople = async () => {
  return fetchData(roots.people);
};

export const getPlanets = async () => {
  return fetchData(roots.planets);
};

export const getSpecies = async () => {
  return fetchData(roots.species);
};

export const getStarships = async () => {
  return fetchData(roots.starships);
};

export const getVehicles = async () => {
  return fetchData(roots.vehicles);
};
