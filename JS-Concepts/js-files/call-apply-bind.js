"use strict";     //when strict used, the global object this is not available in a function () without explicit context
function printThis() {
  console.log(this);
}

printThis();
this.g = 10;
this.age = 10;
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

const a = {
  age: 10,
};
const b = {
  age: 15,
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
regularFn1("old");
regularFn2.apply(person, ["old", "young"]);
const regularFn4 = regularFn3.bind(this);
const regularFn5 = regularFn3.bind(person);
regularFn4();
regularFn5();
console.log(this.g);
delete this.g;
console.log(this.g);


const bindedRegularFn = regularFn3.bind(a);
bindedRegularFn();
const bindedRegularFn2 = bindedRegularFn.bind(b);  // bindedRegularFn will have only the obj a binded
bindedRegularFn2();