var x = 100;
let y = 100;
function hoist() {
  if (false) {
    var x = 200;
    let y = 200;
  }
  console.log(x);
  console.log(y);
}

hoist();
console.log(x);
console.log(y);
// console.log(z);
const z = 100;
console.log(typeof z);

greeting();
var greeting = function () {
  // fn expression
  console.log("fn expression");
};
greeting();
function greeting() {
  // fn declartion
  console.log("fn declartion");
}
greeting();
(function greeting() {
  console.log("IIFE");
})();
greeting();
!(function () {
  console.log("Code runs!");
})();
(function () {
  console.log("Code runs!");
})();

function Person() {
  this.name = "my name is khan";
}
var person1 = Person();
var person2 = new Person();
