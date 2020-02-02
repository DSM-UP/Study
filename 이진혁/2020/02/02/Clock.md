## Clock

- Clock 클래스는 Instant 클래스를 소개할때 잠시 소개했던 클래스로써 시간을 관리하는 클래스이다.

- Instant 클래스와 비슷한 기능을 하는 클래스로써 같이 java.time 패키지에 존재하는 클래스이다.

- 의외로 Clock 클래스를 많이 들어보지 못한 사람이 많을 것으로 예상하는데
  그것은 그 많큼 많이 쓰이지 않는다는 의미이다.

- 그럼 Clock 클래스에 대해서 알아보기 위해서
  Clock 클래스의 생성자에 대해서 먼저 알아보자.

  ```java
  protected Clock();
  ```

- 이렇게 간단한 생성자가 존재한다.
  하지만 이 Clock 클래스는 추상 클래스이므로 객체를 new 키워드를 이용해서 생성할 수 없다.
  그 말은 즉, 이 생성자를 사용할 일이 없다는 뜻이다.
  만약 굳이 사용하고 싶다면 Clock 클래스를 상속받아서 안에 존재하는 추상 메소드들을 모두 구현하면 된다.
  물론 추천하지 않는다.

- 그렇다면 Clock 클래스의 메소드에 대해서 알아보자.
  Clock 클래스의 메소드의 형식은 아래와 같다.

  ```java
  public static Clock fixed(Instant fixedInstant, ZoneId zone);
  public static Clock system(ZoneId zone);
  public static Clock systemDefaultZone();
  public static Clock systemUTC();
  public static Clock offset(Clock baseClock, Duration offsetDuration);
  public static Clock tick(Clock baseClock, Duration tickDuration);
  public static Clock tickMinutes(ZoneId zone);
  public static Clock tickSeconds(ZoneId zone);
  
  public abstract ZoneId getZone();
  public abstract Instant instant();
  public abstract Clock withZone(ZoneId zone);
  
  public long millis();
  ```

- 이렇게 적당히 많은 양의 메소드가 존재한다.
  아래에서 이 메소드들에 대해서 소개하겠다.



### 1. fixed()

- fixed() 메소드는 대표적으로 Clock 객체를 생성할 수 있는 static 메소드 중 하나이다.
  매개변수로 Instant 객체와 ZoneId 객체를 받는다.
  Instant 클래스는 전에 배웠던 것처럼 java.time 패키지에 존재하는 클래스이다.
  이 객체에 저장되어 있는 시간을 기준으로 시간을 생성한다.
  그리고 ZoneId 클래스에 존재하는 타임존을 기준으로 시간을 다시 생성한다.
  아래는 fixed() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Clock clock = Clock.fixed(Instant.now(), ZoneId.of("Asia/Seoul"));
          System.out.println(clock);
      }
  }
  
  // FixedClock[2020-02-02T05:23:43.934Z,Asia/Seoul]
  ```

- 참고로 Clock 클래스의 객체를 그대로 출력하는 것과 toString() 메소드를 통해 출력하는 것이 같다.



### 2. system()

- system() 메소드도 fixed() 메소드와 같이 Clock 객체를 생성할 수 있는 static 메소드 중 하나이다.
  매개변수로 ZoneId 객체를 받기 때문에 시간은 현재 시간을 기준으로 생성한다.
  아래는 system() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Clock clock = Clock.system(ZoneId.of("Asia/Seoul"));
          System.out.println(clock);
      }
  }
  
  // FixedClock[2020-02-02T05:23:43.934Z,Asia/Seoul]
  ```

- fixed() 예제와 결과값이 같은 것은 fixed() 예제에서도 Instant.now()를 통해 현재시간을 기준으로
  객체를 생성했기 떄문이다.



### 3. systemDefaultZone()

- systemDefaultZone() 메소드는 이름 그대로 system() 메소드에서 ZoneId도 Default 설정을 하겠다는 것이다.
  그래서 매개변수가 존재하지 않고 현재시간을 매개로하며 ZoneId는 현재 OS의 설정을 따른다.
  아래는 systemDefaultZone() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Clock clock = Clock.systemDefaultZone();
          System.out.pritnln(clock);
      }
  }
  
  // FixedClock[2020-02-02T05:23:43.934Z,Asia/Seoul]
  ```

- 위의 fixed() 메소드, system() 메소드의 예제와 별 다를 것이 없다.



### 4. systemUTC()

- systemUTC() 메소드는 아마 이름에서 유추하였겠지만
  UTC (세계 협정시) 시간 기준으로 시간을 설정하여 객체를 생성하여 리턴하는 메소드이다.
  물론 UTC 기준이기 때문에 당연히 UTC 기준 시간이며 ZoneId 또한 필요 없다.
  아래는 systemUTC() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Clock clock = Clock.systemUTC();
          System.out.println(clock);
      }
  }
  
  // SystemClock[Z]
  ```

