## Python - Class Attribute

- 클래스 속성은 자바로 따지면 정적 필드를 말합니다.
  인스턴스 별로 나뉘어진 속성이 아니라 클래스가 공통으로 사용하는 속성입니다.
  사용하는 방법은 변수처럼 정의하면 됩니다.

  ```python
  class Student:
      memory = []
      def __init__(self, name, number):
          self.__name = name
          self.__number = number
      
  	def print_test(self):
          print('name : ' + self.__name)
          print('number : ' + self.__number)
          
      def setMemory(self, m):
          memory.append(m)
  ```

- 이렇게 memory 가 클래스 속성이 됩니다.
  그러면 인스턴스를 두 개 만들어도 setMemory() 메소드를 통해서 들어간 요소는
  모두 공통된 Memory에서 관리하게 됩니다.

- 클래스 속성도 비공개 속성으로 변경할 수 있습니다.
  바꾸는 방법은 인스턴스 속성과 같습니다.
- 속성과 메소드를 찾는 방법은 인스턴스 속성과 메소드를 먼저 찾고 없으면 클래스 속성과 메소드를 찾는다.
  따라서 memory에 접근할 때 self.memory를 사용하는 것 보다는 Student.memory를 사용하는 것이
  명확해보인다.

- 메소드가 독스트링을 사용할 수 있는 것처럼 클래스도 독스트링을 사용할 수 있다.
  물론 클래스 안에 있는 메소드도 독스트링을 사용할 수 있다.
  독스트링을 코드상에서 얻어내는 방법은 [클래스명]._ _ doc _ _을 사용하면 클래스의 독스트링을 얻을 수 있고
  [클래스명].[메소드명]. _ _ doc _ _ 을 사용하면 메소드의 독스트링을 얻을 수 있다.