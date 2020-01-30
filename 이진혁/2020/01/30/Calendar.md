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
  Calendar(TimeZone zone, Locale aLocale);
  ```
  
- 첫 번째 생성자는 기본 생성자로 가장 많이 쓰인다.
  이 생성자는 현재 OS에 저장되어 있는 표준시간으로 TimeZone을 설정한다.
  그리고 Locale도 자동으로 설정하는데
  이 Locale이 무슨 역할을 하는지 정확히 밝혀내지 못해서 알아내면
  다시 커밋을 할 예정이다.
  
- 두 번째 생성자는 TimeZone과 Locale을 자신이 알아서 설정하는 생성자이다.
  TimeZone 클래스와 Locale 클래스는 나중에 따로 확실하게 알아봐서
  다시 정리할 예정이다.

- 이렇게 두 가지 생성자에 대해서 알아보았다.
  아래에서는 편의를 위해서 첫 번째 생성자인 기본 생성자만 사용할 예정이다.



- 아래는 Calendar 클래스의 메소드이다.
  메소드가 매우 많아서 Object 에서 상속 받은 것이나
  상위 클래스에서 오버로딩된 toString() 같은 메소드들은 포함하지 않을 것이다.
  손이 아파서 public은 모두 제외할 예정이었으나 protected 도 있어서 적을 거...다...

  ```java
  public static Calendar getInstance();
  public static Calendar getInstance(Locale aLocale);
  public static Calendar getInstance(TimeZone zone);
  public static Calendar getInstance(TimeZone zone, Locale aLocale);
  
  public int get(int field);
  
  public void set(int field, int value);
  public void set(int year, int month, int date);
  public void set(int year, int month, int date, int hourOfDay, int minute);
  public void set(int year, int month, int date, int hourOfDay, int minute, int second);
  
  public boolean after(Object when);
  public boolean before(Object when);
  
  public abstract void add(int field, int amount);
  
  public void clear();
  public void clear(int field);
  
  protected void complete();
  protected abstract void computeFields();
  protected abstract void computeTime();
  
  public int getActualMaximum(int field);
  public int getActualMinimum(int field);
  public static Set<String> getAvailableCalendarTypes();
  public static Locale[] getAvailableLocales();
  public String getCalendarType();
  public String getDisplayName(int field, int style, Locale locale);
  public Map<String, Integer> getDisplayNames(int field, int style, Locale locale);
  public int getFirstDayOfWeek();
  public abstract int getGreatestMinimum(int field);
  public abstract int getLeeastMaximum(int field);
  public abstract int getMaximum(int field);
  public int getMinimalDaysInFirstWeek();
  public abstract int getMinimum(int field);
  public Date getTime();
  public long getTimeInMillis();
  public TimeZone getTimeZone();
  public int getWeeksInWeekYear();
  public int getWeekYear();
  protected int internalGet(int field);
  public boolean isLenient();
  public boolean isSet(int field);
  public boolean isWeekDateSupported();
  public abstract void roll(int field, boolean up);
  public void roll(int field, int amount);
  
public void setFirstDayOfWeek(int value);
  public void setLenient(boolean lenient);
