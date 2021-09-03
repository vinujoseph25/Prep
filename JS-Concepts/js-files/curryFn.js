function multiply(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

//Currying
function volume(w) {
  return function(h) {
    return function(l) {
      return w * h* l;
    }
  }
}

volume(4)(6)(3); // 72


function myFunction() {
  const value1 = multiply(1)(2)(3);
//   const multiply1 = multiply(1);
//   const multiply2 = multiply1(2);
//   const value2 = multiply2(3);
  console.log("value 1 >>", value1);
//   console.log("value 2 >>", value2);
}
