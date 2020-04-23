## Python - Coroutine

- 코루틴은 제너레이터 중 특이한 제너레이터입니다.
  대부분의 함수 관계는 종속적인 관계를 가지고 있습니다.
  예를 들어 다음의 코드는 종속적인 관계를 가지고 있습니다.

  ```python
  def plus(n):
      return n+1
  
  def counting():
      i = 0
      while i < 5:
          print(i)
          i = plus(i)
  ```

- counting() 함수에 plus() 함수가 종속되어 있는 것처럼 보입니다.

- 코루틴은 이와는 다릅니다.
  종속적인 관계가 아니라 서로가 상호보완하는 관계가 됩니다.
  따라서 하나의 함수의 기능이 끝나기 전에 멈추고 다른 하나의 함수에서 값을 받아서 다시 실행하는 식으로
  진행이 되는 함수입니다.

- 다음과 같이 사용합니다.

  ```python
  def counting():
      while True:
          print((yield))
          
  c = counting()
  next(c)
  c.send(1)
  c.send(2)
  c.send(3)
  
  # 1
  # 2
  # 3
  ```

- 이렇게 괄호로 덥힌 yield를 만나게 되면 바깥에서의 send() 호출을 기다리고 호출을 받고
  그의 매개변수가 yield으로 들어갑니다.