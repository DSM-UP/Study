## getBytes()

- 저번에 String 객체의 생성자를 이용하여 byte 배열에 들어있는 바이트 숫자를
  문자열로 변환하는 방법을 알게 되었다.
- 그에 따라서 문자열을 바이트 숫자로 바꾸는 방법도 알아야 한다고 생각한다.
- 그리고 byte 배열을 매개변수로 하여 문자열로 바꾸는 과정에서 말했듯이
  이 방법은 주로 네트워크 상에서 정보를 주고 받을때 최적화를 하기 위해서 가장 적절한
  byte 단위로 정보를 쪼개는 시점에서 필요한 코딩기법이다.



- 본론으로 들어가서 getBytes() 함수는 문자열을 byte 배열로 바꾸는 함수이다.

- 아래의 예제를 살펴보자.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String str = new String("String");
          byte[] data = str.getBytes();
          for(byte b : data) {
              System.out.print(b + " ");
          }
      }
  }
  
  // 83 116 114 105 110 103
  ```

- 위의 코드를 보면 "String"이라는 문자열이 저장되어 있는 str 변수를 getBytes() 함수를 이용하여
  byte 배열로 변환하고 forEach를 이용하여 byte 배열의 요소를 출력하는 코드이다.

- 위의 코드를 보면 알 수 있듯이
  저번의 byte[]를 문자열로 바꾼 것처럼 이번에는 문자열을 byte[]로 바꾸는데 성공했다는 것을 알 수 있다.

- 그리고 위처럼 인코딩을 할때 어떠한 문자셋을 바탕으로 인코딩을 할지 정할 수 있습니다.
  위처럼 아무것도 지정해놓지 않는다면 본 컴퓨터에서 지원하는 인코딩 방식으로 인코딩을 진행합니다.

- 기본이 아스키코드이기 때문에 "String" 문자열을 byte 단위로 잘 나눌 수 있었습니다.

- 만약에 저 문자열이 한글이라면 어떻게 될까요?
  아스키코드에서는 한글을 지원하지 않기 때문에 정확한 값이 아닌 에러의 값이 나오게 됩니다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
       	for(byte b : (new String("문자열").getBytes()))
              System.out.print(b + " ");
      }
  }
  
  // -71 -82 -64 -38 -65 -83
  ```

- 위와 같이 한글 한 글자당 2byte의 값으로 나타내서 출력은 하지만
  아스키코드에는 존재하지 않는 값이라고 이상한 값을 출력하는 것을 알 수 있습니다.

- 그럴때 매개변수에 원하는 인코딩 문자셋을 넣어주면 됩니다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          for(byte b : (new String("문자열").getBytes("UTF-8")))
              System.out.print(b + " ");
      }
  }
  
  // -21 -84 -72 -20 -98 -112 -20 -105 -76
  ```

- 참고로 UTF-8은 많이 사용하는 문자셋이지만 한글을 3 BYTE로 쪼개서 나타낸다는 것은 처음 알았습니다.
  어쨌든 한글을 3BYTE로 쪼갠다는 것은 알고 있으면 좋을듯합니다.

- 하지만 이렇게 해도 -부호의 숫자들이 출력되고 있습니다.
  왜 이런지는 아직 잘 모르겠지만 나중에 UTF-8에 대한 것도 한 번 다뤄봐야할 것 같습니다.

- 그래도 잘못 나온 것은 아닌지 다시 한글로 디코딩해보면 제대로 나옵니다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          String str = new String("문자열");
          byte[] data = str.getBytes("utf-8");
          for(byte b : data)
              System.out.print(b + " ");
          System.out.println();
          
          String str2 = new String(data);
          System.out.println(str2);
      }
  }
  
  // -21 -84 -72 -20 -98 -112 -20 -105 -76
  // 문자열
  ```

- 위를 보면 알겠지만 UTF-8의 UTF가 대문자이든 소문자이든에 상관없이 같은 값이 나옵니다.
  또한 계속 컴파일 해봐도 같은 값만 나오기 때문에 저렇게 나오는데엔 이유가 있다고 봅니다.

- 일단 결론으로 돌아가서 "문자열" 이라는 문자열을 인코딩하고 디코딩해도
  같은 문자열이 나오는 것으로 보았을때 이상한 것은 아니라고 생각합니다.