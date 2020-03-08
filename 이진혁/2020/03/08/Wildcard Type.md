## Wildcard Type

- 와일드카드 타입은 제네릭 타입의 ? 타입을 말하는 것이다.
  와일드카드는 기본적으로 다음과 같이 세 가지 종류가 존재한다.

  ```java
  <?>
  <? extends 최상위타입>
  <? super 최하위타입>
  ```

- 첫 번째 와일드카드 타입은 모든 타입을 허용하는 타입이다.

- 두 번째 와일드카드 타입은 뒤에 나오는 최상위타입을 포함하여 그 아래의 하위 타입들도 포함하여
  허용하는 타입이다.

- 세 번째 와일드카드 타입은 최하위타입을 포함하여 상위 타입들도 모두 허용하는 타입이다.

- 아래는 학교의 과목들에 대해서 정하여 정리하는 예제이다.
  코드는 School 클래스안에서 일어나는 일로써
  Subject 아래에 Math, Science 가 있고 Math 아래에 Math1이 있다.

  ```java
  class NaturalSciences {
  	private String name;
  	
  	public NaturalSciences(String name) {
  		this.name = name;
  	}
  	
  	public String toString() {
  		return name;
  	}
  }
  
  class Science extends NaturalSciences {
  	private String name;
  	
  	public Science(String name) {
  		super(name);
  		this.name = name;
  	}
  }
  
  class Math extends NaturalSciences {
  	private String name;
  	
  	public Math(String name) {
  		super(name);
  		this.name = name;
  	}
  }
  
  class Math1 extends Math {
  	private String name;
  	
  	public Math1(String name) {
  		super(name);
  		this.name = name;
  	}
  }
  
  class School<T> {
  	private String name;
  	private T[] subject;
  	private static int cnt;
  	
  	public School(String name, int count) {
  		this.name = name;
  		this.subject = (T[])(new Object[count]);
  		this.cnt = 0;
  	}
  	
  	public void add(T t) {
  		subject[cnt++] = t;
  	}
  	
  	public String getName() {
  		return name;
  	}
  	
  	public T[] getSubject() {
  		return subject;
  	}
  }
  
  public class WildcardTypeTest {
  	public static void plusMinus(School<?> school) {
  		System.out.println(school.getName() + " 과목 : " + Arrays.toString(school.getSubject()));
  	}
  	
  	public static void differential(School<? extends Math> school) {
  		System.out.println(school.getName() + " 과목 : " + Arrays.toString(school.getSubject()));
  	}
  	
  	public static void science(School<? super Science> school) {
  		System.out.println(school.getName() + " 과목 : " + Arrays.toString(school.getSubject()));
  	}
  	
  	public static void main(String[] args) {
  		School<NaturalSciences> naturalSciences = new School<>("이과", 4);
  		naturalSciences.add(new NaturalSciences("이과"));
  		naturalSciences.add(new Science("과학"));
  		naturalSciences.add(new Math("수학"));
  		naturalSciences.add(new Math1("수학1"));
  		
  		School<Science> science = new School<>("과학", 4);
  		science.add(new Science("과학"));
  		
  		School<Math> math = new School<>("수학", 4);
  		math.add(new Math("수학"));
  		math.add(new Math1("수학1"));
  		
  		School<Math1> math1 = new School<>("수학1", 5);
  		math1.add(new Math1("수학1"));
  		
  		
  		plusMinus(naturalSciences);
  		plusMinus(science);
  		plusMinus(math);
  		plusMinus(math1);
  		System.out.println();
  		
  		// differential(naturalSciences);
  		// differential(science);
  		differential(math);
  		differential(math1);
  		System.out.println();
  		
  		science(naturalSciences);
  		science(science);
  		// science(math);
  		// science(math1);
  	}
  }
  
  // 이과 과목 : [이과, 과학, 수학, 수학1]
  // 과학 과목 : [과학, null, null, null]
  // 수학 과목 : [수학, 수학1, null, null]
  // 수학1 과목 : [수학1, null, null, null, null]
  // 
  // 수학 과목 : [수학, 수학1, null, null]
  // 수학1 과목 : [수학1, null, null, null, null]
  // 
  // 이과 과목 : [이과, 과학, 수학, 수학1]
  // 과학 과목 : [과학, null, null, null]
  ```

  