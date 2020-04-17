# TIL

파이썬 클래스

- 클래스 만드는 방법

  ~~~python
  class 클래스이름:
      def 메소드(self):
          코드
  ~~~

- 인스턴스 생성 및 메서드 호출

  ~~~python
  class Person:
      def say_hello():
          print('Hello!')
          
  inst = Person()
  inst.say_hello() // 'Hello!'
  ~~~

- 파이썬의 여러 클래스

  - int
  - list
  - dict
  - 등등

- type(객체) 을 통해 객체의 클래스를 확인할 수 있다.

- isinstance(인스턴스, 클래스) 를 사용하면 인스턴스가 해당 클래스의 인스턴스인지 확인할 수 있다. (Boolean)



- 클래스 속성 사용

  ~~~python
  class 클래스이름:
      def __init__(self):
          self.속성 = 값
          
  인스턴스 = 클래스이름()
  인스턴스.속성 // 값
  ~~~

  \__init__ 메소드는 인스턴스를 만들 때 호출되는 특별한 메소드다.

  앞 뒤로 __가 붙은 메소드는 파이썬이 자동으로 호출해주는 메소드다. (스페셜 메소드, 매직 메소드)



- self : 인스턴스 자기 자신을 의미함.



- 인스턴스 생성할 때 값 받기

  ~~~python
  class Person:
      def __init__(self, name, age):
          self.name = name
          self.age = age
          
  p = Person('이름', 31)
  p.name // '이름'
  p.age // 31
  ~~~

  Person의 괄호 안에 넣은 값은 \__init__ 메소드에서 self 뒤에 있는 매개변수에 차례대로 들어간다.



- 비공개 속성 사용하기

  ~~~python
  class Person:
  	def __init__(self, name, age):
          self.__name = name
          self.age = age
          
  p = Person('이름', 31)
  p.age // 31
  p.__name // 비공개 속성 접근 오류
  ~~~

  클래스의 속성이나 메소드 이름 앞에 __를 붙여주면 클래스 내부에서만 접근할 수 있는 비공개 속성, 메소드가 된다.