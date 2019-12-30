/*var foo = function(){
    return function(){
        console.log('avcd')
    };
};
var bar = foo();
bar();*/
/*
function myFunction(){
return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);
*/
/*
function parent(){
    var a= 100;
    var child = function(){
        console.log(a);
    }
    return chield;
    /*
    //var b =200;
function child(){
    console.log(a);
    console.log(b);
}*/
/*}
var inner = parent();
inner();
//parent();
//child();
*/
/*
var salf = function(){
    console.log('a');
    return function(){
        console.log('b');
    }
}
self = self();
self();
*/
/*
function func(arg1, arg2);{
    console.log(arg1,arg2);
}
func();
func(1);
func(1,2);
func(1,2,3);
*/
/*
function add(a,b){
    console.dir(anguments);
    return a+b;
}
console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));

function sum(){
    for(var i=0;i=arguments.length;i++){
        result += arguments[i];
    }
    return result;
}
console.log(sum(1,2,3));
*/

var myObject = {
    name = 'foo',
    sayName: function(){
        console.log(this.name);
    }
};

var otherObject = {
    name = 'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();
