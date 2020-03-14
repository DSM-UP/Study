## Function

- 이는 function(함수)에 대해서 다루는 것이 아니다.
  Function이라는 함수적 인터페이스에 대한 것이다.
  지금까지 Consumer, Spplier 인터페이스에 대해서 알아보았다.
  이 둘은 확실히 다른 점을 가지고 있었지만
  이번에 다룰 Function 인터페이스는  Operator, Predicate 인터페이스와 크게 다른 점은 없다.
  다만 사용되는 곳이 다를 뿐이다.
  Function 인터페이스는 다른 인터페이스와 마찬가지로 함수적 인터페이스의 특성을 가지고 있다.
  하지만 Operator, Predicate 인터페이스와 다르게 주로 매개값을 리턴값으로 매핑하는데에 많이 사용된다.
  여기서 매핑이란 List, Map에서 어떠한 값을 추출해내는 것을 말한다.
  다음은 Function 인터페이스의 종류이다.

  ```java
  Function<T,R>			R apply(T t);
  BiFunction<T,U,R>		R apply(T t, U u);
  DoubleFunction<R>		R apply(double value);
  IntFunction<R>			R apply(int value);
  IntToDoubleFunction		double applyAsDouble(int value);
  IntToLongFunction		long applyAsLong(int value);
  LongToDoubleFunction	double applyAsDouble(long value);
  LongToIntFunction		int applyAsInt(long value);
  ToDoubleBiFunction<T,U>	double applyAsDouble(T t, U u);
  ToDoubleFunction<T>		double applyAsDouble(T t);
  ToIntBiFunction<T,U>	int applyAsInt(T t, U u);
  ToIntFunction<T>		int applyAsInt(T t);
  ToLongBiFunction<T,U>	long applyAsLong(T t, U u);
  ToLongFunction<T>		long applyAsLong(T t);
  ```

- 이렇게 많은 Function 계의 인터페이스가 존재한다.
  아까 말했듯이 Function 인터페이스는 매개값을 리턴값으로 매핑하는데 주로 사용한다고 하였다.
  이 인터페이스들을 보면 알겠지만 대부분 매개변수들을 리턴값으로 캐스팅하는 것을 알 수 있다.

- 다음은 Function 인터페이스를 이용하여 매핑을 하는 간단한 예제이다.

  ```java
  class Student {
      private String name;
      private int num;
      
     	public Student(String name, int num) {
          this.name = name;
          this.num = num;
      }
      
      public String getName() {
          return name;
      }
      
      public void setName(String name) {
          this.name = name;
      }
      
      public int getNum() {
          return num;
      }
      
      public void setNum(int num) {
          this.num = num;
      }
  }
  
  public class MainClass {
      public static void main(String[] args) {
          List<Student> list = new ArrayList<>();
          list.add(new Student("Lee", 1));
          list.add(new Student("Kim", 2));
          list.add(new Student("Park", 3));
        
          Function<Student, String> f = t -> {
              return t.getName();
          }
          
          for(int i = 0 ; i < list.size ; i++) {
              System.out.println(f.apply(list.get(i));
          }
      }
  }
  
  // Lee
  // Kim
  // Park
  ```
  
  