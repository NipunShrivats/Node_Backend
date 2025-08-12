const firstModule = require("./first-module");

console.log(firstModule.add(22, 33));
console.log(firstModule.sub(22, 33));
console.log(firstModule.div(80, 4));
// console.log(firstModule.div(22, 0));

try {
  console.log("trying to divide by zero");
  let result = firstModule.div(22, 0);
  console.log(result);
} catch (error) {
  console.log("caught an error");
}
