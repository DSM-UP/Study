## Python - Lambda

- 람다 표현식은 다음과 같은 형식을 가지고 있다.

  ```python
  lambda 매개변수 : 리턴값
  ```

- 이렇게 람다 표현식은 리턴값 한 줄로 표현이 가능해야 한다.
  그리고 이러한 람다식(람다 표현식)은 변수에 할당하여 함수로서 사용할 수 있게 만들 수 있다.

  ```python
  a = lambda a : a + 1
  print(a(1))
  
  # 2
  ```

- 심지어 변수에 할당하지 않고 바로 사용도 가능하다.
  바로 사용하려면 람다식의 양쪽에 괄호를 두고 함수처럼 사용하면 된다.

  ```python
  print((lambda a : a + 1)(1))
  
  # 2
  ```

- 람다식을 인수로 사용할 수 있다.
  흔히 map() 함수의 인수로 사용할 수 있는데
  원래 map() 함수는 첫 번째 매개변수 타입으로 두 번째 매개변수 리스트의 타입을 변경하는
  함수였다.
  하지만 첫 번째 매개변수에 람다식을 넣어주면 두 번쨰 매개변수인 리스트의 요소 하나하나에
  람다식을 적용해서 리스트의 요소를 변경한다.

  ```python
  l = list(map(lambda a : a + 1, [1, 2, 3]))
  print(l)
  
  # [2, 3, 4]
  ```

- 만약 매개변수가 없을 경우에는 콜론의 왼쪽에 lambda만 두면 된다.

  ```python
  lambda : 10
  ```

- 람다식안에서는 바깥에 있는 변수를 활용할 수도 있다.

  ```python
  a = 10
  print((lambda : a)())
  
  # 10
  ```

- 람다식에 조건문을 넣을 수도 있는데
  다른 표현식과 비슷하다.

  ```python
  a = list(range(1, 11))
  print(list(map(lambda x : str(x) if x % 3 == 0 else x, a)))
  
  # [1, 2, '3', 4, 5, '6', 7, 8, '9', 10]
  ```

- 하지만 람다식에서는 if문이 참일 경우에 리턴하는 값과 거짓일 경우에 리턴하는 값
  모두가 있어야 하기 때문에 if가 있으면 else가 반드시 존재해야 한다.

- 람다식에서 조건문을 넣을 때에는 elif를 사용할 수 없기 때문에
  else 일 경우에 if-else를 다시 넣어주어야 한다.

- map() 함수는 반복가능한객체를 여러 개 넣을 수 있기 때문에
  람다식에서 이를 활용할 수 있습니다.

  ```python
  a = [1, 2, 3, 4]
  b = [1, 2, 3, 4]
  l = list(map(lambda a, b : a * b, a, b))
  print(l)
  
  # [1, 4, 9, 16]
  ```

- filter() 함수는 첫 번째 매개변수인 필터링할 조건 함수를 넣을 수 있다.
  필터링할 조건 함수에서 True가 나오면 그대로 리스트에 넣고
  False가 나오면 삭제한다.

  ```python
  def f(x):
      return x < 5
  
  a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  print(list(filter(f, a)))
  
  # [1, 2, 3, 4]
  
  print(list(filter(lambda a : a < 5, a)))
  
  # [1, 2, 3, 4]
  ```

- reduce() 함수는 파이썬 3부터 내장 함수가 아니므로 functools 모듈을 임포트 받아서 사용해야 한다.
  reduce() 함수는 첫 번째 매개변수로 함수를 받고 두 번째 매개변수로 반복가능한객체를 받는데
  함수는 누적해서 결과를 낸다.

  ```python
  from functools import reduce
  
  def mul(x, y):
      return x * y
  
  a = [1, 2, 3, 4]
  print(reduce(mul, a))
  
  # 24
  
  print(lambda x, y : x * y, a)
  
  # 24
  ```

  