## 순수 자바로 AOP 구현하기

### 1. AOP가 무엇인가요?

AOP는 Aspect Oriented Programming의 약자로서, 직역하면 관점 지향형 프로그래밍이라는 뜻이다.
여기서 관점 지향형 프로그래밍이라고 한다면 딱히 무언가가 떠오르는 사람이 없을 것이다.
이것은 실제 서비스를 구현함에 있어서 유저의 관점과 개발자의 관점, 운영자의 관점이 다름으로
인해서 생기는 문제를 해결하기 위해 생겨난 프로그래밍 기법이기 때문이다.

일반적으로 AOP를 알고 있는 사람이든 어중간하게 알고 있는 사람이든 AOP가 무엇이냐고 묻는다면
AOP는 OOP(Object Oriented Programming)에서 DI(Dependency Injection)의 기능을 추가한 것이라고
말하는 경우가 대부분일 것이다.
왜냐하면 정말로 객체 지향형 프로그래밍 기법에서 의존성 주입을 추가한 것이라고 보는 경우가 많기 때문이다.
이는 순수 자바로 AOP를 구현하지 않고 스프링 프레임워크 중심적으로 AOP를 배웠기 때문에 생기는 문제점이다.

물론 순수 자바에서도 DI 기능을 가능케 만들 수 있다.
하지만 AOP를 설명함에 있어서 DI 기능을 어느정도 배제한 뒤 설명할 수 있기 때문에
AOP는 스프링에 종속된 프로그래밍 기법이 아니다.

다시 본론으로 돌아가서 AOP는 유저, 개발자, 운영자의 관점이 서로 달라 생기는 문제점을 해결하기 위해
생겨난 프로그래밍 기법이라고 했다.
그럼 그 문제를 한 번 확인해보자.

유저는 서비스를 제공하는 회사에게 다음과 같이 요구할 수 있다.
"합연산, 평균연산을 할 수 있는 계산기를 만들어주세요!"
그렇다면 서비스를 개발하는 개발자는 합연산과 평균연산을 할 수 있는 계산기를 개발하게 될 것이다.
그런데 운영자 측에서 계산기의 성능이 얼마나 되는지 알고 싶다는 요구를 할 수 있다.
그렇다면 개발자는 그에 맞춰서 순수 기능(계산하는 기능) 전에 시간을 측정하고 끝나기 전에 시간을 측정하여
성능을 확인하는 코드를 짤 수 있다.
하지만 이 성능을 구해야 하는 메소드가 만약 100개라면? 혹은 더 많다면?
같은 코드를 매우 많은 메소드들에 작성해야 한다.
이것은 매우 비효율적인 코드 작성이 될 수 있고 클린 코드를 지향하는 요즘 시대에 큰 오차일 수 있다.

그렇다면 시간 측정을 시작하는 코드를 메소드로 분리하고 시작 측정을 마치는 코드를 메소드로 분리하여
각각 순수 기능(계산을 하는 기능)의 전과 후에 메소드를 호출하면 되지 않을까? 라고 생각할 수도 있다.
하지만 이렇게 메소드를 분리하여도 분리한 메소드를 호출하는 코드를 작성해야하는 것은 같고
만약 더 이상 시간 측정을 하지 않기로 했다면 모든 메소드 호출 코드를 주석처리해야 한다.

그래서 나온 것이 AOP이다.
AOP는 순수 기능을 실행하는 메소드측에서 부가 기능(시간 측정)을 사용하는 것이 아니라,
부가 기능을 거쳐서 순수 기능을 호출하는 식으로 구현된다.
이게 무슨 소리인지 이해가 안 갈 수도 있다.
나도 처음엔 무슨 소리인지 의아했으니까

AOP가 이런식으로 구현이 가능한 이유는
개발자, 운영자측에서 만들어야 하는 부가적인 기능(성능 측정을 위한 시간 측정, 암호 인증, 트랜잭션 등)이
순수 기능(계산을 하는 기능)의 앞과 뒤에 존재하기 때문이다.
그리고 이 순수 기능은 우리가 OOP로 구현하므로 객체 지향형 프로그래밍 보다 큰 개념이라고도 한다.
그리고 원래 호출 하던 쪽이 호출 당하는 쪽이 되었으므로 제어의 역전 즉, IoC 개념과 혼동하기 쉽다.

