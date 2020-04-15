## Python - Recursive Function

- 재귀함수는 다른 언어에서의 재귀함수랑 다를 것이 없다.
  애초에 재귀함수는 문법이 아니라 개념이기 때문이다.

  ```python
  def factorial(n):
      if n == 1:
          return 1
      return n * factorial(n - 1)
  
  factorial(6)
  
  # 720
  ```