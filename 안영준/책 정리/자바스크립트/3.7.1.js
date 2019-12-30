/*var add1 = 1+2;
var add2 = 'my'+'string';
var add3 = 1+ 'string';
var add4 = 'string' +1;

console.log(add1);
console.log(add2);
console.log(add3);
console.log(add4);
*/
/*
console.log(1=='1');
console.log(1==='1');
*/
// == 수만비교(값만)
/// === 일치비교
/*
console.log(!!0);
console.log(!!1);
console.log(!!'string');
console.log(!!'');
console.log(!!true);
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!{});
console.log(!![1,2,3]);
*//*
function add(x,y){
    return x+y;
}
console.log(add(3,4));
console.log(sum(1,2));

var factorialVar = function factorial(n){
    if(n<=1) return 1;
    else return n*factorial(n-1);
};

console.log(factorialVar(3));
console.log(factorial(3));
*/


var add = new Function('x'+'y'.'return x+y');
console.log(add(3,4));