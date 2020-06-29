## AspectJ 포인트컷 표현식

### 1. 메소드 시그니처 패턴

지금까지는 AspectJ 포인트컷 표현식을 execution을 이용해서 작성하였다.
그리고 이 메소드 시그니처 패턴이 바로 execution을 사용하는 AspectJ 포인트컷 표현식이다.

메소드 시그니처 패턴이란 메소드의 형태가 어떤지를 보고 포인트컷을 적용할
메소드를 결정하는 패턴이다.
따라서 메소드 시그니처 패턴(execution)에서는
접근제어지시자, 반환형, 메소드이름, 매개변수를 이용하여 포인트컷을 적용할 메소드를 구분한다.
다음은 메소드 시그니처 패턴의 기본 문법이다.

```java
execution([접근제어지시자] [반환형] [패키지명].[클래스명].[메소드명]([매개변수타입]))
```

여기서 '*'을 사용한다는 것은 모든 접근제어지시자에 대해서 허용,
모든 반환형에 대해서 허용, 모든 메소드명에 대해서 허용이라는 뜻으로 사용이 된다.

접근제어지시자와 반환형에 대한 조건이 없다면 둘 다 합쳐 *로 사용이 가능하다.
따라서 다음과 같은 형식이 가능하다.

```java
execution(* [패키지명].[클래스명].[메소드명]([매개변수타입]))
```

만약 같은 패키지에 존재한다면 [패키지명]은 생략이 가능하다.

```java
execution(* [클래스명].[메소드명]([매개변수타입]))
```

모든 메소드에 대해서 허용한다면 *로 치환 가능하고
매개변수가 상관이 없다면 ..으로 치환이 가능하다.

```java
execution(* [클래스명].*(..))
```

만약 클래스명이 Test라면 다음과 같이 작성할 수 있다.

```java
execution(* Test.*(..))
```

만약 접근제어지시자를 public으로 설정하고 싶다면 다음과 같이 작성한다.

```java
execution(public * Test.*(..))
```

매개변수도 특정하 수 있는데, 첫 번째 매개변수가 int 타입이라면 다음과 같이 한다.

```java
execution(public * Test.*(int, ..))
```

뒤에 붙는 ..은 int타입의 매개변수 뒤에 더 오든 안 오든 상관 없다는 뜻이다.
만약 정확히 int 타입 두 개로 확정하고 싶다면 ..을 제거하고 int 타입 두 개를 설정한다.

```java
execution(public * Test.*(int, int))
```

메소드명이 set으로 시작하는 것만 포인트컷으로 등록하고 싶다면 다음과 같이 사용한다.

```java
execution(public * Test.set*(int, int))
```

반환형을 void로 확정시키고 싶다면 다음과 같이 사용한다.

```java
execution(public void Test.set*(int, int))
```

이려면 접근제어지시자가 public이고, 반환형이 void이며 Test 클래스 안에 있는 set으로 시작하는
메소드 중 매개변수로 int 타입 변수 두 개를 받는 메소드만 포인트컷으로 등록한다는 뜻이다.

### 2. 어노테이션 패턴

메소드 시그니처 패턴에서는 execution()을 사용했다면 어노테이션 패턴에서는 annotation()을 사용한다.
annotation()안에 특정한 어노테이션을 작성하면 그 어노테이션이 붙은 클래스의 메소드에 포인트컷을
등록하기로 한다.

내가 사용자 지정으로 @TestTestTest라는 어노테이션을 생성했다고 한다면
다음과 같이 @TestTestTest가 붙은 클래스를 지정할 수 있다.
@TestTestTest는 abc.def.ghi 패키지에 등록되어 있다.

```java
annotation(abc.def.ghi.TestTestTest)
```

이러면 @TestTestTest가 작성된 모든 클래스를 말하는 것이다.

### 3. 타입 시그니처 패턴

메소드 시그니처 패턴이 메소드에 대해서 자세하게 언급하여 포인트컷을 등록하는 표현식이었다면
타입 시그니처 패턴은 간단하게 타입을 가지고 포인트컷을 등록하는 방식을 사용한다.
쉽게 패키지 안에 있는 클래스를 선택할 수도 있고 그 패키지와 그 하위 패키지도 모두 고를 수도 있으며
어떤 인터페이스의 구현체로 정할 수도 있다.

이 타입 시그니처 패턴에서는 within()을 사용한다.

다음은 abc.def.ghi라는 패키지의 클래스에 모두 적용되는 패턴이다.

```java
within(abc.def.ghi.*)
```

만약 하위 패키지까지 모두 적용하고 싶다면 .을 두 개 찍으면 된다.

```java
within(abc.def.ghi..*)
```

어떠한 클래스로 범위를 좁히고 싶다면 그대로 명시하면 된다.

```java
within(abc.def.ghi.Test)
```

만약 Test 클래스가 같은 패키지 안에 있다면 패키지명을 제거해도 된다.

```java
within(Test)
```

만약 어떤 인터페이스의 구현체를 모두 포인트컷으로 등록하고 싶다면 다음과 같이
인터페이스의 이름 뒤에 +기호를 붙이면 된다.

```java
within(TestInterface+)
```

물론 작성된 어노테이션도 가능하다.

```java
within(abc.def.ghi.TestTestTest)
```

여기서 TestTestTest는 어노테이션이다.

### 4. 표현식에 논리 연산 사용하기

여러 AspectJ 포인트컷 표현식을 합치고 싶다면 &&, ||, !과 같은 논리 연산을 사용하면 된다.
&&, ||, !는 모두 알테니 자세한 설명은 하지 않겠다.
참고로 자료형이나 매개변수, 접근제어지시자 앞에 !를 붙이면 그 것을 제외한 다른 모든 것을 허용한다는 뜻이다.

```java
execution(public !void *.*(..))
```

이러면 접근제어지시자가 public이고 반환형이 void가 아닌 모든 메소드를 지정하는 것이다.

### 5. 포인트컷 매개변수 선언하기

우리는 기존에 JoinPoint 객체를 이용해서 Target 객체 또는 매개변수 등을 알아볼 수 있었다.
그런데 JoinPoint 객체에서 매번 빼오는 것은 매우 귀찮은 일이 될 수 있다.
마치 HttpRequest에서 HttpSession을 매번 가져오는 것이 귀찮아서 HttpSession으로 가져오는 것과 같다.
따라서 매개변수로 Target 객체 (target)과 매개변수 (args)를 바로 가져오기 위해서
target(변수명), args(매개변수명)으로 표현식에 포함할 수 있다.

```java
execution(* *.*(..)) && target(target) && args(n1, n2)
```

이러면 이 표현식을 사용하는 어드바이스는 Object 타입의 target 객체와
매개변수의 타입을 가지는 n1, n2를 매개변수로 받아올 수 있다.
그리고 JoinPoint 객체는 생략할 수 있다.

사용하는 입장에서는 다음과 같이 사용한다.

```java
@Aspect
public class Test {
    @Before("AspectMoa.all(target, n1, n2)")
    public void test(Object target, int n1, int n2) { ... }
}
```

