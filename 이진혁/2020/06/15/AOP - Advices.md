## AOP - Advices

AOP에서 부가 기능의 위치에 따른 Advice의 종류는 다음과 같았다.

1.  Around Advice
2.  Before Advice
3.  After Returning Advice
4.  After Throwing Advice

이전에 Around Advice를 MethodInterceptor 인터페이스를 구현한
LogAroundAdvice를 이용해서 구현했었다.

그럼 Before Advice, After Returning Advice, After Throwing Advice는 어떤 인터페이스를 구현해야하고
어떻게 동작할까?
이제부터 알아보도록하자.

### 1. Before Advice

Before Advice는 말 그대로 주요 기능이 들어간 코드가 실행되기 전에 작업할 것을 말한다.
따라서 암호해독을 한다거나 메소드의 매개변수가 null이 아닌지 체크할 때 사용됩니다.

Before Advice는 MethodBeforeAdvice 인터페이스를 구현함으로서 사용할 수 있습니다.
다음은 MethodBeforeAdvice 인터페이스가 구현하고자 하는 메소드는
before() 메소드이다.
따라서 우리는 MethodBeforeAdvice 인터페이스를 구현한 클래스를 다음과 같이 정의할 수 있다.

```java
package jkl.mno.pqr;

public class LogBeforeAdvice implements MethodBeforeAdvice {
    @Override
    public void before(Method method, Object[] args, Object target) throws Throwable {
        System.out.println("MethodName : " + method.getName());
    }
}
```

이렇게 작성된 클래스는 자동으로 빈으로 주입하기 위해서 다음과 같이 xml에 추가한다.

```xml
<!-- applicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans ...>
	
	<bean id="target" class="jkl.mno.pqr.MyCalculator"
          p:kor="10" p:eng="20" p:mat="30" p:sci="40"/>
	<bean id="logAroundAdvice" class="jkl.mno.pqr.LogAroundAdvice"/>
	<bean id="logBeforeAdvice" class="jkl.mno.pqr.LogBeforeAdvice"/>
	<bean id="proxy" class="org.springframework.aop.framework.ProxyFactoryBean">
		<property name="target" ref="target"/>
		<property name="interceptorNames">
			<list>
				<value>logAroundAdvice</value>
				<value>logBeforeAdvice</value>
			</list>
		</property>
	</bean>
</beans>
```

그러면 우리는 다음과 같은 출력을 볼 수 있다.

```output
// MethodName : before
// 100
// 2001ms 시간이 걸림
// MethodName : before
// 25.0
// 2001ms 시간이 걸림
```

### 2. After Returning Advice

After Returning Advice는 After Advice의 종류로서, 기본적으로 생각하는 After Advice라고 생각하면 된다.
우리가 사용하는 주요 기능(return 문을 포함한)이 마치고 난 후 실행하는 메소드이다.
After Returning Advice를 구현하기 위해서는 AfterReturningAdvice를 구현하는 클래스를 만들어야 한다.
다른 Advice 객체와 이름을 맟추기 위해서 클래스 이름을 LogAfterReturningAdvice라고 짓고
구현하고자 하면 다음과 같다.

```java
package jkl.mno.pqr;

public class LogAfterReturningAdvice implements AfterReturningAdvice {
	@Override
	public void afterReturning(Object returnValue, Method method, 
                               Object[] args, Object target) throws Throwable {
		System.out.println("ReturnValue : " + returnValue +
                           ", MethodName : " + method.getName());
	}
}
```

XML도 적절하게 고쳐주면 다음과 같다.

```xml
<!-- applicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans ...>
	
	<bean id="target" class="jkl.mno.pqr.MyCalculator"
          p:kor="10" p:eng="20" p:mat="30" p:sci="40"/>
	<bean id="logAroundAdvice" class="jkl.mno.pqr.LogAroundAdvice"/>
	<bean id="logBeforeAdvice" class="jkl.mno.pqr.LogBeforeAdvice"/>
	<bean id="logAfterReturningAdvice" class="jkl.mno.pqr.LogAfterReturningAdvice"/>
	<bean id="proxy" class="org.springframework.aop.framework.ProxyFactoryBean">
		<property name="target" ref="target"/>
		<property name="interceptorNames">
			<list>
				<value>logAroundAdvice</value>
				<value>logBeforeAdvice</value>
                <value>logAfterReturningAdvice</value>
			</list>
		</property>
	</bean>
</beans>
```

이러면 return이 된 후 메소드가 실행되기 때문에
다음과 같은 결과를 볼 수 있다.

```output
// MethodName : before
// 100
// 2001ms 시간이 걸림
// ReturnValue : 100, MethodName : afterReturning
// MethodName : before
// 25.0
// 2001ms 시간이 걸림
// ReturnValue : 25.0, MethodName : afterReturning
```

### 3. After Throwing Advice

마지막으로 After Advice의 종류인 After Throwing Advice이다.
After Throwing Advice는 이름에서 유추할 수 있듯이 예외와 관련된 Advice이다.
주요 기능에서 메소드를 실행하다가 적절한 예외가 발생했을 때 실행을 중단하고
이 After Throwing Advice로 와서 실행을 하고 끝내도록 한다.

After Throwing Advice를 구현하기 위해서는 ThrowsAdvice 인터페이스를 구현해야 하는데
이 인터페이스는 딱히 구현해야 하는 메소드가 없다.
그러면 어떻게 쓰이냐고?
이 인터페이스를 구현하는 클래스의 메소드는 메소드가 매개변수로 가지고 있는
예외가 발생했을 때 호출되게 된다.
만약 다음과 같이 ThrowsAdvice 인터페이스를 구현하는 클래스가 있다고 하자.

```java
package jkl.mno.pqr;

public class LogAfterThrowingAdvice implements ThrowsAdvice {
    public void afterThrowing(Exception e) throws Throwable {
        System.out.println("예외 발생");
    }
}
```

사실 이렇게 코드를 짜면 안 되지만 위 코드는 모든 예외가 발생했을 때 실행하도록 만들 클래스이다.
하지만 이렇게 코드를 짜게 되면 어떤 에러인지와는 상관없이 실행되기 때문에 좀더 유연한 대처를 하기 어렵다.