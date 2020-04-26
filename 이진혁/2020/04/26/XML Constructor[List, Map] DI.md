## XML Constructor[List, Map] DI

- 지금까지 setter() 메소드를 사용할 때만 List와 Map을 다뤄왔었다.
  그렇다면 생성자로는 List와 Map 자료형을 매개변수로 받아올 수 없는 걸까?
  당연히 그렇지 않을 것이다.
  이 두 자료형은 가장 많이 쓰이는 자료형이기도 하고 이론적으로 지원하지 않을 수가 없다.
  따라서 setter() 메소드를 사용하지 않고 생성자를 이용해서
  List와 Map을 사용하는 방법에 대해서 알아보았다.

- 사실 List와 Map의 setter()에서 사용하는 방법을 배웠을 때 적지 않은 이유는
  인터넷에 쳐도 잘 나오지 않았기 때문이다.
  그래서 조금의 삽질로 인해서 은근히 쉽게(?) 알게 되었다.
  다음의 코드는 생성자로 Map을 받아서 처리하는 코드의 예제이다.

  ```xml
  <!-- constructorMapApplicationContext.xml -->
  
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">
      
      <bean id="constructorMap" class="test.di.curiosity.ConstructorMap">
          <constructor-arg>
              <map>
  		        <entry>
  		            <key>
  		                <value>AAA</value>
  		            </key>
  		            <value>
  		                aaa
  		            </value>
  		        </entry>
  		        <entry>
  		            <key>
  		                <value>BBB</value>
  		            </key>
  		            <value>
  		                bbb
  		            </value>
  		        </entry>
  		        <entry>
  		            <key>
  		                <value>CCC</value>
  		            </key>
  		            <value>
  		                ccc
  		            </value>
  		        </entry>
  		    </map>
          </constructor-arg>
      </bean>
      
  </beans>
  ```

  ```java
  // ConstructorMap.java
  
  package test.di.curiosity;
  
  public class ConstructorMap {
  	private Map<String,String> map;
  	
  	public ConstructorMap(Map<String,String> map) {
  		this.map = map;
  	}
  	
  	public void print() {
  		Set<String> set = map.keySet();
  		for(String s : set) {
  			System.out.println("Key : " + s + ", Value : " + map.get(s));
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
              new GenericXmlApplicationContext(
          		"classpath:constructorMapApplicationContext.xml"
          	);
          
          ConstructorMap constructorMap = 
              ctx.getBean("constructorMap", ConstructorMap.class);
          constructorMap.print();
      }
  }
  
  // Key : AAA, Value : aaa
  // Key : BBB, Value : bbb
  // Key : CCC, Value : ccc
  ```

- 이 출력결과도 사실 띄어쓰기로 인한 문제가 있었는데 실제로는 trim() 메소드를 이용했다.

- 이제 중요한 xml 파일을 살펴보면 constructor-arg 의 속성인 ref 또는 type, value 속성이 없어졌고
  그 태그 안에 map 태그를 넣어주었습니다.
  이러니까 예외가 발생하지 않고 정상적으로 작동하였습니다.
  (수많은 삽질을 했다...)

- 어쨌든 map 태그 대신 list를 넣으면 똑같이 작동합니다.

  ```xml
  <!-- constructorListApplicationContext.xml -->
  
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">
      
      <bean id="constructorList" class="test.di.curiosity.ConstructorList">
          <constructor-arg>
              <list>
              	<value>AAA</value>
              	<value>BBB</value>
              	<value>CCC</value>
              </list>
          </constructor-arg>
      </bean>
      
  </beans>
  ```

  