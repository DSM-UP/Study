# Node.js에서의 this

Node.js에서 this는 window가 아니라 빈 객체가 나온다. 

Node에서 this의 빈 객체는 module.exports이다. (module.exports === exports === this)

단 전역 환경에서의 this는 module.exports이지만 함수 선언문 안에서 this는 global이다. 화살표 함수에서 this는 상위 환경의 this이기 때문에 module.exports이다.