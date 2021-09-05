function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function square(a) {
  return a * a;
}

function memorize(callback) {
  const cache = {};
  return function (...arg) {
    const key = arg.toString();
    if (!(key in cache)) {
      cache[key] = callback(...arg);
    } else {
      console.log("from cache..");
    }
    return cache[key];
  };
}

function once(callback) {
  const functionCache = {};
  return function (...arg) {
    const key = callback.name;
    if (!(key in functionCache)) {
      functionCache[key] = callback(...arg);
    } else {
      console.log("from cache..");
    }
    return functionCache[key];
  };
}
const memorizedSquare = memorize(square);
const memorizedAdd = memorize(add);
const onceSquare = once(square);
function onclickFn() {
  //   const randomNumber = Math.floor(Math.random() * 1000000000000000);

  console.log("memorizedSquare(5) :>> ", memorizedSquare(5));
  console.log("memorizedSquare(5) :>> ", memorizedSquare(5));
  console.log("memorizedAdd(5, 1) :>> ", memorizedAdd(5, 1));
  console.log("memorizedAdd(5, 2) :>> ", memorizedAdd(5, 2));
  console.log("memorizedAdd(5, 2) :>> ", memorizedAdd(5, 2));

  console.log("onceSquare(2) :>> ", onceSquare(2));
  console.log("onceSquare(3) :>> ", onceSquare(3));
  console.log("onceSquare(4) :>> ", onceSquare(4));
}