- 이렇게 정확한 시간을 알려주지 않는다.
  여기서의 문제는 아닌데 위의 1, 2, 3의 예제에서 시간이 Asia/Seoul 의 TimeZone을 가지고 있는데
  시간은 UTC 시간을 따르고 있다는 것을 알 수 있다.( 물론 알 수 없다. )
  왜 그런지는 아직도 모르겠다.
  별의 별짓을 다 해봤는데...



### 5. getZone()

- getZone() 메소드는 간단하게 설정되어 있는 ZoneId가 무엇인지 알아내는 메소드이다.
  getZone() 메소드는 static이 아니기 때문에 객체를 생성한 뒤 사용해야 한다.
  물론 static일 수가 없는 메소드이기도 하다.
  아래는 getZone() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Clock clock = Clock.systemDefaultZone();
          System.out.println(clock.getZone);
      }
  }
  
  // Asia/Seoul
  ```

- 이 메소드를 소개하면서 알게 된 것인데
  지금까지 Zone을 Zond 이라고 쓰는 바람에 모든 Zond를 Zone으로 고치느라 힘들었다.



### 6. instant()

- instant() 메소드는 Clock 객체를 Instant 객체로 변환하는 클래스이다.
  기존의 Clock 객체를 출력하면 일정한 형식으로 나오게 되는데
  Instant 클래스는 저장을 용이하게 하는 만큼 필요한 부분만 나오는 것이 좋아서
  사용하는 것이 좋을 듯하다.
  아래는 instant() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Clock clock = Clock.systemDefaultZone();
          System.out.println(clock);
          System.out.println(clock.instant());
      }
  }
  
  // FixedClock[2020-02-02T05:23:43.934Z,Asia/Seoul]
  // 2020-02-02T05:23:43.934Z
  ```

  

### 7.  withZone()

- withZone() 메소드는 이미 설정되어 있는 ZoneId를 변경하는 메소드이다.
  매개변수로 원하는 ZoneId를 넣어서 그것으로 변경할 수 있다.
  아래는 withZone() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Clock clock = Clock.systemDefaultZone();
          Clock change = clock.withZone("UTC");
      	System.out.println(clock.instant());
          System.out.println(change.instant());
      }
  }
  
  // 2020-02-02T05:23:43.934Z
  // 2020-02-02T05:23:43.934Z
  ```

- 원래는 둘이 달라야 하는데.. 잘 모르겠다.
  분명히 내 컴퓨터는 9시간 뒤인데...



### 8. millis()

- millis() 메소드는 Clock 객체에 저장되어 있는 시간을
  1970년 1월 1일 00시 00분 00초부터 흐른 밀리세컨드를 long 타입으로 리턴하는 메소드이다.
  이 long 타입의 밀리세컨드는 다른 클래스와의 호환을 하기 위해서 많이 사용되므로 기억해두는 것이 좋다.
  아래는 millis() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Clock clock = Clock.systemDefaultZone();
          System.out.println(clock.millis);
      }
  }
  
  // 1580622580240
  ```

  

### 9. offset()

- offset() 메소드는 시간을 더하거나 뺄 수 있는 메소드이다.
  offset() 메소드의 매개변수로는 Clock 객체와 Duration 객체를 가진다.
  Clock 객체는 바뀔 대상이고 Duration 객체는 무엇을 얼마나 바뀌게 할 것인지 정한다.
  Duration 클래스는 java.time 패키지에 존재한다.
  그러므로 나중에 다시 다룰 예정이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Clock clock = Clock.systemDefaultZone();
          Clock clock2 = Clock.offset(clock, Duration.ZERO);
          Clcok clock3 = Clock.offset(clock, Duration.ofHours(24));
          Clock clock4 = Clock.offset(clock, Duration.ofHours(-24));
          
          System.out.println(clock2.instant());
          System.out.println(clock3.instant());
          System.out.println(click4.instant());
      }
  }
  
  // 2020-02-02T00:00:00.000Z
  // 2020-02-03T00:00:00.000Z
  // 2020-02-01T00:00:00.000Z
  ```

- 코드를 보면서 예상하면 좋을듯 하다.



### tick() - tickMinutes() - tickSeconds()

- tick() 메소드는 일정 수를 기준으로 반올림을 하는 메소드이다.
  매개변수로 반올림 당할 Clock 객체와 반올림의 기준을 제공하는 Duration 객체를 받는다.

- tickMinutes() 메소드는 초 단위와 나노초 단위를 0으로 설정한다.
  매개변수로 ZoneId를 받아서 그 타임존으로 바꾼다.

- tickSeconds() 메소드는 나노초 단위를 0으로 설정한다.
  매개변수로 ZoneId를 받아서 그 탕림존으로 바꾼다.

- 아래는 위 세개의 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Clock clock = Clock.systemDefaultZone();
          System.out.println(Clock.tick(clock, Duration.of(30)).instant());
          System.out.println(Clock.tickMinutes("Asia/Seoul").instant());
          System.out.println(Clock.tickSeconds("Asia/Seoul").instant());
      }
  }
  
  // 2020-02-02T05:23:30Z
  // 2020-02-02T05:23:00Z
  // 2020-02-02T05:23:43Z
  ```

  

  