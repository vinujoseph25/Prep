function sum(...arg) {
  return arg.reduce((acc, element) => acc + element, 0);
}

function multiply(...arg) {
  return arg.reduce((acc, element) => acc * element, 1);
}

function curry(callback) {
  const paramsArray = [];
  return function recursiveFunction(...params) {
    if (params && params.length > 0) {
      paramsArray.push(...params);
      return recursiveFunction;
    } else {
      return callback(...paramsArray);
    }
  };
}

function logging(date, type, message) {
  console.log(`--${date},${type},${message}--`);
}

function curriedLogging(callback) {
  return function (a) {
    return function (b) {
      return function (c) {
        return callback(a, b, c);
      };
    };
  };
}
const logNow = curriedLogging(logging)(new Date());
const logError = logNow("error");
const logWarning = logNow("warning");
const logInfo = logNow("info");

function onclickFn() {
  const curriedSum = curry(sum);
  const result = curriedSum(1, 2, 3)(4)(5, 6)();
  console.log("result :>> ", result);
  // logInfo('test message')
}
