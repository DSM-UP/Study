const obj = {};

obj.color = "yellow";

obj["not an identifier"] = 3;
obj["not an identifier"]; // 3
obj["color"]; // yellow

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE]; // 8
