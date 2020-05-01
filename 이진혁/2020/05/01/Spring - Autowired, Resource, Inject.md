## Spring - Autowired

- 스프링에서 의존성을 가지는 객체에게 의존객체를 주입할 때
  constructor-arg 태그나 property 태그를 이용해서 의존객체를 주입하였다.
  하지만 스프링에서는 의존성을 가지는 객체가 굉장히 많기 때문에
  이 일을 계속 반복적으로 하는 것은 불필요하다고 생각하여
  이 과정을 없앨 수 있도록 Autowired, Resource, Inject라는 어노테이션을 지원한다.
  정확히는 Autowired 어노테이션만 지원하고 Resource와 Inject 어노테이션은 자바에서 지원한다.

- 그럼 이 어노테이션들에 대해서 알아보도록하자.

#### Autowired 어노테이션

- Autowired 어노테이션은 클래스의 필드, 메소드, 생성자에 사용할 수 있다.
  Autowired 어노테이션을 달게 되면 스프링 설정 파일에서는 자동으로 의존객체를 주입하게 된다.
  다음은 Autowired 어노테이션을 사용하지 않은 코드와 사용한 코드의 차이를 비교한 것이다.

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
      	
      <bean id="box" class="test.di.autowired.Box">
          <constructor-arg value="111"/>
      </bean>
      <bean id="wrapperBox" class="test.di.autowired.WrapperBox">
      	<constructor-arg ref="box"/>
      </bean>
      
  </beans>
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
  ```

  ```java
  // WrapperBox.java
  
  package test.di.autowired;
  
  import org.springframework.beans.factory.annotation.Autowired;
  import org.springframework.beans.factory.annotation.Qualifier;
  
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
  ```

  ```java
  // MainClassWithAutowired.java
  
  package test.di.autowired;
  
  import org.springframework.context.support.GenericXmlApplicationContext;
  
  public class MainClassWithAutowired {
  	public static void main(String[] args) {
  		GenericXmlApplicationContext ctx = new GenericXmlApplicationContext("classpath:autowiredApplicationContext.xml");
  		
  		WrapperBox wrapperBox = ctx.getBean("wrapperBox", WrapperBox.class);
  		System.out.println(wrapperBox.getBox().getElement());
  		
  		ctx.close();
  	}
  }
  
  // 111
  ```

- 이제 스프링 설정 파일과 좀 친근해진 느낌이다.
  수월하게 xml파일을 작성할 수 있게 되었다.

- 어쨌든 Autowired 어노테이션을 사용하지 않고 의존객체를 주입하는 방법은 위와 같다.
  그렇다면 Autowired 어노테이션을 사용하여 의존객체를 주입해보자.

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
      	
      <context:annotation-config />
      	
      <bean id="box" class="test.di.autowired.Box">
          <constructor-arg value="111"/>
      </bean>
      <bean id="wrapperBox" class="test.di.autowired.WrapperBox"/>
      
  </beans>
  ```

  ```java
  // WrapperBox.java
  
  package test.di.autowired;
  
  import org.springframework.beans.factory.annotation.Autowired;
  import org.springframework.beans.factory.annotation.Qualifier;
  
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
  ```

- 달라진 건 autowiredApplicationContext.xml 파일과 의존객체를 주입받는 WrapperBox 클래스이다.
  WrapperBox.java 파일은 생성자에 Autowired 어노테이션이 붙은 것 밖에 차이가 나지 않고
  autowiredApplicationContext.xml 파일은 context:annotation-config 태그가 추가되었고
  의존객체를 주입받는 WrapperBox 자바 빈의 constructor-arg를 통한 의존객체 주입 코드가
  사라진 것을 볼 수 있다.

- 이렇게 의존객체를 직접 주입하지 않아도 예외 발생 없이 정상적으로 출력된다.

- 그럼 context:annotation-config 태그는 지금은 Autowired 어노테이션과 같이
  의존객체를 주입하는 어노테이션을 활성화하는 태그라고 생각하면 될 것 같다.
  annotation-config 외에도 annotation-scan과 같은 태그도 있는데 이들은 나중에 배워보겠다.

- 이렇게 Autowired 어노테이션을 통해서 의존객체를 자동으로 주입할 수 있었다.
  그렇다면 Autowired 어노테이션은 어떻게 동작하는 걸까?

- Autowired 어노테이션은 자바 빈의 타입을 보고 자동으로 의존객체를 주입한다.
  위 코드처럼 WrapperBox 클래스의 생성자에 Autowired 어노테이션이 붙여져 있을 때
  스프링 설정 파일에서는 WrapperBox 자바 빈을 생성하는 코드를 찾아가
  생성자의 매개변수의 타입을 알아내 그 타입과 같은 자바 빈을 찾아가서 자동으로 주입한다.

- 그렇다면 타입이 같은 자바 빈이 두 개 이상 있다면 어떻게 될까?
  일단 기본적으로 Autowired 어노테이션은 타입이 일치하는지 알아본 뒤
  타입이 일치하는 자바 빈이 두 개 이상있다면 이번엔 타입이 아닌 id를 확인한다.
  여기서 id란 이름을 말하는 것인데 생성자의 매개변수명과 일치하는 id를 가진 자바 빈을 이용한다.

