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
