## String Methods

- String 객체에는 Method가 여러 개 존재한다.
- 전에 올렸던 getBytes() 함수도 String Method 중에 하나이다.
- 이번에 알아볼 String Method는
  indexOf, length, replace, substring, toLowerCase, toUpperCase, trim, valueOf 함수이다.
- 이 8 가지의 String Method는 많이들 사용해봤을만한 함수이지만
  잘 사용하지 않는 함수도 존재해서 기능을 잊어버릴 경우가 많다.
- 그래서 여기에 궁금한 점을 테스트하고 적어놓고자한다.



### 1. indexOf()

- indexOf() 함수는 문자열 속에서 원하는 문자열이 존재하는지 존재하지 않는지 확인하는 함수이다.

- 만약에 그 문자열이 존재하면 그 문자열이 존재하는 시작 인덱스를 리턴하고
  문자열이 존재하지 않으면 -1을 리턴한다.

- 일단 기본적으로 사용하는 방법을 코드로 알아보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String str = new String("i love you");
          System.out.println(str.indexOf("love"));
      }
  }
  
  // 2
  ```

- "i love you"라는 문자열을 indexOf() 함수를 이용해서 "love"라는 문자열을 추출한다면
  아래와 같은 인덱스가 나온다.

  ```java
  |i| | | |l| |o| |v| |e| | | |y| |o| |u|
   0   1   2   3   4   5   6   7   8   9
  ```

- 위와 같이 "love" 문자열의 첫 번째 인덱스인 'l'이 존재하는 인덱스인 2가 출력이 되는 것이다.



- 만약에 존재하는지 확인하고 싶은 문자열이 두 개가 존재하면 어떻게 될까?

- 일단 한 번 실험을 하는 코드를 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String string = new String("string string");
          System.out.println(str.indexOf("string"));
          System.out.println(str.indexOf("string"));
      }
  }
  
  // 0
  // 0
  ```

- 내 바램과는 다르게 둘 다 index 0이 나왔다.

- 내 예상으로는 String 객체 안에 정적 필드로 기존에 indexOf() 함수를 사용했다면
  그 뒤의 index부터 검사하는 특성을 가질 것이라고 생각했는데 그것이 아니었다.

- 다른 언어에서는 그러한 특성을 가지는 indexOf 함수를 본것같아서 그랬었는데 아쉽게 되었다.

- 만약 indexOf() 함수를 내 예상대로 나오게 하려면 indexOf() 함수를 사용하고 나서
  리턴된 인덱스 + 인자로 사용된 문자열의 길이만큼의 인덱스 부터 그 뒤로 시작되는 문자열을
  새로 생성하여 문자열을 저장한다.
- 그 뒤에 그 문자열로 indexOf() 함수를 사용하면 원하는 값인 0, 7을 얻을 수 있을 것이다.



- 문자열이 포함되어 있는지 확인하는 이 indexOf() 함수는 DB를 이용하지 않은 검색시스템을 만들때와 같이
  무언가를 찾을때 많이 사용되는 함수이다.



### 2. length()

- length() 함수는 String Method 중 하나로써 문자열의 길이를 리턴하는 함수이다.

- 흔히들 배열의 속성으로써 많이 사용되는 것으로 알고 있는데
  그 length와 이 length() 함수는 엄연히 다른 length 이다.

- 일단 기본적으로 배열의 속성인 length는 속성이고,
  String의 메소드로써 존재하는 length()는 함수이다.

- 따라서 지금 공부하는 length() 함수는 매개변수를 가지는데 사실 아무 매개변수도 받지 않는다.

- 그래서 오히려 헷갈려 하는 사람이 많은 것 같다.

- 심지어 사용하는 이유도 의미도 같기 때문에 사실 헷갈릴 수 밖에 없고
  헷갈려도 어차피 사용하는 용도가 같기 때문에 상관 없다.

- 문자열을 선언하고 length() 함수를 사용하는 코드를 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
          System.out.println(array.length);
          
          String string = "string";
          System.out.println(string.length());
      }
  }
  
  // 10
  // 6
  ```

- 이렇게 서로 다른 점이 존재한다는 것을 알 수 있다.



### 3. replace()

- 자바는 StringPool이라는 것의 존재와 함께 문자열 수정이 불가능하다는 것을 알고 있다.

- 하지만 이 replace() 함수는 문자열을 수정하는 함수이다.

- 물론 문자열을 수정한다고 해서 원래 있던 문자열이 수정되는 것이 아니라 수정된 문자열을 리턴하는 것이다.

- 따라서 replace() 함수의 리턴값을 받을 String 변수가 있어야 한다.

- 아래의 예제를 보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String str = new String("string");
          String str2 = str.replace("string", "문자열");
          
          System.out.println(str);
          System.out.println(str2);
      }
  }
  ```

- 위와 같이 원래 있던 문자열이 보존된다는 것을 알 수 있다.

- 함수의 매개값을 보면 첫 번째 인자가 변환할 문자열이고
  두 번째 인자는 변환할 문자열 대신에 들어갈 문자열이다.



- replace() 함수에는 replaceAll() 이라는 함수와 replaceFirst() 라는 함수가 존재한다.

