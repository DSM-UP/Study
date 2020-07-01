# JAVA 강의 들으면서 알게된점 String타입

자바의 String타입은 문자열 리터럴이 같다면 같은 객체이다.

```java
String name1 = "공영길";
String name2 = "공영길";

name1 == name2 // TRUE
```

이것이 왜 TRUE일까? 이에 대한 답은 name1과 name2가 같은 객체이기 때문이다.

** 주의 **같은 문자열이기 떄문이 아니라 같은 객체이기 때문이다.



반면에 new 연산자를 사용하게 되면 항상 새로운 객체가 만들어진다.

```java
String name1 = new String("공영길");
String name2 = new String("공영길");

name1 == name2 // FALSE
```

위의 경우가 FALSE인것은 다른 객체이기 때문이다.