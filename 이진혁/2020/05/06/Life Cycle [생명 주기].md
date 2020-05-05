## Life Cycle [생명 주기]

이번에는 스프링 컨테이너의 생명 주기에 대해서 공부해보았다.
스프링 컨테이너는 자바 빈을 포함하고 있고, 지금은 자바 빈만을 다룬다.
나중에 더 알게되면 추가해보도록 하겠다.

스프링 컨테이너의 생명 주기는 크게 세 가지로 나누어진다.

1. 초기화
2. 사용
3. 종료

#### 1. 초기화

우리가 스프링 설정 파일을 구성하고 GenericXmlApplicationContext 클래스를 이용하여
스프링 컨테이너를 생성할 수 있다.
이 때 스프링 컨테이너 안의 모든 빈 객체들이 메모리에 할당되고 getBean() 메소드를 통해
객체를 사용할 수 있는 상태가 된다.
이 상태를 우리는 스프링 컨테이너의 초기화라고 한다.

#### 2. 사용

스프링 컨테이너를 사용한다는 것은 스프링 컨테이너 안의 빈 객체들을 사용한다는 뜻이다.
따라서 getBean() 메소드를 통해 객체를 받아서 사용하고 이것저것 사용하는
이 상태가 가장 많이 볼 수 있는 사용상태이다.

#### 3. 종료

스프링 컨테이너의 모든 빈 객체들을 사용하고 이젠 사용할 일이 없다고 판단하였을 때
개발자는 코드에서 close() 메소드를 사용함으로서 GenericXmlApplicationContext 객체를 소멸시킨다.
이 때, 스프링 컨테이너가 종료됨과 동시에 안에 있던 빈 객체들도 모두 소멸되게 된다.
이 상태가 스프링 컨테이너의 종료상태이다.



이렇게 스프링 컨테이너는 크게 세 가지로 나누어지는 생명 주기를 가지고 있다.
처음엔 초기화를 하고 사용되다가 종료되면 소멸된다.

이 얘기를 한 이유는 스프링 컨테이너가 초기화 되고 사라지는 시점에 빈 객체들도 초기화 되고 사라진다.
따라서 객체들이 초기화되고 소멸되는 시점에 실행할 수 있는 메소드가 존재한다.
이런 메소드를 만드는 방법에는 크게 두 가지가 있다.
InitializingBean 인터페이스와 DisposableBean 인터페이스를 사용하는 방법과
init-method 속성과 destroy-method 속성을 사용하는 방법이 있다.

### InitializingBean - DisposableBean

InitializingBean과 DisposableBean은 위에서 말했듯 인터페이스로,
원하는 클래스에 구현시켜서 객체가 초기화 될 때와 소멸 될 때 작동하는 메소드를 만들 수 있다.
InitializingBean 인터페이스는 afterPropertiesSet() 메소드를 구현해야하고
DisposableBean은 destroy() 메소드를 구현해야 한다.
afterPropertiesSet() 메소드는 객체가 스프링 컨테이너에 생성될 때 실행되는 메소드이고
destroy() 메소드는 객체가 close() 메소드와 동시에 소멸될 때 실행되는 메소드이다.

두 메소드의 형식은 다음과 같다.

```java
// afterPropertiesSet
public void afterPropertiesSet() {
    // 객체 초기화시 실행 내용
}

// destroy
public void destroy() {
    // 객체 소멸시 실행 내용
}
```

그러면 지금까지 사용해왔던 Box, UpgradeBox, WrapperBox 예제에서
초기화 될 때와 소멸 될 때의 출력 메세지를 찍는 부분을 추가해보겠다.

