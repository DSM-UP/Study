## Python - Iterator

#### 1. 반복 가능한 객체

- 우리가 반복 가능한 객체를 매개변수로 받을 수 있다는 말을 많이 했었다.
  반복 가능한 객체는 문자열, 리스트, 튜플, 딕셔너리, 세트 등이 있습니다.
  이러한 반복 가능한 객체는 dir()를 사용할 때 요소 중에 _ _ iter _ _가 존재한다는
  공통점이 존재합니다.

#### 2. 이터레이터 사용하기

- 이터레이터는 반복 가능한 객체의 메소드로 존재하는 _ _ iter _ _ () 메소드를 사용하면
  이터레이터를 리턴값으로 받는데 그 이터레이터의 메소드인 _ _ next _ _ ()를 사용하면
  이터레이터에 있는 요소를 하나씩 가져올 수 있다.

  ```python
  iterator = [10, 20, 30].__iter__()
  print(iterator.__next__())
  print(iterator.__next__())
  print(iterator.__next__())
  
  # 10
  # 20
  # 30
  ```

- 여기서 한 번 더 _ _ next _ _ () 메소드를 사용하면 StopIteration이 발생하게 됩니다.

#### 3. 이터레이터 만들기

- 이터레이터를 만드는 방법은 _ _ iter _ _() 메소드와 _ _ next _ _() 메소드를 구현하는 클래스의 객체는
  모두 이터레이터가 될 수 있습니다.

- 다음은 숫자를 하나씩 카운팅하여 0부터 n-1까지 리턴하는 Count 이터레이터 클래스이다.

  ```python
  class Count:
      def __init__(self, stop):
          self.current = 0
          self.stop = stop
      def __iter__(self):
          return self
      def __next__(self):
          if self.current < self.stop:
              t = self.current
              self.current += 1
              return t
          else:
              raise StopIteration('지정된 범위를 벗어났습니다.')
  count = Count(5)
  iterator = count.__iter__()
  while(True):
      try:
          print(iterator.__next__())
      except StopIteration as e:
          print(e)
          break
  
  # 0
  # 1
  # 2
  # 3
  # 4
  ```

#### 4. 사용자지정 이터레이터 사용하기

- 우리가 만든 Count와 같은 이터레이터는 반복 가능한 객체이기 때문에
  언패킹, 또는 for문을 통한 요소 출력을 할 수 있습니다.

  ```python
  for i in Count(3):
      print(i)
  
  # 0
  # 1
  # 2
  
  a, b, c = Count(3)
  print(a, b, c)
  
  # 0 1 2
  ```

- 이렇게 반복 가능한 객체라는 장점을 살려 사용할 수도 있습니다.

#### 5. 밑줄 사용하기

- 밑줄 문자인 '_'(언더바)는 사용하지 않겠다는 의미를 가지고 있습니다.
  만약 for문의 인자로 보통 i를 받는데 이를 사용하지 않겠다면 _바를 주면 됩니다.
  또한 언패킹을 통한 리턴값 중 어느 것을 받지 않겠다면 _를 줘도 됩니다.

  ```python
  for _ in Count(3):
      print('asfasdf')
  
  # asfasdf
  # asfasdf
  # asfasdf
  
  a, _, c = Count(3)
  print(a, c)
  
  # 0 2
  ```

#### 6. 인덱스 접근 이터레이터 만들기

- 인덱스로 접근할 수 있는 이터레이터는 내부에 _ _ getitem _ _() 메소드를 구현해야 합니다.
  next, iter 메소드를 구현하지 않아도 됩니다.
  기존에 대괄호를 이용한 인덱스의 접근은 내부적으로 getitem() 메소드를 사용하기 때문에
  getitem() 메소드를 구현하면 인덱스를 사용할 수 있습니다.

  ```python
  class Count:
      def __init__(self, stop):
          self.stop = stop
  	def __getitem__(self, index):
          if index < self.stop:
              return index
  		else:
              raise IndexError
  
  print(Count(3)[2])
  
  # 2
  ```

#### 7. iter 활용하기

- iter는 첫 번째 매개변수로 호출 가능한 객체를 받고 두 번째 매개변수로 반복을 끝낼 값을 받습니다.
  첫 번째 매개변수는 매개변수가 없는 함수나 람다 표현식으로 작성할 수 있습니다.

  ```python
  import random
  
  for i in iter(lambda : random.randint(0, 5), 2):
  print(i, end='')
  
  # 0 1 5 3 1 3 1 5 1
  ```

- 이렇게 0 ~ 5까지의 랜덤된 숫자에서 2가 나오면 기능을 정지합니다.

#### 8. next 활용하기

- next는 첫 번째 매개변수로 반복 가능한 객체를 받고 두 번째 매개변수로 기본값을 받습니다.
  기존에 메소르로써의 next는 반복 가능한 객체의 요소가 모두 떨어지면 StopIteration 예외를
  발생시킵니다.
  하지만 이 next는 모든 요소가 떨어지면 두 번째 매개변수인 기본값을 리턴합니다.

  ```python
  it = iter(range(3))
  while(True):
      t = next(it, 10)
      if t == 10:
          break
      print(t)
  
  # 0
  # 1
  # 2
  ```

  