## Resource Annotation

이번에는 Resource 어노테이션에 대해서 공부해보았다.
다음은 Resource 어노테이션에 대한 목차이다.

1. Resource 어노테이션을 사용하는 이유
2. Resource 어노테이션을 사용하는 방법
3. Resource 어노테이션을 강제 연결하기
4. Autowired 어노테이션과의 차이점

그럼 바로 시작해보도록하겠다.



#### 1. Resource 어노테이션을 사용하는 이유

Resource 어노테이션은 Autowired, Inject 어노테이션과 마찬가지로
의존성을 자동 주입하기 위해서 사용되는 어노테이션 중 하나이다.

의존성을 자동 주입하는 것과 자동 주입하지 않는 것의 차이는
Autowired 어노테이션을 공부할 때 다뤘으니 여기서는 다루지 않도록 하겠다.



#### 2. Resource 어노테이션을 사용하는 방법

Resource 어노테이션은 클래스의 필드 또는 setter 메소드에 작성할 수 있는 어노테이션이다.
(여기서 setter 메소드는 형식이 setter 메소드가 아니더라도 setter 메소드의 역할을 하는
메소드라면 상관이 없다.)

또한 Autowired 어노테이션과 마찬가지로 아무 요소 없이 사용할 수 있기 때문에
사용하기도 간편하다는 장점을 가지고 있다.

그러면 Resource 어노테이션을 사용하는 예제를 확인하면서 더 알아보자.
다음은 Resource 어노테이션을 이용하여 WrapperBox 객체에 Box 객체 의존성을 주입하는 코드이다.

```xml
<!-- resourceApplicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    	http://www.springframework.org/schema/beans/spring-beans.xsd
    	http://www.springframework.org/schema/context
    	http://www.springframework.org/schema/context/spring-context.xsd">
    	
    <context:annotation-config />
    	
    <bean id="box" class="test.di.resource.Box">
        <constructor-arg value="111"/>
    </bean>
    <bean id="box2" class="test.di.resource.Box">
        <constructor-arg value="222"/>
    </bean>
    <bean id="wrapperBox" class="test.di.resource.WrapperBox"/>
    
</beans>

<!--
beans의 요소 중 기존에 사용하던 요소 말고도 의존성 자동 주입을 위해서 다음과 같은 요소가 추가되었다.
xmlns:context="http://www.springframework.org/schema/context"
xsi:schemaLocation="http://www.springframework.org/schema/context"
xsi:schemaLocation="http://www.springframework.org/schema/context/spring-context.xsd"

그리고 코드 중 <context:annotation-config/> 라는 태그가 존재하는데
이 태그는 나중에 가서 더 자세한 설명을 하겠지만 지금은 의존성 자동 주입을 위해
필요한 코드라고 생각하면 되겠다.

코드 설명을 하자면
box와 box2는 의존성 주입을 위해 사용될 의존 객체이고
wrapperBox는 의존 객체를 주입받을 객체이다.
-->
```

```java
// Box.java

package test.di.resource;

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
Box 클래스는 의존성 자동 주입을 위해서 간단하게 만들어진 의존 객체이다.
*/
```

```java
// WrapperBox.java

package test.di.resource;

import javax.annotation.Resource;

public class WrapperBox {
	@Resource
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

/*
WrapperBox 클래스는 의존 객체를 주입받는 클래스이며
의존 객체 필드인 box 필드에 @Resource 어노테이션을 작성하였다.
이로써 자동으로 의존 객체를 주입하도록 하였다.
*/
```

```java
package test.di.resource;

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

/*
의존성 자동 주입이 되는지 확인하기 위한 main 클래스이다.
WrapperBox 객체를 스프링 설정 파일의 자바빈을 이용해서 객체 생성을 하고
그 안의 element를 출력해서 어떤 의존 객체를 주입받았는지 알아보는 코드이다.
*/
```

위 코드의 결과는 다음과 같다.

```output
111
```



Resource 어노테이션은 클래스에 작성되어 있는 의존 객체의 변수명과 일치하는
id 또는 name 요소의 값을 가진 자바 빈을 의존 객체로 사용한다.

말이 길어서 잘 이해하지 못할 수도 있는데
위의 예제 코드로 설명하자면 위의 예제 코드에 @Resource가 작성된 곳은 필드이다.
따라서 그 필드의 변수명을 보자면 box라는 것을 알 수 있다.
그러면 스프링 설정 파일에 id 또는 name이 box인 자바 빈을 찾으면 되는데
스프링 설정 파일인 resourceApplicationContext.xml을 살펴보면
id가 box인 자바 빈이 존재하므로 이 자바 빈을 의존 객체로 사용한다.

