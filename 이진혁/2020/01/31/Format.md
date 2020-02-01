## Format

- Format 클래스는 이름 그대로 형식을 직접 정하여 그에 따라 정리하는 것을 말합니다.
- Format 클래스는 abstract 클래스로써 세 가지의 하위(자손) 클래스를 가지고 있습니다.
  그 세 가지는 아래와 같습니다.
  - DateFormat
  - MessageFormat
  - NumberFormat



### 1. DateFormat

- DateFormat 클래스는 Date 클래스의 시간 출력을
  개발자 마음대로 바꿀 수 있도록 도와주는 클래스입니다.

- 아래는 DateFormat 클래스를 사용하는 간단한 예제입니다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Date time = new Date();
          
          DateFormat df1 = DateFormat.getDateInstance(DateFormat.FULL);
         	DateFormat df2 = DateFormat.getDateInstance(DateFormat.ERA_FIELD);
          
          DateFormat df3 = DateFormat.getDateInstance(DateFormat.LONG);
         	DateFormat df4 = DateFormat.getDateInstance(DateFormat.YEAR_FIELD);
          
          DateFormat df5 = DateFormat.getDateInstance(DateFormat.MEDIUM);
         	DateFormat df6 = DateFormat.getDateInstance(DateFormat.DEFAULT);
          DateFormat df7 = DateFormat.getDateInstance(DateFormat.MONTH_FIELD);
          
         	DateFormat df8 = DateFormat.getDateInstance(DateFormat.SHORT);
          DateFormat df9 = DateFormat.getDateInstance(DateFormat.DATE_FIELD);
          
          System.out.println(df1.format(time));
          System.out.println(df2.format(time));
          System.out.println();
          System.out.println(df3.format(time));
          System.out.println(df4.format(time));
          System.out.println();
          System.out.println(df5.format(time));
          System.out.println(df6.format(time));
          System.out.println(df7.format(time));
          System.out.println();
          System.out.println(df8.format(time));
          System.out.println(df9.format(time));
      }
  }
  
  // 2020년 1월 31일 금요일
  // 2020년 1월 31일 금요일
  //
  // 2020년 1월 31일 (금)
  // 2020년 1월 31일 (금)
  //
  // 2020. 1. 31
  // 2020. 1. 31
  // 2020. 1. 31
  //
  // 20. 1. 31
  // 20. 1. 31
  ```

- 사실 이러한 간단한 기능 말고도 많은 기능들이 존재하지만
  이 클래스의 하위 클래스인 SimpleDateFormat이 존재하기 때문에
  거의 사용되지 않는 클래스라서 굳이 많이 알 필요는 없을 듯하다.

- 그럼 SimpleDateFormat 클래스가 무엇을 하는 역할인지 알아야 한다.
  기존의 DateFormat 클래스는 이미 정해져 있는 형식으로 시간을 format 해야 한다면
  SimpleDateFormat 클래스는 format하고 싶은 형식을 개발자가 사용자 지정으로 만들 수 있다.
  아래는 SimpleDateFormat 클래스의 간단한 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Date time = new Date();
          SimpleDateFormat sdf = new SimpleDateFormat(
              "yyyy년 MM월 dd일 a hh시 mm분 ss초");
          System.out.println(sdf.format(time));
      }
  }
  
  // 2020년 01월 31일 오전 10시 42분 34초
  ```

- 아마 코드에서 눈치 챘겠지만 y, m, d, a, h, m, s 각각 마다 시간을 나타내는 기호인 것이다.
  사실 이것보다 훨씬 많은데 그것까지 사용해야겠다면 찾아서 사용하는 것을 추천한다.
  그래도 아래에 Java API SE8 에서 제공하는 문자표가 존재하니 그것을 보기 바란다.



### 2. MessageFormat

- MessageFormat 클래스는 하위 클래스가 존재하지 않는 클래스이다.
  그렇다는건 이 클래스에서 부족한 기능이 거의 없다고 봐도 무방하다는 뜻이다.

