## Kotlin Basic Grammar - 2

- 저번에는 Kotlin의 기초에 대해서 배웠다.
- 이번에는 그 기초에 대하여 잘못 알고 있었던 사실이나 추가적으로 알아야할 기초적인 지식을 배워보았다.



#### val

- 저번에는 val에 대한 설명이 살짝 애매한 상태로 이루어졌었는데 이번에는 확실히 알게 되었다.

- "값의 할당이 1회만 가능한 변수의 자료형"이다.

- 만약 아래와 같이 변수를 선언은 했지만 type은 정해주지 않았을 때,

  ```kotlin
  val a = 2
  ```

- Int 라는 자료형이 추론되고 자료형은 바꿀 수 있다고 살짝 생각했었는데
- 그것은 잘못된 생각이었고 자료형은 불변하고 한 번 할당 한 뒤 그 뒤로는 바꿀 수가 없다는 것을 알게 되었다.



#### var

- 저번에는 var는 javascript 처럼 자료형이 계속 바뀔 수 있다고 생각했었는데 그것도 실수였다.
- Kotlin에서의 var는 Mutable 변수로써 일반적인 변수이고 자료형을 처음이나 처음에 초기화할 때 추론하여 할당이 되며 기본 자료형이므로 연산에 사용이 가능하다.



#### 주석

- 주석은 흔히 알고 있는 java, c, javascript 와 같은 주석을 사용하고 있다.
- 따라서 // 와 같은 한 줄 주석과 /* ~ */ 과 같은 여러 줄 주석을 사용할 수 있다.
- 하지만 /** */ 과 같은 도큐먼트 주석을 사용할 수 있을지는 미지수인 것 같다.
- 아마 자바에서도 지원하는 것처럼 Kotlin도 사용할 수 있을 것으로 보인다.



#### is

- 저번에 is는 자바에서의 instanceof 와 같은 능력을 발휘한다고 생각했었다.
- 다른 점은 없지만 Kotlin에서는 is를 사용할 때 그 대상이 Any 라면 자동으로 타입을 변환시켜준다는 것이었다.
- 아래의 코드를 보는 것이 이해가 쉽다.

```kotlin
fun isString(obj: Any): Int? = if(obj is String) obj.length else null
```

- 위의 isString 함수는 매개변수로 Any 즉, 자바에서의 Object를 받는다.
- 그리고 Any형 obj 변수를 이용해서 이 obj가 String 이라면 String의 내장된 속성인 length를 사용하여 리턴하고 만약 String이 아니라면 null을 리턴한다.
- 이 때 만약 자바에서의 instanceof라면 매개변수로 들어온 obj는 String이였겠지만 매개변수로 들어오면서 Object 형으로 변환이 되고 instanceof 를 통해 String 이라는 것은 알게 되지만 length를 리턴할 때 모두 casting을 해줘야 한다는 단점이 존재한다.
- 이것 또한 아래의 코드를 확인하면서 보는 것이 편할 것이다.

```kotlin
public class Test {
	public static void main(String[] args) {
		Test t = new Test();
		System.out.println(t.isString("Hello"));
		System.out.println(t.isString(10));
	}
	public int isString(Object obj) {
		if(obj instanceof String)
			return ((String) obj).length();
		else
			return (Integer) null;
	}
}
```

- 위의 코드는 아까 설명한 자바 코드이다.
- Test라는 클래스의 객체를 생성한 뒤 그 객체를 이용해서 isString() 를 사용하고 있다.
- 이 때 isString()을 보면 아까 코틀린처럼 instanceof를 통해 무엇을 상속받았는지 확인은 하지만 형변환이 이루어지지 않아서 String으로 obj를 형변환 해준것을 알 수 있다.
- 심지어 자바에서는 int형으로 return 할 때 null 값을 리턴할 수 없기 때문에
- System.out.println(t.isString(10)); 문에서 NullPointerException이 발생하게 된다.



- 저번에는 for문만 있고 while 문이 존재하지 않는 줄 알았는데 사실 있다는 것을 알게 되었다.
- 아래의 코드는 while문을 통해 간단한 메세지 출력을 하는 예제이다.

```kotlin
fun main(args : Array<String>) {
	val list = listOf("Lee", "Jin", "Hyeok")
	var index = 0
	while(index < list.size) {
		println("list at $index is ${list[index]}")
		index++
	}
}
```

- 위의 출력 결과는 아래와 같이 예상했던 대로 아래와 같이 나타난다.

```kotlin
list at 0 is Lee
list at 1 is Jin
list at 2 is Hyeok
```

- 이렇게 쉽게 while문을 사용할 수 있다는 것을 알 수 있다.

- 위의 코드에서 의문점을 가질 수 있는 것은 세 가지 정도가 있을 수 있는데 그것에 대해서 좀 알아보겠다.

  - 첫 번째로 listOf() 함수이다.

  - 이 listOf() 함수는 간단하게 list를 만들어주는 함수이다.

  - 자바에서는 ArrayList를 만들어서 넣고 넣고 해주었지만 코틀린에서는 쉽게 가능하다.

    

  - 두 번째로는 size 속성이다.

  - 본 코드에서는 list.size처럼 사용했는데 이것은 그 말대로 list의 크기를 리턴해주는 속성이다.

    

  - 세 번째로는 ${list[index]} 와 $index이다.

  - 사실 이 문법은 자바에섣도 가능하다.

  - 이것을 모르게 되면 문자열을 + 연산자를 통해 중간 중간에 변수를 끼워주어야 하지만

  - 이 문자열 템플릿을 사용하게 되면 문자열 안에서 연산 또는 변수의 삽입이 가능하게 된다.



- 저번에 ranges를 할 때 if문 안에 for문을 사용할 수 있다고 하였는데 그것은 아래와 같이 사용할 수 있다.

  ```kotlin
  fun main(args : Array<String>) {
  	test(3)
      test(10)
  }
  
  fun test(x : Int) {
      if(x in 1..5)
      	println("1 ~ 5")
      else
      	println("not 1 ~ 5")
  }
  ```

- 위의 코드는 아래오 같은 출력을 가진다.

  ```kotlin
  1 ~ 5
  not 1 ~ 5
  ```

- 추측해보면 알겠지만 x in 1..5는 x라는 변수가 1에서부터 5까지 인지 확인하고 1에서부터 5중에 하나라면 true를 리턴하고 아니면 false를 리턴하게 된다.

- 이 때 나는 생각했다. 만약 x가 실수라면 그것도 될까?

- 아래의 코드를 살펴보자.

  ```kotlin
  fun main(args : Array<String>) {
  	
  	val x = 2.5
  	if(x in 1..10)
  		println("dd")
  	else
  		println("aa")
  }
  ```

- 이렇게 x에 2.5를 넣으면 정상적으로 dd가 출력이 된다.
- 그렇다면 x에 10.1을 넣으면? 혹시 오류가 날까봐 걱정했는데 오류는 커녕 잘 출력이 되었다.
- dd라고 출력이 되었기에 int형으로 형변환을 하는 것으로 알게 되었다.
- x를 10.9를 해도 dd가 출력이 된다.
- 하지만 10.9999999999999999999999와 같이 부동소수점 오류를 통해 11로 간주할 수 있는 범위에서는 aa가 출력되는 것을 알 수 있었다.
- 아래쪽 즉, 0쪽도 같다.



- 다음에는 Kotlin에서의 상속과 제네릭, 몇몇의 함수에 대해서 알아볼 예정이다.