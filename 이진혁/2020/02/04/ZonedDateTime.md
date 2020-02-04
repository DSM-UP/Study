## ZonedDateTime

- ZonedDateTime 클래스는 지금까지 다뤄왔던 시간 관련 클래스와 마찬가지로
  java.time 패키지에 존재하는 시간 관련 클래스 중 하나이다.

- Date 클래스와 Calendar 클래스의 문제점을 극복하고
  그 이후에 나온 시간 관련 클래스들의 장점만을 모으고
  안에 그 클래스들을 담은 시간 관련 클래스의 결정체가 바로 이 ZonedDateTime 클래스라고 할 수 있다.

- 그래서 오늘은 이 ZonedDateTime 클래스에 대해서 소개해볼 예정이다.
  아래는 ZonedDateTime 클래스의 메소드들이다.

  ```java
  public static ZonedDateTime now();
  public static ZonedDateTime now(Clock clock);
  public static ZonedDateTime now(ZoneId zone);
  public static ZonedDateTime of(int year, int month, int dayOfMonth, int hour,
                                int minute, int second, int nanoOfSecond, ZoneId zone);
  public static ZonedDateTime of(LocalDate date, LocalTime time, ZoneId zone);
  public static ZonedDateTime ofInstant(Instant instant, ZoneId zone);
  public static ZonedDateTime ofInstant(LocalDateTime localDateTime,
                                       ZoneOffset offset, ZoneId zone);
  public static ZonedDateTime ofLocal(LocalDateTime localDateTime,
                                     ZoneId zone, ZoneOffset preferredOffset);
  public static ZonedDateTime ofStrict(LocalDateTime localDateTime,
                                      ZoneOffset offset, ZoneId zone);
  public static ZonedDateTime parse(CharSequence text);
  public static ZonedDateTime parse(CharSequence text, DateTimeFormatter formatter);
  public static ZonedDateTime from(TemporalAccessor temporal);
  
  public String format(DateTimeFormatter formatter);
  public int get(TemporalField field);
  public int getDayOfMonth();
  public DauyOfWeek getDayOfWeek();
  public int getDayOfYear();
  public int getHour();
  public long getLong(TemporalField field);
  public int getMinute();
  public Month getMonth();
  public int getMonthValue();
  public int getNano();
  public ZoneOffset getOffset();
  public int getSecond();
  public int getYear();
  public ZoneId getZone();
  public boolean isSupported(TemporalField field);
  public boolean isSupported(TemporalUnit unit);
  public ZonedDateTime truncatedTo(TemporalUnit unit);
  public long until(Temporal endExclusive, TemporalUnit unit);
  
  public ZonedDateTime minus(long amountToSubtract, TemporalUnit unit);
  public ZonedDateTime minus(TemporalAmount amountToSubtract);
  public ZonedDateTime minusYears(long years);
  public ZonedDateTime minusWeeks(long weeks);
  public ZonedDateTime minusDays(long days);
  public ZonedDateTime minusHours(long hours);
  public ZonedDateTime minusMinutes(long minutes);
  public ZonedDateTime minusSeconds(long seconds);
  public ZonedDateTime minusNanos(long nanos);
  
  public ZonedDateTime plus(long amountToSubtract, TemporalUnit unit);
  public ZonedDateTime plus(TemporalAmount amountToSubtract);
  public ZonedDateTime plusYears(long years);
  public ZonedDateTime plusWeeks(long weeks);
  public ZonedDateTime plusDays(long days);
  public ZonedDateTime plusHours(long hours);
  public ZonedDateTime plusMinutes(long minutes);
  public ZonedDateTime plusSeconds(long seconds);
  public ZonedDateTime plusNanos(long nanos);
  
  public LocalDate toLocalDate();
  public LocalTime toLocalTime();
  public LocalDateTime toLocalDateTime();
  public toOffsetDateTime toOffsetDateTime();
  
  public ZonedDateTime with(TemporalAdjuster adjuster);
  public ZonedDateTime with(TemporalField field);
  public ZonedDateTime withDayOfYear(int dayOfYear);
  public ZonedDateTime withYear(int year);
  public ZonedDateTime withDayOfMonth(int dayOfMonth);
  public ZonedDateTime withMonth(int month);
  public ZonedDateTime withHour(int hour);
  public ZonedDateTime withMinute(int minute);
  public ZonedDateTime withSecond(int second);
  public ZonedDateTime withNano(int nanoOfSecond);
  
  public ZonedDateTime withEarlierOffsetAtOverlap();
  public ZonedDateTime withFixedOffsetZone();
  public ZonedDateTime withLaterOffsetAtOverlap();
  public ZonedDateTime withZoneSameInstant(ZoneId zone);
  public ZonedDateTime withZoneSameLocal(ZoneId zone);
  ```



### now()

- now() 메소드는 위에 있는 것처럼 총 세 가지로 오버로딩되어 있다.

  ```java
  1. public static ZonedDateTime now();
  2. public static ZonedDateTime now(Clock clock);
  3. public static ZonedDateTime now(ZoneId zone);
  ```

- 첫 번째 now() 메소드는 매개변수가 없는 now() 메소드로써
  지금껏 그래왔던 것처럼 현재 접속해있는 컴퓨터의 OS의 정보를 바탕으로 시간을 측정하여
  ZonedDateTime 클래스에 시간을 저장하여 리턴합니다.

- 두 번째 now() 메소드는 매개변수로 Clock 객체를 받는 now() 메소드로써
  매개변수로 받은 Clock 객체의 시간을 토대로
  ZonedDateTime 객체를 생성하여 리턴합니다.

