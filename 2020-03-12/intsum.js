
class NotIntegerError extends Error {
  constructor(value) {
    super(`The value '${value}' (of type ${typeof value}) is *not* an integer.`);
    this.name = "NotIntegerError";
  }
}

function sumaEnteros(a, b) {
  if (a.constructor !== Number) {
    throw new NotIntegerError(a);
  }
  if (b.constructor !== Number) {
    throw new NotIntegerError(b);
  }
  return a + b;
}

try {
  console.log('hola');
  a();
  console.log(sumaEnteros('a', 'b'));
  
} catch (e) {
  switch (e.constructor) {
    case NotIntegerError:
      console.log("Ha petao, no sé");
      break;
    default:
      console.log("También ha petao");
  }
}
