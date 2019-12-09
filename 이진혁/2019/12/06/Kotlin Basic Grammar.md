## Kotlin Basic Grammar

#### 자료형

- 코틀린의 자료형에는 크게 두 가지가 있다.

- 첫 번째로는 val가 있고 두 번째로는 var가 있다.

- val는 value의 줄임말으로써 자료형을 변경할 수 없고 그 값도 변할 수 없다는 특징을 가지고 있습니다.

- 원래 Java에서는 final이라는 키워드를 사용했었고, C나 C++에서는 const라는 키워드를 이용했었습니다.

- 아래는 Java와 Kotlin의 코드 상에서의 차이를 보여주고 있다.

  ```java
  final int a = 1;
  final int b = 1;
  final int c;
  ```

  ```kotlin
  val a: Int = 1
  val b = 1
  val c: Int
  ```

- 첫 번째 코드가 Java로 짜여진 코드이고 두 번째 코드가 Kotlin으로 짜여진 코드이다.
- 그냥 한 눈으로 보기만 해도 Kotlin과 Java의 차이점에 대해서 알아볼 수 있는데
- 일단 첫 번째로 Kotlin은 세미콜론이 존재하지 않는다. 하지만 세미콜론을 명시적으로 붙여줄 수는 있다.
- 두 번째로는 자료형을 앞에서 지정해주지 않고 뒤에서 지정해준다는 것을 알 수 있다.
- 물론 var와 val이라는 자료형을 지정해주긴 하지만 그것만으로는 부족한 전달 방식이다.



- 그러면 val에 대한 이야기를 계속 해보자면 val 라는 자료형은 뒤에 명시적으로 Int와 같은 자료형을 지정해줄 수 있다.
- 또한 지정하지 않을 경우 초기화 된 값을 확인하고 그에 맞는 형으로 지정해준다.
- Kotlin 코드에서의 두 번째 줄에서 b라는 변수를 1로 초기화 했지만 Int라는 값은 지정해주지 않았다.
- 하지만 1은 형식상 Int 값이라는 것을 알 수 있으므로 자동으로 Int로 자료형을 정해준다.
- 마지막으로 세 번째 줄인 변수 c는 Int 형이라는 것만 정해주고 초기화를 하지 않았다.
- 이는 val의 특성상 생성자 시점에서 초기화를 해주어야 한다는데 아직 Kotlin에서의 생성자를 배우지 않았으므로 나중에 알아도 될 개념인 것 같다.





- 다음으로 var는 val과 같이 Kotlin에 있는 두 개의 자료형 중 하나로 아래와 같은 코드로 작성할 수 있다.

  ```java
  int a = 10;
  int b = 20;
  a = 15;
  b = a + 1;
  ```

  ```kotlin
  var a = 10
  var b: Int = 20
  a = 15
  b = a + 1
  ```

- 위와 같이 var 라는 자료형은 Java에서의 기본 자료형에 해당하며 아무 키워드가 붙지 않은 Java 코드의 자료형이라고 생각하면 쉽다.
- 또한 val 처럼 자료형을 지정해줄 수도 있고 지정하지 않을 수도 있는데, 위에서는 자료형을 지정해주면 Int 형이라는 것을 인식하게 되고 자료형을 지정해주지 않으면 Kotlin이 알아서 추론하여 Int 형이라고 해준다.
- val 이라는 자료형이 변경할 수 없다는 특징을 띄고 있었으므로 var는 언제든지 변경할 수 있다.
- 그렇기 때문에 변수에 다른 값을 대입하거나 연산을 진행할 수도 있게 된다.



#### 함수

- Kotlin에서의 함수는 Java와 개념은 같지만 쉽게 사용할 수 있도록 만들어 놓은 것이 일품이다.

- 아래는 Java와 코드로 이루어진 함수와 Kotlin으로 이루어진 함수이다.

  ```java
  public int sum(int n1, int n2) {
      return n1 + n2;
  }
  ```

  ```kotlin
  fun sum(n1: Int, n2: Int): Int {
      return n1 + n2
  }
  ```

- Java는 당연히 알테니 넘어가고 Kotlin의 함수 정의를 보겠다.
- 일단 sum이라는 함수를 정의하는데 간단하게 매개변수 두 개를 받고 그 둘을 더하여 return 하는 함수이다.
- Java에서는 함수라는 것을 딱히 명시해줄 필요 없이 형식만 갖추면 됐지만 Kotlin에서는 fun이라는 함수 특정 기호를 써주어야 한다.
- fun 함수이름(매개변수들): 함수의 리턴형 {} 과 같은 형식으로 만들게 된다.
- 매개변수의 자료형도 위에서 얘기했듯이 자료형을 지정하고 함수의 자료형은 리턴형으로 취급된다.
- 또한 리턴형을 적어주지 않아도 알아서 리턴이 되는 특이한 특징을 가지고 있다. 이에 대해서는 아래에서 소개할 예정이다.



