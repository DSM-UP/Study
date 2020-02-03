## Duration

- Duration 클래스는 이전에 했던 Clock 클래스와 Instant 클래스와 같이
  java.time 패키지에 존재하는 시간관련 클래스입니다.

- Duration 클래스도 물론 시간을 담는 역할을 하는 클래스이다.
  하지만 이 Duration 클래스는 TimeZone이 존재하지 않기 때문에
  '시간' 자체를 저장하는 역할을 한다.

- 아래는 Duration 클래스의 메소드에 대한 리스트이다.

  ```java
  public static Duration of(long amount, TemporalUnit unit);
  public static Duration ofDays(long days);
  public static Duration ofHours(long hours);
  public static Duration ofMinutes(long minutes);
  public static Duration ofSeconds(long seconds);
  public static Duration ofSeconds(long seconds, long nanoAdjustment);
  public static Duration ofMillis(long millis);
  public static Duration ofNanos(long nanos);
  public static Duration parse(CharSequence text);
  public static Duration from(TemporalAmount amount);
  
  public static Duration between(Temporal startInclusive, Temporal endExclusive);
  
  public Duration abs();
  public Temporal addTo(Temporal temporal);
  public Duration dividedBy(long divisor);
  public long get(TemporalUnit unit);
  public long getSeconds();
  public int getNano();
  public List<TemporalUnit> getUnits();
  public boolean isNegative();
  public boolean isZero();
  
  public Duration minus(Duration duration);
  public Duration minus(long amountToSubtract, TemporalUnit unit);
  public Duration minusDays(long daysToSubtract);
  public Duration minusHours(long hoursToSubtract);
  public Duration minusMinutes(long minutesToSubtract);
  public Duration minusSeconds(long secondsToSubtract);
  public Duration minusMillis(long millisToSubtract);
  public Duration minusNanos(long nanosToSubtract);
  public Duration plus(Duration duration);
  public Duration plusDays(long daysToAdd);
  public Duration plusHours(long hoursToAdd);
  public Duration plusMinutes(long minutesToAdd);
  public Duration plusSeconds(long secondsToAdd);
  public Duration plusMillis(long millisToAdd);
  public Duration plusNanos(long nanosToAdd);
  public Duration multipliedBy(long multiplicand);
  public Duration negated();
  public Temporal subtractFrom(Temporal temporal);
  
  public Duration withSeconds(long seconds);
  public Duration withNanos(int nanoOfSeconds);
  
  public long toDays();
  public long toHours();
  public long toMinutes();
  public long toMillis();
  public long toNanos();
  ```



### 1. of()

- of() 메소드는 Duration 객체를 생성하는 정적 메소드 중 하나로써
  많이 사용하는 메소드이다.

- of() 메소드의 형식은 위에 있으니 참고하면 된다.

