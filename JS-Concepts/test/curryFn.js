function multiply(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}


function myFunction() {
  const value1 = multiply(1)(2)(3);
//   const multiply1 = multiply(1);
//   const multiply2 = multiply1(2);
//   const value2 = multiply2(3);
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
  console.log("value 1 >>", value1);
//   console.log("value 2 >>", value2);
  console.log("value 3 >>", value3);
}
