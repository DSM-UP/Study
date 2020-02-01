## Instant

- Instant 클래스는 java.time 패키지에 존재하는 시간관련 클래스 중에 하나이다.
- java.time 패키지에 존재하는 시간관련 클래스 중에서
  시간을 저장하고 연산하고 비교하는 등의 가장 간단한 클래스이다.
  다른 클래스들과는 다르게 시간을 '저장'하는 용도에 있어서 특출난 능력을 자랑한다.
- 그래서 이번에는 Instant 클래스의 메소드들에 대해서 알아보고자 한다.



- Instant 클래스의 메소드를 알아보기 전에 Instant 클래스의 생성자부터 알아보아야 하는데
  Instant 클래스는 추상 클래스이기 때문에 생성자가 의미가 없다.
  하지만 Instant 클래스를 구현함으로써 사용할 수는 있으므로 생성자를 아래에 적어 놓는다.

  ```java
  protected Instant();
  ```

- 이렇게 아무것도 없는 것을 알 수 있다.
  애초에 사용하지 말라는 것이다.



- 그럼 생성자에 대한 이야기를 모두 마쳤으니 내장되어 있는 메소드에 대해서 알아보자.

##### now()

- now() 함수는 Instant 클래스의 객체를 생성하기 위한 가장 기초적인 메소드로써
  이름에서 추측할 수 있듯이 현재의 시간을 기준으로 Instant 객체를 생성한다.

- Instant 클래스는 시간을 Locale과 TimeZone을 따지지 않으니
  UTC를 기준으로 시간을 측정하여 저장한다.

- 따라서 우리나라보다 9시간 늦은 시간대를 사용한다는 것을 명심하고 사용하여야 한다.

- 아래는 now() 메소드의 형식이다.

  ```java
  public static Instant now();
  public static Instant now(Clock clock);
  ```

- 이렇게 두 가지 형식으로 오버로딩되어 있다.

- 첫 번째로 오버로딩된 now() 메소드는 매개변수가 없는 메소드이다.
  따라서 가장 간단하게 UTC 시간을 기준으로 현재 시간을
  새로 만든 Instant 객체에 저장하고 리턴한다.

- 두 번째로 오버로딩된 now() 메소드는 매개변수로 Clock 객체를 받고 있다.
  Clock 클래스는 Instant 클래스와 마찬가지로 java.time 패키지에 존재하는 시간 관련 클래스로써
  많이는 사용되지 않는 클래스이다.
  어쨌든 이 두 번째 메소드는 Clock 객체에 저장되어 있는 시간을 Instant 클래스에 옮겨서
  리턴하는 메소드이다.

- 아래는 now() 메소드의 간단한 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Instant instant = Instant.now();
          System.out.println(instant);
          
          Clock clock = Clock.systemUTC();
          Instant instant2 = Instant.now(clock);
          System.out.println(instant2);
      }
  }
  
  // 2020-02-01T06:21:30.272Z
  // 2020-02-01T06:21:30.273Z
  ```

- Instant 클래스는 시간을 저장하는 것을 기점으로 만들어진 클래스인 만큼
  출력을 했을때 바로 시간으로 나온다는 것을 알 수 있다.

- 그리고 Clock 클래스는 나중에 알려주겠지만 위 코드의 이해를 돕기 위해서 잠시 소개하자면
  systemUTC() 메소드는 UTC 시간 기준으로 현재의 시간을 Clock 객체에 저장하여
  리턴하는 역할을 하는 메소드이다.



##### ofEpochMilli() - ofEpochSecond()

- ofEpochMilli() 메소드와 ofEpochSecond() 메소드는 now() 메소드와 마찬가지로
  Instant 객체를 만드는 메소드 중 하나이다.

- now() 메소드는 현재 시간을 기준으로 Instant 객체를 생성하는 것에 비해
  ofEpochMill() 메소드는 UTC 시간 기준으로 0인
  1970년 1월 1일 00시 00분 00초부터 주어진 매개변수(밀리세컨드)만큼의
  시간을 기준으로 객체를 생성하며
  ofEpochSecond() 메소드는 주어진 매개변수의 second(초)만큼의 시간을
  기준으로 객체를 생성한다.

- 아래는 ofEpochMilli() 메소드와 ofEpochSecond() 메소드의 형식이다.

  ```java
  public static Instant ofEpochMilli(long epochMilli);
  public static Instant ofEpochSecond(long epochSecond);
  public static Instant ofEpochSeoond(long epochSecond, long nanoAdjustment);
  ```

- ofEpochMilli() 메소드는 오버로딩되어 있지 않아, 하나이다.
  long 타입의 매개변수를 받아서 그 수를 밀리세컨드를 기준으로
  시간을 만들어 Instant 객체에 저장하여 리턴한다.
  0은 1970년 1월 1일 00시 00분 00.000...0초이다.

- ofEpochSecond() 메소드는 두 가지로 오버로딩되어 있다.
  첫 번째로 오버로딩된  ofEpochSecond() 메소드는
  long 타입의 매개변수를 받아서 그 수를 세컨드를 기준으로 시간을 만들어
  Instant 객체에 저장하여 리턴한다.
  0은 1970년 1월 1일 00시 00분 00.000...0초이다.
  두 번째로 오버로딩된 ofEpochSecond() 메소드는
  long 타입의 세컨드와 long 타입의 나노세컨드를 받아서
  그 둘을 합쳐서 시간을 만들어, Instant 객체에 저장하여 리턴한다.

- 위 둘의 메소드의 예제를 살펴보기 전에 Instant 객체의 시간에서
  밀리세컨드, 세컨드, 나노세컨드로 변환하는 방법은 아래의 메소드를 사용하면 된다.

  ```java
  public long toEpochMilli();
  public long getEpochSecond();
  public long getNano();
  ```

- 아래는 두 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Instant instant = Instant.now();
          
          Instant instant2 = Instant.ofEpochMilli(instant.toEpochMilli());
          Instant instant3 = Instant.ofEpochSecond(instant.getEpochSecond());
          Instant instant4 = Instant.ofEpochSecond(instant.getEpochSecond(),
                                                  instant.getNano());
          System.out.println(instant2);
          System.out.println(instant3);
          System.out.println(instant4);
      }
  }
  
  // 2020-02-01T06:21:30.273Z
  // 2020-02-01T06:21:30Z
  // 2020-02-01T06:21:30.273Z
  ```



