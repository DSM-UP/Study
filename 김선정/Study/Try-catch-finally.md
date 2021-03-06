## Try-catch-finally

#### 예외처리방식

프로그램이 실행되는 동안 문제가 발생하면 프로그램이 자동으로 중단된다.

이럴 경우에 프로그램이 대처할 수 있도록 처리하는 것이 예외 처리라고 한다.

**프로그램 실행중에 발생하는 오류를 예외라고 하고, 프로그래밍 언어의 문법적인 오류를 에러라고 한다**

예외가 발생하는 이유는 여러가지가 있겠지만 일반적으로 잘못된 코드를 작성했거나 사용자가 개발자가 원하지

않는 방향으로 프로그램을 사용했을 수도 있다.

예외는 기본 예외 처리와 고급 예외 처리 두 가지 방법으로 처리한다.

예외가 발생하지 않게 사전에 해결하는 것을 기본 예외 처리라고 하며 대개 조건문으로 처리할 수 있다.

**Exception(예외)**

예외란 사용자의 잘못된 조작 또는 개발자의 잘못된 코딩으로 발생하는 프로그램 오류를 말한다.

예외가 발생하면 프로그램이 종료가 된다는 것은 에러와 동일하지만 예외는 예외처리를 통해 프로그램을 종료

되지 않고 정상적으로 작동되게 만들어줄 수 있다. 

**빈도수가 높은 예외**

NullPointException: 자바프로그램에서 가장 빈번하게 발생하는 에러. 이 에러는 객체 참조가 없는 상태,

즉 null값을 갖는 참조변수로 객체 접근 연산자인 토드를 사용했을 때 발생한다. 객체가 없는 상태에서 객체를

사용하려했으니 예외가 발생한다.

```java
try{
    //에러가 발생할 수 있는 코드
    throw new Exception();
}catch (exception e){
    //에러시 수행
    e.printStackTrace(); //오류 출력(방법은 여러가지)
    throw e; // 최상위 클래스가 아니라면 무저건 던진다
}finally{
    //무저건 수행
}
```

![img](https://t1.daumcdn.net/cfile/tistory/9947C14F5C1BB0950C)

***try블록에는 예외가 발생할 수 있는 코드가 위치한다.*** try 블록의 코드가 예외없이 정상 실행되면 catch블록의 

코드는 실행되지 않고, finally 블록의 코드를 실행한다. 하지만 try블록의 코드에서 예외가 발생하면 즉시 

실행을 멈추고 catch 블록으로 이동하여 예외처리 코드를 실행한다. 그리고 fianlly 블록의 코드를 실행한다.

(finally블록은 생략이 가능하다)

**!!** try catch문을 주로 쓰는 구간은 주로 데이터 베이스에 데이터를 주고 받을 경우에 많이 사용한다.

#### 예외는 반드시 Throw해주자.

***최상단 클래스를 제외한 나머지 클래스에서의 예외는 반드시 Throw를 해주어야 한다.***

그렇지 않으면 예외처리를 해주었음에도 불구하고 Main에서는 Exception을 전달받지 못하여 개발자가 예외를

인지 못하는 경우가 생긴다.

![img](https://t1.daumcdn.net/cfile/tistory/99C6463C5C1BB9EF18)

### 다중 catch

```java
try{
    //예외 발생 가능한 문장들
}catch(예상되는_예외 객체1 변수명){
    //해당 예외가 발생했을 때 수행할 문장들
}catch(예상되는_예외객체2 변수명){
    //해당 예외가 발생했을 때 수행할 문장들
}catch(예상되는_예외객체3 변수명){
    //해당 예외가 발생했을 때 수행할 문장들
}
```

#### 다중 catch문의 주의 사항

* 여러개의 catch블록을 사용할 때는 Exception 클래스의 계층 관계에 주의를 기울여야 한다.

* 앞에있는 catch블록의 예외 객체가 나중 catch블록 예외 객체의 부모라면 앞에 있는 catch블록이 먼저

  가로챔 -> 컴파일러는 오류를 발생시킴

* 구체적인 예외를 먼저 처리해야 함

### throw와 throws의 차이점

* thorws는 현재 메서드에서 자신을 호출한 상위 메서드로 Exception을 발생시킨다
* throw는 억지로 에러를 발생시키자고 할 때 사용한다(현재 메서드, 혹은 상위메서드로)



throws키워드를 사용하는 메서드를 호출한 상위 메서드에서 이러한 에러 처리에 대한 책임을 맡는다

throw는 프로그래머가 사용자 정의 exception을 강제로 발생시켜 메서드 내에서 예외처리를 수행하는 것이다.

이때 throw는 현재 메서드 내에서 예외를 강제로 발생시키거나 현재 메서드에게 exception 정보를 전달할 수 있다



#### throws문을 쓰는 첫번째 이유

***한 예외상황에서 여러가지 처리방법이 필요할 때 사용한다.***

같은 예외라도 언제, 어느상황에서 함수를 호출했느냐에 따라 다르게 처리해줘야 하는 경우가 있다.

한 예외상황을 두고 각 개발자들이 맡은 파트별로 다른 처리를 해줄 수 있기 때문에 throws를 사용한다

#### throws문을 쓰는 두번째 이유

***명시적으로 예외를 확인하기 위함이다***

소스의 크기가 커지고 메소드의 크기가 커지면 아무리 try~catch를 쓴다한들 어디서 어떤 예외상황이 발생

하는지 한 눈에 보기가 불편하다 하지만 thorws를 사용하면 메소드의 선언부에 적혀있기 때문에 알아보기가

편하다.

#### throws문을 사용하는 세번째 이유

***해당 부분의 소스를 단순화 하고 싶을 떄***

예외처리 소스를 계속 한 메소드나 클래스에 넣다보면 소스가 커지고 소스의 크기가 커지면 읽기는 더욱

불편해지며 소스끼리 충돌도 일어나고 버그가 생길 확률도 높아진다.

따라서 상황에 따라 해당 클래스 혹은 해당 메소드를 단순화 하고 싶을때는 다른곳으로 예외의 처리의 책임을

넘겨버리는 것이다.

#### throws 사용시 주의 사항

* throws 절이 있는 메소드를 오버라이딩 할 때는 메소드에 선언한 예외보다 더 광범위한 검사형 예외(일반 예외)를 던질 수 없다.

* 부모 클래스의 메소드에 예외를 떠넘기는 throws 절이 없다면 자식 클래스의 메소드를 오버라이딩 할 떄

  어떤 예외도 떠넘길 수 없다.