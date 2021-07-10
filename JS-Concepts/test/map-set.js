let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

console.log(map);
map.keys();
const unique = new Set(["anu", "teenu", "vinu", "vinu"]);
console.log(unique);
// for (let value of unique) alert(value);
unique.forEach((element) => {
  console.log(element);
});
unique.map((element) => {
  console.log(element);
});
