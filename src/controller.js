import {
  getFilms,
  getPeople,
  getSpecies,
  getStarships,
  getVehicles,
  getPlanets,
} from "../services/serviceStarwars.js";


let films = document.querySelector("#films");
let characters = document.querySelector("#characters");
let species = document.querySelector("#species");
let planets = document.querySelector("#planets");
let starships = document.querySelector("#starships");
let vehicles = document.querySelector("#vehicles");


getPeople().then((data) => {
  data.results.map((people) => {
    characters.innerHTML += 

        `
        <section class="card">
          <section class="front">
            <img src="../assets/img/AttackOfTheClones.svg">
         </section>
    
            <section class="back">
                <h1> <span>Name: </span>${people.name}</h1>
                <p> <span>Hair color: </span> ${people.hair_color}</p>
                <p> <span>Skin color: </span> ${people.skin_color}</p>
                <p> <span>Eye color: </span>  ${people.eye_color}</p>
                <p> <span>Birth year: </span> ${people.birth_year}</p>
            </section>
        </section>
        `;
  });
});

getSpecies().then((data) => {
  data.results.map((specie) => {
    species.innerHTML += 

    `
    <section class="card">
      <section class="front">
      <img src="../assets/img/ReturnOfTheJedi.svg">
        
     </section>

        <section class="back">
        <h1> <span>Name: </span>${specie.name}</h1>
        <p> <span>Classification: </span> ${specie.classification}</p>
        <p> <span>Designation: </span> ${specie.designation}</p>
        <p> <span>language: </span>  ${specie.language}</p>
        <p> <span>Average lifespan: </span> ${specie.average_lifespan}</p>
        </section>
    </section>
    `;
  });
});

getPlanets().then((data) => {
  data.results.map((planet) => {
    planets.innerHTML += 

    `
    <section class="card">
      <section class="front">
      <img src="../assets/img/AttackOfTheClones (1).svg">
     </section>

        <section class="back">
        <h1> <span>Name: </span>${planet.name}</h1>
        <p> <span>Diameter: </span>${planet.diameter}</p>
        <p> <span>Climate: </span>${planet.climate}</p>
        <p> <span>Gravity: </span>${planet.gravity}</p>
        <p> <span>Terrain: </span>${planet.terrain}</p>
        </section>
    </section>
    `;
  });
});


getStarships().then((data) => {
  data.results.map((ship) => {
    starships.innerHTML += 

    `
    <section class="card">
      <section class="front">
        <img src="../assets/img/ThePhantomMenace.svg">
     </section>

        <section class="back">
        <h1> <span>Name: </span>${ship.name}</h1>
        <p> <span>Model: </span>${ship.model}</p>
        <p> <span>Starship class: </span>${ship.starship_class}</p>
        <p> <span>Passengers: </span>${ship.passengers}</p>
        <p> <span>Crew: </span>${ship.crew}</p>
        </section>
    </section>
    `;
  });
});


getVehicles().then((data) => {
  data.results.map((vehicle) => {
    vehicles.innerHTML += 

    `
    <section class="card">
      <section class="front">
        <img src="../assets/img/RevengeoftheSith.svg">
     </section>

        <section class="back">
        <h1> <span>Name: </span>${vehicle.name}</h1>
        <p> <span>Model: </span>${vehicle.model}</p>
        <p> <span>Length: </span>${vehicle.length}</p>
        <p> <span>Passengers: </span>${vehicle.passengers}</p>
        <p> <span>Crew: </span>${vehicle.crew}</p>
        </section>
    </section>
    `;
  });
});

getFilms().then((data) => {
  data.results.map((film) => {
    films.innerHTML += 

        `
        <section class="card">
            <section class="front">
                <img src="../assets/img/ThePhantomMenace (1).svg" alt="">
            </section>
            <section class="back">
            <h1> <span>Title: </span>${film.title}</h1>
            <p> <span>Director: </span>${film.director}</p>
            <p> <span>Release date: </span>${film.release_date}</p>
            <p> <span>Episode id: </span>${film.episode_id}</p>
            </section>
        </section>
        `;
  });
});