public void setMinimalDaysInFirstWeek(int value);
  public void setTime(Date date);
  public void setTimeInMillis(long millis);
  public void setTimeZone(TimeZone value);
  public void setWeekDate(int WeekYear, int weekOfYear, int dayOfWeek);
  ```
  
- 이렇게 많은 메소드들이 Calendar 클래스에 내장되어 있다.
  그럼 차차 이 메소드들에 대해서 설명하고자 한다.



##### 1. getInstance()

- getInstance() 메소드는 위에서 보았듯이 총 네 가지로 오버로딩되어 있다.
  애초에 getInstance() 메소드 자체가 추상 클래스의 객체를 생성하거나
  private 생성자를 사용하는 클래스를 위해서 객체를 리턴하도록 만들어진 메소드이기 떄문에
  많이들 알고 있는 메소드라고 생각된다.

  ###### 1-1. getInstance()

  - 첫 번째 오버로딩된 getInstance() 메소드는 매개변수가 없어서
    OS에 기록되어 있는 TimeZone과 Locale을 바탕으로 설정하게 됩니다.

  ###### 1-2. getInstance(Locale aLocale)

  - 두 번째 오버로딩된 getInstance() 메소드는 Locale만 원하는 대로 하고 싶을 경우 사용합니다.
    TimeZone은 OS에 저장되어 있는 값으로 자동 설정됩니다.

  ###### 1-3. getInstance(TimeZone zone)

  - 세 번째 오버로딩된 getInstance() 메소드는 TimeZone만 원하는 대로 하고 싶을 경우 사용합니다.
    Locale은 OS에 저장되어 있는 값으로 자동 설정됩니다.

  ###### 1-4. getInstance(TimeZone zone, Locale aLocale)

  - 네 번째 오버로딩된 getInstance() 메소드는
    TimeZone과 Locale을 자신이 마음대로 설정할 수 있는 메소드입니다.
    위의 메소드도 포함되지만 TimeZone과 Locale을 설정하면서
    존재하지 않는 문자열을 넣어도 오류가 발생하지 않는다는 점에서
    Calendar 클래스의 문제를 제기하고 있습니다.



- 아래는 getInstance() 메소드를 이용하여 객체를 생성하는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Calendar calendar1 = Calendar.getInstance();
          Calendar calendar3 = Calendar.getInstance(Locale.KOREA);
          Calendar calendar2 = Calendar.getInstance(TimeZone.getTimeZone("Asia/Seoul"));
          Calendar calendar4 = Calendar.getInstance(
          					TimeZone.getTimeZone("Asia/Seoul"), Locale.KOREA);
      }
  }
  ```

- calendar4 객체만 설명하자면 Asia/Seoul TimeZone의 시간대를 사용하고
  Locale은 KOREA로써 한국어를 사용한다.



##### 2. get()

- get() 메소드는 오버로딩되어 있지 않아 하나로 존재하지만
  이 하나로 Calendar 객체에 들어있는 필드값들을 꺼내올 수 있기 때문에
  가장 중요한 메소드 중 하나이다.

- get() 메소드의 매개변수로는 int형의 field 값이 들어오는데
  Calendar 클래스를 사용할때 매개변수가 int field일 경우에는 Calendar 상수를 이용한다고 보면 된다.
  Calendar 상수는 굉장히 많다.
  너무 많아서 적지 못하는 점 양해를 부탁한다.

- 아래는 get() 메소드를 사용하는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Calendar calendar = Calendar.getInstance();
          
          int year = calendar.get(Calendar.YEAR);
          int month = calendar.get(Calendar.MONTH);
          int date = calendar.get(Calendar.DATE);
          int hour = calendar.get(Calendar.HOUR);
          int minute = calendar.get(Calendar.MINUTE);
          int second = calendar.get(Calendar.SECOND);
          
          System.out.println(year + "년 " + month + "월 " + date + "일 "
                            + hour + "시 " + minute + "분 " + second + "초 ");
      }
  }
  
  // 2020년 0월 30일 11시 40분 24초
  ```

- 위를 보면 의문점이 생길 것이다.
  오늘은 2020년 1월 30일 11시 40분 24초인 것까지는 확인할 수 있다.
  근데 출력된 부분에서는 0월이라고 출력이 되어 있다.
  이것은 Calendar 객체에서 1월부터 12월까지를 0 ~ 11로 표현하기 때문이다.
  왜 이렇게 표현하냐고 묻는다면 Date 객체가 이렇게 표현했었기 때문이다.
  그럼 Date 객체는 왜 이렇게 표현한다고 묻는다면
  ... 묻지마라

- 그래서 월을 출력할 때는 꼭 +1을 해서 출력해야 한다.
  근데 이 출력 방식이 또 오류가 발생하는 경우가 많다.
  아래를 살펴보자.

  ```java
  System.out.println(calendar.get(Calendar.MONTH));			// 0
  System.out.println(calendar.get(Calendar.MONTH + 1));		// 5
  System.out.println(calendar.get(Calendar.MONTH) + 1);		// 1
  System.out.println((calendar.get(Calendar.MONTH) + 1));		// 1
  ```

- 이렇게 세 번째와 네 번째 방식대로 +1을 했을때는 정상적으로 1이 더해졌지만
  두 번째 방식대로 했을 때는 예상치 못한 값이 나오는 것을 알 수 있다.

- 두 번째 방식은 get() 메소드의 리턴값인 int형의 변수에 + 연산을 한 것이 아니라
  get() 메소드의 매개변수에 Calendar.MONTH + 1 의 값을 넣은 것이므로
  예상치 못한 값이 나온 것이다.

- 세 번째와 네 번째가 무엇이 다르냐고 할 수 있는데
  이것은 특정상황에서 문제가 된다.
  아래의 상황을 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Calendar cal = Calendar.getInstance();
          
          System.out.println(cal.get(Calendar.YEAR) + "년 "
  						+ (cal.get(Calendar.MONTH) + 1) + "월");
          
          System.out.println(cal.get(Calendar.YEAR) + "년 "
  						+ cal.get(Calendar.MONTH) + 1 + "월");
      }
  }
  
  // 2020년 1월
  // 2020년 01월
  ```

