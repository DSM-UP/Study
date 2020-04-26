## Using List DI

- 의존성 주입시 setter() 메소드의 매개변수로 List 타입이 들어갈 경우네느 어떻게 프로퍼티를 구성해야할까?
  그럴 땐 list 태그를 사용해야 한다.
  list 태그 안에는 value 또는 bean으로 만들 수 있다.
  일단 String 타입이 요소로 존재하는 리스트를 매개변수로 받는 클래스의 예제이다.

  ```xml
  <!-- listApplicationContext.xml -->
  
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">
      
      <bean id="listDI" class="test.di.list.ListDI">
          <property name="list">
              <list>
                  <value>aa</value>
                  <value>bb</value>
                  <value>cc</value>
                  <value>dd</value>
                  <value>ee</value>
              </list>
          </property>
      </bean>
      
  </beans>
  ```

  ```java
  // ListDI.java
  
  package test.di.list;
  
  public class ListDI {
      private List<String> list;
      
      public ListDI() {}
      
      public void setList(List<String> list) {
          this.list = list;
      }
      
      public void print() {
          for(String s : list) {
              System.out.println(s);
          }
      }
  }
  ```

  ```java
  // MainClass.java
  
  package test.di.main;
  
  public class MainClass {
      public static void main(String[] args) {
          GenericXmlApplicationContext ctx =
              new GenericXmlApplicationContext("classpath:listApplicationContext.xml");
          
          ListDI listDI = ctx.getBean("listDI", ListDI.class);
          listDI.print();
      }
  }
  
  // aa
  // bb
  // cc
  // dd
  // ee
  ```

- 이렇게 setter() 메소드를 이용해 의존성을 주입할 때
  property 태그 안에 list 태그 안에 value 태그를 이용하여 값을 요소에 전달한다.
  기본적으로 list 태그안의 value는 String 타입을 가지기 때문에 안에 숫자를 써도 String으로 만들어진다.
  그러면 타입을 정해주려면 list 태그안에 value-type 속성을 넣어주면 된다.

  ```xml
  <!-- listApplicationContext.xml -->
  
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">
      
      <bean id="listDI" class="test.di.list.ListDI">
          <property name="list">
              <list value-type="java.lang.Integer">
                  <value>1</value>
                  <value>2</value>
                  <value>3</value>
                  <value>4</value>
                  <value>5</value>
              </list>
          </property>
      </bean>
      
  </beans>
  ```

- 이렇게 value-type 속성의 값을 Integer로 해주면 value 태그의 안에 존재하는 값들은
  모두 Integer 값으로 인지되게 된다.

- 그렇다면 기본 타입이 아니라 우리가 새로 만든 클래스라면 어떻게 해야할까?
  그럴땐 bean 태그를 value 태그 대신에 넣어서 안에서 새로운 객체를 만들어서 사용하면 된다.

  ```xml
  <!-- listApplicationContext.xml -->
  
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">
      
      <bean id="listDI" class="test.di.list.ListDI">
          <property name="list">
              <list>
                  <bean id="listElement" class="test.di.list.ListElement">
                      <constructor-arg value="aa"/>
                  </bean>
                  <bean id="listElement" class="test.di.list.ListElement">
                      <constructor-arg value="bb"/>
                  </bean>
                  <bean id="listElement" class="test.di.list.ListElement">
                      <constructor-arg value="cc"/>
                  </bean>
                  <bean id="listElement" class="test.di.list.ListElement">
                      <constructor-arg value="dd"/>
                  </bean>
                  <bean id="listElement" class="test.di.list.ListElement">
                      <constructor-arg value="ee"/>
                  </bean>
              </list>
          </property>
      </bean>
      
  </beans>
  ```

  ```java
  // ListElement.java
  
  public class ListElement {
      private String element;
      
      public ListElement(String element) {
          this.element = element;
      }
      
      public String getElement() {
          return element;
      }
  }
  ```

- list 태그 안에 bean 태그를 이용하여 객체를 만들어서 작성할 수 있다.
  bean 태그를 밖으로 빼내서 같은 객체를 여러 번 사용할 수 없을까? 라고 생각하고 다음과 같이 코드를
  짜보았다.

  ```xml
  <!-- listApplicationContext.xml -->
  
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">
      
      <bean id="listElement" class="test.di.list.ListElement">
          <constructor-arg type="String" value="aa"/>
      </bean>
      
      <bean id="listDI" class="test.di.list.ListDI">
          <property name="list">
              <list value-type="test.di.list.ListElement">
                  <value>listElement</value>
                  <value>listElement</value>
                  <value>listElement</value>
                  <value>listElement</value>
                  <value>listElement</value>
              </list>
          </property>
      </bean>
      
  </beans>
  ```

  ```java
  // listElement
  // listElement
  // listElement
  // listElement
  // listElement
  ```

- 될 것 같았지만 String 타입으로 변환되어 사용되는 것을 볼 수 있다.