##### from()

- from() 메소드는 다른 Instant 객체의 시간을 가져오는 메소드이다.
  아래는 from() 메소드의 형식이다.

  ```java
  public static Instant from(Instant instant);
  ```

- 이렇게 정적 메소드인 것을 알 수 있고
  매개변수로 Instant 객체를 받아서 매개변수 객체에 존재하는 시간을 가져와서
  새로운 Instant 객체를 만들어서 시간을 저장하고 리턴하는 메소드이다.

- 아래는 from() 메소드를 사용하는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Instant instant = Instant.now();
          Instant copy = Instant.from(instant);
         	System.out.println(copy);
      }
  }
  
  // 2020-02-01T06:21:30.272Z
  ```

  

##### EPOCH - MAX - MIN

- 이번 것은 메소드는 아니고 중요한 상수 세 가지 입니다.
  이것으로 간단하게 Instant 객체를 사용할 수 있다.

  ###### 1. EPOCH

  - EPOCH 상수는 ofEpochMilli(0) 과 같은 결과를 나타내며
    1970년 1월 1일 00시 00분 00초의 Instant 객체를 리턴한다.

    ```java
    public class MainClass {
        public static void main(String[] args) {
            Instant instant = Instant.EPOCH;
            System.out.println(instant);
        }
    }
    
    // 1970-01-01T00:00:00Z
    ```

  ###### 2. MAX

  - MAX 상수는 Instant 객체에서 담을 수 있는 가장 미래의 시간을 리턴한다.

    ```java
    public class MainClass {
        public static void main(String[] args) {
            Instant instant = Instant.MAX;
            System.out.println(instant);
        }
    }
    
    // +1000000000-12-31T23:59:59.999999999Z
    ```

  ###### 3. MIN

  - MIN 상수는 Instant 객체에서 담을 수 있는 가장 과거의 시간을 리턴한다.

    ```java
    public class MainClass {
        public static void main(String[] args) {
            Instant instant = Instant.MIN;
            System.out.println(instant);
        }
    }
    
    // -1000000000-01-01T00:00:00Z
    ```



##### plus() - minus()

- plus() 메소드와 minus() 메소드는 그 사용방법이 같습니다.
  하지만 더해지냐, 빼지냐의 차이이죠.

- plus() 메소드와 minus() 메소드의 형식은 아래와 같습니다.

  ```java
  public Instant plus(long amountToAdd, TemporalUnit unit);
  public Instant minus(long amountToSubtract, TemporalUnit unit);
  ```

- 첫 번째 매개변수로 더하거나 뺄만큼의 양을 주고
  두 번째 매개변수로 무엇을 더하고 뺄 건지를 정합니다.
  두 번째 매개변수인 TemporalUnit 객체는 많은 상수를 가지고 있습니다.
  그 TemporalUnit 클래스를 상속받은 ChronoUnit 클래스를 이용하자면 아래와 같은 예제가 나옵니다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Instant instant = Instant.now();
          
          System.out.println(instant.plus(1, ChronoUnit.DAYS));
          System.out.println(instant.plus(1, ChronoUnit.HALF_DAYS));
          System.out.println(instant.plus(1, ChronoUnit.HOURS));
          System.out.println(instant.plus(1, ChronoUnit.MICROS));
          System.out.println(instant.plus(1, ChronoUnit.MILLIS));
          System.out.println(instant.plus(1, ChronoUnit.MINUTES));
          System.out.println(instant.plus(1, ChronoUnit.NANOS));
          System.out.println(instant.plus(1, ChronoUnit.SECONDS));
      }
  }
  
  // 2020-02-02T06:21:30.273Z
  // 2020-02-01T18:21:30.273Z
  // 2020-02-01T07:21:30.273Z
  // 2020-02-01T06:21:30.273001Z
  // 2020-02-01T06:21:30.274Z
  // 2020-02-01T06:22:30.273Z
  // 2020-02-01T06:21:30.273000001Z
  // 2020-02-01T06:21:31.273Z
  ```

- minus() 메소드를 사용할 때는 이와는 반대의 결과가 나오겠죠?



##### parse()

- parse() 메소드는 문자열을 파싱하여 Instant 객체로 시간을 저장하는 역할을 수행합니다.
  parse() 메소드의 형식은 아래와 같습니다.

  ```java
  public static Instant parse(CharSequence text);
  ```

- 말 그대로 출력할때 나오는 그 문자열을 반대로 넣어주면 그대로 시간을 만든다는 말입니다.
  아래는 parse() 메소드의 예제입니다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Instant instant = Instant.parse("2020-02-01T00:00:00.000Z");
          System.out.println(instant);
      }
  }
  
  // 2020-02-01T00:00:00Z
  ```