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