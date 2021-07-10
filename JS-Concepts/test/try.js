const person = {
  age: 19,
  walk: function () {
    console.log(this);
  },
  talk: () => {
    const age = person.age;  
    console.log(this);
  },
};
console.log(person.age);
person.walk();
person.talk();
