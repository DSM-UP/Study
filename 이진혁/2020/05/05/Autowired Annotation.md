## Autowired Annotation

이번에는 Autowired 어노테이션에 대해서 공부해보았다.
다음은 이번에 공부한 @Autowired의 설명을 위한 목차이다.

1. @Autowired을 사용하는 이유
2. @Autowired을 사용하는 방법
3. @Autowired을 강제 연결하기



#### 1. @Autowired을 사용하는 이유

@Autowired는 의존성을 자동 주입하기 위해서 사용되는 어노테이션 중 하나이다.
다른 어노테이션에는 @Inject, @Resource가 있다.
@Autowired의 특징에 대해서는 사용하는 방법에서 자세하게 다루겠지만
저 두 어노테이션과의 차이점을 알아보자면
@Inject, @Resource는 자바에서 지원하는 어노테이션이지만
@Autowired는 스프링 프레임워크에서 지원하는 어노테이션이다.

본론으로 @Autowired를 사용하는 이유를 자세하게 알아보자면
위에서 의존성을 자동 주입하기 위해서 사용한다고 했었는데
그렇다면 '자동' 주입이 아니라 '수동' 주입을 하는 방법은 무엇일까?
이전에 이미 공부해보았지만 간단하게 의존 객체를 주입하는 방법을 알아보기 위해서
예제를 준비하였다.

```xml
<!-- autowiredApplicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    	http://www.springframework.org/schema/beans/spring-beans.xsd">
    	
    <bean id="box1" class="test.di.autowired.Box">
        <constructor-arg value="111"/>
    </bean>
    <bean id="wrapperBox" class="test.di.autowired.WrapperBox">
    	<constructor-arg ref="box1"/>
    </bean>
    
</beans>

<!--
box1, wrapperBox라는 빈을 생성하고
wrapperBox 빈을 생성할 때는 생성자 매개변수로 box1을 받는다.
따라서 wrapperBox 객체는 Box라는 타입의 의존 객체를 주입 받았다고 할 수 있다.
-->
```

```java
// Box.java

package test.di.autowired;

public class Box {
	private String element;
	
	public Box(String element) {
		this.element = element;
	}
	
	public String getElement() {
		return element;
	}
}

/*
Box 클래스는 스프링 설정 파일에 나와있던 것처럼 WrapperBox의 객체의 의존 객체로서 사용된다.
*/
```

```java
// WrapperBox.java

package test.di.autowired;

public class WrapperBox {
	private Box box;

	public WrapperBox(Box box) {
		this.box = box;
	}

	public void setBox(Box box) {
		this.box = box;
	}
	
	public Box getBox() {
		return box;
	}
}

/*
이도 마찬가지로 스프링 설정 파일에서 Box 타입의 의존 객체를 주입받는 객체가 되기 위한 클래스이다.
*/
```

```java
// MainClass.java

package test.di.autowired;

import org.springframework.context.support.GenericXmlApplicationContext;

public class MainClassWithAutowired {
	public static void main(String[] args) {
        String path = "classpath:autowiredApplicationContext.xml";
		GenericXmlApplicationContext ctx = new GenericXmlApplicationContext(path);
		
		WrapperBox wrapperBox = ctx.getBean("wrapperBox", WrapperBox.class);
		System.out.println(wrapperBox.getBox().getElement());
		
		ctx.close();
	}
}
```

위의 예제 코드의 결과는 다음과 같다.

```output
111
```



이렇게 의존 객체를 주입받는 상황은 스프링 프레임워크를 사용하면서 굉장히 많이 반복되는 상황이다.
따라서 스프링 설정 파일에서처럼 constructor-arg 태그를 사용하거나 또는 property 태그를 이용해서
의존 객체를 주입하도록하는 방식은 너무 귀찮아 질 수 있다.

그래서 이 과정을 없애기 위해서 의존성을 자동 주입하는 방식이 나오게 된 것이고
그를 구현하는 어노테이션이 @Autowired인 것이다.



#### 2. @Autowired을 사용하는 방법

@Autowired는 필드, 생성자, setter 메소드에 작성할 수 있는 어노테이션이다.
(여기서 setter 메소드는 자바에서 제공하는 완벽한 setter 메소드의 형식이 아니라
setter 메소드의 역할을 하는 메소드라면 어디든지 @Autowired를 작성할 수 있다.)

위의 '@Autowired을 사용하는 이유'에서 다뤘던 예제 코드를
의존성을 자동 주입하는 코드로 변경하면 다음과 같다.

