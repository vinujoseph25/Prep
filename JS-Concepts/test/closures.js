const value3 = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    console.log("1");
    return res.json();
  })
  .then((res) => {
    console.log("2");
    return res;
  })
  .then((res) => {
    console.log("3");
    return res;
  })
  .catch((res) => {
    console.log("4");
  });

//Closure
var outerAdd = function (outerParam) {
  var innerAdd = function (innerParam) {
    return outerParam + innerParam;
  };
  return innerAdd;
};

var add10 = new outerAdd(10);
var add20 = new outerAdd(20);

console.log("Add 10 : " + add10(5));
console.log("Add 20 : " + add20(5));
