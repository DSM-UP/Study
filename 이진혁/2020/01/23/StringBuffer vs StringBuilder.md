## StringBuffer vs StringBuilder

- 이번에는 StringBuffer 클래스와 StringBuilder 클래스의 차이점에대해서 알아보는 시간을 가질 것입니다.
- 지금까지 StringBuffer 클래스와 StringBuilder 클래스를 사용할때 둘다 같은 것만 알고
  자연스레 StringBuffer 클래스만 사용해왔던 기억이 있습니다.
- 그래서 이번에는 이 둘의 차이점에 대해서 알아보고
  원래는 append() 메소드만 사용했던 이 클래스들의 진가를 알아보고자합니다.



- 비교하기 전에 StringBuffer 클래스와 StringBuilder 클래스를 왜 사용할까요?
- StringBuffer, StringBuilder 클래스는 일반적으로 String 객체처럼 문자열을 담을 수 있습니다.
- 그렇다면 String 클래스와 다른 점이 있다는 것이겠죠.
- 자바에서의 문자열은 변할 수가 없는 불변의 성질을 가지고 있습니다.
- 그래서 문자열을 수정할때는 그 문자열을 수정하는 것이 아닌 새로운 문자열을 생성하는 것입니다.
- 그렇기 때문에 문자열 연산을 반복할때마다 큰 오버헤드가 발생하게 됩니다.
- 그래서 필요한 것이 StringBuffer 클래스와 StringBuilder 클래스입니다.
- StringBuffer 클래스와 StringBuilder 클래스는 객체를 생성할때 고정된 메모리를 할당 받는 것이 아닌
  임시 메모리를 할당받아서 문자열의 길이가 커질때
  그 길이를 두 배로 늘려 문자열을 사용할 수 있게 하는 클래스입니다.



- StringBuffer 클래스와 StringBuilder 클래스는 생성자와 메소드가 같으므로
  StringBuffer 클래스를 기준으로 설명하겠습니다.

- 메소드에 대해서 알아보기 전에 StringBuffer 클래스의 생성자에 대해서 알아보자.

  ```java
  StringBuffer();
  StringBuffer(String);
  StringBuffer(int);
  ```

- 첫 번째 생성자는 매개변수가 없으므로 디폴트 버퍼인 16개의 문자를 저장하는 버퍼를 생성하고
  길이가 0인 문자열을 저장한다.
- 두 번째 생성자는 String 매개변수를 가지고 있으므로 String 변수를 문자열로 저장한다.
  그러므로 기본 버퍼인 16 + String 변수의 길이 만큼의 버퍼를 생성한다.
- 세 번째 생성자는 int 만큼의 버퍼 크기를 생성한다.
  초기 문자열은 재하지 않는다.



- StringBuffer 클래스의 메소드에 대해서 알아보자.

  ```java
  public StringBuffer append(T);
  public int capacity();
  public char charAt(int);
  public StringBuffer delete(int, int);
  public StringBuffer deleteCharAt(int);
  public StringBuffer insert(int, T);
  public int lastIndexOf(String);
  public StringBuffer reverse();
  public void setCharAt(int, char);
  public void setLength(int);
  ```

- 위와 같은 메소드들이 존재한다.
  물론 indexOf(), length(), substring(), toString() 메소드들은 String에도 존재하므로 제외하겠다.



#### 1. append()

- append() 함수는 많은 수의 메소드로 오버로딩되어 있다.

- 위에 존재하는 T는 실제로는 T와 같은 제네릭으로 설정되어 있지 않고
  대부분의 형으로 되어 있다는 것을 암시하는 것이다.
  boolean, char, char[], double, float, int, long, Object, String, StringBuffer 와 같은 자료형의 변수들을
  매개변수로써 사용할 수 있다.

- append() 함수는 말 그대로 StringBuffer 클래스에 존재하는 문자열 가장 뒤에 추가하는 메소드이다.

- 아래의 예제를 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          StringBuffer sb = new StringBuffer("stringbuffer");
          System.out.println(sb.toString());
          sb.append("string");
          System.out.println(sb.toString());
      }
  }
  
  // stringbuffer
  // stringbufferstring
  ```

- 위처럼 뒤에 문자열이 추가되는 것을 알 수 있습니다.
  toString()은 원래 String 형식으로 정보를 전달해주는 것이었으나
  StringBuffer 클래스에서 오버로딩되어 String 객체로 변환하여 리턴하는 것으로 변경되었습니다.



#### 2. capacity()

- capacity() 함수는 오버로딩 된 메소드가 존재하지 않고 간단 명료한 기능을 가지고 있다.

- 가지고 있는 버퍼의 크기를 리턴한다.

- 아래의 예제를 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          StringBuffer sb = new StringBuffer();
          System.out.println(sb.capacity());
          
          StringBuffer sb2 = new StringBuffer("StringBuffer");
          System.out.println(sb.capacity());
      }
  }
  
  // 16
  // 28
  ```

- sb는 디폴트 버퍼 크기인 16을 받았기 때문에 16이 출력되었고
  sb2는 디폴트 버퍼 크기 16 + "StringBuffer" 문자열의 길이인 12 = 28이 출력되었다.



