/*var foo = {
    name : "foo",
    age: 35,
    gender:'man',
};
console.dir(foo);

function Person(name,age,gender,position){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var bar = new Person('bar',33,'women');
console.dir(bar);

var bar2 = new Person('baz',26,'man');
console.dir(bar2);*/
/*
function Person(name,age,gender,position){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var qux = Person('qux',20,'man');
console.log(qux);
console.log(window.age);
console.log(window.gender);
console.log(window.name);*/
/*
function myFunction(){
    console.dir(arguments);

    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);
}
myFunction(1,2,3);
*/
/*
var arrA = [1,2,3];
var arrB = arrA.slice(0);
var arrC = arrA.slice();
var arrD = arrA.slice(1);
var arrE = arrA.slice(1,2);

console.log(arrA);
console.log(arrB);
console.log(arrC);
console.log(arrD);
console.log(arrE);*/

function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var foo = new Person ('foo',30,'man');
console.dir(foo);