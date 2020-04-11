## Custom Container

- 전에는 collect() 메소드를 사용할 때 이미 존재하는 컬렉션(ArrayList, LinkedList)을 사용해서
  자료를 수집하는 방법에 대해서 공부했었다.
  하지만 이번에는 사용자 지정으로 만들어진 컨테이너들에 대해서 collect() 메소드를
  사용하는 방법에 대해서 공부해볼 것이다.

- 저번에 collect() 메소드에 대해서 공부하는데 List가 아닌 다른 컬렉션을 이용하는 것처럼
  보이는 collect() 메소드들에 대해서 이것이 무엇인지 궁금했었는데
  이것에 대한 답을 찾을 수 있었다.

- 사용자 지정 컨테이너에 자료를 수집할 수 있도록 하는 collect() 메소드의 종류는 다음과 같다.

  ```java
  // Stream
  <R> R collect(Supplier<R> supplier, BiConsumer<R,? super T> accmulator,
                BiConsumer<R,R> combiner);
  // IntStream
  <R> R collect(Supplier<R> supplier, ObjIntConsumer<R> accumulator,
                BiConsumer<R,R> combiner);
  // LongStream
  <R> R collect(Supplier<R> supplier, ObjLongConsumer<R> accumulator,
               BiConsumer<R,R> combiner);
  // DoubleStream
  <R> R collect(Supplier<R> supplier, ObjDoubleConsumer<R> accumulator
               BiConsumer<R,R> combiner);
  ```

- 첫 번째 매개변수는 사용자 지정 컨테이너를 생성하는 방법을 알려주는 Supplier 인터페이스이고
  두 번째 매개변수는 XXXConsumer 인터페이스로서, 사용자 지정 컨테이너에 자료를 넣는 방법을
  알려주는 매개변수이며
  세 번째 매개변수인 BiConsumer는 병렬 스레드를 사용할 때 스레드 별로 생성된 컨테이너를
  결합하는 역할을 한다.

- 다음은 사용자 컨테이너를 이용한 collect() 메소드의 예제이다.

  ```java
  import java.util.ArrayList;
  import java.util.Arrays;
  import java.util.List;
  
  class Fruit {
  	private String name;
  	private int sugarContent;
  	
  	public Fruit(String name, int sugarContent) {
  		this.name = name;
  		this.sugarContent = sugarContent;
  	}
  	
  	public String getName() {
  		return name;
  	}
  	
  	public int getSugarContent() {
  		return sugarContent;
  	}
  }
  
  class HighSugarContentFruit {
  	private List<Fruit> list;
  	
  	public HighSugarContentFruit() {
  		list = new ArrayList<Fruit>();
  		System.out.println("[" + Thread.currentThread().getName() + "] 생성자");
  	}
  	
  	public void accumulate(Fruit fruit) {
  		list.add(fruit);
  		System.out.println("[" + Thread.currentThread().getName() + "] 누적");
  	}
  	
  	public void combine(HighSugarContentFruit hscf) {
  		list.addAll(hscf.getList());
  		System.out.println("[" + Thread.currentThread().getName() + "] 병합");
  	}
  	
  	public List<Fruit> getList() {
  		return list;
  	}
  }
  
  public class CustomContainer {
  	public static void main(String[] args) {
  		List<Fruit> list = Arrays.asList(
  			new Fruit("grape", 10),
  			new Fruit("melon", 20),
  			new Fruit("apple", 30),
  			new Fruit("orange", 40),
  			new Fruit("banana", 50)
  		);
  		
  		HighSugarContentFruit hscf = list.stream()
  				.filter(f -> f.getSugarContent() >= 30)
  				.collect(
  					HighSugarContentFruit :: new,
  					HighSugarContentFruit :: accumulate,
  					HighSugarContentFruit :: combine
  				);
  		System.out.println();
  		
  		hscf.getList()
  			.stream()
  			.forEach(f -> System.out.println(f.getName()));
  	}
  }
  
  // [main] 생성자
  // [main] 누적
  // [main] 누적
  // [main] 누적
  // 
  // apple
  // orange
  // banana
  ```

- 이렇게 한 번의 생성자 호출, 당분 30이상의 apple, orange, banana 세 개의 누적이 이루어져
  출력이 된 것을 볼 수 있다.
  그리고 이것들이 모인 List에서 출력이 된 것을 볼 수 있는데
  combine() 메소드는 병렬 처리가 아니면 호출이 되지 않는 것 또한 볼 수 있었다.