```xml
<!-- autowiredApplicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    	http://www.springframework.org/schema/beans/spring-beans.xsd
    	http://www.springframework.org/schema/context
    	http://www.springframework.org/schema/context/spring-context.xsd">

    <context:annotation-config/>
    
    <bean id="box1" class="test.di.autowired.Box">
        <constructor-arg value="111"/>
    </bean>
    <bean id="wrapperBox" class="test.di.autowired.WrapperBox"/>
    
</beans>

<!--
의존성 자동 주입을 하기 위해서 필요한 beans의 요소는 다음과 같다.
xmlns:context="http://www.springframework.org/schema/context"
xsi:schemaLocation="http://www.springframework.org/schema/context"
xsi:schemaLocation="http://www.springframework.org/schema/context/spring-context.xsd"
이전에 존재했던 4가지에 더불어 총 7가지가 된 것을 볼 수 있다.

<context:annotation-config/> 태그는 나중에 다시 언급하여 자세하게 다루겠지만
현재는 의존성 자동 주입을 위한 어노테이션을 사용하기 위해서 필요한 태그라고 생각하면 된다.

나머지는 이전의 예제 코드와 동일하다.
-->
```

```java
// WrapperBox.java

package test.di.autowired;

public class WrapperBox {
	private Box box;

    @Autowired
	public WrapperBox(Box box) {
		this.box = box;
	}

	public void setBox(Box box) {
		this.box = box;
	}
	
	public Box getBox() {
		return box;
	}
}

/*
Box 클래스나 MainClass 클래스는 변경된 점이 없다.

본 클래스는 생성자에 @Autowired가 붙어서 의존성을 자동 주입하도록 만들어놓았다.
현재는 생성자에 어노테이션을 작성하였지만
필드( private Box box; ), setter 메소드( public void setBox(Box box); )에도 사용할 수 있다.
하지만 생성자와는 다르게 필드나 setter 메소드에 @Autowired를 작성할 때에는
반드시 디폴트 생성자를 명시해주어야 한다.
왜냐하면 필드나 메소드는 클래스가 인스턴스화가 되어야 사용할 수 있는데
디폴트 생성자가 없으면 인스턴스화를 진행할 수 없기 때문이다.
*/
```

위의 코드의 결과는 첫 예제 코드의 결과와 같다.

@Autowired를 사용하여 정상적으로 의존성을 자동 주입해보았다.
그렇다면 @Autowired는 어떻게 의존 객체를 자동 주입할까?

@Autowired는 의존 객체의 타입과 일치하는 빈을 스프링 설정 파일에서 찾아서 연결한다.
따라서 Box 타입의 의존 객체를 가지고 있는 WrapperBox 클래스는
스프링 설정 파일에서 Box라는 타입을 가지고 있는 빈을 찾아서 의존 객체로 사용한다.

그렇다면 스프링 설정 파일에 Box 타입의 빈이 여러 개 존재한다면 어떻게 할까?
이럴 때는 타입이 Box인 빈 중에서 변수명과 id 또는 name이 동일한 빈을 찾아서 연결한다.
위의 코드에서 의존 객체를 주입받는 WrapperBox 클래스에서의 의존 객체의 이름은 box이다.
만약 스프링 설정 파일에서 Box 타입의 빈이 여러 개가 존재한다면
그 중 id 또는 name이 box인 빈과 연결한다는 것이다.

그렇다면 타입이 동일한 빈은 여러 개인데 이름이 일치하는 것이 없다면 어떻게 될까?
이럴 때는 예외가 발생하게 된다.
하지만 이름을 일일이 같게 하는 것은 번거로울 수 있기 때문에 명확하게 강제적으로 연결하는 방법이 있다.
다음 챕터에서 이에 대해 알아보자.



#### 3. @Autowired을 강제 연결하기

@Autowired를 사용하면서 강제적으로 의존 객체와 빈을 연결하는 방법은 @Qualifier를 사용하고
스프링 설정 파일에서는 qualifier 태그를 사용하는 것이다.

의존 객체를 주입받는 클래스에 @Autowired와 같이 @Qualifier를 사용하면 되는데
@Qualifier는 value 요소를 받는데 이 요소의 값과
스프링 설정 파일의 qualifier 태그의 value값과 일치하는 빈을 찾아가서 강제적으로 연결한다.
물론 타입이 안 맞거나, 일치하는 qualifier 태그의 value 값이 없거나,
일치하는 qualifier 태그의 value 값이 여러 개이면 예외가 발생하게 된다.

이렇게 글로만 보면 이해하기 어려우니 예제로 살펴보자.
다음 예제는 기존의 예제에서 Box 타입의 빈이 두 개 있는데
각각 qualifier 태그를 가지고 있으며 값은 각각 "aaa"와 "bbb"이다.

```xml
<!-- autowiredApplicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    	http://www.springframework.org/schema/beans/spring-beans.xsd
    	http://www.springframework.org/schema/context
    	http://www.springframework.org/schema/context/spring-context.xsd">

    <context:annotation-config/>
    
    <bean id="box1" class="test.di.autowired.Box">
        <constructor-arg value="111"/>
        <qualifier value="aaa"/>
    </bean>
    <bean id="box2" class="test.di.autowired.Box">
        <constructor-arg value="222"/>
        <qualifier value="bbb"/>
    </bean>
    <bean id="wrapperBox" class="test.di.autowired.WrapperBox"/>
    
</beans>
```

