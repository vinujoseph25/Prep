function factorial(n) {
  return new Promise((resolve, reject) => {
    if (n === 0 || n < 0) {
      return resolve(1);
    } else {
      factorial(n - 1).then((previousValue) => resolve(previousValue * n));
    }
  });
}

factorial(15).then((value) => {
  console.log("factorial(15) ****:>> ", value);
});

let ar = [];
function fact(n) {
  if (n === 0 || n < 0) return 1;
  else {
    if (!ar[n]) ar[n] = n * fact(n - 1);
    return ar[n];
  }
}

console.log("factorial(15) :>> ", fact(15));

async function getTen() {
  return 10;
}

(async () => {
  let ten = await getTen();
  console.log(ten);
})();
