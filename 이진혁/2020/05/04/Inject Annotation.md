## Inject Annotation

이번에는 Inject 어노테이션에 대해서 공부해보았다.
다음은 이번에 공부한 Inject 어노테이션에 대한 목차이다.

1. Inject 어노테이션을 사용하는 이유
2. Inject 어노테이션을 사용하는 방법
3. Inject 어노테이션을 강제 연결하기
4. Autowired 어노테이션과의 차이점



#### 1. Inject 어노테이션을 사용하는 이유

Inject 어노테이션은 Autowired, Resource 어노테이션과 마찬가지로
의존성 자동 주입을 위한 어노테이션 중 하나이다.

Resource 어노테이션에 대한 내용을 적을 때와 마찬가지로
의존성 자동 주입과 수동 주입의 차이는 Autowired 어노테이션에서 다루었으니
여기서는 다루지 않겠다.



#### 2. Inject 어노테이션을 사용하는 방법

Inject 어노테이션을 사용하기 전에 pom.xml을 조금 고쳐주어야 한다.
기존에 우리가 사용하던 pom.xml의 dependencies 태그에

```xml
<dependency>
    <groupId>javax.inject</groupId>
    <artifactId>javax.inject</artifactId>
    <version>1</version>
</dependency>
```

위와 같은 태그를 추가해주어야 한다.
그래야 inject 모듈을 사용할 수 있게 된다.

Inject 어노테이션은 필드, 생성자, setter 메소드에 사용할 수 있는 어노테이션이다.
Inject 어노테이션에 대한 이해를 위해서 다음 예제를 보자.
다음 예제는 전의 Resource 어노테이션을 이용한 예제에서
Resource 어노테이션 대신 Inject 어노테이션을 사용한 예제 코드이다.

```xml
<!-- injectApplicationContext.xml -->

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
    <bean id="wrapperBox" class="test.di.resource.WrapperBox"/>
    
</beans>

<!--
Resource 어노테이션을 사용할 때와 마찬가지로 아래의 세 가지 요소가 추가되었다.
xmlns:context="http://www.springframework.org/schema/context"
xsi:schemaLocation="http://www.springframework.org/schema/context"
xsi:schemaLocation="http://www.springframework.org/schema/context/spring-context.xsd"
또한 마찬가지로 <context:annotation-config/> 라는 태그가 추가되었다.
-->
```

```java
// Box.java

package test.di.inject;

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
(Resource 어노테이션 때와 같다.)
*/
```

```java
// WrapperBox.java

package test.di.inject;

import javax.inject.Inject;

public class WrapperBox {
	private Box box;

	@Inject
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
생성자에 Inject 어노테이션을 작성함으로서 의존 객체를 자동으로 주입하도록 하였다.
(어노테이션이 @Resource에서 @Inject로 변한 것 말고는 거의 수정이 없다.)
*/
```

```java
// MainClass.java

package test.di.inject;

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
(Resource 때와 변동이 없다.)
*/
```

위 코드의 결과는 다음과 같다.

```output
111
```

Inject 어노테이션은 클래스의 의존 객체 필드의 타입을 기준으로 스프링 설정 파일에서
동일한 타입을 가지는 자바 빈을 찾아서 의존 객체로 사용한다.

위에서는 생성자에 Inject 어노테이션을 사용했지만 필드나 생성자에 Inject 어노테이션을 사용할 경우에는
반드시 디폴트 생성자를 명시하여야 한다.

그렇다면 @Resource 때와 마찬가지로 여러 가지 의문점이 들 수 있다.
다음부터 의문점과 그에 대한 결과에 대해서 알아보도록 하자.

##### 의문점?

**같은 타입을 가진 자바 빈이 여러 개 있다면 어떻게 처리하나요?**
이럴 때는 타입이 동일한 빈(Bean)들 중에서 이름도 같은 것을 의존 객체로 정하여 연결한다.
만약 타입이 동일한 빈은 여러 개인데 이름이 같은 것이 없다면 예외를 발생시킨다.
그리고 이렇게 설정한 이름에 제약을 받지 않기 위해서 나중에 설명할 Inject 어노테이션을 강제 연결하기에서
다룰 @Named를 사용하게 될 것이다.

**의존 객체를 두 개 이상 가지면 어떻게 처리하나요?**
의존 객체를 두 개 이상 가질 경우는 서로 다른 타입의 의존 객체를 가지는 경우와
같은 타입의 의존 객체를 가지는 경우로 나눌 수 있습니다.

서로 다른 타입의 의존 객체를 가질 경우에는 @Inject를 설정하면 자동으로 각각의 타입에 맞는
빈을 찾아가서 연결합니다.
하지만 같은 타입의 의존 객체를 가질 경우에는 @Inject로만은 해결할 수 없기 때문에
이후에 배울 Inject 어노테이션 강제 연결하기에서 알아보아야 한다.



