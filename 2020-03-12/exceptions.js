function fea(x) {
  x.metodoQueNoExiste();
}

function bonita() {
  fea(7);
}

try {
  bonita();
} catch (e) {
  console.log(
    `Ha habido un error de tipo ${e.name} y el mensaje es "${e.message}"`
  );
}

console.log("He llegado aquí");
