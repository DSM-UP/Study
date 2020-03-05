## Object vs Generic

- Object와 Generic을 배운 사람이라면 Object와 Generic의 차이점을 모르는 사람은 거의 드물 것이다.
  하지만 이번에 Object와 Generic의 차이점에 대하여 정확히 짚고 넘어가기 위해서 이렇게 적는다.

- 먼저 Object는 자바의 모든 객체의 조상 클래스이다.
  따라서 모든 객체는 Object 타입으로 변환이 가능하다는 뜻이다.
  그러므로 알 수 없는 타입에 대해서 언제든 대처가 가능하다.
  Generic은 자바에서 어느 타입이든 들어와야 할때, 타입을 알 수 없을때 사용하여
  그 타입을 대체하여 사용하는 타입이다.
  그러므로 알 수 없는 타입엗 ㅐ해서 언제든 대처가 가능하다.

- 이렇게만 보면 Object 클래스와 Generic의 차이점이 없다고 볼 수 있다.
  하지만 Object 클래스와 Generic의 차이점은 내부에서 드러난다.
  다음은 무엇이든 담을 수 있는 Box 클래스를 Object 클래스를 이용해 구현한 예제이다.

  ```java
  class Box {
      private Object obj;
      
      public void setObj(Object obj) {
          this.obj = obj;
      }
      
      public Object getObj() {
          return obj;
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Box box1 = new Box();
          Box box2 = new Box();
          
          box1.setObj(1000);
          box2.setObj("abc");
          
          int obj1 = (int) box1.getObj();
          String obj2 = (String) box2.getObj();
          
          System.out.println(obj1);
          System.out.println(obj2);
      }
  }
  
  // 1000
  // abc
  ```

- Object 클래스를 이용하여 Box 클래스를 구현해 보았는데
  이렇게 Object를 이용하여 Box 클래스를 구현하다보니
  Box 클래스의 setObj() 메소드를 사용할때와 getObj() 메소드를 사용하여 가져올때
  캐스팅(형변환)을 해야 한다는 단점이 존재한다.
  이 캐스팅이 많아지게 되면 나중에는 프로그램상의 오버헤드를 만들어 낼 수 있다.

- 다음은 Box 클래스를 제네릭으로 구현한 예제이다.

  ```java
  class Box<T> {
      private T t;
      
      public void set(T t) {
          this.t = t;
      }
      
      public T get() {
          return t;
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Box box1 = new Box();
          Box box2 = new Box();
          
          box1.setObj(1000);
          box2.setObj("abc");
          
          int obj1 = box1.getObj();
          String obj2 = box2.getObj();
          
          System.out.println(obj1);
          System.out.println(obj2);
      }
  }
  
  // 1000
  // abc
  ```

- 이렇게 제네릭 타입으로 설정하게 되면 int 값 즉, Integer 값이 들어왔을때
  제네릭 타입 T는 자동으로 Integer 값으로 재구성하게 된다.
  이 재구성하는 비용이 많이 드냐고? 그건 또 아니다.
  그렇게 Integer 값을 받아 Integer 값을 리턴하기 때문에
  main() 메소드에서의 캐스팅도 필요없게 된다.
  이렇게 Object 클래스 대신 제네릭 타입을 사용하게 되면
  필요없는 오버헤드를 줄일 수 있다는 장점을 가지고 있다.