##### 의문점?

**같은 id 또는 name을 가지고 있는 자바 빈이 있다면 어떻게 될까?**
먼저 id는 겹칠 수 없으므로 제외하고 (만약 일부러 겹친다면 예외가 발생한다.)
name이 겹치는 경우에는 예외를 발생시킨다.

**변수명과 일치하는 id 또는 name을 가진 자바 빈이 존재하지 않으면 어떻게 될까?**
이럴 경우에는 타입이 일치하는 자바 빈을 찾게 된다.
위의 코드에 만약 box라는 id를 가진 자바 빈의 id를 box1으로 변경하게 된다면
타입으로 찾게 되므로 test.di.resource.Box 타입을 찾아서 자바 빈으로 사용하게 된다.

하지만 위의 코드에서는 Box 타입의 자바 빈이 두 개이므로 예외를 발생시킨다.

**@Resource 어노테이션을 setter 메소드에 작성하였을 때 매개변수명과 일치한 것을 찾나요?
아니면 필드명으로 찾나요?**

대부분 setter 메소드의 경우 매개변수명과 필드명을 같게 하는 경우가 많습니다.
Eclipse(이클립스) IDE의 경우에는 setter 메소드를 만들어줄 때
매개변수명과 필드명을 같게 하여 만들어줍니다.

따라서 별로 상관하지 않고 쓰는 경우가 대부분이지만 굳이 알아보자면,
매개변수명이 아니라 필드명을 따라서 사용하게 됩니다.
다음의 코드는 위의 예제 코드에서 WrapperBox 클래스를 약간 수정하였습니다.

```java
// WrapperBox.java

package test.di.resource;

import javax.annotation.Resource;

public class WrapperBox {
	private Box box;

	public WrapperBox() {}
	public WrapperBox(Box box) {
		this.box = box;
	}
    
	@Resource
	public void setBox(Box box2) {
		this.box = box2;
	}
	
	public Box getBox() {
		return box;
	}
}
```

이렇게 매개변수명과 필드명을 서로 다르게 만들었더니 id가 box인 자바 빈과 연결하여
의존 객체를 주입하여 111이 출력되는 것을 알 수 있었습니다.



#### 3. Resource 어노테이션을 강제 연결하기

Resource 어노테이션을 강제 연결한다는 것은 기존에는 변수명과 일치하는 id 또는 name을 가진
자바 빈을 찾았더라면 찾는 자바 빈을 변수명으로 하지말고 지정된 id 또는 name을 가진
자바 빈을 사용하도록하는 것이다.

본격적으로 Resource 어노테이션을 강제 연결시키려면
Resource 어노테이션의 name 요소에 원하는 문자열을 넣으면 된다.

name 요소를 사용한 Resource 어노테이션의 형식은 다음과 같다.

```java
@Resource(name="일치하고자하는 id 또는 name")
```

위의 예제 코드에서 조금 이어보자면
WrapperBox 클래스의 Resource 어노테이션에 name="box2"를 추가해주면
출력이 111에서 222로 변경되게 된다.
다음은 변경한 WrapperBox.java 파일이다.

```java
// WrapperBox.java

package test.di.resource;

import javax.annotation.Resource;

public class WrapperBox {
	@Resource(name="box2")
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



#### 4. Autowired 어노테이션과의 차이점

Autowired 어노테이션은 Java(자바)에서 지원하는 어노테이션이 아니라
Spring Framework(스프링 프레임워크)에서 지원하는 어노테이션이다.

따라서 Autowired 어노테이션은 스프링 프레임워크에 종속적인 어노테이션이라
다른 프레임워크를 사용할 때의 호환성을 생각할 때 사용하지 않는 것이 좋다.

반대로 Resource 어노테이션은 자바에서 지원하는 어노테이션이기 때문에
스프링 프레임워크에 종속적이지 않은 어노테이션이다.

따라서 Resource 어노테이션을 좀 더 애용하는 것이 좋지 않나 싶다.
Resource 어노테이션이 아니더라도 Inject 어노테이션도 존재한다.
Inject 어노테이션도 나중에 알아보겠지만 Autowired 어노테이션과 마찬가지로 타입으로 연결한다.