- replaceAll() 함수는 언뜻보면 replace()와 다른 게 없어보이지만 replaceAll() 함수는
  정규표현식을 사용할 수 있게 된다. 따라서 더 효율적인 코딩이 가능하다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String str = new String("lee jin hyeok");
          String str2 = str.replaceAll("[eiy]", "o");
          System.out.println(str2);
      }
  }
  
  // loo jon hoook
  ```

- "[eiy]"는 정규표현식으로 e하고 i하고 y 라는 뜻이다.
  나중에 정규표현식에 대한 것도 한 번 해볼 예정이다.

- 일단 이렇게 효율적인 코딩이 가능하다는 것을 알고 가자.
  굳이 이렇게 할 필요는 없겠지만 replaceAll() 이 아닌 replace() 만으로 이 효율을 내려면
  여러 개의 replace() 함수를 연달아서 사용해야 한다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String str = new String("lee jin hyeok");
          String str2 = str.replace("e", "o").replace("i", "o").replace("y", "o");
          System.out.println(str2);
      }
  }
  
  // loo jon hoook
  ```

- 다음으로 replaceFirst() 함수는 말 그대로 여러 개의 바꿀 요소가 존재하다면 첫 번째 요소만 바꾼다는 뜻이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String str = new String("string string");
          String str2 = str.replaceFirst("string", "문자열");
          System.out.println(str2);
      }
  }
  
  // 문자열 string
  ```



- replace() 함수를 이용하여 공백을 빈 문자열로 대체하면 띄어쓰기가 없는 문자열이 나오므로
  이것을 이용하여 욕방지 시스템을 만드는 등에 사용할 수 있을 것 같다.



### 4. substring()

- substring() 함수는 문자열 속에서 원하는 만큼 문자열을 추출하여 사용할 수 있게 하는 함수이다.

- 하지만 매개변수로 주는 것은 인덱스 번호이기 때문에 인덱스 번호가 일정한 문자열 속에서 사용하기 좋다.

- substring() 함수에는 두 가지 형태가 있는데 하나는 시작 인덱스와 끝 인덱스를 둘 다 가지고 있는 함수와
  시작 인덱스만 가지고 있는 함수이다.

- 둘 다 가지고 있는 substring() 함수는 시작 인덱스부터 끝 인덱스-1 까지의 문자열을 추출하여 리턴한다.

- 시작 인덱스만 가지고 있는 substring() 함수는 시작 인덱스부터 문자열의 끝까지 문자열을 리턴한다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String str = new String("string");
          System.out.println(str.substring(1, 3));
          System.out.println(str.substring(4));
      }
  }
  
  // tr
  // ng
  ```

  

### 5. toLowerCase() toUpperCase()

- toLowerCase() 함수와 toUpperCase() 함수는 함수명 그대로 소문자로 변경, 대문자로 변경 함수이다.

- 매개변수도 없어서 가장 간단하고 새로운 문자열을 생성하는 것도 동일하다.

- 예제를 보는 것이 편할듯하다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String string = new String("String");
          System.out.println(string.toLowerCase());
          System.out.println(string.toUpperCase());
      }
  }
  
  // string
  // STRING
  ```

  

- 가끔씩보면 대문자를 적든 소문자를 적든 상관 없는 것들이 존재한다.
- 비밀번호라든가... 그런 것에 사용하면 좋을 것 같은 함수이다.



### 6. trim()

- trim() 함수는 공백을 제거하는 함수이다.

- 위에서 replace() 함수를 공백과 빈 문자열을 이용하여 공백을 제거한다고 했는데
  trim() 함수는 그 일을 할 수 있을 것 같지만 중간의 공백은 제거 하지 않으므로
  replace()가 그 일에는 더 충실한 것 같다.

- 그래도 중간의 공백이 아닌 필요 없는 앞과 뒤의 공백을 제거할 때는 유용하게 사용될 것 같다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String str = new String("string string");
          System.out.println(str.trim());
      }
  }
  
  // stringstring
  ```

  

### 7. valueOf()

- valueOf() 함수는 매개변수로 들어온 것들을 String형으로 바꾸어서 리턴하는 함수이다.

- valueOf() 함수는 7가지의 오버로딩이 존재한다.
  오버로딩된 모든 함수가 static 메소드이고 반환값이 String이며 매개변수가 하나라는 것은 모두 동일하다.

- 하지만 매개변수가 각기 다른데 아래와 같다.

  ```java
  boolean b
  char c
  int i
  long l
  double d
  float f
  Object obj
  ```

- 이와 같이 기본 자료형 8개중 6개와 Object 형까지 존재한다.

- 그런데 왜 나머지 2개는 어디간걸까?

- byte와 short는 int형으로 자동형변환되기 때문이다.
  근데 float은 왜 있는 걸까?

- 그것은 byte와 short, int는 각각 10을 모두 10으로 인식하지만
  float과 double은 같은 10.1을 다르게 인식할 수 있기 때문인 것 같다.

- 그리고 Object 형의 변수는 매개변수로 받으면 toString()의 반환값처럼
  패키지명.클래스명@번호로 리턴된다.

  ```java
  package Test;
  
  class Obj { }
  
  public class MainClass {
      public static void main(String[] args) {
          boolean b = true;
          char c = 'c';
     		int i = 18;
          long l = 2020;
          double d = 17.89;
          float f = 17.9;
          Object obj = new Obj();
          
          System.out.println(String.valueOf(b));
          System.out.println(String.valueOf(c));
          System.out.println(String.valueOf(i));
          System.out.println(String.valueOf(l));
          System.out.println(String.valueOf(d));
          System.out.println(String.valueOf(f));
          System.out.println(String.valueOf(obj));
      }
  }
  
  // true
  // c
  // 18
  // 2020
  // 17.89
  // 17.9
  // Test.Obj@7852e922
  ```