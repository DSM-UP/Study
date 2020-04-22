## Python - Class Inheritance

#### 1. 상속하기

- 파이썬의 클래스는 다른 언어와 같이 상속을 하거나 받을 수 있다.

- 자손 클래스는 부모 클래스의 메소드와 속성을 사용할 수 있게 된다.
  조상 클래스인 A와 자손 클래스인 B의 상속 방법은 다음과 같다.

  ```python
  class A:
      def print_A(self):
          print('class A')
          
  class B(A):
      def print_B(self):
          print('class B')
          
  a = A()
  b = B()
  
  a.print_A()
  b.print_A()
  b.print_B()
  
  # class A
  # class A
  # class B
  ```

- 이렇게 자손 클래스인 B는 조상 클래스인 A의 print_A() 메소드와 자신의 메소드인 print_B() 메소드도
  사용할 수 있다.

- 상속하는 방법은 위의 코드를 보면 알듯이 자손 클래스의 선언 마지막에 괄호를 만들고
  그 괄호 안에 조상 클래스를 넣으면 된다.

#### 2. issubclass() 메소드 사용하기

- issubclass() 메소드는 두 개의 매개변수를 받는데
  issubclass(B, A) 처럼 사용된다고 했을 때 B 클래스가 A 클래스의 자손 클래스인가를 묻는 것이다.
  만약 B 클래스가 A 클래스의 자손 클래스일 경우 True를 리턴하고 아닐 경우 False를 리턴한다.
  매개변수는 클래스 변수이기 때문에 클래스 이름을 그대로 넣거나 type(변수)를 넣어야 한다.

  ```python
  class A:
      pass
  class B(A):
      pass
  
  a = A()
  b = B()
  
  print(issubclass(A, B))
  print(issubclass(B, A))
  print(issubclass(type(a), type(b)))
  print(issubclass(type(b), type(a)))
  
  # False
  # True
  # False
  # True
  ```

#### 3. 상속과 생성자

- 클래스간의 상속시에 생성자를 사용할 경우 자손 클래스에서는 조상 클래스의 생성자를 호출해야 한다.
  호출해야 하는 이유는 자손 클래스는 조상 클래스의 메소드나 속성을 사용할 수 있기 때문에
  조상 클래스의 생성자가 호출되지 않으면 제대로 된 사용이 불가능하기 때문이다.

- 조상 클래스의 생성자를 호출하는 방법은 super() 함수를 사용하는 것이다.

  ```python
  class A:
      def __init__(self, a):
          self.a = a
      def print_a(self):
          print(self.a)
  
  class B(A):
      def __init__(self, a, b):
          super().__init__(a)
          self.b = b
      def print_b(self):
          print(self.b)
  
  b = B(10, 20)
  
  b.print_a()
  b.print_b()
  
  # 10
  # 20
  ```

- 이렇게 자손 클래스인 B 클래스의 생성자 안에서 super()._ _ init _ _() 함수를 이용해서
  조상 클래스인 A 클래스의 생성자를 호출할 수 있다.

- 이렇게 자손 클래스에서 조상 클래스의 생성자를 호출하지 않으면 오류를 발생시킨다.

- 만약 생성자가 존재하지 않는 경우 호출하지 않아도 된다.
  생성자가 없을 경우에는 자손 클래스에서 자동으로 조상 클래스의 생성자를 호출하기 때문이다.

#### 3. 오버라이딩

- 오버라이딩은 조상 클래스에 존재하는 메소드를 자손 클래스에 더 업그레이드 하여 작성함으로서
  기능을 추가해주는 기능을 말합니다.

- 사용하는 방법은 조상 클래스의 메소드와 자손 클래스의 메소드의 이름을 동일하게 만들고
  매개변수도 같게 만들면 됩니다.

  ```python
  class A:
      def print_test(self):
          print('print test')
          
  class B(A):
      def print_test(self):
          print('print test print test')
          
  a = A()
  b = B()
  
  a.pirnt_test()
  b.print_test()
  
  # print test
  # print test print test
  ```

#### 4. 다중 상속

