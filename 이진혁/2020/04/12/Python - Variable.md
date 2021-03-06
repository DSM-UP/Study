## Python - Variable

#### 1. 변수 만들기

- 이번에는 파이썬의 변수에 대해서 알아볼 것이다.
  파이썬의 변수는 자료형을 적어주지 않고 추리하게 만들기 때문에
  a = 10과 같이 바로 대입연산을 할 수 있다.
  간단하게 다음 코드를 보자.

  ```python
  a = 10
  print(a)
  type(a)
  
  # 10
  # <class 'int'>
  ```

- 이렇게 바로 변수에 값을 대입할 수 있다.
  

#### 2. 변수 여러 개 할당하기

- 파이썬은 변수에 자료형을 붙이는 선언의 과정이 존재하지 않기 때문에
  대입만이 존재해서 변수 여러 개를 한 번에 할당할 수 있다.
  a, b, c, d 라는 변수에 1, 2, 3, 4라는 값을 대입하는 방법은 다음과 같다.

  ```python
  a, b, c, d = 1, 2, 3, 4
  print(a)
  print(b)
  print(c)
  print(d)
  
  # 1
  # 2
  # 3
  # 4
  ```

- 이렇게 콤마(,)를 기준으로 변수를 구분하고 값도 구분한다.

- 특히 모든 변수에 같은 값을 넣을 때는 다음과 같이 할당할 수 있다.

  ```python
  a = b = c = d = 1
  print(a)
  print(b)
  print(c)
  print(d)
  
  # 1
  # 1
  # 1
  # 1
  ```

- 이렇게 = 을 이용해서 대입, 대입, 대입, 대입해서 모두 1의 값을 가지게 할 수 있다.

- 변수 여러 개를 할당하는 것을 응용하면

  ```python
  a, b = 1, 2
  print(a)
  print(b)
  a, b = b, a
  print(a)
  print(b)
  
  # 1
  # 2
  # 2
  # 1
  ```

- 이렇게 값을 쉽게 변경할 수도 있다.



#### 3. None

- 변수에 값이 존재하지 않는 상태에서 출력을하려고 하면
  NumberErrer가 발생한다.
  다음은 NumberErrer가 발생하는 코드이다.

  ```python
  print(a)
  
  # NumberErrer
  ```

- 그렇다면 값이 없는 것을 어떻게 표현할까?
  다른 언어에서는 흔히 null로 표현했었다.
  파이썬에서는 이 값을 None으로 표현한다.
  이 값을 출력하면 None이 출력된다.

  ```python
  a = None
  print(a)
  
  # None
  ```