#### 3. Inject 어노테이션을 강제 연결하기

Inject 어노테이션을 강제 연결한다는 것은 기존에 Inject 어노테이션은 타입으로 연결한 뒤
타입이 안 된다면 이름으로 연결했었습니다.
이때 그 이름을 내 마음대로 설정한다는 뜻입니다.

그렇다면 Inject 어노테이션을 강제시키려면 어떻게 해야할까요?
이럴 땐 Named라는 어노테이션을 사용하면 됩니다.
Named 어노테이션은 value 요소를 가지고 있는데 이 요소에 들어간 문자열을 기준으로 이름을 연결합니다.
다음은 같은 타입의 두 개의 빈이 스프링 설정 파일에 존재하고
WrapperBox 클래스는 하나의 의존 객체를 가질 경우 Named 어노테이션을 이용하여 강제 연결하는 예제이다.

```xml
<!-- injectApplicationContext.xml -->

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    	http://www.springframework.org/schema/beans/spring-beans.xsd
    	http://www.springframework.org/schema/context
    	http://www.springframework.org/schema/context/spring-context.xsd">
    	
    <context:annotation-config />
    	
    <bean id="box1" class="test.di.resource.Box">
        <constructor-arg value="111"/>
    </bean>
    <bean id="box2" class="test.di.resource.Box">
        <constructor-arg value="222"/>
    </bean>
    <bean id="wrapperBox" class="test.di.resource.WrapperBox"/>
    
</beans>
```

```java
// WrapperBox.java

package test.di.inject;

import javax.inject.Inject;

public class WrapperBox {
	private Box box;

	@Inject
    @Named(value="box2")
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

출력 결과는 다음과 같다.

```output
222
```

원래는 타입이 같은 빈이 두 가지 존재하고 이름은 동일한 게 없을 때 예외가 발생하였지만
이번에는 Named 어노테이션을 이용하여 box2에 강제 연결하였더니
예외가 발생하지 않고 정상적으로 연결되는 것을 볼 수 있었다.

##### 의문점?

**두 개 이상의 의존 객체를 주입받으려면 어떻게 해야 하나요?**
이제 @Named를 알아보았으니 어느정도 답이 보일 것이다.
사실 단순히 생성자에 넣고 싶지만 생성자에 의존 객체가 두 개 이상 있을 경우에는
@Named를 사용하면 예외가 발생하게 된다.
왜냐하면 어떤 의존 객체를 강제 연결해야할지를 모르기 때문이다.
물론 setter 메소드에도 같은 이유로 안 된다.

따라서 필드를 이용해야 하는데
필드에 @Inject, @Named를 사용할 경우에는 이 문제를 해결할 수는 있지만
다소 코드가 더러워질 수는 있다.
다음과 같이 해결할 수 있다.

```java
// WrapperBox.java

package test.di.inject;

import javax.inject.Inject;

public class WrapperBox {
	@Inject
    @Named(value="box1")
	private Box box;
	@Inject
    @Named(value="box2")
    private Box box2;

	public WrapperBox(Box box, Box box2) {
		this.box = box;
        this.box2 = box2;
	}
    
	public void setBox(Box box, Box box2) {
		this.box = box;
        this.box2 = box2;
	}
	
	public Box getBox() {
		return box;
	}
    
    public Box getBox2() {
        return box2;
    }
}
```

지금이야 의존 객체가 두 개라서 이렇지만
나중에 대규모 프로젝트를 진행할 경우 저렇게 많은 어노테이션이 쌓이게 되면 코드가 더러워질 수 있다.



#### 4. Autowired 어노테이션과의 차이점

**Inject 어노테이션은 스프링 프레임워크에 종속적이지 않은 어노테이션이다**

이 말은 전에 Resource 어노테이션에 대해서 공부할 때도 똑같이 전한 말이다.
말 그대로 Resource 어노테이션과 마찬가지로 Inject 어노테이션은
스프링 프레임워크에 종속적인 어노테이션이 아니라 자바가 제공하는 어노테이션이기 때문에
다른 프레임워크를 접할 때 유리한 측면이 존재한다.

**Inject 어노테이션은 required 속성을 사용할 수 없다**

이전에 Autowired 어노테이션에서는 required 어노테이션을 통해 의존 객체를 설정해놓고
스프링 설정 파일에 빈이 없을 경우를 대비할 수 있었다.
하지만 이 기능은 정말 초보 개발자가 아닌 이상 거의 실수할 일이 없으므로
거의 사용할 일이 없다고 했었는데
이 기능이 없는 Inject라고 해서 사용되지 않을 일은 없다.