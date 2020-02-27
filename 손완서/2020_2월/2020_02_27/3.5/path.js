const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep);
console.log("path.delimiter:", path.delimiter);
console.log("---------------------------");
console.log("path.dirname():", path.dirname(string));
console.log("path.extname():", path.extname(string));
console.log("path.basename():", path.basename(string));
console.log("path.basename():", path.basename(string, path.extname(string)));
console.log("--------------------------");
console.log("path.parse()", path.parse(string));
console.log("path.format():", path.format());
console.log("path.normalize():", path.normalize());
console.log("--------------------------");
console.log("path.isAbsolute():", path.isAbsolute());
console.log("path.isAbsolute():", path.isAbsolute());
console.log("---------------------------");
console.log("path.relative():", path.relative());
console.log("path.join():", path.join());
console.log("path.resolve():", path.resolve());
