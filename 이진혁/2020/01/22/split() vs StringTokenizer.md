## split() vs StringTokenizer

- 이번에는 split() 함수와 StringTokenizer의 차이점에 대해서 알아보겠습니다.
- 사실 split() 함수와 StringTokenizer는 용도가 같을뿐 완전히 다른 것입니다.
- 애초에 split() 함수는 String 객체의 메소드이고 StringTokenizer는 클래스이기 때문에
  완전히 다른 것이라고 볼 수 있습니다.
- 이 글의 본질은 split() 함수와 StringTokenizer 클래스에 대해서 더 자세히 파고들어보고자 함입니다.\
- 일단 split() 함수와 StringTokenizer 클래스에 대해서 알아보기전에 기초 지식을 알고 가자면
  split()함수와 StringTokenizer 클래스는 둘 다 어떠한 문자열이 있을 때
  어떠한 문자, 문자열을 중심으로 문자열을 나누는 기능을 가진 것들입니다.



## split()

- split() 함수는 위에서 말했던 것처럼 String 객체의 메소드입니다.

- 그렇기 때문에 메소드의 형태부터 살펴봐야 할 거 같습니다.

  ```java
  public String[] split(String);
  public String[] split(String, int);
  ```

- 위처럼 두 가지 형태로 오버로딩되어 있는 것을 알 수 있습니다.

- 일단 첫 번째 형태의 split() 함수를 사용해보면서 맛보기를 해보겠습니다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String fruit = "apple-/&banana-/&grape-/&kiwi-/&melon";
          String[] fruits = fruit.split("/");
          
          for(String s : fruits)
              System.out.println(s);
      }
  }
  
  // apple-
  // &banana-
  // &grape-
  // &kiwi-
  // &melon
  ```

- split() 함수의 매개변수에 넣어준 String을 기준으로 나누어서 String[]으로 리턴합니다.

- 그렇다면 다음 매개변수인 int는 무엇일까요?

- 그것은 나누었던 것들 중 몇 개를 리턴할 지 정하는 매개변수입니다.

- 현재 코드에서는 5개로 나누어서 String[]으로 리턴하였습니다.

- 만약 3개로 나누고 싶다고 하면 3개로 나누어져 나옵니다.
  하지만 3개중 2개만이 제대로 나누어지고 나머지 한 개에는 나누어지지 못한 것들이 뭉쳐져서 나옵니다.
  이 뜻은 아래의 코드를 보면서 알아봅시다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String fruit = "apple-/&banana-/&grape-/&kiwi-/&melon";
          String[] fruits = fruit.split("/", 3);
          
          for(String s : fruits)
              System.out.println(s);
      }
  }
  
  // apple-
  // &banana-
  // &grape-&kiwi-&melon
  ```

- 이렇게 나옵니다.
  예상과 다르셨을 분이 꼭 있을 것이라고 생각합니다.

- 그럼 만약 나누기 위해서 사용되는 저 구획문자만으로 이루어져 있는 문자열을 구획문자로 나누려고 한다면
  어떻게 될까요?

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String test = "-----";
          String[] arr = test.split("-");
          for(String[] s : arr)
              System.out.println(s);
      }
  }
  ```

- 이렇게 아무것도 안 나오게 됩니다.



## StringTokenizer

- StringTokenizer 클래스는 split() 함수와는 다르게 클래스라는 점을 가지고 있어서
  사용하기 번거롭다고 생각할 수도 있습니다.

- 물론 이 점때문에 split()함수보다 유명하지도 않고 많이 사용되지도 않는 다는 점이 있죠.

- 하지만 분명히 사용할때가 있습니다.
  이 StringTokenizer 클래스는 클래스이기 때문에 많은 메소드들을 가지고 있습니다.
  아래에서 알아보겠습니다.

  ```java
  -- 생성자 --
  StringTokenizer(String);
  StringTokenizer(String, String);
  StringTokenizer(String, String, boolean);
  
  -- 메소드 --
  public int countTokens();
  public boolean hasMoreTokens();
  public String nextToken();
  public String nextToken(String);
  
  public boolean hasMoreElments();
  public Object nextElement();
  ```

- 생각보다 많은 메소드와 생성자를 가지고 있습니다.

- 생성자부터 설명을 해보자면 일단 첫 번째 생성자는 매개변수가 String 변수 하나라는 것을 알 수 있습니다.
  첫 번째 생성자는 Token으로 나눌 text만을 넣을 수 있죠.
  그렇다면 구획문자 없이 어떻게 나누나요?
  디폴트로 \t, \r, \f, \n과 같은 이스케이프 시퀀스가 존재합니다.
  대부분 띄어쓰기를 구분할 때 이런 형식의 생성자를 사용합니다.

- 두 번째 생성자는 매개변수로 String형의 변수를 두 개 가지고 있습니다.
  첫 번째 매개변수에는 Token으로 나눌 text, 두 번째 매개변수에는 구획문자가 들어갑니다.
  split() 함수와는 다르게 정규표현식이 사용이 불가능하죠.

- 세 번째 생성자는 매개변수로 String형의 변수 두 개, boolean형의 변수 하나를 가지고 있습니다.
  두 번째 생성자와 같은 String형 매개변수의 특성이 존재하며
  boolean형 변수는 디폴트로 false를 가지고 있습니다.
  만약 세 번째 매개변수가 true라면 구획문자도 하나의 Token으로써 취급합니다.
  만약 구획문자가 두 글자 이상이라면 여러 개의 Token으로 만듭니다.



- 다음은 메소드에 대한 설명입니다.
- 첫 번째 메소드인 countTokens() 함수는 StringTokenizer 클래스에
  몇 개의 토큰이 남아있는지 확인하는 함수입니다.
- 두 번째 메소드인 hasMoreTokens() 함수는 빼낼 수 있는 Token이 존재하는지 확인하고
  존재하면 true, 존재하지 않으면 false를 내보냅니다.
- 세 번째 메소드인 nextToken() 함수는 Token을 하나 빼내서 리턴합니다.
- 네 번째 메소드인 nextToken(String) 함수는 구획문자를 String 매개변수로 바꾸고
  그에 맞는 Token을 하나 빼내서 리턴합니다.
- 다섯 번째 메소드인 hasMoreElments() 함수와 여섯 번째 메소드인 nextElement() 함수는
  각각 hasMoreTokens() 함수와 nextToken() 함수와 유사하게 생겼으며 기능도 거의 같습니다.
  하지만 enum 클래스의 사용여부에 따라서 enum 클래스의 사용이 존재하다면 Elements 메소드들을,
  아니라면 일반적으로 Token 메소드들을 사용합니다.



- 이 StringTokenizer 클래스는 기본적으로 두 가지 방식의 출력 방식을 제공합니다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String fruit = "apple-/&banana-/&grape-/&kiwi-/&melon";
          StringTokenizer st = new StringTokenizer(fruit, "/");
          
          /* 1번
          while(st.hasMoreTokens())
              System.out.println(st.nextToken());
          */
          /* 2번
          for(int i = 0 ; i < st.countTokens() ; i++)
              System.out.println(st.nextToken());
          */
      }
  }
  ```

- 둘 다 같은 출력을 보입니다.