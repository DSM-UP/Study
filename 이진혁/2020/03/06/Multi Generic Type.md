## Multi Generic Type

- 저번엔 제네릭 타입이 Object와 무엇이 다른지 그리고 또 왜 필요한지에 대해서 배웠다.
  이번에는 제네릭 타입을 여러 개 사용하는 방법에 대해서 알아보겠다.

- 제네릭 타입을 사용하는 방법은 간단하다.
  기존에 제네릭 타입을 사용하는 방법에서 ','(콤마)를 이용해서 제네릭 타입을 구별해주면 된다.
  이렇게 구별한 제네릭 타입은 두 개 이상이 될 수 있으며 다 사용할 수 있고
  서로 같은 타입이여도 상관 없다.
  다음은 간단하게 두 개의 제네릭 타입을 사용하는 Getter Setter 메소드와
  9개의 제네릭 타입을 사용하는 메소드의 예제이다.

  ```java
  class Example1<T, U> {
      private T t;
      private U u;
      
      public void setT(T t) {
          this.t = t;
      }
      public T getT() {
          return t;
      }
      public void setU(U u) {
          this.u = u;
      }
      public U getU() {
          return u;
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Example1<String, Integer> e = new Example1<String, Integer>();
          
          e.setT("lee");
          e.setU(10);
          
          System.out.println(e.getT());
          System.out.println(e.getU());
      }
  }
  
  // lee
  // 10
  ```

  ```java
  class Example2<T, U, V, W, X, Y, Z, A, B> {
      private T t;
      private U u;
      private V v;
      private W w;
      private X x;
      private Y y;
      private Z z;
      private A a;
      private B b;
      
      public Example2(T t, U u, V v, W w, X x, Y y, Z z, A a, B b) {
          this.t = t;
          this.u = u;
          this.v = v;
          this.w = w;
          this.x = x;
          this.y = y;
          this.z = z;
          this.a = a;
          this.b = b;
      }
      
      public void print() {
          System.out.print(t + " " + u + " " + v + " " + w + " " x + " " + y " " + z +
                          a + " " + b);
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Example2<Byte, Short, Integer, Float, Double, Boolean, String, Character,
          		Object> e =
                      new Example2<Byte, Short, Integer, Float, Double, Boolean,
          						String, Character, Object>(
                      	1, 1, 1, 1.0f, 1.0, true, "1", '1', 1
                      );
          
          e.print();
      }
  }
  
  // 1 1 1 1.0 1.0 true 1 1 1
  ```

- 이렇게 예제들을 보다보면 한 가지 불편한 점이 생길 수도 있다.
  지금까지 예제를 사용할 때는 뒤에 있는 즉, 저 인스턴스를 만드는 부분의 제네릭 타입은
  <> 형식으로 했었는데 이번에만 이렇게 바꾸었다.
  사실 이게 원래는 맞지만 자바에서 <>를 다이아몬드 연산자라는 이름으로 사용할 수 있게 되었다.
  다이아몬드 연산자를 사용하면 자바에서 자동으로 제네릭 타입을 추측하여 사용한다.