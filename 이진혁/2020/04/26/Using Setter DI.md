## Using Setter DI

- 저번에는 클래스의 생성자를 이용해서 의존성을 주입해보았다.
  이번에는 setter 메소드를 이용해서 의존성을 주입할 것인데
  한 번 알아보자.

  ```xml
  <!-- setterApplicationContext.xml -->
  
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">	
      	
      <bean id="element" class="test.di.setter.Element"/>
      
      <bean id="setterDI" class="test.di.setter.SetterDI">
          <property name="string" value="string"/>
          <property name="integer" value="10"/>
          <property name="element" ref="element"/>
      </bean>
      
  </beans>
  ```

  ```java
  // SetterDI.java
  
  package test.di.setter;
  
  public class SetterDI {
  	private String string;
  	private Integer integer;
  	private Element element;
  	
  	public SetterDI() {}
  	public void setString(String string) {
  		this.string = string;
  	}
  	public void setInteger(Integer integer) {
  		this.integer = integer;
  	}
  	public void setElement(Element element) {
  		this.element = element;
  	}
  	public void print() {
  		System.out.println("String : " + string);
  		System.out.println("Integer : " + integer);
  		System.out.println("Element : " + element.getElement());
  	}
  }
  ```

  ```java
  // Element
  
  package test.di.setter;
  
  public class Element {
  	private String string;
  	public Element() {
  		this.string = "element";
  	}
  	public String getElement() {
  		return string;
  	}
  }
  
  ```

  ```java
  // MainClass.java
  
  package test.di.main;
  
  public class MainClass {
      public static void main(String[] args) {
          GenericXmlApplicationContext ctx =
              new GenericXmlApplicationContext(
              	"classpath:setterApplicationContext.xml"
          	);
  		
  		SetterDI setterDI = ctx.getBean("setterDI", SetterDI.class);
  		setterDI.print();
      }
  }
  
  // String : string
  // Integer : 10
  // Element : element
  ```

- 다른 MainClass.java, Element.java, SetterDI.java 파일은 어느정도 예상할 수 있으니
  xml파일만 보자면 생성자와는 다르게 construcotr-arg 태그가 아니라
  property 태그를 사용한다.
  property 태그의 속성으로는 name과 value, ref 속성을 사용할 수 있는데
  name에는 클래스의 필드 이름을 넣고
  value에는 그에 대한 값을 넣고
  ref는 그에 대한 참조 값을 넣는데
  위에서는 String, Integer 타입은 value로 두고 새로 만든 Element 클래스에는
  ref 를 사용하였다.
  하지만 String, Integer도 Element 클래스처럼 위에서 만들고
  참조하는 형식으로 만들면 ref를 사용할 수 있다.