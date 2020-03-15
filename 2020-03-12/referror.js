
function showA() {
  console.log(a);
}

function recur() {
  recur();
}

try {
  showA();
  recur();
} catch (e) {
  switch (e.constructor) {
    case RangeError:
      console.log("Vaya ceporro que eres!");
      break;
    default:
      console.log("Se ha producido otro tipo de error");
  }
}

console.log("fin");
