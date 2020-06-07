## Spring을 이용해서 AOP 구현하기

AOP에 대한 자세한 설명은 '순수 자바로 AOP 구현하기.md' 파일에 잘 정리되어 있으니
AOP에 대해서 궁금한 점이 있다면 순수 자바로 AOP 구현하기를 보고 난 뒤 보면 좋습니다.

저번에는 Spring Framework의 도움을 받지 않고 순수 자바만으로 AOP를 구현해보았다.
그런데 순수 자바 코드를 보아하니 클래스로더, 구현한 인터페이스들, InvocationHandler 등
여러 가지 구현해야 하는 것과 설정해야 하는 것이 많아서 귀찮은 점이 많았다.
이래서는 AOP를 제대로 사용하기 전에 머리가 터질 것만 같은 기분이었다.
그래서 Spring에서는 AOP를 쉽게 구현하기 위해서 스프링 설정 파일을 사용할 수 있다.

### 1. AOP의 구현 위치에 따른 명칭

순수 자바로 AOP를 구현할 때 사용했던 예제는 주요 기능이 시작하기 전에 시간을 재고,
주요 기능이 끝나고 나서 시간을 재서, 주요 기능의 성능을 확인할 수 있게 하였다.
이러한 경우 앞과 뒤에 모두 부가 기능을 넣은 것이 된다.

이렇게 주요 기능 전, 후에 모두 부가 기능을 넣어 AOP를 구현하면 이를 Around Advice라고 한다.
주요 기능 전만 부가 기능이 있다면 Before Advice, 후만 있다면 After Advice,
예외를 처리하는 것이라면 After Throwing Advice라고 한다.

### 2. Spring으로 AOP 구현하기

전에 구현했던 Calculator를 바탕으로 MyCalculator만 조금 바꾸었다.
다음은 MyCalculator.java 파일이다.

```java
/* MyCalculator.java */

package jkl.mno.pqr;

public class MyCalculator implements Calculator {
	private int kor;
	private int eng;
	private int mat;
	private int sci;
	
	public MyCalculator() {}

	public MyCalculator(int kor, int eng, int mat, int sci) {
		this.kor = kor;
		this.eng = eng;
		this.mat = mat;
		this.sci = sci;
	}
	
	@Override
	public int sum() {
		int sum = kor + eng + mat + sci;
		
		try {
			Thread.sleep(2000);
		} catch(Exception e) {}
		
		return sum;
	}

	@Override
	public double avg() {
		
		double avg = sum()/4.0;
		
		return avg;
	}
	
	public int getKor() {
		return kor;
	}

	public void setKor(int kor) {
		this.kor = kor;
	}

	public int getEng() {
		return eng;
	}

	public void setEng(int eng) {
		this.eng = eng;
	}

	public int getMat() {
		return mat;
	}

	public void setMat(int mat) {
		this.mat = mat;
	}

	public int getSci() {
		return sci;
	}

	public void setSci(int sci) {
		this.sci = sci;
	}
}
```

전과 달라진 것으로는 스프링 설정 파일에서 setter를 통해 DI할 것이므로 setter와 getter를 추가하였고,
setter를 쓰기 위해서는 디폴트 생성자가 있어야 하므로 디폴트 생성자도 작성해주었다.

스프링에서 AOP를 구현할 때는 스프링 설정 파일을 사용하므로
스프링 설정 파일이 가장 중요한 파일이라고 볼 수 있다.
다음은 스프링 설정 파일이다.

```xml
<!-- applicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:p="http://www.springframework.org/schema/p"
	xmlns:context="http://www.springframework.org/schema/context"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:jdbc="http://www.springframework.org/schema/jdbc"
	xsi:schemaLocation="http://www.springframework.org/schema/jdbc
		http://www.springframework.org/schema/jdbc/spring-jdbc-4.1.xsd
		http://www.springframework.org/schema/beans
		http://www.springframework.org/schema/beans/spring-beans.xsd
		http://www.springframework.org/schema/context
		http://www.springframework.org/schema/context/spring-context.xsd">
	
	<bean id="target" class="jkl.mno.pqr.MyCalculator"
          p:kor="10" p:eng="20" p:mat="30" p:sci="40"/>
	<bean id="logAroundAdvice" class="jkl.mno.pqr.LogAroundAdvice"/>
	<bean id="proxy" class="org.springframework.aop.framework.ProxyFactoryBean">
		<property name="target" ref="target"/>
		<property name="interceptorNames">
			<list>
				<value>logAroundAdvice</value>
			</list>
		</property>
	</bean>
</beans>
```

