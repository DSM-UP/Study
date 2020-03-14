## Operator

- 이는 연산자에 대한 글을 쓰는 것이 아니다.
  함수적 인터페이스 중 하나인 Operator 인터페이스에 대해서 알아보는 글이다.

- Operator 인터페이스는 전에 배웠던 Function 인터페이스와 마찬가지로 매개변수가 존재하고
  리턴값도 존재하는 함수적 인터페이스 중 하나이다.
  전에 말했듯이 Function 인터페이스는 주로 매개값을 리턴값으로 타입 변환(캐스팅)하거나
  리스트(콜렉션)에서 값을 매핑하는 용도로 사용된다.
  하지만 이 Operator 인터페이스는 이름 그대로 연산을 하는데에 주로 사용된다.
  Operator 인터페이스의 종류에는 다음과 같다.

  ```java
  BinaryOperator<T>			T apply(T t, T t);
  UnaryOperator<T>			T apply(T t);
  DoubleBinaryOperator		double applyAsDouble(double left, double right);
  DoubleUnaryOperator			double applyAsDouble(double operand);
  IntBinaryOperator			int applyAsInt(int left, int right);
  IntUnaryOperator			int applyAsInt(int operand);
  LongBinaryOperator			long applyAsLong(long left, long right);
  LongUnaryOperator			long applyAsLong(long operand);
  ```

  확실하게 연산만을 하겠다는 의지가 보이는 추상메소드들인 것을 알 수 있다.
  예를 들어 BinaryOperator<T>는 객체 T와 객체 T를 연산하여 객체 T를 리턴하겠다는 메소드이고
  IntUnaryOperator는 int 타입 매개변수 하나를 연산하여 int 타입을 리턴하겠다는 메소드인 것이다.
  다음은 Operator 인터페이스에 대한 예제이다.

  ```java
  class Operator {
      private double doubleNum1;
      private double doubleNum2;
      
      private int intNum1;
      private int intNum2;
      
     	private long longNum1;
      private long longNum2;
      
      // 6개의 필드를 순서대로 받는 생성자 생략
      
      // getter, setter 생략
      
      public void printDouble(DoubleBinaryOperator operator) {
          System.out.println(operator.applyAsDouble(doubleNum1, doubleNum2));
      }
      
      public void printInt(IntBinaryOperator operator) {
          System.out.println(operator.applyAsInt(intNum1, intNum2));
      }
      
      public void printLong(LongBinaryOperator operator) {
          System.out.println(operator.applyAsLong(longNum1, longNum2));
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Operator operator = new Operator(
          	10.2, 5.1,
              7, 3,
              100001, 100000
          );
          
          operator.printDouble((a, b) -> a / b);
          operator.printInt((a, b) -> a * b);
          operator.printLong((a, b) -> a - b);
      }
  }
  
  // 2
  // 21
  // 1
  ```

  