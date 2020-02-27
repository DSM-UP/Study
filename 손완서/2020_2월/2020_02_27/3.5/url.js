const url = require("url");

const URL = url.URL;
const myURL = new URL();
console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL));
console.log("-----------------");
const parsedUrl = url.parse();
console.log("url.parse():", parsedUrl);
console.log("url.format():", url.format(parsedUrl));
