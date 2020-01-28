## Date

- Date 클래스는 현재 시간을 담아두고 있는 객체를 만들어낼 수 있는 클래스이다.
- 사실 Calendar 클래스가 Date 클래스의 대부분의 기능을 가지고 있기 때문에
  Date 클래스를 사용할 필요는 없을 뿐더러
  그 때문인지 Date 클래스의 대부분의 생성자와 대부분의 메소드들이
  Deprecated (비권장) 상태가 되었다.
- 그래서 이번에는 비권장 상태가 되지 않은 Date 클래스에 대해서 소개해볼 예정이다.



### Date Constructor

- Date 클래스의 생성자에는 총 6가지가 있다.
  하지만 6개의 생성자 중 4개가 Deprecated 상태가 되어 있고 2개만이 권장 상태였다.

- Date 클래스의 생성자는 아래와 같다.

  ```java
  Date();
  Date(long date);
  
  @Deprecated Date(int year, int month, int date);
  @Deprecated Date(int year, int month, int date, int hrs, int min);
  @Deprecated Date(int year, int month, int date, int hrs, int min, int sec);
  @Deprecated Date(String s);
  ```

- 그래서 위 두개의 생성자만 사용하는 것을 원칙으로 한다.
- 첫 번째 생성자는 매개변수가 없는 기본 클래스로 현재 시간을 저장하는 과정을 거친다.
  Date 클래스를 사용하는 이유가 대부분 현재 시간을 얻기 위함이므로
  대부분 이 생성자를 사용하는 경우가 많다.
- 두 번째 생성자는 변수로 long 타입의 시간을 매개변수로 받는데
  이 시간은 밀리세컨드 ( 1/1000초 )이므로 시간을 잘 계산해서 주어야 한다.
- 세 번째 생성자는 비권장 생성자로써 밀리세컨드로 받던 두 번째 생성자와는 다르게
  년도, 월, 일을 매개변수로 받는다.
  세 개의 매개변수 모두다 int형으로 받기 때문에 대부분 오차가 없고
  시, 분, 초는 00시, 00분, 00초로 리셋이 된다.
- 네 번째 생성자도 비권장 생성자로써 년도, 월, 일, 시간, 분을 매개변수로 받고
  초는 00초로 리셋이 된다.
- 다섯 번째 생성자도 비권장 생성자이며 년도, 월, 일, 시, 분, 초를 매개변수로 받는다.
- 여섯 번째 생성자도 물론 비권장 생성자이며 다른 생성자와는 다르게 String형의 매개변수를 받는다.
  Date 클래스에서 오버로딩한 toString() 메소드를 사용하면 나오는 문자열을 매개변수로 넣으면
  그 시간으로 셋팅이 되도록 하는 생성자이다.



- 첫 번째 생성자와 두 번째 생성자 외에는 모두 비권장 상태이기 때문에
  첫 번째 생성자와 두 번째 생성자만 예제를 살펴보자.



##### Date()

```java
public class MainClass {
    public static void main(String[] args) {
        Date date = new Date();
        System.out.println(date.getTime());
    }
}

// 1580239509540
```

- getTime() 함수는 date 객체에 저장되어 있는 밀리세컨드 시간을 long 타입으로 리턴한다.
  이 밀리세컨드는 1970년도 1월 1일 00:00:00 부터 진행된 밀리세컨드 시간이다.
  물론 생성자에서 저장되어 있는 밀리세컨드도 같다.
- 1년 1월 1일 00시 00분 00초라고 오해하는 사람들이 많아서 알아두는 것이 좋다.



##### Date(long date)

```java
public class MainClass {
    public static void main(String[] args) {
        long time = 1580239509540;
        Date date = new Date(time);
        System.out.println(date.getTime());
        Date date2 = new Date(0);
        System.out.println(date2.getTime());
    }
}

// 1580239509540
// 0
```

- 이렇게 정상적으로 출력이 되는 것을 알 수 있다.



- 이렇게 < 권장 > 상태인 생성자에 대해서 알아보았다.

- 이제 이 Date 클래스가 가지고 있는 메소드들에 대해서 알아보겠다.

