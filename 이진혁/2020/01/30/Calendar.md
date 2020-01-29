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
  상위 클래스에서 오버로딩된 toString() 같은 함수들은 포함하지 않을 것이다.
  손이 아파서 public은 모두 제외할 예정이었으나 protected 도 있어서 적을 그...다...

  ```java
  public abstract void add(int field, int amount);
  public boolean after(Object when);
  public boolean before(Object when);
  public void clear();
  public void clear(int field);
  protected void complete();
  protected abstract void computeFields();
  protected abstract void computeTime();
  public int get(int field);
  public int getActualMaximum(int field);
  public int getActualMinimum(int field);
  public static Set<String> getAvailableCalendarTypes();
  public static Locale[] getAvailableLocales();
  public String getCalendarType();
  public String getDisplayName(int field, int style, Locale locale);
  public Map<String, Integer> getDisplayNames(int field, int style, Locale locale);
  public int getFirstDayOfWeek();
  public abstract int getGreatestMinimum(int field);
  public static Calendar getInstance();
  public static Calendar getInstance(Locale aLocale);
  public static Calendar getInstance(TimeZone zone);
  public static Calendar getInstance(TimeZone zone, Locale aLocale);
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
  public void set(int field, int value);
  public void set(int year, int month, int date);
  public void set(int year, int month, int date, int hourOfDay, int minute);
  public void set(int year, int month, int date, int hourOfDay, int minute, int second);
  public void setFirstDayOfWeek(int value);
  public void setLenient(boolean lenient);
  public void setMinimalDaysInFirstWeek(int value);
  public void setTime(Date date);
  public void setTimeInMillis(long millis);
  public void setTimeZone(TimeZone value);
  public void setWeekDate(int WeekYear, int weekOfYear, int dayOfWeek);
  ```

  

  