- of() 메소드는 위에 있듯이 첫 번째 매개변수로 Duration 객체를 생성할때 만들 시간을 적는다.
  두 번째 매개변수로는 어떤 요소의 시간을 만들 것인지 적는다.
  첫 번째 매개변수는 long 타입으로써 적으면 되지만
  두 번째 매개변수는 TemporalUnit으로써 아는 사람은 알겠지만 모르는 경우가 많으므로
  이를 상속하는 ChronoUnit 객체를 사용하겠다.
  아래는 of() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Duration duration = Duration.of(100, ChronoUnit.HOUR);
          System.out.println(duration);
      }
  }
  
  // PT100H
  ```

- 이렇게 Duration 객체의 출력은 앞의 PT와 숫자 그리고 단위가 적혀있는 것을 알 수 있다.
  여기서 시간은 H, 분은 M, 초는 S로 사용된다.
  필요없는 단위는 사라지게 된다.



### 2. ofDays()-ofHours()-ofMinutes()-ofSeconds()-ofMillis()-ofNanos()

- 위의 ofDays(), ofHours(), ofMinutes(), ofSeconds(), ofMillis(), ofNanos() 메소드는
  위의 of() 메소드는 요소를 정할 수 있던 반면에 이 메소드들은 요소가 정해져있고
  그 수치만 정하면 되는 메소드들이다.

- 말 그대로 메소드의 이름의 요소에 매개변수로 들어온 long 타입의 시간을 적용시킨
  Duration 객체를 생성한다.
  하지만 위의 메소드의 형식을 보면 알겠지만
  ofSeconds() 메소드가 두 개로 오버로딩되어 있다는 것을 알 수 있다.
  첫 번째로 오버로딩된 메소드는 다른 메소드들과 같은 형식이지만
  두 번째로 오버로딩된 메소드는 초와 나노초를 동시에 설정할 수 있다.
  아래는 위 메소드들의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Duration duration1 = Duration.ofDays(1);
          Duration duration2 = Duration.ofHours(1);
          Duration duration3 = Duration.ofMinutes(1);
          Duration duration4 = Duration.ofSeconds(1);
          Duration duration5 = Duration.ofSeconds(1, 1);
          Duration duration6 = Duration.ofMillis(1);
          Duration duration7 = Duration.ofNanos(1);
          
          System.out.println(duration1);
          System.out.println(duration2);
          System.out.println(duration3);
          System.out.println(duration4);
          System.out.println(duration5);
          System.out.println(duration6);
          System.out.println(duration7);
      }
  }
  
  // PT24H
  // PT1H
  // PT1M
  // PT1S
  // PT1.000000001S
  // PT0.001S
  // PT0.000000001S
  ```



### 3. parse()

- parse() 메소드는 지금까지 있었던 시간관련 클래스와 같게 매개변수로 들어온 문자열을 바탕으로
  Duration 객체를 생성하는 메소드이다.
  parse() 메소드의 예제는 아래와 같다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Duration duration = Duration.parse("PT24H12M12S");
          System.out.println(duration);
      }
  }
  
  // PT24H12M12S
  ```



### 4. from()

- from() 메소드는 매개변수로 들어온 시간관련 객체를 이용하여
  Duration 객체로 만드는 역할을 하는 메소드이다.

- from() 메소드의 매개변수로 들어올 수 있는 종류는 정해져있지만
  Duration 객체에 들어올 수 있는 것을 생각해보면 어느정도 일정하다는 것을 알 수 있다.
  아래는 from() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Duration duration = Duration.ofDays(10);
          Duration copy = Duration.from(duration);
          
          System.out.println(duration);
          System.out.println(copy);
      }
  }
  
  // PT240H
  // PT240H
  ```

- 이렇게 같은 Duration 객체를 넣으면 같은 시간의 Duration 객체를 복사할 수 있다.



### 5. between()

- between() 메소드는 매개변수로 들어온 시간 관련 객체 둘의 차이를 리턴한다.
  차이를 계산하는 방법은
  (두 번째 매개변수의 시간) - (첫 번째 매개변수의 시간) 이다.
  아래는 between() 메소드의 예제이다.

  ```java
  public class MainClass {
   	public static void main(String[] args) {
          Duration duration = Duration.between(LocalTime.of(1, 1, 1),
                                               LocalTime.of(10, 10, 10));
          System.out.printlN(duration);
      }   
  }
  
  // PT1H1M1S
  ```

- 위의 예제에서 나온 LocalTime 객체는 Duration 객체에서 계산할 수 있는 시간 관련 클래스 중 하나이다.



### 6. abs()

- abs() 메소드는 이름 그대로 절대값을 리턴하는 메소드이다.
  시간에서의 절대값이란 것이 그냥 양수의 시간을 리턴한다는 것이다.
  아래는 abs() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Duration duration = Duration.ofDays(-1);
          Duration copy = duration.abs();
          
          System.out.println(duration);
          System.out.println(copy);
      }
  }
  
  // PT-24H
  // PT24H
  ```



### 7. addTo()

- addTo() 메소드는 매개변수로 들어온 시간 관련 객체에 지정된 객체의 시간을 더해서
  매개변수로 들어온 시간관련 객체와 같은 객체를 리턴한다.
  아래는 addTo() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args)
  }
  ```

  