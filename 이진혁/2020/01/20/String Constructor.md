## String Constructor

- 우리는 String 형을 사용할때 아래와 같이 사용한다.

  ```java
  String str = "String";
  ```

- String 형은 참조형 변수 중에서 new 키워드를 사용하지 않아도 되는 유일한 변수이다.
  (배열은 제외, newInstance() 제외)

- 하지만 String 형은 new 키워드를 사용해서 아래와 같이 객체를 생성할 수 있다.

  ```java
  String str = new String("String");
  ```

- String은 자료형처럼 사용할 수 있는 참조형 변수, 즉 객체이므로 생성자를 가지고 있을 것이다.
  또한 생성자가 존재함에 따라서 "String" 문자열을 매개변수로 받는 생성자도 가지고 있을 것이다.

- 근데 지금까지 생각해보면 String 객체를 이런 방식으로밖에 사용한 적이 없다.

- 그런데 String 객체에는 10가지가 넘는 생성자가 존재한다.

- 하지만 간단한 코딩에서는 사용하지 않는 생성자들이 넘처나는 것뿐이다.



- 우리가 흔히 네트워크 상에서 데이터를 통신할때 byte 단위로 정보를 송신한다.

- 그래서 자바에는 byte라는 자료형이 존재하는데 이 byte 배열을 매개변수로 받는
  생성자가 존재한다. 아래에서 알아보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
  		byte[] data = { 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100 };
          System.out.println(new String(data));
      }
  }
  
  // Hello, World
  ```

- 위와 같이 byte[]을 매개변수로 받아 String 객체를 생성하여 출력해보면
  그 byte 숫자들이 모두 아스키코드로 변하여 문자열 형태를 이뤄 출력되게 된다.

- 위의 코드에서는 Hello, World를 출력한 코드이다.

- 참고로 공백을 아스키코드로 잘 모르는 사람이 많은데 아스키코드 32번에 SP라고 나와있다.

- byte는 되지만 int, long은 안되는 이유는 아스키코드가 0에서부터 127번까지 존재하고
  byte형은 0부터 127 (물론 음수도 되지만)까지 되기 때문에 그런 것 같다.
  따라서 String형의 매개변수에는 byte[]는 들어가지만 int[], long[]은 불가능하다.



- 그리고 아스키 코드가 아닌 유니코드나 가장 많이 사용되는 UTF-8과 같은 문자셋이 존재한다.

- 이러한 문자셋을 사용하기 위해서 byte[] 매개변수 뒤에 "UTF-8"과 같은 문자셋을 설정해주면
  그 문자셋을 바탕으로 문자열로 변환하는 특성을 가지고 있다.

- 그리고 배열의 일정부분만 사용하고 싶다면 byte[], "시작 인덱스 번호", "갯수"로 사용할 수 있다.

- 위의 코드에서 Hello만 떼어내서 사용하고 싶다면 아래의 코드처럼 작성하면 된다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
  		byte[] data = { 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100 };
          System.out.println(new String(data, 0, 5));
      }
  }
  
  // Hello
  ```

- 위 처럼 Hello를 출력시킬 수 있다.
- 또한 이것도 뒤에 문자셋을 문자열 형태로 매개변수를 주면 그 문자셋을 바탕으로
  디코딩할 수 있다.