- 첫 번째 출력은 네 번째 방식을 사용해서 출력한 것이고
  두 번째 출력은 세 번재 방식을 사용해서 출력한 것이다.

- 이렇게 java에서는 문자열, 상수, 메소드의 리턴값끼리의 + 연산을 할때
  앞에서부터 연산하기 때문에 cal.get(Calendar.MONTH) + 1 앞에
  문자열이 있을 경우에 세 번째 방식이 잘못된 방식으로 출력될 수가 있다.

- 많이 실수하는 부분이니 잘 계산해야한다.



- get() 메소드를 소개함과 동시에 get() 메소드에 상용할 수 있는 유용한 Calendar 상수에 대해서 소개하겠다.

  ```java
  Calendar.DAY_OF_WEEK : 오늘이 무슨 요일인지 출력한다.
  					   일월화수목금토 순이며 일요일이 1로부터 시작이다.
  					   Date 객체는 일요일이 0이라서 호환의 오류가 발생한다.(참고)
  Calendar.DAY_OF_MONTH : 오늘이 몇 일인지 출력한다.
      					DATE 랑 뭐가 다른지 찾는데 실패하였다... ㅠㅠ
  Calendar.DAY_OF_WEEK_IN_MONTH : 오늘의 요일을 찾고
  								그 요일이 이번달의 몇 번째 돌아오는 요일인지 탐색하고
  								그 몇 번을 리턴한다.
  Calendar.DAY_OF_YEAR : 1년 중 오늘이 몇 번째 날인지 출력한다.
  					   예를 들면 2월 1일에 실행하면 32가 리턴된다.
  Calendar.AM_PM : 지금 시간이 오전이면 0, 오후이면 1을 출력한다.
  				 이를 비교하기 위해서 Calendar.AM과 Calendar.PM을 지원한다.
  				 Calendar.AM은 0이고 Calendar.PM 1이다.
  				 하지만 명시적인 것이 좋기 때문에 Calendar.AM과 Calendar.PM을 사용한다.
  Calendar.WEEK_OF_MONTH : 이번달 중 오늘이 몇 번째 주인지 출력한다.
  Calendar.WEEK_OF_YEAR : 1년 중 오늘이 몇 번째 주인지 출력한다.
  ```

  



##### 3. set()

- set() 메소드도 getInstance() 메소드처럼 많은 오버로딩된 메소드를 가지고 있습니다.
  모든 오버로딩된 메소드를 알고 싶으시다면 위의 모든 Calendar 메소드를 참고하십시오.

- 아래에서는 set() 메소드의 오버로딩된 메소드들을 소개할 예정입니다.
  시작하기에 앞서 set()의 대략적인 소개를 하자면
  Calendar 객체를 생성하게 되면 기본적으로 현재시간을 저장하는데
  그것을 우리가 직접 바꾸고 싶을때 사용하는 메소드입니다.

