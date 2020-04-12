## Python - While

#### 1. while문의 개요

- while문은 다른 언어에서도 많이 볼 수 있는 반복문 중의 하나이다.
  while문은 다음과 같은 형식을 가지고 있다.

  ```python
  while 조건:
  	코드 블록
  ```

- for문은 반복할 횟수가 정해져있지만 while문은 조건이 존재하고 코드 블록에서 조건을 어떻게 바꾸느냐에
  따라서 달라지기 때문에 반복할 횟수가 정해져있지 않습니다.

  ```python
  i = 0
  while i < 10:
      print(i)
      i+=1
  
  # 0
  # 1
  # 2
  # 3
  # 4
  # 5
  # 6
  # 7
  # 8
  # 9
  ```

- 만약에 마지막에 존재하는 i+=1이라는 문장이 사라지면 조건을 구성하는 변수인 i가 변화하지 않기 때문에
  무한히 반복하는 무한 루프에 빠지게 됩니다.
  while문은 이에 유의하면서 코드를 짜야 한다.

- 그리고 이 코드를 짜면서 알아낸 건데 i+=1은 가능하지만 i++이나 i--가 불가능하다는 것을 알아냈다.
  파이썬에는 없나보다...

#### 2. random 모듈을 이용한 while문

- random 모듈을 이용하면 랜덤값을 얻어낼 수 있는데 이 값을 while문에 적용시키면
  랜덤으로 나오는 횟수만큼 반복하게 만들 수 있다.

- random 이라는 모듈을 사용하기 위해서는 random 모듈을 임포트(import)해야 합니다.
  random 모듈을 임포트 하는 방법은 import random을 가장 위에 추가하면 됩니다.
  이는 자바와 비슷합니다.

- random의 random() 함수는 0부터 1전까지의 실수 중에서 하나를 리턴합니다.
  randint(a, b) 함수는 a부터 b까지의 정수 중에서 하나를 리턴하는데
  a와 b를 모두 포함합니다.

  ```python
  i = 0
  while i != 2:
      print(i)
      i = random.randint()
  print(i)
  
  # 0
  # 3
  # 3
  # 0
  # 1
  # 1
  # 2
  ```

- 이렇게 2가 나오면 조건을 만족하지 못해서 while문을 빠져나온다.

- 참고로 random.choice() 함수는 시퀀스 객체에서 하나의 요소를 가져와서 사용한다.

  ```python
  x = random.choice([1, 2, 3, 4, 5])
  print(x)
  
  x = random.choice((1, 2, 3, 4, 5))
  print(x)
  
  x = random.choice('12345')
  print(x)
  
  # 3
  # 5
  # 1
  ```

#### 3. break와 continue 키워드

- break 키워드는 반복문을 빠져나오는 역할을 하고
  continue는 현재 반복 상태를 넘기고 다시 반복하는 역할을 한다.
  이 키워드들은 다른 언어에도 존재하므로 쉽게 알 수 있을 것이라고 생각한다.
  break는 조건을 바꾸지 않아도 반복문을 빠져나오게 하므로 무한 루프를 만들고 사용하기도 한다.

  ```python
  while True:
      print('반복중')
  	break
  
  # 반복중
  
  i = 1
  while True:
      if i == 10:
          break
      if i % 2 == 0:
          continue
      print(i)
  
  # 1
  # 3
  # 5
  # 7
  # 9
  ```