```java
// WrapperBox.java

package test.di.autowired;

public class WrapperBox {
    @Autowired
    @Qualifier(value="bbb")
	private Box box;

    public WrapperBox() {}
	public WrapperBox(Box box) {
		this.box = box;
	}

	public void setBox(Box box) {
		this.box = box;
	}
	
	public Box getBox() {
		return box;
	}
}
```

위의 예제에 대한 출력 결과는 다음과 같다.

```output
222
```

WrapperBox 클래스에서는 @Qualifier를 이용해서 bbb의 값을 가지고 있는 빈과 강제 연결하였다.
따라서 강제 연결한 빈의 결과인 222를 출력된 것을 볼 수 있다.

WrapperBox 클래스를 보면 @Autowired와 @Qualifier이 생성자에서 필드로 넘어간 것을 볼 수 있다.
@Qualifier은 생성자에 사용할 수 없기 때문에 필드로 넘겼다.
왜 생성자에는 안 되는지 이해가 되지는 않는다.

만약 setter 메소드에 의존 객체를 여러 개 받을 경우에 @Qualifier를 사용하게 되면
@Qualifier의 value 값을 가지는 빈을 각각 찾는다.
다음은 의존 객체를 두 개 받는 WrapperBox에 대한 예제이다.

```xml
<!-- autowiredApplicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    	http://www.springframework.org/schema/beans/spring-beans.xsd
    	http://www.springframework.org/schema/context
    	http://www.springframework.org/schema/context/spring-context.xsd">

    <context:annotation-config/>
    
    <bean id="box1" class="test.di.autowired.Box">
        <constructor-arg value="111"/>
        <qualifier value="aaa"/>
    </bean>
    <bean id="box2" class="test.di.autowired.Box">
        <constructor-arg value="222"/>
        <qualifier value="bbb"/>
    </bean>
    <bean id="box3" class="test.di.autowired.UpgradeBox">
        <constructor-arg value="333"/>
        <qualifier value="aaa"/>
    </bean>
    <bean id="box4" class="test.di.autowired.UpgradeBox">
        <constructor-arg value="444"/>
        <qualifier value="bbb"/>
    </bean>
    <bean id="wrapperBox" class="test.di.autowired.WrapperBox"/>
    
</beans>

<!--
Box 타입의 빈 두 개, UpgradeBox 타입의 빈 두 개를 스프링 설정 파일에 생성하고
같은 qualifier value를 가지는 111과 333, 222와 444를 한 묶음으로 하여 적용한다.
-->
```

```java
// WrapperBox.java

package test.di.autowired;

public class WrapperBox {
	private Box box;
    private UpgradeBox upgradeBox;

    public WrapperBox() {}
	public WrapperBox(Box box, UpgradeBox upgradeBox) {
		this.box = box;
        this.upgradeBox = upgradeBox;
	}

    @Autowired
    @Qualifier(value="bbb")
	public void setBox(Box box, UpgradeBox upgradeBox) {
		this.box = box;
        this.upgradeBox = upgradeBox;
	}
	
	public Box getBox() {
		return box;
	}
    
    public Upgrade getUpgradeBox() {
        return upgradeBox;
    }
}

/*
코드에서는 @Qualifier를 사용하여 bbb qualifier value를 가지고 있는
Box 타입의 빈과 UpgradeBox 타입의 빈을 찾아서 연결하게 된다.
*/
```

```java
// UpgradeBox.java

package test.di.autowired;

public class UpgradeBox {
	private String element;
	
	public Box(String element) {
		this.element = element;
	}
	
	public String getElement() {
		return element;
	}
}

/*
기존의 Box 클래스와 다른 게 없다.
*/
```

```java
// MainClass.java

package test.di.autowired;

import org.springframework.context.support.GenericXmlApplicationContext;

public class MainClassWithAutowired {
	public static void main(String[] args) {
        String path = "classpath:autowiredApplicationContext.xml";
		GenericXmlApplicationContext ctx = new GenericXmlApplicationContext(path);
		
		WrapperBox wrapperBox = ctx.getBean("wrapperBox", WrapperBox.class);
		System.out.println(wrapperBox.getBox().getElement());
        System.out.println(wrapperBox.getUpgradeBox().getElement());
		
		ctx.close();
	}
}
```

위 예제의 출력 결과는 다음과 같다.

```output
222
444
```

만약 WrapperBox 클래스의 @Qualifier의 value를 aaa로 변경하면 출력은 다음과 같이 변경된다.

```output
111
333
```

참고로 @Autowired와 @Qualifier를 사용하여 의존 객체를 자동으로 주입할 때는
빈을 연결하는 우선순위가 정해져있다.

1. 타입을 먼저 확인한다.
2. @Qualifier의 value 값의 일치를 확인한다.
3. 이름을 확인한다.

따라서 @Qualifier로 인해 강제 연결을 해도 대상이 없을 때 예외가 발생할 수 있으며
예외가 발생하지 않을 경우 이름이 같아서 이다.