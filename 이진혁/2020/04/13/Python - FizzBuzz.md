## Python - FizzBuzz

- FizzBuzz 알고리즘은 흔히 알고리즘 테스트 중에서 가장 기초적인 것이라고 볼 수 있다.
  하지만 기초라고 얕볼 것은 아니라고 생각한다.
  생각보다 이런 것도 못하면서 면접보러 오는 사람들도 존재한다고 한다...
  나는 그런 사람이 되지 않기 위해서 한 번 해본다.(사실 코딩도장에 나와서 하는 건.. 비밀)

- FizzBuzz 알고리즘이란 1부터 100까지의 숫자를 출력하는데
  3의 배수는 숫자대신에 Fizz를, 5의 배수는 숫자대신에 Buzz를, 3과 5의 공배수는 숫자대신에 FizzBuzz를
  출력하는 알고리즘을 말한다.

- 처음엔 다음과 같이 알고리즘을 짰었다.

  ```python
  for i in range(1, 101):
      if i%3==0:
          print('Fizz', end='')
      if i%5==0:
          print('Buzz', end='')
      print()
  ```

- 이러면 3의 배수는 Fizz가 출력되고, 5의 배수는 Buzz가 출력되며,
  3과 5의 공배수는 FizzBuzz가 출력된다.
  하지만 이것의 문제점은 3의 배수도 아니고 5의 배수도 아닌 수의 출력이 없다는 것이었다.

- 그래서 그냥 돌아가자라는 마음으로 논리연산자와 if-elif-else를 이용해서 출력해보았다.

  ```python
  for i in range(1, 101):
      if i%3==0 and i%5==0:
          print('FizzBuzz')
      elif i%3==0:
          print('Fizz')
  	elif i%5==0:
          print('Buzz')
      else:
          print(i)
  ```

- 이 알고리즘은 FizzBuzz 알고리즘을 푸는데 적당한 알고리즘이다.
  여기서 만약 논리 연산자를 사용하지 말라고 제한한다면 다음과 같이 알고리즘을 짤 수 있을 것이다.

  ```python
  for i in range(1, 101):
      if i%15==0:
          print('FizzBuzz')
      elif i%3==0:
         	print('Fizz')
      elif i%5==0:
          print('Buzz')
      else:
          print(i)
          
  for i in range(1, 101):
      if i%3==0:
          if i%5==0:
              print('FizzBuzz')
          else:
              print('Fizz')
  	elif i%5==0:
          print('Buzz')
      else:
          print(i)
  ```

- 하지만 파이썬의 문법을 응용해서 굉장히 간단한 FizzBuzz 알고리즘을 짤 수 있다.

  ```python
  for i in range(1, 101):
      print('Fizz' * (i%3==0) + 'Buzz' * (i%5==0) or i)
  ```

- 이렇게 FizzBuzz 알고리즘 문제를 해결할 수 있다.
  이걸 해석하면서 새로운 사실을 알게 되었는데
  and 연산자나 or 연산자의 피연산자가 bool형이 아닐 경우
  and 연산자의 경우에는 둘 다 참일 경우 오른쪽의 피연산자가 리턴되고
  or 연산자의 경우에는 둘 다 참일 경우 왼쪽의 피연산자가 리턴되고
  하나만 참일 경우 참인 피연산자가 리턴된다.

- 따라서 위의 코드를 해석해보자면
  Fizz * (i%3==0)
  만약 i가 3의 배수라면 True(1)* Fizz = Fizz이고
  아니라면 False(0) * Fizz = ' '이다.
  따라서 3의 배수라면 Fizz를 출력한다.
  Buzz * (i%5==0) 도 위와 같고
  만약 3의 배수도 5의 배수도 아니라면 결과적으로 False or i가 될 것이다.
  or 연산자의 피연산자가 하나만 참이라면 참인 피연산자를 출력하는데
  i는 0이 아니기 때문에 무조건 참이므로 i가 출력된다.