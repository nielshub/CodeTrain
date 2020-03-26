const fetch = require("node-fetch");

class StarWarsPerson {
  constructor(name, mass, url, gender, birthYear) {
    this.name = name;
    this.mass = mass;
    this.url = url;
    this.gender = gender;
    this.birthYear = birthYear;
  }

  static fromJSON(json) {
    const { name, mass: weight, url, gender, birth_year: birthYear } = json;
    return new StarWarsPerson(name, weight, url, gender, birthYear);
  }
}

fetch("https://swapi.co/api/people/")
  .then(response => response.json())
  .then(json => {
    console.log(json.results.map(StarWarsPerson.fromJSON));
  });