- 따라서 다시 설정(setting < set >)하는 역할을 하는 메소드이죠.

  ###### 3-1. set(int field, int value)

  - 첫 번째 오버로딩된 set() 메소드는
    내가 생각했을때 set() 메소드들 중에서 가장 많이 쓰이는 메소드이지 않나싶다.

  - 매개변수에서 추측할 수 있겠지만
    첫 번째 매개변수는 Calendar 상수를 이용하여 무슨 필드를 변경할 것인지 정하는 매개변수이고,
    두 번째 매개변수는 첫 번째 매개변수에 대입할 값(value)를 정하는 매개변수이다.

  - 아래는 본 오버로딩된 메소드의 예제이다.

    ```java
    public class MainClass {
        public static void main(String[] args) {
            Calendar calendar = Calendar.getInstance();
            
            System.out.println("-- 현재시간");
            System.out.println(calendar.get(Calendar.YEAR) + "년 "
    				+ (calendar.get(Calendar.MONTH) + 1) + "월 "
    				+ calendar.get(Calendar.DATE) + "일 "
    				+ calendar.get(Calendar.HOUR) + "시 "
    				+ calendar.get(Calendar.MINUTE) + "분 "
    				+ calendar.get(Calendar.SECOND) + "초 ");
            
            calendar.set(Calendar.YEAR, 2021);
            calendar.set(Calendar.MONTH, 2 - 1);
            calendar.set(Calendar.DATE, 28);
            
            System.out.println("-- 첫 번째 변환");
            System.out.println(calendar.get(Calendar.YEAR) + "년 "
    				+ (calendar.get(Calendar.MONTH) + 1) + "월 "
    				+ calendar.get(Calendar.DATE) + "일 "
    				+ calendar.get(Calendar.HOUR) + "시 "
    				+ calendar.get(Calendar.MINUTE) + "분 "
    				+ calendar.get(Calendar.SECOND) + "초 ");
            
            calendar.set(Calendar.DATE, 29);
            
            System.out.println("-- 두 번째 변환 ( 2월 29일 ? )");
            System.out.println(calendar.get(Calendar.YEAR) + "년 "
    				+ (calendar.get(Calendar.MONTH) + 1) + "월 "
    				+ calendar.get(Calendar.DATE) + "일 "
    				+ calendar.get(Calendar.HOUR) + "시 "
    				+ calendar.get(Calendar.MINUTE) + "분 "
    				+ calendar.get(Calendar.SECOND) + "초 ");
        }
    }
    
    // 2020년 1월 30일 0시 04분 32초 
    // 2021년 2월 28일 0시 04분 32초
    // 2021년 3월 1일 0시 04분 32초
    ```

  - 첫 번째 출력은 비교하기 위한 대상인 현재 시간을 출력한 것이라 볼 게 없다.

  - 두 번째 출력은 년, 월, 일을 각각 변경한 뒤 시간을 출력하였는데
    한 개만 변경하는 set() 메소드의 첫 번째 오버로딩된 메소드의 특성상
    다른 시, 분, 초는 건들지 않은 것을 볼 수 있다.

  - 세 번째 출력은 실험적으로 결과를 만들었다.
    2021년은 윤년이 아니기 때문에 2월 29일이 존재하지 않는다.
    따라서 2월 29일을 설정하면 어떻게 될까라는 생각으로 했는데
    29일은 28일의 다음 날이므로 3월 1일이 된 것을 알 수 있다.

  - 그럼 만약에 년, 월, 일 , 시, 분, 초들을 - 단위로 주게 되면 어떻게 될까?
    결과는 의외로 간단했다. - 단위로 준만큼 뒤로 간다.
    근데 - 단위로 준 만큼의 -1 만큼 더 간다.
    왜냐하면 0을 넣었을때 한 칸 뒤로 가기 때문이다.
    물론 MONTH는 0이 존재하기 때문에 -1이 -1로 잘 작동한다.

    ```java
    public class MainClass {
        public static void main(String[] args) {
            Calendar cal = Calendar.getInstance();
            
            /* 초기값 */
            cal.set(Calendar.YEAR, 2020);
            cal.set(Calendar.MONTH, 3 - 1);
            cal.set(Calendar.DATE, 2);
            
            cal.set(Calendar.DATE, -3);
            System.out.println(cal.get(Calendar.YEAR) + " "
                              + (cal.get(Calendar.MONTH) + 1) + " "
                              + cal.get(Calendar.DATE));
            
            cal.set(Calendar.YEAR, -2);
            System.out.println(cal.get(Calendar.YEAR) + " "
                              + (cal.get(Calendar.MONTH) + 1) + " "
                              + cal.get(Calendar.DATE));
        }
    }
    
    // 2020 2 26
    // 3 2 26
    ```

  - 여기도 오해의 소지가 있을 수 있는데 초기값을 설정한 뒤
    마이너스(-) 값의 설정을 할때 초기값에서 -연산을 통해 빼는 것이 아니라
    1일에서 -n -1 을 한다고 생각해야 한다.

  - 그리고 DATE에 -값을 주면 MONTH에 영향이 간다.
    물론 MONTH에 -값을 주면 YEAR에 영향이 간다.
    그러면 YEAR에 -값을 주면 영향은 가지 않고
    준 값의 절대값에 +1하여 년도가 정해진다.

  - 마지막으로 위에서 MONTH를 설정할때 3 - 1 처럼 표현하냐고 물을 수도 있는데
    이것은 3월을 2로 설정해야 하기 때문에 보기 편하라고 적어놓는 것이다.

    
  
  ###### 3-2. set(int year, int month, int date)
  
  - 두 번째 오버로딩된 set() 메소드는 year, month, date를 한 꺼번에 변경할 수 있는 메소드이다.
    첫 번째 오버로딩된 set() 메소드는 하나씩만 바꿀 수 있어서 여러 줄을 차지하는 것을 감수했어야만 했다.
    하지만 이 메소드는 한꺼번에 변경할 수 있도록 지원하는 메소드이다.
  
    ```java
    public class MainClass {
        public static void main(String[] args) {
            Calendar cal = Calendar.getInstance();
            cal.set(2020, 1 - 1, 30);
            System.out.println(cal.get(Calendar.YEAR) + " "
                              + (cal.get(Calendar.MONTH) + 1) + " "
                              + cal.get(Calendar.DATE));
        }
    }
    
    // 2020 1 30
    ```
  
  - 위의 예제에서는 나오지 않았지만 다른 시, 분, 초는 변함이 없다.
  
    
  
  ###### 3-3. set(int year, int month, int date, int hourOfDay, int minute)
  
  - 세 번째 오버로딩된 set() 메소드는 두 번째 오버로딩된 set() 메소드에서 더 추가되어
    HOUR, MINUTE도 같이 변경할 수 있도록 하는 메소드이다.
    아래는 간단한 예제이다.
  
    ```java
    public class MainClass {
        public static void main(String[] args) {
            Calendar cal = Calendar.getInstance();
            cal.set(2020, 1 - 1, 30, 10, 30);
            System.out.println(cal.get(Calendar.YEAR) + "."
    						  + (cal.get(Calendar.MONTH) + 1) + "."
                              + cal.get(Calendar.DATE) + " "
                              + cal.get(Calendar.HOUR) + ":"
                              + cal.get(Calendar.MINUTE) + ":??");
        }
    }
    
    // 2020.1.30 10:30:??
    ```
  
  
  
  ###### 3-4. set(int year, int month, int date, int hourOfDay, int minute, int second)
  
  - 네 번째 오버로딩된 set() 메소드는
    세 번째 오버로딩된 set() 메소드에 초(second)도 변경할 수 있도록 추가된 메소드이다.
    아래는 간단한 예제이다.
  
    ```java
    public class MainClass {
        public static void main(String[] args) {
            Calendar cal = Calendar.getInstance();
            cal.set(2020, 1 - 1, 30, 10, 30, 36);
            System.out.println(cal.get(Calendar.YEAR) + "."
    						  + (cal.get(Calendar.MONTH) + 1) + "."
                              + cal.get(Calendar.DATE) + " "
                              + cal.get(Calendar.HOUR) + ":"
                              + cal.get(Calendar.MINUTE) + ":"
                              + cal.get(Calendar.SECOND));
        }
    }
    
    // 2020.1.30 10:30:36
    ```