- 세 번째 now() 메소드는 매개변수로 ZoneId 객체를 받는 now() 메소드로써
  매개변수로 받은 ZoneId에 맞는 타임존의 현재 시각을 저장하여
  ZonedDateTime 객체를 생성 및 리턴합니다.

- 아래는 위 세 가지의 now() 메소드의 예제입니다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ZonedDateTime zoneDateTime1 = ZonedDateTime.now();
          ZonedDateTime zoneDateTime2 = ZonedDateTime.now(Clock.systemUTC());
          ZonedDateTime zoneDateTime3 = ZonedDateTime.now(ZoneId.of("Asia/Seoul"));
          
          System.out.println(zoneDateTime1);
          System.out.println(zoneDateTime2);
          System.out.println(zoneDateTime3);
      }
  }
  
  // 2020-02-04T11:36:34.209+09:00[Asia/Seoul]
  // 2020-02-04T02:36:34.210Z
  // 2020-02-04T11:36:34.210+09:00[Asia/Seoul]
  ```

  

### ofXXX()

- of() 메소드를 포함한 ofXXX() 메소드는 ZonedDateTime 객체를 생성하는데 사용되는 메소드이다.
  위와 같이 of() 메소드의 오버로딩된 것과 다른 ofXXX() 메소드는 아래와 같다.

  ```java
  1. public static ZonedDateTime of(int year, int month, int dayOfMonth, int hour,
                                int minute, int second, int nanoOfSecond, ZoneId zone);
  2. public static ZonedDateTime of(LocalDate date, LocalTime time, ZoneId zone);
  3. public static ZonedDateTime ofInstant(Instant instant, ZoneId zone);
  4. public static ZonedDateTime ofInstant(LocalDateTime localDateTime,
                                       ZoneOffset offset, ZoneId zone);
  5. public static ZonedDateTime ofLocal(LocalDateTime localDateTime,
                                     ZoneId zone, ZoneOffset preferredOffset);
  6. public static ZonedDateTime ofStrict(LocalDateTime localDateTime,
                                      ZoneOffset offset, ZoneId zone);
  ```

- 위처럼 of() 메소드는 두 가지로 오버로딩되어 있다.

- 첫 번째 메소드는 년, 월, 일, 시, 분, 초, 타임존을 매개변수로 받아서
  ZonedDateTime 객체를 생성하는 메소드이다.

- 두 번째 메소드는 LocalDate 객체와 LocalTime 객체, ZoneId 객체를 매개변수로 받는 메소드이다.
  LocalDate 객체는 년, 월, 일을 가지고 있는 객체이고
  LocalTime 객체는 시, 분, 초 (나노초)를 가지고 있는 객체로써 이 둘을 합치면 시간이 될 수 있다>
  하지만 이 둘을 합치면 시간이 될뿐 어느 나라의 타임존은 존재하지 않기 때문에
  Duration 객체처럼 시간만이 존재하게 된다.
  따라서 ZoneId 객체를 받아서 타임존을 설정하여 ZonedDateTime 객체를 생성하게 된다.

- 세 번째 메소드는 Instant 객체와 ZoneId 객체를 받아서
  Instant 객체의 시간과 ZoneId 객체의 타임존을 받아서 시간을 생성하는 메소드이다.

- 네 번째 메소드는 LocalDateTime ZoneOffset, ZoneId 객체를 받아서
  ZonedDateTime 객체를 생성하는 메소드이다.
  LocalDateTime 객체는 LocalDate 객체와 LocalTime 객체를 합친 객체이다.
  따라서 년, 월, 일, 시, 분, 초를 모두 가진 객체를 생성할 수 있다.

- 다섯 번째 메소드는 이름만 다를뿐 네 번째 메소드와 다를게 없다.

- 여섯 번째 메소드도 별로 다를 것이 없다.

- 아래는 위 여섯 가지의 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          ZonedDateTime z1 = ZonedDateTime.of(LocalDate.now(),
                                              LocalTime.now(), ZoneId.of("Asia/Seoul"));
  		ZonedDateTime z2 = ZonedDateTime.of(LocalDateTime.now(),
                                              ZoneId.of("Asia/Seoul"));
  		ZonedDateTime z3 = ZonedDateTime.of(2020, 02, 04, 11,
                                              44, 22, 123, ZoneId.of("Asia/Seoul"));
  		ZonedDateTime z4 = ZonedDateTime.ofInstant(Instant.now(),
                                                     ZoneId.of("Asia/Seoul"));
  		ZonedDateTime z5 = ZonedDateTime.ofInstant(LocalDateTime.now(),
                                                     ZoneOffset.of("+09:00"),
                                                     ZoneId.of("Asia/Seoul"));
  		ZonedDateTime z6 = ZonedDateTime.ofLocal(LocalDateTime.now(),
                                                   ZoneId.of("Asia/Seoul"),
                                                   ZoneOffset.of("+09:00"));
  		System.out.println(z1);
  		System.out.println(z2);
  		System.out.println(z3);
  		System.out.println(z4);
  		System.out.println(z5);
  		System.out.println(16);
      }
  }
  
  // 2020-02-04T12:29:08.287+09:00[Asia/Seoul]
  // 2020-02-04T12:29:08.288+09:00[Asia/Seoul]
  // 2020-02-04T11:44:22.000000123+09:00[Asia/Seoul]
  // 2020-02-04T12:29:08.288+09:00[Asia/Seoul]
  // 2020-02-04T12:29:08.288+09:00[Asia/Seoul]
  // 2020-02-04T12:29:08.288+09:00[Asia/Seoul]
  ```