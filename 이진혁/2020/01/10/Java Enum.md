## Java Enum

- 자바도 C, C++과 같이 열거타입인 enum이 존재한다.

- enum은 여러 상수들을 모아놓은 공간이라고 할 수 있다.

- 자바에서 enum을 선언하기 위해서는 class가 아닌 enum이라는 것을 선언해야 한다.

- 따라서 새로운 파일을 만들어야 하는데 이 파일의 이름과 enum의 이름은 같아야 한다.

- 예를들어서 일주일의 이름을 저장하는 Week라는 enum을 선언하기 위해서는 파일 이름을 Week.java로 지정해야 하고 enum의 이름도 Week로 하여야 한다.

- 만약 이클립스에서 작업을 한다면 File->New->enum이 있는 것을 알 수 있다.

- Week enum을 선언하는 것은 아래와 같다.

  ```java
  public enum Week {
  	MONDAY,
  	TUESDAY,
  	WEDNESDAY,
  	THURSDAY,
  	FRIDAY,
  	SATURDAY,
  	SUNDAY
  }
  ```

- 이렇게 각각의 요소는 대문자로 적는 것이 원칙이고 각각 콤마로 구별한다.
- 그리고 모든 곳에서 사용하므로 public 이어야 하며 protected, private 일 경우 오류로 판단한다.
- 또한 아무것도 적지 않는 default 접근 제어 지시자를 사용할 경우 public으로 취급하며 public이라고 해도 package가 다르면 사용할 수 없다. ( 당연히 import 하면 사용할 수 있다. )



- 실제로 사용할 때는 class 참조형 변수를 선언하는 것과 같이 선언할 수 있다.

- 아래의 코드를 살펴보자.

```java
Week week = Week.MONDAY;
Week week2 = null;
```

- 이렇게 enumName var_name = enumName.요소 와 같이 사용할 수 있으며 enum도 참조형이기 때문에 null이 값을 가질 수 있다.

- 그리고 모든 Week 변수들은 같은 요소들을 가리킬 때 예외없이 모두 같은 것을 가리킨다.

- 따라서 아래와 같은 코드가 true를 출력한다.

  ```java
  Week week1 = Week.MONDAY;
  Week week2 = Week.MONDAY;
  System.out.println(week1 == week2);
  ```