그럼 이제 순수 자바로 AOP를 구현하면서 추가적으로 알아보자.

### 2. 순수 자바로 AOP 구현하기

위에서 유저측에서 요구했던 합연산과 평균연산을 할 수 있는 계산기가 있어야 한다.

```java
public interface Calculator {
    int sum();
    double avg();
}
```

```java
public class MyCalculator implements Calculator {
    private int korean;
    private int english;
    private int math;
    private int science;
    
    public MyCalculator(int korean, int english, int math, int science) {
        this.korean = korean;
        this.english = english;
        this.math = math;
        this.science = science;
    }
    
    public int sum() {
        int sum = korean + english + math + science;
        return sum;
    }
    
    public double avg() {
        double avg = sum()/4.0;
        return avg;
    }
}
```

이렇게 계산기 인터페이스와 그것을 구현한 계산기 클래스가 만들어졌다.
계산기 인터페이스를 왜 귀찮게 만들었냐고 물어볼 수도 있는데 순수 자바에서 AOP를 구현하기 위해서 사용될
Proxy 인터페이스에서 인자로 받는 값에 인터페이스와 그를 구현한 클래스가 있기 때문에
인터페이스를 작성해야 한다.

개발한 계산기 클래스에서는 합연산을 지원하는 sum() 메소드와 평균연산을 지원하는 avg() 메소드가 존재한다.
각각의 순수 기능, 주요 기능은

```java
int sum = korean + english + math + science;
와
double avg = sum()/4.0;
```

이라고 볼 수 있다.

일단 AOP를 구현할 Proxy 객체를 만들기 전에 이 계산기 클래스를 실행해 보겠다.

```java
public class MainClass {
    public static void main(String[] args) {
        Calculator calculator = new MyCalculator(30, 100, 50, 80);
        // ~~
        System.out.println(calculator.sum());
        System.out.println(calculator.avg());
    }
}

// 260
// 65.0
```

정상적으로 출력되는 것을 볼 수 있다.

AOP를 구현하기 위해서는 Proxy(프록시) 객체를 생성해야 한다고 했었다.
자바 버전 8 기준으로 Proxy 클래스는 네트워크에서 사용되는 프록시랑
현재 사용하고자하는 AOP에서의 프록시가 있다.
우리가 사용하고자하는 프록시는 java.lang.reflect 패키지에 존재한다.

프록시는 InvocationHandler를 생성자 매개변수로 받아서 생성할 수도 있지만
newProxyInstance() 정적 메소드를 이용해서 객체를 생성할 수도 있다.
newProxyInstance() 정적 메소드의 형식은 다음과 같다.

```java
public static Object newProxyInstance(ClassLoader loader,
                                      Class<?>[] interfaces,
                                      InvocationHandler h);
```

보면 ClassLoader 객체, Class 객체들, InvocationHandler 구현 객체를 매개변수로 받는 것을 알 수 있다.
이에 대해서 천천히 알아가보자.

#### 2-1. ClassLoader 객체 구현하기

아마 자바를 많이 접해보신 분이라면 Class.forName() 이라는 정적 메소드를 본적이 있을 것이다.
Class.forName() 메소드는 매개변수로 들어온 String 값의 클래스 이름의 클래스를 동적으로 생성할 수 있다.

이런 Class.forName()과 마찬가지로 클래스를 메모리에 로딩할 수 있도록 하는 클래스가
ClassLoader 클래스이다.

모든 클래스에는 정적 필드로 class 필드를 가지고 있다.
예를 들어 위에서 구현한 MyCalculator.class 처럼 사용할 수 있다.
그런데 이 MyCalculator.class는 Class 타입의 객체가 된다.
따라서 MyCalculator.class.getClassLoader() 메소드를 사용하면
MyCalculator 클래스의 클래스로더를 알아낼 수 있다.

프록시를 생성할 때의 ClassLoader 객체는 내가 구현하고자하는 클래스의 클래스로더를 작성하면 된다.
위에서는 MyCalculator 클래스를 사용하므로 MyCalculator.class.getClassLoader()를 작성하면 된다.

#### 2-2. Class<?>[] 객체 구현하기

Class 클래스는 매우 많이 봤을 것이다.
그런데 많은 사람들이 착각하고 있는 것이 Class 객체는 클래스만 가능하고
인터페이스는 안 될 것이라는 생각을 가지고 있는 사람들이 많다.
하지만 인터페이스도 class라는 필드를 가지고 있기 때문에 Class 객체로 만들 수 있다.