```kotlin
fun sum(n1: Int, n2: Int): Int = n1 + n2
fun sum(n1: Int, n2: Int) = n1 + n2
```

- 위의 코드 중 첫 번째 줄은 리턴 타입을 정해주고 = 을 이용하여 return문만 존재하는 함수를 간단하게 정의할 수 있도록 한 문법이다.
- 또한 아예 리턴형을 정해주지 않고 처리해버리는 두 번째 경우도 존재한다.



```kotlin
fun max(a: Int, b: Int) = if(a > b) a else b
```

- 위와 같이 if-else 문이 존재하는 간단한 함수도 이렇게 간단하게 문법으로 정의할 수 있다.

- 이는 매개변수로 들어온 a, b 중 a가 더 크면 a를 리턴하고 b가 더 크면 b를 리턴하는 형식의 함수를 간단하게 정리한 것이다.



#### null에 대한 처리

- 자바와 같이 코틀린에서도 기본 자료형은 null이라는 값을 가질 수 없습니다.
- 하지만 자바에서는 참조 자료형일 때 null이라는 값은 대입할 수 있도록 만들어 놨는데 코틀린에서는 자바에서 NullPointerException 에 대한 의식 때문인지 null 에 대한 안전한 값을 보장하도록 만들어 놨다.
- 일단 기본적으로 참조 자료형에는 null 값을 대입할 수 있는 자바와는 달리 코틀린은 자료형을 명시할 때 그 자료형 뒤에 ?를 붙여줘야 null 이라는 값을 대입할 수 있게 됩니다.

- 아까 기본자료형은 null 값을 가질 수 없다고 하였는데 리턴 값처럼 기본 자료형 또는 null 값을 리턴해야 하는 경우 ? 를 붙여주면 return은 할 수 있도록 합니다.

- 따라서 아래와 같은 코드가 사용이 가능합니다.

  ```kotlin
  fun BBB(a: AAA?): Int? {
      return abc?.a
  }
  ```

  



#### 자바에서는 Object, 코틀린에서는 Any

- 말그대로 자바에서 모든 객체의 조상클래스가 되는 Object 클래스가 있듯이 코틀린에서도 모든 객체를 담을 수 있고 모든 객체의 조상클래스인 Any 라는 클래스가 존재합니다.
- 또한 자바에서 무슨 클래스를 상속받고 있는지 boolean 값을 알 수 있는 instanceof 라는 연산자가 있는데 코틀린에서는 파이썬과 같이 is 라는 키워드를 사용합니다.
- 또한 is 는 상속받고 있으면 true이지만 !is 를 통해 false를 리턴하게 할 수도 있습니다.

```kotlin
fun getStringLength(obj: Any): Int? {
  if (obj !is String) return null
  return obj.length
}
```



#### 자바에서는 foreach, 코틀린에서는 for in?

- 자바에서는 for each 방식으로 데이터를 꺼내고 사용할 수 있었다면 코틀린에서는 같은 방법으로 for in을 통해 데이터를 사용할 수 있다.

- 이것은 말로 하는 것 보다 코드로 직접 보는 것이 쉬울 것이다. 왜냐하면 달라진게 없기 때문이다.

  ```kotlin
  ArrayList<String> arrayList = new ArrayList<>();
  for (String s : arrayList) {
      System.out.println(s);
  }
  
  val arrayList = ArrayList<String>()
  for (s in arrayList) {
      println(s)
  }
  ```

- 자바와 코틀린에서 달라진 것은 for each 문을 for in 문으로 바꾸었다는 것과 리스트에서 꺼내서 받아올 s라는 변수의 자료형이 정해져 있지 않다는 점 밖에 없다.



#### switch - case 문과 비슷(같은)한 When 문

```kotlin
fun whenTest(obj: Any) {
    when(obj) {
        10 -> println("17")
        "Lee" -> println("Kim")
        is String -> println("string")
        else -> println("default")
    }
}
```

- 위의 함수는 코틀린에서 when 문을 활용한 함수이다.
- 자바에서는 스위치-케이스 문을 이용해서 했던 작업이 간단 명료하게 보이는 것을 알 수 있다.
- 또한 스위치-케이스에서 사용했던 default를 else를 통해 처리하는 것을 볼 수 있다.



#### 일반 for문

- 아래의 코드는 자바의 for문과 코틀린의 for문을 비교한 코드이다.
- 위가 자바이고 아래가 코틀린이다.

```java
for(int i = 1 ; i <= 5 ; i++) {
    System.out.println("Hello");
}
```

```kotlin
for(i in 1..5) {
    println("Hello");
}
```

- i를 1에서부터 5까지 1씩 증가하면서 반복하는 것을 알 수 있다.
- 둘 다 출력 결과는 Hello의 다섯 번 출력으로 끝이 난다.
- 또한 if문의 조건으로 for문을 넣을 수 있다는 사실도 알아두는 것이 좋겠다.