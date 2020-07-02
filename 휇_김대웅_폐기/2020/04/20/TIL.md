# TIL

파이썬 예외 처리

- 예외 :코드를 실행하는 중에 발생한 에러 (ZeroDivisonError, AttributeError, NameError 등등)

- try except

  ~~~python
  try:
  	실행 코드
  except:
      예외 발생시 처리 코드
  ~~~

  예)

  ~~~python
  try:
      x = 15 / 0
      print(x)
  except:
      print('예외 발생')
      
  # 예외 발생
  ~~~

  try 문 안에서 예외가 발생하면 코드 실행을 중단하고 except문의 코드를 실행한다.

  

- 특정 예외 처리

  ~~~python
  try:
      실행 코드
  except 예외이름:
      예외 발생시 처리 코드
  ~~~

  예)

  ~~~python
  y = [10, 20, 30]
  try:
      idx, x = map(int, input().split())
      print(y[idx] / x)
  except ZeroDivisionError:
      print('0으로 나눌 수 없습니다.')
  except IndexError:
      print('잘못된 인덱스입니다.')
  # 3 7 입력시 잘못된 인덱스입니다.
  # 1 0 입력시 0으로 나눌 수 없습니다.
  ~~~



- 에러 메시지 받아오기
  - except 예외이름 as 변수 를 쓰면 변수에 예외의 에러 메시지가 들어간다.

- 모든 예외의 에러 메시지를 출력하고 싶다면 except Exception as e를 사용하면 된다.