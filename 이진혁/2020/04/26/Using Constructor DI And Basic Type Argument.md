## Using Constructor DI And Basic Type Argument

- 이번에는 DI를 생성자로 주입하는 방법과 그에 따라 기본 타입은 어떻게 주입 받아야 하는지에 대한 내용이다.

- 의존성을 주입하는 방법은 생성자를 사용하는 방법이 있고 Setter 메소드를 사용하는 방법이 있다.
  그리고 List와 Map 타입의 변수를 매개로 받는 방법이 따로 있다.
  먼저 간단하게 생성자로 의존성을 주입해보자.

  ```xml
  // applicationContext.xml
  
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">		
      <bean id="element1" class="test.di.constructor.Element1"/>
      <bean id="element2" class="test.di.constructor.Element2"/>
       
      <bean id="constructorDI" class="test.di.constructor.ConstructorDI">
          <constructor-arg ref="element1"></constructor-arg>
          <constructor-arg ref="element2"></constructor-arg>
      </bean>
      
  </beans>
  ```

  ```java
  // Element1.java
  
  public class Element1 {
      private String string;
      public Element1(String string) {
          this.string = string;
      }
      public String getElement() {
          return string;
      }
  }
  ```

  ```java
  // Element2.java
  
  public class Element2 {
      private Integer integer;
      public Element2(Integer integer) {
          this.integer = integer;
      }
      public Integer getInteger() {
          return integer;
      }
  }
  ```

  ```java
  // ConstructorDI.java
  
  public class ConstructorDI {
      private Element1 element1;
      private Element2 element2;
      
      public ConstructorDI(Element1 element1, Element2 element2) {
          this.element1 = element1;
          this.element2 = element2;
      }
      
      public void print() {
          System.out.println("Element1 : " + element1.getElement());
          System.out.println("Element2 : " + element2.getElement());
      }
  }
  ```

  ```java
  // MainClass.java
  
  public class MainClass {
      public static void main(String[] args) {
          GenericXmlApplicationContext ctx =
              new GenericXmlApplicationContext("classpath:applicationContext");
          
          ConstructorDI constructorDI =
              ctx.getBean("constructorDI", ConstructorDI.class);
          constructorDI.print();
      }
  }
  
  // string
  // 10
  ```

- 이렇게 Element1과 Element2라는 클래스를 xml 파일을 이용해서 스프링 컨테이너에 객체를 생성하고
  ConstructorDI라는 클래스의 생성자 매개변수로서 사용될 수 있었다.
  이렇게 사용하는 것은 저번에도 했던 것처럼 아무 문제없이 돌아간다.

- 하지만 이때 ConstructorDI 클래스의 생성자 매개변수가 Element1, Element2가 아니라
  String, Integer라면 어떻게 될까?

- 일단 Xml 파일만 중요하니 Xml 파일을 중점으로 보자.

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">
       
       <bean id="element1" class="String"/>
       <bean id="element2" class="Integer"/>
       
      <bean id="constructorDI" class="test.di.constructor.ConstructorDI">
          <constructor-arg ref="element1"></constructor-arg>
          <constructor-arg ref="element2"></constructor-arg>
      </bean>
      
  </beans>
  ```

- 처음에는 이런식으로 Xml 파일을 구성했다.
  하지만 class에는 패키지까지 하여 모든 경로를 표시해야 하므로 다음과 같이 고쳤다.

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">
       
       <bean id="element1" class="java.lang.String"/>
       <bean id="element2" class="java.lang.Integer"/>
       
      <bean id="constructorDI" class="test.di.constructor.ConstructorDI">
          <constructor-arg ref="element1"></constructor-arg>
          <constructor-arg ref="element2"></constructor-arg>
      </bean>
      
  </beans>
  ```

- 이렇게 고쳐서 실행시켰더니 그래도 오류가 발생하였다.
  왜 오류가 나는지 오류 메세지를 살펴보니 Integer 클래스의 매개변수가 어쩌구 되어 있길래
  생각해보니 String, Integer 클래스도 모두 객체화 시켜야 하는데
  그에 맞는 매개변수를 주지 않았던 것이다.
  Integer 클래스만 오류가 발생하고 String 클래스에는 오류가 발생하지 않았던 것은
  String은 매개변수 없이도 객체 생성이 가능하지만 Integer는 그렇지 않기 때문이다.

  ```java
  Stirng string = new String() 	// O
  Integer integer = new Integer() // X
  ```

- 따라서 다음과 같이 코드를 수정하였다.

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">
       
       <bean id="element1" class="java.lang.String">
      	<constructor-arg value="string"/>
      </bean>
       <bean id="element2" class="java.lang.Integer">
      	<constructor-arg value="10"/>
      </bean>
       
      <bean id="constructorDI" class="test.di.constructor.ConstructorDI">
          <constructor-arg ref="element1"></constructor-arg>
          <constructor-arg ref="element2"></constructor-arg>
      </bean>
      
  </beans>
  ```

- 이러니 오류가 발생하지 않고 string과 10이 잘 출력되었다.
  하지만 이렇게 String 객체나 Integer 객체는 많이 쓰일텐데 이렇게 나누어져있을 필요가 없다고 생각해서
  구글링하여 찾아보니 constructor-arg 태그에서 type과 value 속성을 사용하는 방법이 있었다.

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">
  
      <bean id="constructorDI" class="test.di.constructor.ConstructorDI">
          <constructor-arg type="java.lang.String" value="string"/>
          <constructor-arg type="java.lang.Integer" value="10"/>
      </bean>
      
  </beans>
  ```

- 이렇게 string과 10을 사용할 수 있게 된다.
  그러면 이렇게 Integer와 같이 Wrapper 클래스를 사용하지 않고 int, char, double과 같이
  기본 자료형을 사용하려면 어떻게 해야할까?
  사실 간단하게 type에다가 int, char, double을 넣으면 된다.

  ```xml
  <constructor-arg type="int" value="10"/>
  <constructor-arg type="char" value="c"/>
  <constructor-arg type="double" value="1.1"/>
  ```

- 이렇게 기본 자료형 및 참조 자료형을 이용해서 생성자를 사용하여 의존성을 주입하는 방법에 대해서
  알아보았다.
  다음에는 Setter 메소드를 사용하는 방법을 알아보겠다.