// this has 4 scopes ->
//   the global context
//   as a method within an object
//   as a constructor on a function or class
//   as a DOM event handler

// "use strict";   ******this is undefined when used with strict mode****
// ***************************
console.log("this :>> ", this);
// ***************************
function printThis() {
  console.log(this);
}
printThis();
// ***************************
const bus = {
  name: "Volvo",
  printName: function () {
    console.log("car name :>> ", this.name);
  },
};
bus.printName();
// ***************************
function car(name) {
  this.name = name;
  this.printName = function () {
    console.log("car name :>> ", this.name);
  };
}
const punto = new car("Punto");
punto.printName();
// ***************************
class bike {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log("bike name :>> ", this.name);
  }
}

const r15 = new bike('r15');
r15.printName();
// ***************************
this.name = "Joseph";
const obj = {
  name: "Vinu",
  walk: function () {
    const self = this;
    console.log("walk 1 :>> ", self.name);
    console.log("walk 2 :>> ", this.name);
    (() => {
      console.log("walk 3 :>> ", self.name);
      console.log("walk 4 :>> ", this.name);
    })();
    (function () {
      console.log("walk 5 :>> ", self.name);
      console.log("walk 6 :>> ", this.name);
    })();
    (function () {
      console.log("walk 7 :>> ", self.name);
      console.log("walk 8 :>> ", this.name);
    }.bind(this)());
    const fn = function () {
      console.log("walk 9 :>> ", self.name);
      console.log("walk 10 :>> ", this.name);
    };
    const bfn = fn.bind(this);
    bfn();
  },
  talk: () => {
    const self = this;
    console.log("talk 1 :>> ", self.name);
    console.log("talk 2 :>> ", this.name);
    (() => {
      console.log("talk 3 :>> ", self.name);
      console.log("talk 4 :>> ", this.name);
    })();
    (function () {
      console.log("talk 5 :>> ", self.name);
      console.log("talk 6 :>> ", this.name);
    })();
    (function () {
      console.log("talk 7 :>> ", self.name);
      console.log("talk 8 :>> ", this.name);
    }.bind(this)());
    const fn = function () {
      console.log("talk 9 :>> ", self.name);
      console.log("talk 10 :>> ", this.name);
    };
    const bfn = fn.bind(this);
    bfn();
  },
};

obj.walk();
console.log("***** :>> ");
obj.talk();
