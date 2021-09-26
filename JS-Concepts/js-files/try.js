function sum(...params) {
  return params.reduce((acc, ele) => acc + ele, 0);
}

sum.prototype.newfn = function () {};

const product = (a, b, c) => a * b * c;

function genericCurry(callback) {
  let parameterArray = [];
  return function curry(...params) {
    if (params && params.length > 0) {
      parameterArray.push(...params);
      return function (...newParams) {
        parameterArray.push(...newParams);
        return curry(...parameterArray);
      };
    } else {
      const res = callback(...parameterArray);
      parameterArray = [];
      return res;
    }
  };
}

// const curriedSumOld = genericCurry(sum);
// const res1 = curriedSumOld(1, 2, 3);
// const res2 = curriedSumOld(1, 2, 3, 4)()()();
// const res3 = curriedSumOld(1)(2);
// console.log("res1 :>> ", res1);
// console.log("res2 :>> ", res2);
// console.log("res3 :>> ", res3);

const curry =
  (f, ...xs) =>
  (...ys) =>
    f.length > xs.length + ys.length ? curry(f, ...xs, ...ys) : f(...xs, ...ys);

const multiply = curry(product);

console.log(multiply(2, 3)(4)); // 24
console.log(multiply(2)(3, 4)); // 24
console.log(multiply(2)(3)(4)); // 24
console.log(multiply(2, 3, 4)); // 24
console.log(multiply()()()(2, 3, 4)); // 24
