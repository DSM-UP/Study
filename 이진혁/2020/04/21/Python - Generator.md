## Python - Generator

- 파이썬에서의 제너레이터는 흔히 발생자라고도 하며 함수에 yield 키워드를 가지는 함수를 말합니다.

#### 1. 제너레이터 만들기

- 이터레이터는 클래스로 만들어서 안에 next(), iter() 메소드를 구현해야하지만
  제너레이터는 함수로 만들어서 안에 키워드로 yield를 가지기만 하면 만들 수 있습니다.

- 제너레이터는 yield 키워드를 통해서 바깥에 값을 전달합니다.
  만약 다음과 같이 제너레이터가 만들어지면 다음과 같이 동작합니다.

  ```python
  def my_generator():
      yield 1
      yield 2
  
  g = my_generator()
  print(g.__next__())
  print(g.__next__())
  print(g.__next__())
  
  # 1
  # 2
  # StopIterationError
  ```

- 이렇게 밖으로 내보내는 값을 1, 2로 설정하고 next() 메소드를 이용해서 값을 가져오면 됩니다.
  이렇게 만들어진 제너레이터는 안에 이터레이터 형식을 갖추고 있어서 iter(), next() 메소드를
  가지고 있습니다. 그리고 사용할 수도 있습니다.

- yield 키워드를 특이한 게 next() 메소드를 사용하면 yield 키워드의 값을 리턴한 뒤
  함수를 끝내지 않고 밖의 코드를 계속 실행합니다.
  따라서 다음의 코드는 다음과 같이 동작합니다.

  ```python
  def my_generator():
      yield 1
      print('Hello')
      yield 2
      print('World')
      yield 3
  g = my_generator()
  print(g.__next__())
  print('----------')
  print(g.__next__())
  print('----------')
  print(g.__next__())
  print('----------')
  print(g.__next__())
  
  # 1
  # Hello
  # ----------
  # 2
  # World
  # ----------
  # 3
  # ----------
  # StopIterationError
  ```

#### 2. for문을 이용한 제너레이터 사용하기

- 제너레이터는 이터레이터의 특징을 가지고 있는 반복 가능한 객체이기 때문에
  for문을 통해서 값을 가져올 수 있다.

  ```python
  def my_generator():
      yield 1
      print('Hello')
      yield 2
      print('World')
      yield 3
  
  for i in my_generator():
      print('----')
      print(i)
      print('----')
  
  # ----
  # 1
  # ----
  # Hello
  # ----
  # 2
  # ----
  # World
  # ----
  # 3
  # ----
  ```

#### 3. yield from 키워드 사용하기

- 기존에 yield 키워드를 이용해서 리스트의 모든 요소를 밖으로 리턴하기 위해서는
  for문을 사용했었다.

  ```python
  def my_generator():
      a = [1, 2, 3]
      for i in a:
          yield i
  
  for i in my_generator():
      print(i)
  
  # 1
  # 2
  # 3
  ```

- 이렇게 for문으로 사용하는 것보다 yield from 뒤에 리스트와 같이 반복 가능한 객체를 두면
  모든 요소를 한 번씩 접근하여 리턴합니다.
  다음의 코드는 위의 코드와 동일한 코드입니다.

  ```python
  def my_generator():
      a = [1, 2, 3]
      yield from a
  
  for i in my_generator():
      print(i)
  
  # 1
  # 2
  # 3
  ```

- yield from 키워드 뒤에 만약 제너레이터를 두면 어떻게 될까요?
  만약 이렇게 하면 yield from 뒤에 있는 제너레이터의 함수가 끝날 때 까지 리턴되는 모든 수를
  가져와서 사용합니다.

  ```python
  def my_generator():
      yield 123
      yield 234
      yield 345
  
  def my_generator_generator():
      yield from my_generator()
      
  for i in my_generator_generator():
      print(i)
  
  # 123
  # 234
  # 345
  ```

#### 4. 제너레이터 표현식

- 제널레이터 표현식은 리스트 표현식에서 대괄호를 소괄호로 바꾸면 됩니다.
  따라서 다음과 같이 사용할 수 있습니다.

  ```python
  (i for i in range(1, 11) if i % 2 == 0)
  ```

- 그렇다면 튜플 표현식과 겹치지 않냐고 생각할 수 있는데
  튜플 표현식은 이렇게 만드는 것이 아니라 앞에 tuple을 붙여서 만듭니다.