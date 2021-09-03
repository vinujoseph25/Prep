var x = 100;
let y = 100;
function hoist() {
  if (false) {
    var x = 200;
    let y = 200;
  }
  console.log(x);
  console.log(y);
}

hoist();
console.log(x);
console.log(y);
// console.log(z);
console.log(typeof z );
const z=100;