- 그렇다면 이름이 같은 자바 빈은 없는데 타입이 같은 자바 빈이 두 개 이상 있다면 어떻게 될까?
  그러면 예외를 발생시키게 된다.
  하지만 이 예외를 발생시키지 않고 확실하게 어떤 자바 빈을 사용하라고 명시할 수 있는데
  그게 바로 Qualifier 어노테이션이다.
  Qualifier 어노테이션은 Autowired 어노테이션과 같이 사용해야 하며
  생성자에는 사용할 수 없고 필드와 setter 메소드에 사용할 수 있다.
  Qualifier 어노테이션에는 속성값으로 문자열을 줄 수 있는데
  스프링 설정 파일에서 qualifier 태그를 이용해서 어떠한 문자열을 가지는 자바 빈을
  의존객체 주입을 받겠다라고 명시를 해주어야 한다.

- 다음은 같은 타입을 가지는 의존 객체 후보가 두 개 있을 때 Qualifier 어노테이션을 사용하여
  정상적으로 동작하는 코드이다.

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
      	
      <context:annotation-config />
      	
      <bean id="box1" class="test.di.autowired.Box">
          <constructor-arg value="111"/>
  		<qualifier value="one"/>
      </bean>
      <bean id="box2" class="test.di.autowired.Box">
          <constructor-arg value="222"/>
          <qualifier value="two"/>
      </bean>
      <bean id="wrapperBox" class="test.di.autowired.WrapperBox"/>
      
  </beans>
  ```

  ```java
  // WrapperBox.java
  
  package test.di.autowired;
  
  import org.springframework.beans.factory.annotation.Autowired;
  import org.springframework.beans.factory.annotation.Qualifier;
  
  public class WrapperBox {
      @Autowired
      @Qualifier("two")
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

- 이렇게 "one" 이라는 qualifier를 가진 box1 자바 빈과
  "two" 라는 qualifier를 가진 box2 자바 빈이 있을 때 의존객체를 주입받을 WrapperBox 클래스는
  Qualifier 어노테이션을 통해 "two" 속성을 전달해주면 "two" value qualifier 태그를 가진
  자바 빈이 의존객체로 주입이 된다.

- 여기서 Qualifier 어노테이션은 생성자에는 사용할 수 없기 때문에 Autowired 어노테이션과
  Qualifier 어노테이션을 필드에 작성하였는데 이렇게 Autowired, Qualifier 어노테이션은
  반드시 같이 있어야 한다.
  만약 setter 메소드에 붙일 경우에도 같이 붙여야 한다.

- 그리고 필드나 setter 메소드에 Autowired 어노테이션을 붙일 경우에는 반드시
  디폴트 생성자를 작성해주어야 한다.
  왜냐하면 필드나 setter 메소드에 접근하기 위해서는 먼저 인스턴스가 생성이 되어야 하는데
  디폴트 생성자가 없으면 인스턴스를 생성할 수 없기 때문이다.
  그리고 생성자의 특징을 통해 Autowired를 생성자에 달았을 때
  그 필드를 final로 설정하여 안전하게 유지할 수 있다.

- 마지막으로 Autowired를 사용할 때도 required 속성을 사용할 수 있다.
  required 속성은 boolean 타입을 받을 수 있고 사용하지 않을 경우 디폴트로 true이다.
  required 속성은 의존객체를 주입받아야하는데 의존객체가 스프링 설정 파일에 존재하지 않을 경우
  의존객체를 주입받지 않게 하여 예외를 발생시키지 않게 한다.
  하지만 자신이 의존객체를 받도록 설정해놓고 자신이 스프링 설정 파일에 자바 빈을 만들어놓지 않는 것은
  극히 드문일이므로 거의 사용할 일이 없다.
  그래도 다음은 required 속성을 사용하여 예외를 방지하는 예제이다.

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
      	
      <context:annotation-config />
      	
      <bean id="box1" class="test.di.autowired.Box">
          <constructor-arg value="111"/>
  		<qualifier value="one"/>
      </bean>
      <bean id="box2" class="test.di.autowired.Box">
          <constructor-arg value="222"/>
          <qualifier value="two"/>
      </bean>
      <bean id="wrapperBox" class="test.di.autowired.WrapperBox"/>
      
  </beans>
  ```

  ```java
  // WrapperBox.java
  
  package test.di.autowired;
  
  import org.springframework.beans.factory.annotation.Autowired;
  import org.springframework.beans.factory.annotation.Qualifier;
  
  public class WrapperBox {
      @Autowired(required=false)
      @Qualifier("two")
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

- 하지만 이렇게 코드를 짤 경우 main 클래스에서 WrapperBox 클래스를 사용할 때
  getBox() 메소드를 사용할 경우 null이 리턴될 것이고 그 null을 이용해 getElement() 메소드를
  사용할 경우 NullPointerException이 발생할 것이다.