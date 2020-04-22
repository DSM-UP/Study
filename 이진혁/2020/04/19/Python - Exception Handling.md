## Python - Exception Handling

#### 1. 예외 사용하기

- 파이선에서의 예외처리는 try-catch가 아니라 try-except문을 이용해서 한다.
  try-except문의 형식은 다음과 같다.

  ```python
  try:
      예외처리를 할 코드
  except 예외이름:
      예외가 발생했을 때 실행할 코드
  ```

- 다음은 어떠한 숫자를 0으로 나눴을 때 발생하는 ZeroDivisionError를 예외처리하는 코드이다.

  ```python
  a = 10
  b = 0
  
  try:
      print(str(a) + '/' + str(b) + ' = ' + str(a/b) + '입니다.')
  except ZeroDivisionError:
      print(str(a) + '(을)를 0으로 나눌 수 없습니다.')
  
  # 10(을)를 0으로 나눌 수 없습니다.
  ```

- 숫자를 0으로 나눌 수 없기 때문에 ZeroDivisionError가 발생한다.
  이에 대한 예외처리를 할 수 있다.

- 코드에서 발생하는 예외가 여러 개일 수도 있는데
  그러한 경우에는 자바와 마찬가지로 except를 여러 개 작성하면 된다.

- 자바에서는 catch()문을 사용할 때 인자로 예외 객체를 받지만
  파이썬에서는 except 예외이름 as 변수: 로 as 키워드를 이용해서 명시적으로
  예외처리 내용을 얻을 수 있다.

- 다음은 숫자가 아닌 문자열을 int 타입으로 변환할 때의 예외인 ValueError를 처리하는 코드이다.

  ```python
  munja = '12a'
  
  try:
      print(int(munja))
      print('정상적인 변환')
  except ValueError as a:
      print(munja)
      print(a)
      print('예외 발생')
  
  # 12a
  # invalid literal for int() with base 10: '12a'
  # 예외 발생
  ```

- 이렇게 as 키워드를 통해 얻은 오류 메세지 변수인 a를 출력하면 오류 메세지를 얻을 수 있다.

- 만약 모든 예외를 처리하고 싶다면 에러 이름을 적지 않거나
  Exception을 넣으면 된다.

#### 2. else, finally 키워드 사용하기

- except는 오류가 발생했을 때 실행하는 코드를 넣고
  else는 오류가 발생하지 않았을 때  실행하는 코드를 넣고
  finally는 오류가 발생하든 발생하지 않든 반드시 실행하는 코드를 넣는다.

  ##### 2-1 else 키워드 사용하기

  - else 키워드를 사용할 때는 반드시 except문이 앞에 존재해야만 사용할 수 있다.
    왜냐하면 except 키워드가 존재하지 않으면 else 키워드를 사용하든 말든 의미가 없기 때문이다.

  - 다음은 else 키워드를 사용해서 ZeroDivisionError를 처리하는 코드이다.

    ```python
    a = 10
    b = 0
    
    try:
        result = a/b
    except ZeroDivisionError:
        print(a/b)
    else:
        print('0으로 나눌 수 없습니다.')
    
    # 0으로 나눌 수 없습니다.
    ```

  ##### 2-2 finally 키워드 사용하기

  - finally 키워드는 앞에 except문이나 else문이 없어도 사용이 가능한 키워드이다.

  - 다음은 finally 키워드를 이용해서 반드시 '코드 종료'를 출력하는 코드이다.

    ```python
    a = 10
    b = 0
    
    try:
        result = a/b
    except ZeroDivisionError:
        print(a/b)
    else:
        print('0으로 나눌 수 없습니다.')
    finally:
        print('코드 종료')
    
    # 0으로 나눌 수 없습니다.
    # 코드 종료
    ```

  - 그렇다면 finally문을 사용하는 것과 예외 처리 뒤에 코드를 작성하는 것이
    무엇이 다르냐는 의문이 들 수도 있다.
    하지만 return문이 있다는 한정하에 의미가 있다.

  - 만약 return문이 있다면 try, except, else문에서 return문이 있다고 해도
    finally문이 있다면 return이 되어도 finally문은 실행하고 return문을 실행한다.

  - 만약 return문이 없다면 형식적인 의미가 있다.

