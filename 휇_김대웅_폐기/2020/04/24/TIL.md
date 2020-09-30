# TIL

파이썬 코루틴

- 지금까지 함수가 끝나면 함수 안의 변수와 계산식이 모두 사라지고 현재 코드로 다시 돌아왔다.

- 현재 코드를 메인 루틴이라고 하면 함수는 현재 코드의 서브 루틴이다.

- 서브 루틴이 끝나면 서브 루틴의 내용이 모두 사라진다. (서브 루틴은 메인 루틴에 종속된 관계이다.)

- 코루틴은 서브 루틴과 달리 메인 루틴과 대등한 관계를 가진다.

- 일반 함수는 코드를 한 번만 실행할 수 있지만, 코루틴은 코드를 여러 번 실행할 수 있다.

- 함수의 코드를 실행하는 지점을 진입점이라 하며, 코루틴은 진입점이 여러 개이다.

- 코루틴에 값을 보내기 위해서는 send 메소드를 사용해야 하며, 코루틴이 값을 받기 위해서는 (yield) 형식으로 받아야 한다.

  ~~~python
  def coroutine():
      while True: # 코루틴 유지를 위한 무한 루프
          x = (yield) # 바깥에서 값을 받아옴
          print(x)
          
  co = coroutine()
  next(co) # yield까지 코드 실행
  
  co.send(1) # 1
  co.send(2) # 2
  co.send(3) # 3
  ~~~

  코루틴객체.send(None) 로 최초실행 next를 대신할 수 있다.
  
  yield로 바깥으로 전달된 값은 next 함수와 send 메소드의 반환값으로 나온다.
  
  - 변수 = (yield 변수)
  - 변수 = next(코루틴객체)
  - 변수 = 코루틴객체.send(값)
  
- 코루틴 종료

  ~~~python
  def coroutine():
      while True:
          x = (yield)
          print(x, end=' ')
          
  co = coroutine()
  next(co)
  
  for i in range(20):
      co.send(i)
      
  co.close() # 코루틴 종료
  ~~~

  close 메소드를 호출하면 코루틴이 종료될 때 GeneratorExit 예외가 발생한다.

- 코루틴 안에서 예외 발생시키기

  ~~~python
  def coroutine():
      try:
          total = 0
          while True:
              x = (yield)
              total += x
      except RuntimeError as e:
          print(e)
          yield total
          
  co = coroutine()
  next(co)
  
  for i in range(20):
      co.send(i)
      
  print(co.throw(RuntimeError, '코루틴 끝'))
  ~~~

  코루틴객체.throw 를 사용하면 코루틴 내부에 예외를 발생시킬 수 있다.