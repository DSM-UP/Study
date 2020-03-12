## Consumer

- 자바에서는 람다식을 지원하는 만큼 그 람다식을 사용하는 기본적인 룰인
  '하나의 인터페이스 안의 하나의 추상 메소드'를 지키는 인터페이스를 많이 지원한다.
  지원하는 인터페이스는 Consumer, Supplier, Function, Operator, Predicate가 있다.
  오늘은 그 중에서도 Consumer에 대한 이야기이다.
  Consumer 인터페이스는 매개값은 있는데 리턴값은 없는 인터페이스들을 지원한다.
  다음은 Consumer 인터페이스의 종류이다.

  ```java
  Consumer<T> 			void accept(T t);
  BiConsumer<T, U> 		void accept(T t, U u);
  DoubleConsumer			void accept(double value);
  IntConsumer				void accept(int value);
  LongConsumer			void accept(long value);
  ObjDoubleConsumer<T>	void accept(T t, double value);
  ObjIntConsumer<T> 		void accept(T t, int value);
  ObjLongConsumer<T>		void accept(T t, long value);
  ```

- Consumer 인터페이스는 공통적으로 함수적 인터페이스이며 accept() 메소드를 가지고 있다.
  이 accept() 메소드는 리턴값이 없고 매개변수만 존재하며 리턴값이 없으므로 매개변수를 사용하여 없애는
  용도의 메소드를 구현해야 한다.
  그리고 각각 용도에 맞는 Consumer 인터페이스가 존재한다.
  다음은 간단하게 Consumer<T> 인터페이스를 람다식을 이용해서 사용하는 예제이다.

  ```java
  public class MainClass {
      public static void main(String[] args) {
          Consumer<String> c = t -> {
              System.out.println(t);
          }
          
          c.accept("이진혁");
      }
  }
  
  // 이진혁
  ```

  