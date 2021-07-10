"use strict";   
var g = 10;
const person = {
  age: 19,
  regularFn() {
    console.log(this);
  },
  arrowFn: () => {
    console.log(this);
  },
  arrowFnInRegularFn(items) {
    console.log(this);
    const callback = () => {
      console.log(this);
    };
    items.forEach(callback);
  },
};

function regularFn1(msg) {
  console.log("age:", this.age, msg);
}
function regularFn2(msg1, msg2) {
  console.log("age:", this.age, msg1, msg2);
}
function regularFn3() {
  console.log(this.age);
}

regularFn1.call(person, "old");
regularFn2.apply(person, ["old", "young"]);
const regularFn4 = regularFn3.bind(this);
const regularFn5 = regularFn3.bind(person);
regularFn4();
regularFn5();
console.log(this.g);
// delete this.g;
console.log(this.g);
