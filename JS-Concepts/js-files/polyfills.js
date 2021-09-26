const ar = [1, 2, 3, 4, 5];

// Polyfill for forEach
Array.prototype.myForEach = function (callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

ar.myForEach((a, i) => {
  console.log("a :>> ", a, i);
});

// Polyfill for map
Array.prototype.myMap = function (callback) {
  let alteredAr = [];
  for (i = 0; i < this.length; i++) {
    const returnValue = callback(this[i], i);
    alteredAr.push(returnValue);
  }
  return alteredAr;
};

const newAr = ar.myMap((a, i) => {
  return a * 2;
});
console.log("newAr :>> ", newAr);

Array.prototype.multiply = function () {
  const multipliedArray = this.map((ele) => ele * ele);
  const length = this.length;
  multipliedArray.forEach((ele, index) => {
    this[length + index] = ele;
  });
  return this.length;
};

const a = [1, 2, 3, 4, 5, 6];
// Implement this
console.log("a.multiply() :>> ", a.multiply());
console.log(a); // [1, 2, 3, 4, 5, 1, 4, 9, 16,      25]
console.log("0.2 + 0.1 === 0.3 :>> ", 0.1 + 0.1);
console.log("0.2 + 0.1 === 0.3 :>> ", 0.2 + 0.1 === 0.3);
