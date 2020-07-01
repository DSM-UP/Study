# TIL

파이썬 클로저

- 변수의 사용 범위

  ~~~python
  x = 15
  def foo():
      print(x)
      
  foo() # 15
  print(x) # 15
  ~~~

  다음과 같이 전역에서 선언한 변수는 스크립트 전체에서 접근가능하다.

  ~~~python
  def foo():
      x = 15
      print(x)
      
  foo() # 15
  print(x) # 지역 변수인 x에 접근할 수 없음.
  ~~~

  함수 안에서 선언한 변수는 함수의 바깥에서 접근할 수 없다.

- 함수 안에서 전역 변수 변경

  ~~~python
  x = 15
  def foo():
      x = 24
    	print(x) # 24
      
  foo()
  print(X) # 15
  ~~~

  함수 안에서 x에 24를 대입해주었지만 전역 변수 x가 변하지 않았다. 함수 내부에서 선언한 변수는 전역 변수와 이름만 같은 지역 변수로 선언된다.

  ~~~python
  x = 15
  def foo():
      global x
      x = 24
      print(X)
      
  foo() # 24
  print(x) # 24
  ~~~

  함수 안에서 변수를 global로 지정하면 전역 변수를 사용하게 되는 것이다. 만약에 전역 변수가 없을 때 global을 사용하면 해당 변수는 전역 변수가 된다.

- 지역 변수 변경

  ~~~python
  def foo():
      x = 20
      def bar():
          x = 30
          
      bar()
      print(x)
      
  foo() # 20
  ~~~

  파이썬은 함수에서 변수를 선언하면 항상 현재 함수의 지역 변수가 된다.

  ~~~python
  def foo():
      x = 20
      def bar():
          nonlocal x
          x = 30
          
      B()
      print(x)
      
  foo() # 30
  ~~~

  nonlocal 키워드를 지정해주면 foo 함수의 x를 변경할 수 있다.

- nonlocal이 변수를 찾는 순서

  ~~~python
  def foo():
      x = 10
      y = 20
      def bar():
          x = 30
          def c():
              nonlocal x
              nonlocal y
              x = x + 30
              y = y + 3
              print(X) # 60
              print(y) # 23
          c()
      bar()
      
  foo() 
  ~~~

  함수 c에서 nonlocal x를 사용하면 바로 바깥에 있는 함수(bar)의 지역 변수 x = 30을 사용한다. nonlocal y를 사용하면 바깥쪽 함수인 bar에서 지역 변수 y를 찾는데 없기 때문에 한 단계 더 바깥으로 나가서 foo의 지역 변수 y를 사용하게 된다.

  즉, 가까운 함수부터 지역 변수를 찾고, 지역 변수가 없으면 계속 바깥쪽으로 나가서 찾는다.

- 클로저 사용

  ~~~python
  def calc():
      a = 3
      b = 5
      def mul_add(x):
          return a * x + b
      return mul_add
  
  c = calc()
  print(c(2)) # 11
  ~~~

  함수 calc가 끝났는데도 return된 mul_add 함수는 calc의 지역변수인 a와 b를 사용하여 계산을 진행한다.

  함수를 둘러싼 환경을 계속 유지하다가, 함수를 호출할 때 다시 꺼내서 사용하는 함수를 클로저라고 한다.

- 클로저를 쓰는 상황

  - 지역 변수와 코드를 묶어서 사용하고 싶을 때
  - 데이터를 숨기고 싶을 때

