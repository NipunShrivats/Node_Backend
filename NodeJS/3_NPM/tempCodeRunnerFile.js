const lodash = require("lodash");
const names = ["sangam", "john", "nipun", "superman", "batman"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
