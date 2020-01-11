let name = "Irena"; // 전역
let age = 25; // 전역

function greet() {
  console.log(`Hello, ${name}!`);
}
function getBirthYear() {
  return new Date().getFullYear() - age;
}

let user = {
    name = "Irena",
    age = 25,
}
function greet() {
    console.log(`Hello, ${user.name}!`);
}
function getBirthYear() {
    return new Date().getFullYear() - user.age;
}

function greet(user) {
    console.log(`Hello, ${user.name}!`);
}
function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}