#### 3. raise로 예외 발생시키기

- 예외를 일부로 발생시키는 방법은 raise 키워드를 사용하는 것이다.
  raise 키워드를 사용해 예외를 발생시키는 형식은 다음과 같다.

  ```python
  raise 예외이름('예외메세지')
  ```

- 다음은 raise 키워드를 이용해서 일부로 예외를 발생시키는 코드이다.

  ```python
  try:
      raise ZeroDivisionError('숫자를 0으로 나눌 수 없습니다.')
  except ZeroDivisionError as e:
      print(e)
  
  # 숫자를 0으로 나눌 수 없습니다.
  ```

#### 4. 현재 예외 다시 발생시키기

- except에서 예외를 처리하는 도중에 except문 안에서 raise 키워드를 사용하면
  현재 예외를 다시 발생시켜서 상위 코드 블록인 자신을 호출한 곳으로 예외를 넘긴다.

- except에서 예외를 다시 발생시키면 except문 안에 또 try가 있지 않은 이상 오류가 발생해서
  시스템이 종료될텐데 왜 사용하냐고 의문을 제기할 수 있다.
  하지만 raise는 예외가 발생하면 상위의 코드 블록으로 자신의 예외를 떠넘긴다.
  마치 자바의 throw와 같다.
  만약 함수에서 이가 발생하게 되면 함수를 호출한 곳으로 돌아가서 그 예외를 처리한다.
  만약 함수가 아니라면 예외를 처리하지 못하고 코드가 터진다.

  ```python
  def test(a, b):
      print(a/b)
      
  try:
      test(10, 0)
  except:
      print('예외 발생')
      
  # 예외 발생
  ```

- 예외를 일부러 발생시키는 것과 같이 뒤에 예외이름과 예외 메세지를 작성하면 예외 메세지를 매개변수로
  바꾼 뒤 그 예외를 상위 코드 블록으로 넘긴다.

#### 5. assert 키워드 사용하기

- raise 키워드 말고 assert 키워드를 이용해서 예외를 발생시킬 수도 있습니다.

- raise 키워드를 반드시 예외를 발생시키지만 assert 키워드는 조건식의 결과가 False라면
  예외를 발생시키고 True라면 예외를 발생시키지 않습니다.
  assert 키워드를 형식은 다음과 같습니다.

  ```python
  assert 조건식, 에러메세지
  ```

- 발생하는 에러는 AssertionError이기 때문에 에러메세지를 생략할 수 없습니다.
  기본 에러 메세지가 없기 때문이죠.

- 만약 조건식에서 다른 오류가 발생하게 되면 AssertionError가 아니라 그냥 그에 맞는 오류가
  발생하게 됩니다.

#### 6. 사용자지정 예외 만들기

- 파이썬의 예외에는 내장된 예외와 사용자지정 예외로 나뉘어 있다.
  내장된 예외는 ZeroDivisionError, IndexError 정도가 있다.

- 사용자지정 예외를 만드는 방법은 원하는 클래스를 만들어서 Exception 클래스를 상속받도록
  만들면 된다.
  그리고 생성자에 super()를 이용해서 에러메세지를 보내면 된다.

  ```python
  class NotZeroError(Exception):
      def __init__(self):
          super().__init__('0은 안 됩니다.')
  
  try:
      raise NotZeroError
  except NotZeroError as e:
      print(e)
  
  # 0은 안 됩니다.
  ```

- 그리고 에러메세지가 필요없을 경우에는 class 안을 pass로 채워도 작동한다.

  ```python
  class NotZeroError(Exception):
      pass
  
  try:
      raise NotZeroError
  except NotZeroError as e:
      print(e)
  
  # 
  ```

- 하지만 에러메세지가 없을 경우 출력했을 때 아무것도 나오지 않는다.
  필요하면 raise 할 때 에러메세지를 작성하면 된다.