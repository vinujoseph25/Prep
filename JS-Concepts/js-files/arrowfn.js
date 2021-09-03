//https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
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

function regularFn1() {
  console.log(this);
}
const arrowFn = () => {
  console.log(this);
};
function regularFnConstructor(name) {
  this.name = name;
  console.log(this);
}
const arrowFnConstructor = (name) => {
  this.name = name;
  console.log(this);
};

person.regularFn(); //  person obj
person.arrowFn(); //  window
person.arrowFnInRegularFn([1]); //  person obj && person obj
regularFn1(); //  window
arrowFn(); //  window
regularFn1.call(person); //  person obj
regularFn1.apply(person); // person obj
arrowFn.call(person); //    window
arrowFn.apply(person); //   window
const regularFnObj = new regularFnConstructor("name"); //    instance of regularFn
const arrowFnObj = new arrowFnConstructor("name"); //    instance of regularFn
