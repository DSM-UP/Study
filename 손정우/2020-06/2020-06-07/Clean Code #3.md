# Clean Code #3

### 함수

- 최대한 작게

- 함수당 추상화 레벨을 하나로

- 한 가지 일만 담당 (switch 문은 대표적인 여러일 담당)
                                 └ 각 경우에 따라 각기 다른 일을 하기때문
                                 └ 피할 수 없는 경우 해당 로직을 묶는 등으로 최소화하기

- 이름은 서술적으로

- 인수는 없는게 Best 단항이 차선 이항 이상은 생각해보기 - 객체로 묶는 등으로 해결가능
                                                         └  좌표나 자연적 순서를 가지는 등 당연하면 가능하다

- 출력인자는 사용하지 않는다

- 부수효과는 더러운 거짓말이다 (하나만 한다는 것을 지키지 않고 다른 일을 한 것)

- 오류 보다 예외를 사용한다 ┬  오류는 확인 후 바로 처리해야하나 예외는 묶는 것이 가능하다
                                             └   오류 종류를 담는 Enum등의 종속성이 크다

  ```java
  if (deletePage(page) == E_OK) {
      if (registry.deleteReference(page.name) == E_OK) {
          if (configKeys.deleteKey(page.name.makeKey()) == E_OK) {
              logger.log("page deleted");
          } else {
              logger.log("configKey not deleted");
          } 
      } else {
          logger.log("deleteReference from registryy failed");
      }
  } else {
  	logger.log("delete failed");
      return E_ERROR;
  }
  
  // VS /////////////////////////////////////////////////////////
  
  try{
      deletePage(page);
      register.deleteReference(page.name);
      configKeys.deleteKey(page.name.makeKey());
  }
  catch (Exception e) {
      logger.log(e.getMessage());
  }
  ```

- 반복을 없애라