- MessageFormat 클래스는 문자열을 format할때 사용되는 클래스이다.
  실제로 DB처리를 해본 사람은 알 것이다.
  물론 나도 DB처리를 하면서 + 연산자를 통해서 문자열을 더럽게 더한 적이 있다.
  아래를 참고하자.

  ```java
  String sql = "insert into eo-jjeo-gu values ("
      + "'" + "이진혁" + "','" + "18살" + "','" + "DSM" + "')";
  ```

- 이제 MessageFormat을 알게 되었으니 MessageFormat을 사용한 깔끔한 방법을 사용해보겠다.
  아래를 참고하자.

  ```java
  String t = "insert into eo_jjeo-gu values(\"{0}\",\"{1}\",\"{2}\")";
  String sql = MessageFormat.format(t, "이진혁", "18살", "DSM");
  ```

- 좀 길어졌다고 생각할 수 있지만 항목이 더 많으면 이게 더 짧을 뿐더러
  한눈에 무엇을 하는지 알아보기 편하다.



### 3. NumberFormat

- NumberFormat 클래스에는 하위 클래스로 두 가지 클래스가 존재합니다.
  NumberFormat 클래스는 추상 클래스이므로 인스턴스 생성을 권장하지는 않습니다.
  굳이 생성하고 싶다면 익명 객체를 이용하여야 합니다.

- 하위 클래스는 아래와 같습니다.

  - DecimalFormat

  - ChoiceFormat

    ##### DecimalFormat

    - DecimalFormat는 지금까지 getInstance() 메소드를 이용해서 객체를 생성하던
      다른 Format 클래스와는 다르게 new 연산자를 이용해서 객체를 생성합니다.
      따라서 일반 클래스입니다.

    - DecimalFormat 클래스는 NumberFormat 클래스를 상속받은 만큼
      숫자를 format하는 역할을 담당합니다.

    - 그 중에서도 숫자의 문자 형식을 처리하는 역할을 주로 합니다.
      예를 들면 '0' 3개당 ','를 하나씩 붙이는 일과 같은 겁니다.

    - 이 DecimalFormat 클래스를 사용하기 위해서는 정해진 문자를 알아야합니다.

      ```java
      0 : 10진수 하나 (존재하지 않으면 0으로 채움)
      # : 10진수 하나 (존재하지 않으면 비워둠)
      . : 소숫점 표시
      - : 음수 표시
      + : 양수 표시
      , : 단위 구분자
      ; : 패턴 구분자
      E : 지수 표시
      % : 퍼센트 표시
      ```

    - 이 문자들을 이용하여 하나의 형식을 만들고 그 형식을 문자열 형태로
      DecimalFormat 클래스의 생성자의 매개변수로 주면 됩니다.
      아래의 예제를 보자.

      ```java
      public class MainClass {
          public static void main(String[] args) {
              double number = 1234.56;
              DecimalFormat df1 = new DecimalFormat("#,###");
              DecimalFormat df2 = new DecimalFormat("0000000000.000000");
              DecimalFormat df3 = new DecimalFormat("+####;-####");
              
              System.out.println(df1.format(number));
              System.out.println(df2.format(number));
              System.out.println(df3.format(number));
          }
      }
      
      // 1,235
      // 0000001234.560000
      // +1235
      ```

      

      ##### ChoiceFormat

      - ChoiceFormat은 똑같이 숫자들을 format하지만 이는 if문이나 switch-case문과 유사합니다.
        숫자 제한을 낮은 순서부터 높은 순서까지 차례대로 걸며 걸리는 부분의 문자열로 대체합니다.

      - 여기서의 #은 같다는 것을 의미하며 |는 '또는'을 의미하며 <은 작다라는 것을 의미한다.

        ```java
        public class MainClass {
            public static void main(String[] args) {
                ChoiceFormat cf = new ChoiceFormat("1#One|2#Two|4#FOUR|10<BIGNUM");
                System.out.println(cf.format(1));
                System.out.println(cf.format(2));
                System.out.println(cf.format(3));
                System.out.println(cf.format(4));
                System.out.println(cf.format(100));
            }
        }
        
        // One
        // Two
        // BIGNUM
        // FOUR
        // BIGNUM
        ```

        