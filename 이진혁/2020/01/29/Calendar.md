## Calendar

- Calendar 클래스는 Date 클래스를 대체하는 새로운 시간 관련 클래스이다.
- Date 클래스의 대부분의 생성자와 메소드가 비권장 상태가 된 만큼
  대부분의 시간 관련 기능을 Calendar 클래스가 가지고 있다.
- Calendar 클래스는 추상 메소드를 몇 가지 가지고 있어서 추상 클래스이다.
  따라서 자체적으로 객체 생성이 불가능하지만
  getInstance() 메소드를 통해 객체를 생성할 수 있다.

- 뭐 getInstance() 메소드를 사용하기 때문에 Calendar 클래스의 생성자를 직접 사용할 일은 없겠지만
  getInstance() 메소드 내부에서 생성자를 사용하고있기 때문에
  내부적으로 어떤 동작을 하는지 알고 있는 것이 Calendar 클래스를 사용하는데에
  도움이 될 것이기 때문에 알고 있는 것이 좋다.

- 아래는 Calendar 클래스의 생성자이다.

  ```java
  Calendar();
  Calendar(TimeZone zone);
  Calendar(Locale aLocale);
  Calendar(TimeZone zone, Locale aLocale);
  ```

- 첫 번째 생성자는 기본 생성자로 가장 많이 쓰인다.
  이 생성자는 현재 접속하고 있는 컴퓨터의 나라