```xml
<!-- lifecycleApplicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    	http://www.springframework.org/schema/beans/spring-beans.xsd
    	http://www.springframework.org/schema/context
    	http://www.springframework.org/schema/context/spring-context.xsd">
    	
    <context:annotation-config />
    	
    <bean id="box1" class="test.container.lifecycle.Box">
        <constructor-arg value="111"/>
        <qualifier value="aaa"/>
    </bean>
    <bean id="box2" class="test.container.lifecycle.Box">
        <constructor-arg value="222"/>
        <qualifier value="bbb"/>
    </bean>
    <bean id="box3" class="test.container.lifecycle.Box2">
        <constructor-arg value="333"/>
        <qualifier value="aaa"/>
    </bean>
    <bean id="box4" class="test.container.lifecycle.Box2">
        <constructor-arg value="444"/>
        <qualifier value="bbb"/>
    </bean>
    <bean id="wrapperBox" class="test.container.lifecycle.WrapperBox"/>
    
</beans>

<!--
스프링 설정 파일 같은 경우에는 클래스들의 패키지 외에 달라진 점이 없다.
-->
```

```java
/* Box.java */

package test.container.lifecycle;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.DisposableBean;

public class Box implements InitializingBean, DisposableBean {
	private String element;
	
	public Box(String element) {
		this.element = element;
	}
	
	public String getElement() {
		return element;
	}

	public void afterPropertiesSet() {
		System.out.println("Box Init");
	}

	public void destroy() {
		System.out.println("Box Destroy");
	}
}

/*
Box 클래스는 InitializingBean, DisposableBean 인터페이스를 구현하도록 만들어졌고
그에 따라 afterPropertiesSet() 메소드와 destroy() 메소드를 구현하였다.
각각 출력문을 작성하였다.

InitializingBean 인터페이스는
org.springframework.beans.factory 패키지 안에 존재한다.
DisposableBean 인터페이스도
org.springframework.beans.factory 패키지 안에 존재한다.
*/
```

```java
/* UpgradeBox.java */

package test.container.lifecycle;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.DisposableBean;

public class UpgradeBox implements InitializingBean, DisposableBean {
	private String element;
	
	public UpgradeBox(String element) {
		this.element = element;
	}
	
	public String getElement() {
		return element;
	}

	public void afterPropertiesSet() {
		System.out.println("UpgradeBox Init");
	}

	public void destroy() {
		System.out.println("UpgradeBox Destroy");
	}
}

/*
UpgradeBox 클래스도 Box 클래스처럼 InitializingBean, DisposableBean 인터페이스를
추가하고 구현한 것 외에는 변경된 것이 없다.
*/
```

```java
/* WrapperBox.java */

package test.container.lifecycle;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class WrapperBox implements InitializingBean, DisposableBean {
	private Box box;
	private UpgradeBox box2;

	public WrapperBox() {}
	public WrapperBox(Box box, UpgradeBox box2) {
		this.box = box;
		this.box2 = box2;
	}

	@Autowired
	@Qualifier(value="aaa")
	public void setBox(Box box, UpgradeBox box2) {
		this.box = box;
		this.box2 = box2;
	}
	
	public Box getBox() {
		return box;
	}
	
	public UpgradeBox getUpgradeBox() {
		return box2;
	}
	
	public void afterPropertiesSet() {
		System.out.println("WrapperBox Init");
	}
	
	public void destroy() {
		System.out.println("WrapperBox Destroy");
	}
}

/*
WrapperBox 클래스도 InitializingBean, DisposableBean 인터페이스를 구현하였다.
*/
```

```java
/* MainClass.java */

package test.container.lifecycle;

import org.springframework.context.support.GenericXmlApplicationContext;

public class MainClassWithAutowired {
    String path = "classpath:autowiredApplicationContext.xml";
	public static void main(String[] args) {
		GenericXmlApplicationContext ctx = new GenericXmlApplicationContext(path);
		
		WrapperBox wrapperBox = ctx.getBean("wrapperBox", WrapperBox.class);
		System.out.println(wrapperBox.getBox().getElement());
		System.out.println(wrapperBox.getUpgradeBox().getElement());
		
		ctx.close();
	}
}
```

위 예제 코드의 결과는 다음과 같다.

```output
Box Init
Box Init
UpgradeBox Init
UpgradeBox Init
WrapperBox Init
111
333
WrapperBox Destroy
UpgradeBox Destroy
UpgradeBox Destroy
Box Destroy
Box Destroy
```

