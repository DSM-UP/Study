const url = require("url");
const querystring = require("querystring");

const parsedUrl = url.parse();
const query = qeurystring.parse(parsedUrl.query);
console.log("querystring.parse():", query);
console.log("querystring.stringify():", querystring.stringify(query));
