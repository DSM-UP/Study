## Python - Class

#### 1. 클래스 선언하기

- 클래스를 선언하는 방법은 다음과 같다.

  ```python
  class '클래스이름':
      def '메소드이름':
          ...
  ```

#### 2. 클래스 생성자 함수 사용하기

- 클래스에 생성자 함수 즉, _ _ init _ _ () 를 추가하면 인스턴스를 생성하면서 값을 추가할 수 있다.

  ```python
  class Student:
      def __init__(self, name, number, age):
          self.name = name
          self.number = number
          self.age = age
      
      def print_test(self):
          print('name : ' + self.name)
          print('number : ' + self.number)
          print('age : ' + self.age)
  
  jin = Student('lee', 17, 18)
  jin.print_test()
  
  # name : lee
  # number : 17
  # age : 18
  ```

- 이렇게 만들어진 name, number, age를 인스턴스 속성이라고 한다.
  자바에서는 인스턴스 필드라고 한다.
  또한 print_test() 와 같은 메소드를 인스턴스 메소드라고 한다.

- 그리고 인스턴스에 원하는 속성을 동적으로 추가할 수 있다.

  ```python
  jin.height = 175
  print(jin.height)
  
  # 175
  ```

- 이렇게 동적으로 원하는 인스턴스 속성을 추가할 수 있는데
  이러한 속성 추가를 막을 수 있도록 만들어진 것이
  _ _ slots _ _ 이다.
  이에 사용할 수 있는 인스턴스 속성을 리스트 형식으로 표현해주면 된다.

  ```python
  class Test:
      __slots__ = ['a', 'b']
  
  test = Test()
  test.a = 10
  test.b = 20
  test.c = 30 # error
  ```

#### 3. 공개 속성과 비공개 속성 사용하기

- 자바에서는 접근제어지시자를 통해서 필드나 메소드의 접근 제어를 정할 수 있었다.
  자바에서의 public이 공개 속성이고 private이 비공개 속성이다.
  가만히 두면 공개 속성으로 만들 수 있고
  속성이나 메소드의 이름 앞에 _ _ (언더바 두 개)를 붙이면 비공개 속성이 된다.
  만약 명시적으로 공개 속성임을 알리고 싶으면 앞 뒤에 모두 언더바를 두 개 붙이면 된다.

  ```python
  class Student:
      def __init__(self, name, number):
          self.__name = name
          self.__number = number
          
      def print_test(self):
         	print('name : ' + self.__name)
        print('number : ' + self.__number)
  
  jin = Student('lee', 17)
  jin.print_test()
  
  # name : lee
  # number : 17
  
  jin.name = 'kim' 	# error
  ```
  