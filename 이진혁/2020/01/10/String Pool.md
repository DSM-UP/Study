## String Pool

- 이번에는 == 연산자와 equals() 함수의 차이에 대해 알아보고 그에 따라서 String Pool이 무엇인지 알아보자.
- 사실 == 연산자와 equals() 함수의 차이와 String Pool에 대한 것은 2019년 학기 초에 블로그에 올렸었다.
- 하지만 책을 보면서 '아 이랬었지!' 라고 생각하면서 '그럼 한 번 더 정리해놓는 것이 좋겟다.' 라고 생각해서 이 글을 쓰게 되었다.



- 먼저 == 연산자와 equals() 함수의 차이점은 다음과 같다. 



#### == 연산자

- == 연산자는 피 연산자들의 값을 비교한다.

- 예를 들어 설명하자면 아래와 같다.

  ```java
  int a = 10;
  int b = 10;
  System.out.println(a == b);
  ```

- 위의 코드는 a라는 변수에 들어있는 10이라는 값과 b라는 변수에 들어있는 10이라는 값을 비교하여 true라는 결과를 낸다.
- 결과적으로 == 이라는 비교 연산자는 피 연산자인 변수의 값을 비교하는 것을 알 수 있다.
- 만약에 참조형 변수를 == 연산자로 비교하게 되면 피연산자인 변수의 값을 비교하지만 그 값이 주소값이므로 주소값끼리 비교한다는 것을 알 수 있다.



#### equals() 함수

- equals() 함수는 String 객체의 멤버 함수이다.

- 따라서 String에 의해서만 사용될 수 있는 함수라는 것을 알 수 있다.

- 이 함수의 매개변수로는 Object가 사용되는데 사실 true가 되기 위해 비교하려면 String만이 존재해야하므로 의미도 없다.

- 따라서 String과 String 변수끼리의 비교 연산을 할 때 사용한다는 것을 알 수 있다.

- 다음의 코드를 보면서 확인해보자.

  ```java
  String string1 = "equals";
  String string2 = "equals";
  String string3 = new String("equals");
  
  System.out.println(string1.equals(string2));
  System.out.println(string1.equals(string3));
  ```

- 위의 코드의 결과는 아래와 같다.

  ```java
  true
  false
  ```

- 그럼 코드와 코드의 결과를 보고 해석을 해보자.
- 첫 번째로 true가 나온 구문에서 같은 "equals"라는 문장이 들어간 string1과 string2를 equals() 함수를 이용해서 비교연산을 진행하였다.
- 지금까지 말해왔던 것을 보면 String 변수는 '객체'이므로 String 변수는 그의 주소값을 가지고 있다.
- C언어를 접해본 사람이라면 알겠지만 위의 string1 이라는 변수는 (C스타일은 아니지만) "equals"라는 문자열의 첫 번째 문자인 e의 번지 주소를 가지고 있다는 것을 알고 있을 것이다.
- 따라서 string1의 e의 번지 주소와 string2의 e의 번지 주소는 당연히 다르다는 것을 알 수 있는데 왜 true가 떴는지 궁금할 것이다.
- 이는 이제 말할 String Pool과 관련이 있다.



#### String Pool

- String Pool이란 JVM에서 String 변수로 이루어진 문자열들을 처리하는 방법이다.
- JVM에는 String Pool이라는 곳이 존재하는데 이곳에는 지금까지 사용된 문자열들을 보관하고 있다.
- equals() 함수를 설명하면서 만들었던 코드를 예로 들자면 String Pool 에는 string1 이라는 변수가 생성됨과 동시에 "equals"라는 문자열을 String Pool에 보관한다.
- 그리고 string2가 생성될 때 "equals"를 String Pool에 또 보관해야 할 것 같지만 이렇게 문자열을 생성할 때는 이 문자열이 String Pool에 보관되어 있는지를 확인하고 만약에 보관되어 있다면 그 String 객체("equals")를 가리키도록 하는 것이다. 그래서 위에서 string1과 string2를 equals() 함수를 이용해서 비교 연산했을때 true가 나온 것이다.
- 그럼 string1과 string3를 비교연산했을 때는 왜 false라는 값이 나왔을까?
- 이것도 String Pool과 관련이 있다. new 연산자를 이용해서 새로운 문자열을 생성했을 때는 String Pool에 접근하여 이 문자열이 존재하는지 확인하지 않고 무조건 String Pool에 새로운 문자열을 넣어서 추가한다.
- 이것은 String 이라는 문자열을 담을 수 있는 객체가 다른 객체들과는 다르게 new 연산자가 아니라 그냥 일반적인 변수를 만들듯이 만들어도 되는 이유가 되지 않을까싶다.
- 따라서 String Pool에는 new 키워드를 사용하지 않은 문자열을 보관하며 new 키워드를 사용한 문자열은 따로 보관한다는 것을 알 수 있었다.