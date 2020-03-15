class Person {
  constructor(name, age) {
    this.__name = name;
    this.age = age;
  }
  get name() { return this.__name; }
  set name(newName) { 
    console.log(`You have change the name from ${this.__name} to ${newName}`);
    this.__name = newName; 
  }

  get fullName() { return `${this.__name} Fernández`; }

  sayHi() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
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
let mrIncredible = new Superhero('Bob', 52, 'Mr. Incredible');

const getName = (person) => {
  console.log(`This person has name ${person.name}`);
}

getName(mrIncredible);
mrIncredible.name = 'Robert';
console.log(mrIncredible);
console.log(mrIncredible.fullName);