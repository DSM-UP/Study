//import { type } from "os";

/*let intNum =10;
let floatNum =0.1;

let singleQuoteStr = 'single quote string';
let doubleQuoteStr = 'double quote string';
let singlechar = 'a';

let boolVar = true;
let emptyVar ;
let nullvar = null;

console.log(
    typeof intNum,
    typeof floatNum,
    typeof singleQuoteStr,
    typeof doubleQuoteStr,
    typeof boolVar,
    typeof emptyVar,
    typeof nullvar
)*/
/*
var num = 5/2;

console.log(num);
console.log(Math.floor(num)); //내림
console.log(Math.ceil(num));  //올림
console.log(Math.round(num)); //반올림
*/
/*
let str = 'text';
console.log(str);
console.log(str[0],str[1],str[2],str[3]);

str[0] = 'T';
console.log(str);
*/
/*
var foo = new Object();

foo.name = 'foo';
foo.age = 27;
foo.gender = 'male';

console.log(typeof (foo));
console.log(foo.name,foo['age'],foo['gender']);
console.log(foo);*//*
var foo ={
    name : 'foo',
    major : 'computer science'
};

console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

foo.major = 'electronic engineering'
console.log(foo.major);
console.log(foo['major']);

foo.aoge = 27;
console.log(foo.age);

foo['full-name']  = 'foo bar';
console.log(foo.full-name);
console.log(foo['full-name']);*/
/*
var foo =  {
    nickname: 'babo',
    name: 'foo'
//    age: 27,
 //   major: 'computer science'
};
console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

delete foo;
console.log(foo.name);
/*
var prop
for(prop in foo){
    console.log(prop, foo[prop]);
    //. 뒤는 문자로인식
}*/
//for of 는 배열*/
/*
var a= 100;
var b=100;
var objA = {value : 100};
var objB = {value : 100};
var objC = objB;

console.log(a==b);
console.log(objA ==objB);
console.log(objB ==objC);*/
/*var objA = {
    val:40
}
var objB = objA;

console.log(objA.val);
console.log(objB.val);

objB.val =50;
console.log(objA.val);
console.log(objB.val);
*/
/*
var a= 100;
var objA = {value: 100};
function changeArg(num,obj){
    num =200;
    obj.value = 200;

    console.log(num);
    console.log(obj.value);
}

changeArg(a,objA)
;

console.log(a);
console.log(objA.value);*/
/*
var foo ={
    name : 'foo',
    age:30
};

console.log(foo.tostring());
console.dir(foo);*/
/*
var colorArr= ['ab,bc,cd,de'];
var emptyArr =[];
console.log(emptyArr[0]);
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;

console.log(emptyArr);
console.log(emptyArr.length);
*/
/*
var arr =[];;
console.log(arr.length);

arr[0]=0;
arr[1] =1;
arr[2] =2;
arr[100] = 100;
console.log(arr.length)*/
/*
var arr = ['a','b','c'];

arr.push('three');
console.log(arr);

arr.length = 5;
arr.push('four');

console.log(arr.length);
*/
/*
var colorsArray = ['a','b','c'];

console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);





console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

console.log(typeof colorsArray);
console.log(typedf colorsObj);

console.log(colorsArray.length);
console.log(colorsObj.length);

colorsArray.push('red');
colorsObj.push('red');*/
/*
var arr= ['zero','one','two'];
console.log(arr.length);

arr.color = 'blue';
arr.name = 'numbeer_array';
console.log(arr.length);

arr[3] = 'red';
console.log(arr.length);

console.log(arr);
*/
/*
var arr = ['one','two','three','four'];
arr.splice(2,2,'2','2');
console.log(arr);
console.log(arr.length);
//splice는 프로피티를 완전히 제거하므로 length도 줄어든다.
// (시작위치,제거할 개수, 삭제한 위치에 추가할 요소 추가기능)
*/
var foo =new Array(3);
console.log(foo);
console.log(foo.length);

var bar = new Array(1,2,3);
console.log(bar);
console.log(bar.length);