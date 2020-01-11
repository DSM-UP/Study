let var1;
let var2 = undefined;
var1; // undefined
var2; // undefined
undefinedVar; // ReferenceError: undefinedVar 는 정의되지 않았습니다.

x; // ReferenceError: x 는 정의되지 않았습니다.
let x = 3; // 에러가 일어나서 실행이 멈췄으므로 여기에는 결코 도달할 수 없습니다.

x; // undefined
var x = 3;
x; // 3

var x; // 선언(할당은 아닌)이 끌어올려집니다.
x; // undefined
x = 3;
x; // 3

// // 원래코드                 // 자바스크립트가 해석한 코드
//                             var x;
//                             var y;
// if(x !== 3) {               if(x !== 3) {
//     console.log(y);             console.log(y);
//     var y = 5;                  y = 5;
//     if(y === 5) {               if(y === 5) {
//         var x = 3;                  x = 3;
//     }                           }
//     console.log(y);             console.log(y);
// }                           }
// if(x === 3) {               if (x === 3) {
//     console.log(y);             console.log(y);
// }                           }

// // 원래 코드                    // 자바스크립트가 해석한 코드
//                                 var x;
// var x = 3;                      x = 3;
// if(x === 3) {                   if(x === 3){
//     var x = 2;                      x = 2;
//     console.log(x);                 console.log(x);
// }                               }
// console.log(x);                 console.log(x);