5행까지는 객체들이 스프링 컨테이너에 초기화 되면서 실행된 afterPropertiesSet() 메소드의 실행결과이고
6, 7행은 getBean() 메소드를 통해 객체들을 사용한 결과물이고
8행부터 12행까지는 ctx.close() 코드를 통해 스프링 컨테이너가 종료됨과 동시에
소멸되는 객체들이 실행한 destroy() 메소드의 실행결과이다.

다른 흥미로운 점은 afterPropertiesSet() 메소드가 실행되는 순서가
스프링 설정 파일에 존재하는 코드의 순서라는 것을 알 수 있다.
따라서 UpgradeBox 빈 객체들의 코드를 Box 빈 객체들의 코드보다 위에 올리면 다음과 같이 실행결과가 변한다.

```output
UpgradeBox Init
UpgradeBox Init
Box Init
Box Init
WrapperBox Init
111
333
WrapperBox Destroy
Box Destroy
Box Destroy
UpgradeBox Destroy
UpgradeBox Destroy
```

하지만 WrapperBox 빈 객체를 위로 올리면 코드의 실행결과가 예상대로 되지는 않는다.
왜냐하면 WrapperBox 클래스는 Box 객체와 UpgradeBox 객체를 의존하고 있기 때문에
Box와 UpgradeBox 객체가 WrapperBox 객체보다 먼저 생성되어야 한다.
따라서 위에서부터 순서대로 객체를 생성하되, 의존 객체가 필요한 빈 객체를 만나면
그 객체를 찾아서 생성한 뒤 다시 돌아온다는 것을 알 수 있다.

### init-method - destroy-method

빈 객체의 초기화 및 소멸 시에 메소드를 실행하게 하는 또다른 방법은
init-method 속성과 destroy-method 속성을 사용하는 것이다.
이것은 스프링 설정 파일의 빈 객체에게 각각의 속성을 붙이고 문자열을 값으로 줌으로써
그 문자열로 된 메소드를 실행하게 만든다.
물론 그 메소드가 클래스에 존재하여야 하며 존재하지 않을 경우 예외를 발생시킨다.

다음은 위의 예제에서 init-method, destroy-method 속성을 추가한 예제이다.

```xml
<!-- lifecycleApplicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    	http://www.springframework.org/schema/beans/spring-beans.xsd
    	http://www.springframework.org/schema/context
    	http://www.springframework.org/schema/context/spring-context.xsd">
    	
    <context:annotation-config />
    	
    <bean id="box1" class="test.container.lifecycle.Box"
          init-method="initMethod" destroy-method="destroyMethod">
        <constructor-arg value="111"/>
        <qualifier value="aaa"/>
    </bean>
    <bean id="box2" class="test.container.lifecycle.Box"
          init-method="initMethod" destroy-method="destroyMethod">
        <constructor-arg value="222"/>
        <qualifier value="bbb"/>
    </bean>
    <bean id="box3" class="test.container.lifecycle.Box2"
          init-method="initMethod" destroy-method="destroyMethod">
        <constructor-arg value="333"/>
        <qualifier value="aaa"/>
    </bean>
    <bean id="box4" class="test.container.lifecycle.Box2"
          init-method="initMethod" destroy-method="destroyMethod">
        <constructor-arg value="444"/>
        <qualifier value="bbb"/>
    </bean>
    <bean id="wrapperBox" class="test.container.lifecycle.WrapperBox"
          init-method="initMethod" destroy-method="destroyMethod"/>
    
</beans>

<!--
모든 빈 객체에게 init-method, destroy-method 속성을 적용시켰으며
예제에서는 메소드의 이름을 모두 initMethod, destroyMethod로 하였는데
이름을 변경하여도 아무 문제 없다.
단, 클래스에 그 메소드가 정의되어 있어야 한다.
-->
```

```java
/* Box.java */

package test.container.lifecycle;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.DisposableBean;

public class Box implements InitializingBean, DisposableBean {
	private String element;
	
	public Box(String element) {
		this.element = element;
	}
	
	public String getElement() {
		return element;
	}

	public void afterPropertiesSet() {
		System.out.println("Box Init");
	}

	public void destroy() {
		System.out.println("Box Destroy");
	}
	
	public void initMethod() {
		System.out.println("Box InitMethod");
	}
	
	public void destroyMethod() {
		System.out.println("Box DestoryMethod");
	}
}

/*
스프링 설정 파일에서 추가했던 속성으로 인해 initMethod() 메소드와 destroyMethod() 메소드를
추가하였다.
*/
```

