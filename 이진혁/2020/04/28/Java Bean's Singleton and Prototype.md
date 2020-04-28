## Java Bean's Singleton and Prototype

- 자바빈(JavaBean)은 싱글톤과 프로토타입이 존재한다.
  싱글톤은 말 그대로 하나의 객체가 하나만 존재한다는 뜻으로
  아무리 getBean() 메소드를 통해 객체 생성을 해도 같은 객체를 가리키게 된다.
  프로토타입은 반대로 getBean()을 통해 객체 생성을 하면 각각 다른 객체가 되어 나온다.
- 스프링에서는 싱글톤을 많이 사용하므로 그냥 id와 class 속성을 통해 자바빈을 만들면
  기본적으로 싱글톤으로 만들어지며
  자바빈의 속성 중 scope 속성에 prototype을 넣어주면 프로토타입으로 사용된다.

#### 1. 자바빈의 싱글톤(Java Bean's Singleton)

- 자바빈의 싱글톤 속성은 위에서 말했던 것처럼 하나의 클래스에서 하나의 객체만 만들어지는
  특징을 가지고 있다.

- 스프링에서는 싱글톤 객체를 많이 사용하므로 디폴트로 지정되어 있다.
  스프링 설정 파일에서 getBean() 메소드를 통해 객체를 생성하는데
  왜 싱글톤이냐고 의문을 품을 수 있다.
  하지만 스프링 설정 파일에 자바빈을 설정해두면 스프링 컨테이너에 그 객체가 한 번 생성되고
  getBean()은 그 객체를 리턴하는 메소드가 된다.
  따라서 하나의 싱글톤 객체가 만들어지는 것이다.

- 다음은 싱글톤 객체를 증명하는 코드이다.

  ```xml
  <!-- singletonApplicationContext.xml -->
  
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">	
      
      <bean id="element1" class="test.bean.element.ElementType">
          <constructor-arg value="Lee"/>
      </bean>
      
      <bean id="element2" class="test.bean.element.ElementType">
          <constructor-arg value="Kim"/>
      </bean>
      
  </beans>
  ```

  ```java
  // ElementType.java
  
  package test.bean.element;
  
  public class ElementType {
  	private String element;
  	
  	public ElementType(String element) {
  		this.element = element;
  	}
  	
  	public String getElement() {
  		return element;
  	}
  }
  ```

  ```java
  // MainClass.java
  
  package test.bean.main;
  
  import org.springframework.context.support.GenericXmlApplicationContext;
  
  import test.bean.element.ElementType;
  
  public class MainClass {
  	public static void main(String[] args) {
          String path = "classpath:singletonApplicationContext.xml";
  		GenericXmlApplicationContext ctx =
              new GenericXmlApplicationContext(path);
          
  		ElementType element1 = ctx.getBean("element1", ElementType.class);
  		ElementType element2 = ctx.getBean("element1", ElementType.class);
  		ElementType element3 = ctx.getBean("element2", ElementType.class);
  		ElementType element4 = ctx.getBean("element2", ElementType.class);
  		
  		System.out.println(element1.getElement());
  		System.out.println(element2.getElement());
  		System.out.println(element3.getElement());
  		System.out.println(element4.getElement());
  		
  		System.out.println(element1 == element2);
  		System.out.println(element1.equals(element2));
  	}
  }
  
  // Lee
  // Lee
  // Kim
  // Kim
  // true
  // true
  ```

- 이렇게 두 개의 객체를 비교했을 때 모두 true가 리턴되는 것을 알 수 있다.

#### 2. 자바빈의 프로토타입(Java Bean's Prototype)

- 프로토타입도 다시 정리하자면 하나의 클래스에 여러 개의 객체가 생성될 수 있는 것을 말한다.
  프로토타입은 위에서 말했던 것처럼 자바빈에 scope 속성에 prototype을 넣어주면 된다.

  ```xml
  <!-- singletonApplicationContext.xml -->
  
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">	
      
      <bean id="element1" class="test.bean.element.ElementType" scope="prototype">
          <constructor-arg value="Lee"/>
      </bean>
      
      <bean id="element2" class="test.bean.element.ElementType" scope="prototype">
          <constructor-arg value="Kim"/>
      </bean>
      
  </beans>
  
  <!--
  Lee
  Lee
  Kim
  Kim
  false
  false
  -->
  ```

- 이렇게 두 객체를 비교했을 때 false가 출력되는 것을 볼 수 있다.
  MainClass와 ElementType는 코드가 같기 때문에 생략하였다.