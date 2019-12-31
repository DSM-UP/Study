/*function parent (){
    var a= 100;
    var b = 200;

    function child(){
        var b= 300;
        console.log(a);
        console.log(b);

    }
    child();
}
parent();
child();
*/
/*
function parent(){
    var a= 100;
    var chield = function(){
        console.log(a);
    }
    return chield;
}
var inner */
/*
var self = function(){
    console.log('a');
    return function(){
console.log('b');

    }
}
self = self();

self();
*/

var test = 'abcd';
console.log(window.test);
var sayFoo = function(){
    console.log(this.test);

}
self