```java
/* UpgradeBox.java */

package test.container.lifecycle;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.DisposableBean;

public class UpgradeBox implements InitializingBean, DisposableBean {
	private String element;
	
	public UpgradeBox(String element) {
		this.element = element;
	}
	
	public String getElement() {
		return element;
	}

	public void afterPropertiesSet() {
		System.out.println("UpgradeBox Init");
	}

	public void destroy() {
		System.out.println("UpgradeBox Destroy");
	}
	
	public void initMethod() {
		System.out.println("UpgradeBox InitMethod");
	}
	
	public void destroyMethod() {
		System.out.println("UpgradeBox DestoryMethod");
	}
}

/*
initMethod() 메소드와 destroyMethod() 메소드가 추가되었다.
*/
```

```java
/* WrapperBox.java */

package test.container.lifecycle;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class WrapperBox implements InitializingBean, DisposableBean {
	private Box box;
	private Box2 box2;

	public WrapperBox() {}
	public WrapperBox(Box box, Box2 box2) {
		this.box = box;
		this.box2 = box2;
	}

	@Autowired
	@Qualifier(value="aaa")
	public void setBox(Box box, Box2 box2) {
		this.box = box;
		this.box2 = box2;
	}
	
	public Box getBox() {
		return box;
	}
	
	public Box2 getBox2() {
		return box2;
	}
	
	public void afterPropertiesSet() {
		System.out.println("WrapperBox Init");
	}
	
	public void destroy() {
		System.out.println("WrapperBox Destroy");
	}
	
	public void initMethod() {
		System.out.println("WrapperBox InitMethod");
	}
	
	public void destroyMethod() {
		System.out.println("WrapperBox DestoryMethod");
	}
}

/*
initMethod() 메소드와 destroy() 메소드가 추가되었다.
*/
```

MainClass 클래스는 달라진 점이 없다.
위 예제 코드의 결과는 다음과 같다.

```output
Box Init
Box InitMethod
Box Init
Box InitMethod
Box2 Init
Box2 InitMethod
Box2 Init
Box2 InitMethod
WrapperBox Init
WrapperBox InitMethod
111
333
WrapperBox Destroy
WrapperBox DestoryMethod
Box2 Destroy
Box2 DestoryMethod
Box2 Destroy
Box2 DestoryMethod
Box Destroy
Box DestoryMethod
Box Destroy
Box DestoryMethod
```

코드를 보면 인터페이스를 이용한 것과 마찬가지로 스프링 설정 파일의 위에서부터
객체를 초기화한다는 것을 알 수 있고,
인터페이스로 만들어진 메소드가 먼저 실행되고 다음에 속성으로 만들어진 메소드가 실행된다는 것을 알 수 있다.

인터페이스로 만들어진 메소드와 속성으로 만들어진 메소드는 거의 기능이 같으며
다른 점은 인터페이스는 그 클래스로 만들어진 모든 객체들에게 적용되지만
속성은 같은 타입을 가지고 있어도 다른 빈 객체라면 선택적으로 적용할 수 있다.

인터페이스로 인해 만들어진 메소드들은 구현의 특성상 리턴값이나 매개변수를 변경할 수 없지만
속성은 내가 직접 만드는 메소드이기 때문에 리턴값 또는 매개변수를 내가 조절할 수 있다.
결과만보자면 리턴값을 변경하여 리턴하는 것은 가능하지만 초기화 될 때나 소멸될 때 사용되므로
리턴값을 얻을 수는 없으며,
매개변수를 만들면 예외가 발생한다.

그리고 인터페이스로 만들어진 메소드나 속성으로 만들어진 메소드들은
모두 직접 호출이 가능하기 때문에 그렇게 호출한다면 리턴값을 얻을 수도 있다.