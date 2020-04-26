## Using Map DI

- 의존성 주입을 하면서 나오는 Map을 사용하는 방법은 map 태그, entry 태그, key, value 태그를 이용해서
  사용할 수 있습니다.

  ```xml
  <!-- mapApplicationContext.xml -->
  
  <?xml version="1.0" encoding="UTF-8"?>
  
  <beans xmlns="...">	
      	
      <bean id="mapDI" class="test.di.map.MapDI">
          <property name="map">
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
          </property>
      </bean>
      
  </beans>
  ```

  ```java
  // MapDI.java
  
  public class MapDI {
      private Map<String,String> map;
      
      public MapDI() {}
      
      public setMap(Map<String,String> map) {
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
  
  public class MainClass {
      public static void main(String[] args) {
          GenericXmlApplicationContext ctx =
              new GenericXmlApplicationContext("classpath:mapApplicationContext.xml");
          
          MapDI mapDI = ctx.getBean("mapDI", MapDI.class);
          mapDI.print();
      }
  }
  
  // Key : AAA, Value : aaa
  // Key : BBB, Value : bbb
  // Key : CCC, Value : ccc
  ```

- 사실 이 코드의 결과는 이렇게 나왔다.

  ```java
  // Key : AAA, Value :
  //							aaa
  // Key : BBB, Value :
  //							bbb
  // Key : CCC, Value :
  //							ccc
  ```

- 실제로는 System.out.println() 코드를 다음과 같이 고쳐서 상황을 고쳤지만
  왜 이렇게 Tap, 띄어쓰기가 되는지 알 수 없었다.
  그래서 그냥 trim()을 사용하였다.

  ```java
  System.out.println("Key : " + s + ", Value : " + map.get(s));
  ->
  System.out.println("Key : " + s + ", Value : " + (map.get(s)).trim());
  ```

- 어쨌든 위의 코드는 Map을 사용할 수 있게 해준다.
  map 태그 안에 entry 태그가 있고 이 entry 하나가 Map의 요소 하나하나를 담당한다.
  entry 안에는 key 태그와 value 태그가 잇고 key 태그 안에는 value 태그가 또 있다.
  이렇게 두 개의 value 태그에는 각각의 키값과 값이 들어간다.