- 파이썬은 다중 상속 기능을 제공합니다.
  다중 상속이란 한 자손 클래스에 조상 클래스가 두 개 이상 존재하는 것을 말합니다.
  다중 상속을 하는 방법은 괄호 안에 콤마를 구분자로 해서 여러 클래스를 넣으면 됩니다.

  ```python
  class A:
      def print_A():
          print('A')
          
  class B:
      def print_B():
          print('B')
  
  class C(A, B):
      pass
  
  c = C()
  c.print_A()
  c.print_B()
  ```

- 이렇게 자손 클래스 C는 조상 클래스인 A와 B의 메소드를 모두 사용할 수 있습니다.

- 하지만 이러한 다중 상속에는 다이아몬드 상속이라는 치명적인 허점이 존재하는데요.
  다이아몬드 상속이란 A 클래스를 상속받는 B, C 라는 클래스가 있고 B, C 클래스를 상속받는
  D라는 클래스가 존재하는 것을 말합니다.
  이러할 경우 A 클랫스의 메소드를 출력하면 D의 조상 클래스인 B의 조상 클래스인 A의 메소드를
  실행시켜야하는지 D의 조상 클래스인 C의 조상 클래스인 A의 메소드를 실행시켜야 하는지
  애매하기 때문이다.

- 하지만 파이썬에서는 모든 객체에 mro() 라는 메소드를 제공하는데 mro() 메소드는
  자신의 메소드 실행 우선순위를 출력시켜주는 메소드이다.

- 다음은 다이아몬드 상속의 예제이다.

  ```python
  class A:
      def print_test(self):
          print('A')
  
  class B(A):
      def print_test(self):
          print('B')
  
  class C(A):
      def print_test(self):
          print('C')
  
  class D(B, C):
      pass
  
  d = D()
  d.print_test()
  print(D.mro())
  
  # B
  # [<class '__main__.D'>, <class '__main__.C'>, <class '__main__.B'>, <class '__main__.A'>, <class 'object'>]
  ```

- 원래 다른 언어라면 오류가 발생해야하는 것이 당연하지만
  파이썬에서는 이 우선순위를 기준으로 메소드를 실행하는 것이 가능하다.
  이 우선순위는 상속 받을 때의 클래스 순서를 기준으로 하는데
  위의 D 클래스의 상속 과정에서 B, C가 아니라 C, B 순서로 상속을 받았더라면
  B가 아니라 C가 출력되었을 것이다.

#### 5. object 클래스

- 다른 OOP 언어에서도 그렇듯이 Object 라는 클래스가 있기 마련이다.
  Object 클래스는 모든 클래스의 조상 클래스이다.
  따라서 Object 클래스의 메소드는 모두가 사용할 수 있다.
- 특이한 점은 object 클래스는 상속을 시키지 않아도 자동 상속이 된다는 점과
  파이썬의 클래스들은 맨 앞 글자를 대문자로 하는 것을 권장하는데
  object 클래스는 앞 글자인 o가 소문자라는 특징이 있다.

#### 6. 추상 클래스

- 추상 클래스는 추상 메소드를 하나 이상 가지고 있는 클래스를 말한다.
  추상 메소드를 만드는 방법은 abc 모듈을 임포트 받고(abc는 abstract base class의 약자)
  추상 클래스의 metaclass를 ABCMeta로 지정한 뒤 추상 메소드의 위에
  데코레이터로 @abstractmethod를 지정하면 된다.

- 추상 클래스는 인스턴스를 만들 수 없으므로 추상 메소드의 코드 블록에는 아무것도 있을 필요가 없지만
  코드를 작성해도 문제는 되지 않는다. 대부분 pass 키워드를 통해 넘긴다.

- 추상 클래스를 상속 받는 자손 클래스는 반드시 추상 클래스의 추상 메소드를 '모두' 구현해야 한다.
  다음 추상 클래스인 A를 구현하는 B 클래스의 예제이다.

  ```python
  from abc import *
  
  class A(metaclass=ABCMeta):
      @abstractmethod
      def print_hello(self):
          pass
      @abstractmethod
      def print_bye(self):
          pass
      
  class B(A):
      def print_hello(self):
          print('hello')
      def print_bye(self):
          print('bye')
  
  b = B()
  b.print_hello()
  b.print_bye()
  
  # hello
  # bye
  ```

- 만약 클래스 B가 두 개의 메소드를 모두 구현하지 않았다면 오류가 발생한다.