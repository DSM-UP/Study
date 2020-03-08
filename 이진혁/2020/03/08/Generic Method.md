## Generic Method

- 저번에는 제네릭 타입을 클래스에 적용시키고 그 타입을 여러 개로 사용하는 방법에 대해서 배웠다.
  이번에는 제네릭 타입을 클래스에 적용시키지 않고 클래스 안의 메소드에만 적용시키는 방법에 대해서
  배워볼 예정이다.

- 클래스가 아닌 메소드에만 제네릭 타입을 적용시키는 이유는
  클래스에 제네릭 타입을 적용하게 되면 클래스의 모든 곳에서 제네릭 타입을 사용할 수 있게 되는데
  큰 프로그램에서 돌아가는 클래스일 경우에 그 제네릭 타입이 많을 수도 있다.
  그에 따라서 메소드마다 사용되는 제네릭 타입이 한정된 경우가 많은데
  그럴때 제네릭 타입을 메소드에만 적용시켜, 제네릭 메소드를 사용한다.

- 제네릭 타입을 메소드에만 적용시키는 방법은 간단하다.
  먼저 메소드의 리턴타입의 왼쪽에 어떠한 제네릭 타입을 사용할 것인지 명시하는 것이다.
  예시로 작성한 메소드의 형태는 다음과 같다.

  ```java
  public <T> T run(T t) { ... }
  ```

  이를 해석하자면 public 접근제어지시자에 T라는 제네릭 타입을 사용하는 메소드이다.
  반환값이 T타입이며 매개변수로 T타입의 t를 받는다.

- 제네릭 메소드를 정의하는 방법에 대해서 알아보았으니
  제네릭 메소드를 사용하는 방법도 알아보아야 한다.
  사용하는 방법은 다음과 같다.

  ```java
  {
      A a = new A();
      a.<Integer>run(100);
  }
  ```

  위의 제네릭 메소드인 run() 메소드가 클래스 A의 메소드라는 가정하에
  위와 같이 사용할 수 있다.
  특이한 점은 메소드명의 좌측에 제네릭 타입을 명시한다는 것이다.

- 제네릭 타입의 자세한 설명을 위해서 아래에 간단한 Box 클래스와
  그 Box 클래스를 감싸는 Wrapper 클래스를 사용하는 예제이다.
  Box 클래스는 전에 그랬듯이 제네릭 클래스이고
  Wrapper 클래스는 제네릭 메소드를 사용한 클래스이다.

  ```java
  class Box<T> {
  	private T content;
  	
  	public Box(T content) {
  		this.content = content;
  	}
  	
  	public T getContent() {
  		return content;
  	}
  }
  
  class Wrapper {
  	private Box box;
  	
  	public <T> void wrapping(T content) {
  		box = new Box<T>(content);
  	}
  	
  	public Box getBox() {
  		return box;
  	}
  }
  
  public class MainClass {
      public static void main(String[] args) {
          Wrapper wrapper = new Wrapper();
  		wrapper.wrapping(100);
  		System.out.println(wrapper.getBox().getContent());
      }
  }
  
  // 100
  ```

- 이렇게 제네릭 메소드를 사용할 수 있다.