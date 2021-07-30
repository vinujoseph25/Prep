var foo = (function bar() {
  alert("hello");
  return bar;
})();

function myFunction() {
  foo();
}

for (var i = 0; i < 3; i++) {
  // or replace var with let, as it has block scope->output:0,1,2
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 0);
  })(i);
}
console.log("after the loop");

var output = (function (x) {
    delete x;
    return x;
})(0);

console.log(output);
