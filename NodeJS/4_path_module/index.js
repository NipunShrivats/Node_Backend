// path module - used for working with file and directory path.

const path = require("path");
console.log("__filename:", __filename);
console.log("Directory name:", path.dirname(__filename));

console.log("File name:", path.basename(__filename));

const joinPath = path.join("/user", "documents", "node", "projects");
console.log(joinPath);

console.log(path.resolve("user", "documents", "node", "projects"));
