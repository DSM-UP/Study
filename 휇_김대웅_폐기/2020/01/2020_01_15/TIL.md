# module.exports VS exports

- module.exports 와 exports의 관계

  exports가 call by reference 방식으로 module.exports를 바라보고 있다.



require 함수가 리턴하는 값은 항상 module.exports이다.

~~~javascript
var module = {
    exports: {}
};
var exports = module.exports;

return module.exports;
~~~

결국 module.exports와 exports는 같은 객체를 바라보고 있다. exports에 멤버를 추가하면 module.exports에도 같은 멤버가 추가되는 것이다.

만약 exports에 다른 객체를 할당하게 되면, module.exports의 객체와 달라지게 되므로, exports에 변경을 해도 모듈에 영향을 주지 못한다. (결국 module.exports가 반환되기 때문이다.)