- Date 클래스의 메소드는 아래와 같다.

  ```java
  public boolean after(Date when);
  public boolean before(Date when);
  public long getTime();
  public void setTime();
  public static Date from(Instant instant);
  public Instant toInstant();
  
  public Object clone();
  public int compareTo(Date anotherDate);
  public boolean equals(Object obj);
  public int hashCode();
  pbulic String toString();
  
  @Deprecated public int getDate();
  @Deprecated public int getDay();
  @Deprecated public int getHours();
  @Deprecated public int getMinutes();
  @Deprecated public int getMonth();
  @Deprecated public int getSeconds();
  @Deprecated public int getTimezoneOffset();
  @Deprecated public int getYear();
  @Deprecated public static long parse(String s);
  @Deprecated public void setDate(int date);
  @Deprecated public void setHours(int hours);
  @Deprecated public void setMinutes(int minutes);
  @Deprecated public void setMonth(int month);
  @Deprecated public void setSeconds(int seconds);
  @Deprecated public void setYear(int year);
  @Deprecated public String toGMTString();
  @Deprecated public String toLocaleString();
  @Deprecated
  public static long UTC(int year, int month, int date, int hrs, int min, int sec);
  ```

- 이렇게 Object 클래스에서 상속받는 5개의 메소드를 제외하고 총 24개의 메소드를 제공한다.
  하지만 밑의 18개의 < 비권장 > 된 메소드들은 이제 사용하지 않는 것이 원칙이다.

- 그래서 남은 6개의 메소드들에 대해서 소개해볼 예정이다.

- 아래는 그 메소드들에 대한 예제이다.



##### after()

- after() 함수는 매개변수로 들어온 when 변수의 시간보다
  객체의 시간이 더 뒤면 true를 리턴하는 함수이다.

- 반대로 생각하는 경우가 많이 생길 것 같고
  이 메소드에 대한 실험을 하기 전까지만 해도 반대로 생각하고 있었기 떄문이다.

- 아래는 after() 함수에 대한 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Date date1 = new Date(2020, 1, 10);
          Date date2 = new Date(2020, 1, 20);
          Date date3 = new Date(2020, 1, 20);
          
          System.out.println("date1 > date2 : " + date1.after(date2));
          System.out.println("date2 > date1 : " + date2.after(date1));
         	System.out.println("date2 > date3 : " + date2.after(date3));
      }
  }
  
  // false
  // true
  // false
  ```

- 이렇게 의외로 헷갈리게 만들어놨다는 것을 알 수 있다.

- 세 번째 결과를 보면 알겠지만 date2와 date3의 객체가 같은 시간을 가지고 있다.
  결과는 false 인것으로 보아 더 뒤여야 true를 주는 after() 함수의 특성상 같으면 false를 리턴하는듯 하다.



##### before()

- before() 함수는 after() 함수와는 반대로 매개변수로 들어온 when 변수의 시간보다
  객체의 시간이 더 전이면 true를 리턴하는 함수이다.

- 이 함수또한 반대로 생각하는 경우가 많아서 다시 한 번 생각해볼 필요가 있다.

- 아래는 before() 함수에 대한 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Date date1 = new Date(2020, 1, 10);
          Date date2 = new Date(2020, 1, 20);
          Date date3 = new Date(2020, 1, 20);
          
          System.out.println("date1 < date2 : " + date1.before(date2));
          System.out.println("date2 < date1 : " + date2.before(date1));
         	System.out.println("date2 < date3 : " + date2.before(date3));
      }
  }
  
  // true
  // false
  // false
  ```

- 이 결과를 보면 첫 번째 결과와 두 번째 결과는 after() 함수와 완전히 반대로 나온 것을 알 수 있고
  세 번째 결과를 봤을때 이 함수또한 시간이 같으면 false를 리턴하는 것을 알 수 있다.



##### getTime() - setTime()

- getTime() 함수는 위에서 Date 생성자의 예제에서 잠깐 봤듯이
  Date 객체에 존재하는 밀리세컨드 시간을 long 타입으로 리턴하는 함수이다.

- setTime() 함수는 매개변수로 long 타입의 밀리세컨드 시간을 받아서
  Date 객체에 저장하는 함수이다.

- 아래는 getTime() 함수와 setTime() 함수의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Date date = new Date();
          long time = 0;
          date.setTime(time);
          System.out.println(date.getTime());
      }
  }
  
  // 0
  ```



##### from() - toInstant()

- from() 함수는 매개변수로 Instant 형 객체를 받아서
  Instant 객체에 저장되어 있는 시간을 담은 Date 객체를 리턴한다.
  이 from() 함수는 static 메소드이기 때문에 객체 없이 쉽게 사용할 수 있다.
- toInstant() 함수는 Date 객체에 저장되어 있는 시간을
  Instant 객체에 담아서 Instant 객체를 리턴하는 함수이다.



- 이쯤되면 Calendar 객체가 있는데 Date 객체가 왜 있냐고 물을 수도 있는데
  지금까지 만들어왔던 프로그램에 Date 객체가 사용되었을 경우
  호환이 안 될 가능성이 높기 때문이다.
  그래서 생성자도 두 개를 남겨둔 것을 알 수 있다.