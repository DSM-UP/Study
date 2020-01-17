## Finalize

- Finalize 메소드는 Object의 메소드로써 객체가 소멸될때 실행되는 메소드이다.

- 흔히 사람들이 java에는 C++에 존재하는 소멸자 기능이 존재하지 않는다고 생각한다.
  물론 맞는 말이다. finalize 메소드가 C++ 소멸자의 기능을 충실히 행한다고 할 수 없기 때문이다.

- 일단 자바는 Garbage Collector (gc)가 더이상 필요 없다고 판단되는
  힙 영역의 메모리 공간을 소멸시킨다.

- 지금까지는 gc는 알아서 움직이니 어떻게 할 수 없다고 생각했는데
  그래도 JVM에 빨리 실행시켜달라고 하는 메소드가 존재하였다.

  ```java
  System.gc()
  ```

- 위 메소드는 gc 즉, Garbage Collector에게 빠르게
  힙 영역의 필요없는 메모리를 해제해 달라고 요청하는 메소드이다.

- 따라서 이를 이용해 실험을 해 보았다.

  ```java
  class Count {
      private int number;
      public static int count;
      
      public Count(int number) {
          this.number = number;
      }
      
      @Override
      protected void finalize() throws Throwable {
          System.out.println(number + "번 객체 소멸");
          count++;
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Count[] count = new Count[50];
          
          for(int i = 0 ; i < count.length ; i++)
              count[i] = new Count(i);
          System.gc();
          
          System.out.println("null 값으로 변경");
          
          for(int i = 0 ; i < count.length ; i++)
              count[i] = null;
          System.gc();
          
          System.out.println("gc " + Count.count + "번 실행");
      }
  }
  ```

- 위의 코드는 Count 라는 객체의 순서를 세는 객체를 생성하여 GC를 실행시켜보고
  그 모든 객체를 null로 바꾸어 GC를 실행시킨다.
  그리고 GC가 몇 개의 객체를 소멸시켰는지도 출력하는 코드이다.

- 일단 결과는 아래와 비슷하다.

  ```java
  null 값으로 변경
  gc 0번 실행
  49번 객체 소멸
  48번 객체 소멸
  47번 객체 소멸
  46번 객체 소멸
  45번 객체 소멸
  44번 객체 소멸
  43번 객체 소멸
  42번 객체 소멸
  41번 객체 소멸
  40번 객체 소멸
  39번 객체 소멸
  38번 객체 소멸
  37번 객체 소멸
  11번 객체 소멸
  10번 객체 소멸
  9번 객체 소멸
  8번 객체 소멸
  7번 객체 소멸
  6번 객체 소멸
  5번 객체 소멸
  4번 객체 소멸
  3번 객체 소멸
  2번 객체 소멸
  ```

- 비슷하다고 하는 이유는 계속 이 순서가 바뀌기 때문이다.

- 뭔가 규칙이 있는 것 같지만 규칙이 없다.

- 따라서 Garbage Collector는 랜덤으로 힙 영역에서 메모리를 해제한다고 할 수 있다.

- 또한 null 값으로 변경하기 전에 GC를 실행시켰을 때는 하나도 힙 영역에서 해제하지 않은 것으로 보아,
  강제로 실행시켜도 하지 않을 건 하지 않는 다는 의미인 것 같다.

- 그리고 GC를 실행시켰을때 그 시점에 모든 실행이 되는 것이 아니라
  점차적으로 실행된다는 것을 알 수 있다.
  왜냐하면 gc 0번 실행이 지속적으로 뜨기 때문이다.

- 만약 바로 실행이 되고 다음 줄로 넘어갔다면 gc가 몇 번 실행되었는지 알 수 있기 때문이다.



- 이렇게 Object 객체에 존재하는 메소드인 finalize() 메소드를 오버라이딩 하여 사용해보았다.
- 인터넷에서는 이 finalize() 메소드를 오버라이딩하여 많이 사용하지 말라고 한다.
- 왜냐하면 System.gc() 를 했을때 즉각적으로 메모리를 해제하는 것이 아닌
  점차적으로 메모리를 해제하기 때문에 그 동안 System.gc()가 잡아먹을 메모리가 많다면
  발생할 OOME라는 Exception이 발생할 수 있기 때문입니다.