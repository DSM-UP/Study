const before = { d: new Date() };
before.d instanceof Date; // true
const json = JSON.stringify(before);
const after = JSON.parse(json);
after.d instanceof Date; // false
typeof after.d; // "string"

after.d = new Date(after.d);
after.d instanceof Date; // true

const before = { d: new Date().valueOf() };
typeof before.d;
const json = JSON.stringify(before);
const after = JSON.parse(json);
typeof after.d; // "number"
const d = new Date(after.d);
