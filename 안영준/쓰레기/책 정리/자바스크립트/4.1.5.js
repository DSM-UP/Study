/*console.log(add(1,2));

function add(x,y){
    return x+y;
}
//console.log(add(3,4));
var add= function(x,y){
    return x+y;
};*/
//console.log(add(3,4));
/*
function add(x,y){
    return x+y;
}

add.result = add(3,2)
add.status = 'Ok';

console.log(add.result);
console.log(add.status);
//console.log(add.code);\*/
/*
var foo = 100;
var bar = function(){
    return 100;
};

console.log(bar());

var obj = {};
obj.baz = function(){return 200;};
console.log(obj.baz());
*/
/*
var foo = function(func){
    func();
}
*/
/*
var foo = function(){
    return function(){
        console.log('Function can be used as the argument')
    };
};/*
foo(function(){
    console.log('Function can be used as the argument')
});

var bar =foo();
bar();
*/

function add(x,y)
{
    return x+y;
}
console.dir(add);