#### 3. charAt()

- charAt() 함수는 오버로딩된 메소드가 존재하지 않는다.

- charAt() 함수는 매개변수로 들어온 int형의 변수 즉, 인덱스에 존재하는 문자를 리턴한다.

- 아래의 예제를 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          StringBuffer sb = new StringBuffer("StringBuffer");
          sb.charAt(3);
          System.out.println(sb.toString());
      }
  }
  
  // i
  ```



#### 4. delete()

- delete() 메소드는 int형 매개변수 두 개를 받으며 첫 번째 매개변수 index 부터
  두 번째 매개변수 index - 1 까지의 문자열을 제거한다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          StringBuffer sb = new StringBuffer("StringBuffer");
          System.out.println(sb.delete(3, 7));
      }
  }
  
  // Struffer
  ```



#### 5. deleteCharAt()

- deleteCharAt() 함수는 int형 매개변수 하나를 받으며 매개변수 index의 문자를 제거한다.

- delete() 함수가 문자열 속에서 문자열을 제거하는 것이라면
  이 함수는 문자열 속에서 문자 하나를 제거하는 것이라고 할 수 있다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          StringBuffer sb = new StringBuffer("StringBuffer");
          System.out.println(sb.deleteCharAt(0));
      }
  }
  
  // tringBuffer
  ```



#### 6. insert()

- append() 함수는 문자열의 마지막에 추가한다면
  insert() 함수는 원하는 위치에 삽입한느 함수이다.

- append() 함수는 매개변수로 추가할 문자열을 가지고 있지만
  insert() 함수는 인덱스 위치와 추가할 문자열을 가지고 있다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          StringBuffer sb = new StringBuffer("StringBuffer");
          System.out.println(sb.insert(6, "String"));
      }
  }
  
  // StringStringBuffer
  ```

  

#### 7. lastIndexOf()

- lastIndexOf() 함수는 indexOf() 함수와 닮아있다.

- indexOf() 함수는 매개변수로 들어온 String형 변수의 위치를 알아내는데
  그 위치를 알아낼때 그 문자열이 존재하는 가장 첫 번째 인덱스를 리턴한다.

- 하지만 lastIndexOf() 함수는 말 그대로 그 문자열이 존재하는 마지막 인덱스를 리턴하는 함수이다.

- lastIndexOf() 함수는 String 변수를 하나만 가지고 있는 함수와
  String 변수와 int 변수를 가지고 있는 함수가 있는데
  String 변수만 매개변수로 가지고 있는 함수는 처음부터 검사하여 문자열을 찾아내지만
  String 변수와 int 변수를 가지고 있는 함수는 int 부터 검사하여 문자열을 찾아낸다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          StringBuffer sb = new StringBuffer("rraarraa");
          System.out.println(sb.lastIndexOf("rr");
          System.out.println(sb.lastIndexOf("rr", 3));
      }
  }
                             
  // 1
  // 5
  ```

  

#### 8. reverse()

- reverse() 함수는 말 그대로 문자열을 역순으로 리턴한다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          StringBuffer sb = new StringBuffer("StringBuffer");
          System.out.println(sb.reverse());
      }
  }
  
  // reffuBgnirtS
  ```

  

#### 9. setCharAt()

- setCharAt() 함수는 int형의 매개변수 하나와 char형의 매개변수 하나를 가지고 있는 함수이다.

- char형의 매개변수를 int형의 매개변수 위치에 있는 문자와 교체한다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          StringBuffer sb = new StringBuffer("StringBuffer");
          sb.setCharAt(0, 'D');
          System.out.println(sb.toString());
      }
  }
  
  // DtringBuffer
  ```

- setCharAt() 함수의 리턴값은 다른 함수와 다르게 StringBuffer가 아닌 void 이므로 바로 출력시키면 안 된다.



#### 10.setLength()

- setLength() 함수는 말 그대로 버퍼의 크기를 조절하는 함수이다.

  ```java
  public class MainClass {
  	public static void main(String[] args) {
          StringBuffer sb = new StringBuffer();
      	System.out.println(sb.capacity());
          sb.setLength(100);
          System.out.println(sb.capacity());
      }
  }
  
  // 16
  // 100
  ```








- 이렇게 메소드들에 대해서 알아보았다.
- 그러면 생성자도 같고 메소드도 같은 StringBuffer와 StringBuilder는 뭐가 다른 것일까?
- 그것은 쓰레드의 차이에 있다.
- StringBuffer 클래스는 멀티쓰레드에서 사용할 수 있도록 동기화를 보장하지만
  StringBuilder 클래스는 동기화를 보장하지 않으므로 단일쓰레드에서 효율이 좋다.
- 따라서 StringBuffer 클래스와 StringBuilder 클래스는 멀티쓰레드에서의 동기화 보장의 차이라고 할 수 있다.
  그러므로 성능의 차이가 나오게 되는데
  StringBuffer 클래스와 StringBuilder 클래스의 성능차이를 체감하기 위해서는 최소 1억개 이상의 데이터를
  추가해봐야 알 수 있다고 하니 실험은 힘들 것 같다.