##### 4. after() - before()

- after() 메소드와 before() 메소드는 Date 클래스의 after() 메소드와 before() 메소드와 동일하다.
  다른 점이라고 한다면 매개변수가 Date 클래스에서는 Date 객체였지만
  Calendar 클래스는 Object 라는 점이 다르다.
  아래는 after() 메소드와 before() 메소드의 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Calendar calendar1 = Calendar.getInstance();
          Calendar calendar2 = Calendar.getInstance();
          
          calendar1.set(2020, 1-1, 10, 0, 0, 0);
          calendar2.set(2020, 1-1, 20, 0, 0, 0);
          
          System.out.println("calendar1.after(calendar2) : "
                            + calendar1.after(calendar2));
          System.out.println("calendar1.before(calendar2) : "
                            + calendar1.before(calendar2));
      }
  }
  
  // false
  // true
  ```

  

##### 5. add()

- add() 메소드는 추상메소드이다.
  근데 지금까지 객체를 생성함에 있어서 add() 메소드를 구현한 적은 없다.
  하지만 객체 생성이 되었던 이유는 getInstance() 내부에서 add() 메소드를 default 구현하기 때문이다.
  만약 add() 메소드를 직접 구현하고 싶다면 익명 객체를 사용하여 add() 메소드를 구현하면 된다.
  물론 Calendar 객체에는 add() 추상 메소드를 제외하고도 추상 메소드가 5개 더 있기 때문에
  그것들도 구현해주어야 한다.

- default로 구현되어 있는 add() 메소드는 첫 번째 매개변수로 add 연산을 할 field값을 받고
  두 번째 매개변수로 변경할 수치를 받는다.

- add()를 구현하는 것은 자신의 자유이니 여기서는 default 구현 add() 메소드에 대해서 알아보겠다.
  아래는 Default add() 메소드를 사용하는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Calendar calendar = Calendar.getInstance();
          calendar.set(2020, 1-1, 20, 0, 0, 0);
          
          calendar.add(Calendar.DATE, 5);
          System.out.println(calendar.get(Calendar.YEAR) + "."
                            + (calendar.get(Calendar.MONTH) + 1) + "."
                            + calendar.get(Calendar.DATE) + " "
                            + calendar.get(Calendar.HOUR) + ":"
                            + calendar.get(Calendar.MINUTE) + ":"
                            + calendar.get(Calendar.SECOND));
          
          calendar.add(Calendar.DATE, -25);
          System.out.println(calendar.get(Calendar.YEAR) + "."
                            + (calendar.get(Calendar.MONTH) + 1) + "."
                            + calendar.get(Calendar.DATE) + " "
                            + calendar.get(Calendar.HOUR) + ":"
                            + calendar.get(Calendar.MINUTE) + ":"
                            + calendar.get(Calendar.SECOND));
      }
  }
  
  // 2020.1.25 0:0:0
  // 2019.12.31 0:0:0
  ```

