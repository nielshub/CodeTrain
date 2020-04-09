function add(a, b) {
  return a + b;
}

async function addasync(a, b) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(a + b), 3000);
  });

  let result = await promise;

  console.log(result);
  return result;
}

function squareRoot(x) {
  if (x >= 0) {
    return Math.sqrt(x);
  } else {
    return { error: "'x' must be positive" };
  }
}

async function squareRootasync(x) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x >= 0) {
        resolve(Math.sqrt(x));
      } else {
        reject("'x' must be positive");
      }
    }, 1000);
  });
  try {
    let result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

squareRootasync(25);
squareRootasync(-1);
