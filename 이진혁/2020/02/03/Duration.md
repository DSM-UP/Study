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
      public static void main(String[] args) {
          Duration duration = Duration.ofHours(5);
          LocalTime localTime = LocalTime.of(10, 10, 10);
        LocalTime localTime2 = duration.addTo(localTime);
          
          System.out.println(localTime);
          System.out.println(localTime2);
      }
  }
  
  // 10:10:10
  // 15:10:10
  ```
  
- 이렇게 10시 10분 10초에서 5시간을 더한 15시 10분 10초로 변한 것을 알 수 있다.



### 8. dividedBy()

- dividedBy() 은 말 그대로 시간을 나누는 역학을 하는 메소드이다.
  간단하니 예제로 바로 넘어가겠다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Duration duration = Duration.ofHours(64);
          System.out.println(duration.dividedBy(1));
          System.out.println(duration.dividedBy(2));
          System.out.println(duration.dividedBy(4));
          System.out.println(duration.dividedBy(8));
          System.out.println(duration.dividedBy(16));
          System.out.println(duration.dividedBy(32));
          System.out.println(duration.dividedBy(64));
      }
  }
  
  // PT64H
  // PT32H
  // PT16H
  // PT8H
  // PT4H
  // PT2H
  // PT1H
  ```



### 9. get() - getSeconds() - getNanos() - getUnits()

- get(), getSeconds(), getNanos() 메소드는 각각 그 시간 단위의 상위 요소까지 포함하여
  시간을 리턴하는 메소드이다. (하지만 나노초는 초 전까지의 요소만 관여한다.

- getSeconds() 메소드와 get() 메소드는 long 리턴타입을 가지는 것에 비해서
  getNanos() 메소드는 int 리턴타입을 가진다.

- getUnits() 메소드는 이 get 메소드의 요소들을 뽑아내는 메소드이다.
  리턴타입이 List<TemporalUnit> 이지만
  어떤 Duration 객체를 사용해도 [Seconds, Nanos]의 결과밖에 나오지 않는다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Duration duration = Duration.parse("PT10H10M10.000000001S");
          System.out.println("getSeconds() : " + duration.getSeconds());
          System.out.println("getNanos() : " + duration.getNanos());
          System.out.println("get(ChronoUnit.SECONDS) : "
                             + duration.get(ChronoUnit.SECONDS));
          System.out.println("get(ChronoUnit.NANOS) : "
                             + duration.get(ChronoUnit.NANOS));
         	System.out.println(duration.getUnits());
      }
  }
  
  // 36610
  // 1
  // 36610
  // 1
  // [Seconds, Nanos]
  ```

- 이렇게 우리는 10시간 10분 10초를 초 단위로 계산하면 36610초라는 것을 알 수 있다.



### 10. isNegative() - isZero()

- isNegative() 메소드는 Duration 객체의 시간이 음수인지 확인하고
  음수이면 true를 음수가 아니라면 false를 리턴한다.

- isZero() 메소드는 Duration 객체의 시간이 0인지 확인하고
  0이면 true를 0이 아니면 false를 리턴한다.

- 간단하므로 바로 예제를 보면 좋을 것 같다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Duration duration1 = Duration.parse("PT-10H");
          Duration duration2 = Duration.parse("PT0S");
          
          System.out.println(duration1.isNegative());
          System.out.println(duration1.isZero());
          System.out.println(duration2.isNegative());
          System.out.println(duration2.isZero());
      }
  }
  
  // true
  // false
  // false
  // true
  ```

  

### 11. minusXXX() - plusXXX()

- minus() 메소드를 포함한 minusXXX() 메소드와
  plus() 메소드를 포함한 plusXXX() 메소드는 다 같은 기능을 가지고 있다.
  minusXXX() 메소드들은 각자 요소의 시간을 빼는 역할을 하고 있고
  minus() 메소드는 그 요소를 직접 정해서 시간을 빼거나 Duration 객체끼리 빼는 방법이 있다.
  plusXXX() 메소드도 마찬가지로 각자 요소의 시간을 더하는 역할을 하고 있고
  plus() 메소드는 그 요소를 직접 정해서 시간을 더하거나 Duration 객체끼리 더할 수도 있다.
  아래는 이 많은 메소드들의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Duration duration = Duration.parse("PT10H10M10S");
         	
          System.out.println(duration.minus(Duration.ofHours(10)));
          System.out.println(duration.minus(10, ChronoUnit.HOURS));
          System.out.println(duration.minusDays(1));
          System.out.println(duration.minusHours(10));
          System.out.println(duration.minusMinutes(600));
          System.out.println(duration.minusSeconds(36000));
          System.out.println(duration.minusMillis(36000000));
          System.out.println(duration.minusNanos(36000000000000000));
          System.out.println();
          System.out.println(duration.plus(Duration.ofHours(10)));
          System.out.println(duration.plus(10, ChronoUnit.HOURS));
          System.out.println(duration.plusDays(1));
          System.out.println(duration.plusHours(10));
          System.out.println(duration.plusMinutes(600));
          System.out.println(duration.plusSeconds(36000));
          System.out.println(duration.plusMillis(36000000));
          System.out.println(duration.plusNanos(36000000000000000));
      }
  }
  
  // PT10M10S
  // PT10M10S
  // PT-13H-49M-50S
  // PT10M10S
  // PT10M10S
  // PT10M10S
  // PT10M10S
  // PT10M10S
  //
  // PT20H10M10S
  // PT20H10M10S
  // PT34H10M10S
  // PT20H10M10S
  // PT20H10M10S
  // PT20H10M10S
  // PT20H10M10S
  // PT20H10M10S
  ```

  

### 12. withSeconds() - withNanos()

- withSeconds() 메소드와 withNanos() 메소드는 그 요소를 매개변수의 값으로 대체하는 메소드이다.
  withSeconds() 메소드는 초단위를, withNanos() 메소드는 나노초단위를 바꾼다.
  아래는 위 두 개의 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Duration duration = Duration.parse("PT10H10M10.000000001S");
          System.out.println(duration.withSeconds(1));
          System.out.println(duration.withNanos(2));
      }
  }
  
  // PT10H10M1.000000001S
  // PT10H10M10.000000002S
  ```

  

### 13. toXXX()

- toDays(), toHours() - toMinutes() - toMillis() - toNanos() 메소드는 그 단위로
  Duration 객체의 시간을 알려주는 메소드이다.
  예를 들어 1시간이 Duration 객체에 존재하는데
  toMinutes() 메소드로 가져오면 60이 리턴되는 형식이다.
  아래는 위 5개의 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Duration duration = Duration.parse("PT10H10M10.000000001S");
          
          System.out.println(duration.toDays());
          System.out.println(duration.toHours());
          System.out.println(duration.toMinutes());
          System.out.println(duration.toMillis());
          System.out.println(duration.toNanos());
      }
  }
  
  // 0
  // 10
  // 610
  // 36610000
  // 36610000000001
  ```

  