- 마이너스(-) 연산도 가능한 것을 알 수 있고
  마이너스(-) 연산시에 -범위에 들어갈 경우 상위 요소에 영향을 미칠 수 있다.



##### clear()

- clear() 메소드는 이름 그대로 깨끗하게 클리어하는 메소드이다.
  그니까 가장 초기 값인 1970년 1월 1일 0시 0분 0초로 되돌린다는 것이다.

- clear() 메소드는 두 가지로 오버로딩되어 있다.
  아래를 살펴보자.

  ###### clear()

  - 첫 번째 오버로딩된 clear() 메소드는 매개변수가 없는 형태이다.
    따라서 모든 요소를 리셋한다.
    여기서 [모든 요소]는 YEAR, MONTH, DATE, HOUR, MINUTE, SECOND 이다.
    각각 1970, 0(1월), 1, 0, 0, 0으로 초기화 한다.

  ###### clear(int field)

  - 두 번째 오버로딩된 clear() 메소드는 매개변수로 field를 받는 형태이다.
    따라서 매개변수로 들어온 요소만 리셋한다.
    이것도 위의 요소 초기화 수치와 같게 초기화한다.



- 사실 모든 메소드에 대해서 소개하고 싶었지만 메소드가 너무 많아서 핵심만 정리하였다.
  그래도 정리하지 않은 메소드 중에서도 이름만 봐도 알 수 있는 메소드들이 많으니
  그때그때 찾아보면 될 것 같다.