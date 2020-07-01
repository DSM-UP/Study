# Javascript Closure

## Closure??

* 외부함수에서 내부함수의 변수를 참조하는 것 

## EX

``` javascript
function getClosure() {
  var text = 'variable 1';
  return function() {
    return text;
  };
}

var closure = getClosure();
console.log(closure()); // 'variable 1'
```

