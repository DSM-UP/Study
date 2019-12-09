## Kotlin Class, Constructor, init

- 오늘은 코틀린에서의 클래스에 대해서 배워보았다.
- 구글 검색을 통해서 정보를 얻는데 왜인지 모르게 생각보다 헷갈리게 적어놓은 곳이 많아서 정확한 정보를 검출하는데 조금 걸렸다.



#### 첫 번째로 코틀린에서의 클래스 생성법이다.

- 일단 아래의 코드를 살펴보자

  ```kotlin
  class Person {
      private val name : String
      private val age : Int
      
      public fun ShowInfo() {
          println("name : " + name)
          println("age : " + age)
      }
  }
  ```

- 위의 코드를 보면 알겠지만 일반적인 Java 코드를 지금까지 배운 코틀린 문법으로 바꾼 것 밖에 없다.
- 이것을 보면 클래스의 기본 생성방식은 같다는 것을 알 수 있다.
- 그럼 이제 생성자에 대해서 알아보자.



#### 두 번째, 코틀린에서의 생성자!

- 일단 아래의 코드를 보면서 생각해보자.

  ```kotlin
  public class TestKotlin {
  	public fun main(args : Array<String>) {
  		val person1 : Person = Person("Lee", 16)
  		val person2 : Person = Person("Kim")
  		
  		person1.ShowInfo()
  		person2.ShowInfo()
  	}
  }
  
  class Person constructor(name : String, age : Int) {
  	private val name : String
  	private val age : Int
  	
  	constructor(name : String) : this(name, 17)
  	
  	init {
  		this.name = name
  		this.age = age
  	}
  	
  	public fun ShowInfo() {
  		println("name : " + name)
  		println("age : " + age)
  	}
  }
  ```

- 위의 코드의 출력은 아래와 같다.

  ```kotlin
  name : Lee
  age : 16
  name : Kim
  age : 17
  ```

- 동작에 대해서 혼자 연구해보고 싶다면 여기까지만 보고 알아차려보는 것도 좋을 것 같다.



- 그럼 이제 생성자에 대해서 알아보자면 일단 Kotlin에서의 생성자는 위의 코드를 보면 알 수 있겠지만 constructor와 init으로 나뉘어져 있다.

- 그럼 왜 constructor 와 init으로 나뉘어져 있는 걸까?

- 하나는 생성자, 하나는 초기화라는 뜻으로 비슷하다.

- 그리고 자바에서는 클래스 명을 통해서 생성자를 정의한다.

- 하지만 코틀린에서는 constructor를 통해서 생성자의 매개변수를 정의하고 진짜 초기화 및 동작은 init에서 동작한다.

- 자바를 조금 배워보면 알겠지만 자바의 생성자 함수는 함수라고 불리지만 함수가 아니라는 것을 알 수 있다.

- 그것처럼 코틀린의 constructor와 init은 함수가 아니다. 애초에 형식조차 다르다.

- 그럼 지금 말할 중요한 부분만 추려서 보여주겠다.

  ```kotlin
  class Person constructor(name : String, age : Int) {
  	private val name : String
  	private val age : Int
  	
  	constructor(name : String) : this(name, 17)
  	
  	init {
  		this.name = name
  		this.age = age
  	}
  	
  	public fun ShowInfo() {...}
  }
  ```

- 일단 Person 클래스의 이름 옆에 붙어있는 constructor는 primary 생성자라고 한다.
- 첫 번째 생성자라는 뜻이다.
- String 형의 name과 Int형의 age를 받아서 init에게 보내주면 init이 각각의 멤버변수에 값을 저장한다.
- 또한 밑의 constructor는 name 만을 받고 this를 통해 age : 17을 전달하고 있는데 여기서의 this를 init를 가리킨다. 또한 나중에 상속을 배우면 알겠지만 조상 클래스의 생성자를 사용하기 위해서는 super 키워드를 사용한다.



- Person 옆에 있는 생성자는 이렇게 옆에 있어도 되지만 아래와 같이 밑으로 내릴 수도 있다.

  ```kotlin
  class Person {
      ~~~~
      constructor(name : String, age : Int) : this(name, age)
      constructor(name : String) : this(name, 17)
      ~~~
  }
  ```

- 또한 생성자를 private 모드로 바꿀 수도 있다.

  ```kotlin
  class Person {
      ~~~~
      private constructor(name : String, age : Int) : this(name, age)
      private constructor(name : String) : this(name, 17)
      ~~~~
  }
  ```

- 위 처럼 Person 옆에 두면서도 private 모드로 적용할 수 있다.

  ```kotlin
  class Person private constructor(name : String, age : Int) {}
  ```

- 그럼 여기서 생성자를 왜 private 모드로 하냐고 물을 수도 있다.
- 이것은 나중에 점차 알게 될 것이다.





- 시험 때문에 많은 양의 공부를 하지 못하고 있다.
- 빨리 시험이 끝나길 바란다.