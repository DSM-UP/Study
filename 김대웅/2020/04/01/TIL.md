# TIL

자바스크립트 Object의 메소드

- 객체.hasOwnProperty(속성명)
  - 객체의 속성이 상속받지 않은 속성인지 알려준다. 자신의 속성이면 true, 부모의 속성이거나 아예 속성이 아니면 false를 반환.
- 객체.isPrototypeOf(대상)
  - 객체가 대상의 조상인지 알려준다.
- Object.getPrototypeOf(객체), Object.setPrototypeOf(객체, prototype)
  - 객체의 prototype을 조회하거나 설정할 수 있다.
- instanceof
  - 객체가 특정 생성자의 자식인지 조회할 수 있다.
- 객체.toString
  - 기본적으로 객체의 종류를 알려주고, 사용자가 임의로 바꿀 수 있다. (예 : [object Object])
- Object.create(prototype, 속성들)
  - 객체를 생성하는 방법 중 하나이다.





출처 : https://www.zerocho.com/category/JavaScript/post/573dbc9370ba9c603052cc9a