일단 첫 번째 Bean부터 분석해보자면 첫 번째 빈은 jkl.mno.pqr 이건 패키지명이다.
그리고 이 패키지 안에 존재하는 MyCalculator 클래스를 이용하여 객체를 생성하는 부분이다.
이 MyCalculator 클래스는 순수 자바로 AOP를 구현했을 때의 클래스로더 역할을 한다.
이것을 통해 클래스를 로딩하는 로직을 스프링 내부에서 작업한다.

두 번째 빈은 마찬가지 패키지에 존재하는 LogAroundAdvice 클래스의 객체를 생성한다.
LogAroundAdvice 클래스는 어디있냐고? 당연히 없다.
이 클래스는 우리가 직접 MethodInterceptor 인터페이스를 구현해서 만들어야 한다.
다음은 MethodInterceptor 인터페이스를 구현한 LogAroundAdvice 클래스이다.

```java
/* LogAroundAdvice.java */

package jkl.mno.pqr;

public class LogAroundAdvice implements MethodInterceptor {
	@Override
	public Object invoke(MethodInvocation invocation) throws Throwable {
		long start = System.currentTimeMillis();
		
		Object result = invocation.proceed();
		
		long end = System.currentTimeMillis();
		
		System.out.println((end-start) + "ms 시간이 걸림");
		
		return result;
	}
}
```

LogAroundAdbice 클래스는 MethodInterceptor 인터페이스를 구현하기 때문에
invoke() 메소드를 구현해야 한다.
invoke() 메소드가 전에 순수 자바로 AOP를 구현할 때 구현했던
InvocationHandler의 invoke() 메소드랑 같다고 볼 수 있다.
따라서 invoke() 메소드에는 MethodInvocation 타입의 invocation을 이용해서 proceed()를 호출하면
Method 타입의 method를 이용해서 invoke() 메소드를 호출하는 것과 같다.

세 번째 빈은 proxy인데 메인 클래스에서 사용하는 객체가 이 최종 완성된 proxy이다.
타입은 org.springframework.aop.framework.ProxyFactoryBean이고 이 프록시는
이전에 만든 MyCalculator 객체와 LogAroundAdvice 객체에 의존한다.

따라서 프록시는 프로퍼티로 target과 interceptorNames를 받는데
target이 구현하고자하는 MyCalculator이고 interceptorNames는 리스트 형식으로 받기 때문에
안쪽에 list 태그, value 태그를 이용하여 사용하고자 하는 MethodInvocation을 구현한 객체를 받으면 된다.
우리는 MethodInvocation 인터페이스를 구현한 LogAroundAdvice가 있으므로 이 객체를 주입하면 된다.

이렇게 스프링 설정 파일을 통해 프록시를 생성하는 것까지 알아보았다.
그러면 메인 클래스에서는 어떻게 프록시를 사용해야 할까?

다음은 프록시를 사용하는 메인 클래스이다.

```java
/* MainClass.java */

public class MainClass {
    public static void main(String[] args) {
        String path = "applicationContext.xml";
     	ApplicationContext ctx = new GenericXmlApplicationContext(path);
        Calculator proxy = (Calculator) ctx.getBean("proxy");
        
        System.out.println(proxy.sum());
        System.out.println(proxy.avg());
    }
}

// 100
// 25.0
```

결과적으로 의존성 주입을 받으면서 생성된 proxy 객체의 이름을 우리가 "proxy"로 지었다.
따라서 getBean() 메소드를 통해 proxy 객체를 생성할 수 있는데
proxy 객체로 인해 만들어진 가짜 객체는 Object 타입으로 되어 있으므로
우리가 사용하고자 한 Calculator 인터페이스 타입으로 캐스팅 해주어야 한다.