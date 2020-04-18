function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
  console.log(this.petalCount);
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
  setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
  console.log("I am a beautiful flower with " + this.petalCount + " petals!");
};

const window = new LateBloomer();

window.declare();
window.bloom();


