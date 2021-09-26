// const Proto = function (name) {
//   this.name = name;
//   this.getName = function () {
//     return this.name;
//   };
// };
const Proto = function (name) {
  this.name = name;
};
Proto.prototype.getName = function () {
  return this.name;
};

const proto1 = new Proto("vinu");
const proto2 = new Proto("anjana");
console.log("proto1.getName() :>> ", proto1.getName());
console.log("proto2.getName() :>> ", proto2.getName());

const ar = [1, 2];
const obj = {
  name: "vinu",
  age: 29,
};
const fn = function () {};
// console.log("this",obj.length());
Object.prototype.getLength = function () {
  return Object.keys(this).length;
};
Object.prototype.length = Object.keys(this).length;
console.log("this", obj.getLength());
console.log("this", obj.length);

Function.prototype.myBind = function (context) {
  fn = this;
  return function () {
    fn.apply(context, [...arguments]);
  };
};

function Person(name) {
  this.name = name;
  this.age = 30;
}
Person.prototype.getName = function () {
  return this.name;
};
const vinu = new Person("vinu");
vinu.getAge = function () {
  return this.age;
};
console.log("vinu.getName() :>> ", vinu.getName());
console.log("vinu.getAge() :>> ", vinu.getAge());

for (const key in Person.prototype) {
  if (Object.hasOwnProperty.call(Person.prototype, key)) {
    const element = Person.prototype[key];
    console.log("element :>> ", element);
  }
}

for (const key in vinu) {
  if (Object.hasOwnProperty.call(vinu, key)) {
    const element = vinu[key];
    console.log("element :>> ", element);
  }
}