프록시 객체를 생성할 때는 ClassLoader에 사용된 클래스가 구현한 인터페이스를 작성하면 된다.
Class 배열로 되어 있는 이유는 Class가 구현한 인터페이스가 여러 개일 수 있기 때문이다.

이렇게 때문에 위에서 프록시 객체를 생성할 때 반드시 인터페이스를 정의하라고 한 것이다.

#### 2-3. InvocationHandler 객체 구현하기

InvocationHandler는 인터페이스로서, 이를 구현하는 구현 객체를 넣는 것이 일반적이다.
하지만 이러한 구현 객체를 하나 만드는 것은 클래스 파일을 하나 더 만드는 것이므로
자바 8에서 추가된 익명 구현 클래스를 사용하여 InvocationHandler를 구현할 수 있다.

지금까지 구현된 프록시 객체를 한 번 살펴보자.

```java
public class MainClass {
    public static void main(String[] args) {
        Calculator calculator = new MyCalculator(30, 100, 50, 80);
        
        Calculator proxy = (Calculator) Proxy.newProxyInstance(
        	MyCalculator.class.getClassLoader(),
            new Class[] {Calculator.class},
            new InvocationHandler() {
                @Override
                public Object invoke(Object proxy, Method method, Object[] args)
                												throws Throwable {
                    // InvocationHandler 내용
                }
            });
        
        System.out.println(calculator.sum());
        System.out.println(calculator.avg());
    }
}
```

이렇게 InvocationHandler 인터페이스의 익명 구현 객체를 작성하면 invoke() 라는 메소드를 정의해야 한다.
invoke() 메소드에 작성한 코드가 추가 기능(성능을 측정하는 기능)이 된다.
따라서 invoke() 메소드에는 추가 기능을 작성해야 하는데
일단 다음과 같이 성능을 측정하는 코드를 작성할 수 있다.

```java
@Override
public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    long start = System.currentTimeMillis();
    
    // ~~
    
    long end = System.currentTimeMillis();
    System.out.println((end-start) + "ms 시간이 걸림");
    return null;
}
```

이렇게 부가기능을 작성하였고 그 중간에 순수 기능, 주요 기능이 작성되면 될 것 같다.
Method 타입의 method 객체에는 MyCalculator 객체의 메소드, 그를 구현한 Calculator 인터페이스에
사용된 메소드가 있었다면 그 메소드까지 담고 있다.
나중에 프록시를 이용해 메소드를 실행할 경우 method에 담긴 메소드 중 하나를 실행d하게 된다.
이 Method 객체의 invoke()[같은 invoke() 아님]를 사용하면 담겨져 있는 인터페이스의 형식을 받고
Method 객체에 존재하는 매개변수를 받는다.
이를 코드로 구현하면 다음과 같다.

```java
public class MainClass {
    public static void main(String[] args) {
        Calculator calculator = new MyCalculator(30, 100, 50, 80);
        
        Calculator proxy = (Calculator) Proxy.newProxyInstance(
        	MyCalculator.class.getClassLoader(),
            new Class[] {Calculator.class},
            new InvocationHandler() {
                @Override
                public Object invoke(Object proxy, Method method, Object[] args)
                												throws Throwable {
                    long start = System.currentTimeMillis();
                    
                    Object result = method.invoke(calculator, args);
                    
                    long end = System.currentTimeMillis();
                    System.out.println((end-start) + "ms 시간이 걸림");
                    return result;
                }
            });
        
        System.out.println(calculator.sum());
        System.out.println(calculator.avg());
    }
}
```

이렇게 하면 밑의

```java
System.out.println(calculator.sum());
System.out.println(calculator.avg());
```

를 사용하게 되면 기존의 Calculator를 구현한 객체를 사용하게 되는거고
calculator 대신 proxy를 사용하게 되면 calculator 객체를 따라한 proxy 가짜 객체가 생성되게 된다.
이러한 proxy를 사용하면 부가기능을 사용할 수 있고 calculator 구현 객체를 사용하면 부가 기능없이
순수 기능만 사용할 수 있게 된다.
만약 부가기능을 바꾸고 싶다면 위의 InvocationHandler 인터페이스의 구현 방식을 변경하면 될 것 같다.