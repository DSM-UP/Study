## AOP - Point Cut

AOP에서 Point Cut에 대해서 알기 위해서는 Join Point에 대해서 먼저 알아야 한다.

#### Join Point

Join Point는 핵심 로직, 주요 기능에서 Advice로서 부가 기능을 작성할 수 있는 곳을 말한다.
예를 들어 기본적으로 AOP를 사용할 때 핵심 로직(주요 기능)인 메소드를 실행할 때
부가 기능을 작성하기도 하며 클래스의 객체가 생성될 때 생성자를 통해 부가 기능을 작성하기도 한다.
따라서 이렇게 클래스의 인스턴스화 시점과 메소드의 실행 시점 등이 Join Point가 된다.

#### Point Cut

다시 본론으로 돌아와서 Point Cut에 대해서 알아보자면,
Point Cut은 내가 Advice를 통해 핵심 로직(주요 기능)에 부가 기능을 작성한
즉, 실제로 Advice가 적용되어 사용되는 곳을 말한다.
따라서 Point Cut은 Join Point의 부분 집합이라고 할 수 있다.

#### Weaving

Weaving은 Point Cut이 되는 즉, Advice가 적용되어 부가 기능이 실행되는 메소드 등의 작업이
실제 실행되는 것을 말한다.

실제 Advice가 메소드 등에 부가 기능을 설정하게 되면 그 과정을 Weaving이라고 한다.

#### Point Cut 활용하기

Point Cut은 Join Point의 부분 집합이라고 했다.
따라서 수많은 Join Point 중에서 내가 사용하고 싶은 곳에만 부가 기능을 넣고자 할 수 있다는 것이다.
그렇기 때문에 Point Cut이 존재하는 것이다.
따라서 지금부터 Point Cut을 적용하는 방법에 대해서 알아보자.

```xml
<!-- applicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans ...>
	
	<bean id="target" class="jkl.mno.pqr.MyCalculator"
          p:kor="10" p:eng="20" p:mat="30" p:sci="40"/>
	<bean id="logAroundAdvice" class="jkl.mno.pqr.LogAroundAdvice"/>
	<bean id="logBeforeAdvice" class="jkl.mno.pqr.LogBeforeAdvice"/>
	<bean id="logAfterReturningAdvice" class="jkl.mno.pqr.LogAfterReturningAdvice"/>
    <bean id="logAfterThrowingAdvice" class="jkl.mno.pqr.LogAfterThrowingAdvice"/>
	<bean id="proxy" class="org.springframework.aop.framework.ProxyFactoryBean">
		<property name="target" ref="target"/>
		<property name="interceptorNames">
			<list>
				<value>logAroundAdvice</value>
				<value>logBeforeAdvice</value>
                <value>logAfterReturningAdvice</value>
                <value>logAfterThrowingAdvice</value>
			</list>
		</property>
	</bean>
</beans>
```

기존에 AOP를 구현하기 위해서 프록시 객체를 생성하여 setInterceptorNames() 메소드에
매개변수로 Advice들을 넣어주었다.
이렇게 Advice를 작성하게 되면 모든 Join Point가 Point Cut이 된다.
이러면 유동적인 Advice 적용이 되지 않기 때문에 적용하고 싶은 메소드만 적용할 수 있도록
변경해야 한다.
그렇게 하기 위해서는 다음과 같은 절차를 거쳐야 한다.

1.  NameMatchMethodPointcut 객체를 생성하고
    프로퍼티로 setMappedName() setter에 어떤 메소드에 적용할 것인지를 설정한다.
    현재 MyCalculator 클래스에서는 total() 메소드와 avg() 메소드를 사용하기 때문에
    total() 메소드만 실행하도록 하려면 다음과 같이 빈을 작성한다.

    ```xml
    <bean id="classicPointCut"
          class="org.springframework.aop.support.NameMatchMethodPointcut">
        <property name="mappedName" value="total"/>
    </bean>
    ```

2.  DefaultPointcutAdvisor 객체를 생성하고
    setAdvice(), setPointcut() setter에 각각 사용할 Advice와 사용할 Pointcut을 매개변수로 준다.
    따라서 위의 NameMatchMethodPointcut 객체를 사용하고 Before Advice에 적용한다면
    다음과 같이 빈을 작성할 수 있다.

    ```xml
    <bean id="classicBeforeAdvisor"
          class="org.springframework.aop.support.DefaultPointcutAdvisor">
    	<property name="advice" ref="LogBeforeAdvice"/>
        <property name="pointcut"ref="classicPointCut"/>
    </bean>
    ```

3.  실행한다.

이런식으로 Point Cut을 활용할 수 있다.
위의 예제처럼 코드를 작동시키게 되면 total() 메소드를 실행할 때는
BeforeAdvice가 실행되지만 avg() 메소드를 실행할 때는 BeforeAdvice가 실행되지 않게 된다.