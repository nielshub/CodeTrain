class Person {
  constructor(name, age) {
    this.__name = name;
    this.age = age;
  }
  get namet() {
    return this.__name;
  }
  set namet(newName) {
    console.log(`You have change the name from ${this.__name} to ${newName}`);
    this.__name = newName;
  }

  get fullName() {
    return `${this.__name} Fernández`;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.namet} and I'm ${this.age} years old`);
  }
}

class Superhero extends Person {
  constructor(name, age, hero) {
    super(name, age);
    this.hero = hero;
  }
  breakThroughWall() {
    console.log(`${this.hero} just broke through a wall!`);
  }
}

let person = new Person("James", 27);
let mrIncredible = new Superhero("Bob", 52, "Mr. Incredible");

const getName = person => {
  console.log(`This person has name ${person.namet}`);
};


mrIncredible.namet = "Robert";
getName(mrIncredible);
console.log(mrIncredible);
console.log(mrIncredible.fullName);
mrIncredible.sayHi();
