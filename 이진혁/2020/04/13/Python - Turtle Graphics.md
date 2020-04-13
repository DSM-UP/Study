## Python - Turtle Graphics

- 파이썬은 터틀 그래픽스라는 모듈을 지원한다.
  tutle이라는 모듈을 임포트하면 사용할 수 있다.

- 꼭 파이썬 쉘을 사용해야 하는 것은 아니지만 파이참을 사용할 경우 창이 꺼지는 현상이 있어서
  쉘을 쓰는 것이 좋다고 한다.

  ```python
  >>> import turtle as t
  >>> t.shape('turtle')
  >>> t.forward(100)
  >>> t.right(90)
  >>> t.forward(100)
  >>> t.right(90)
  >>> t.forward(100)
  >>> t.right(90)
  >>> t.forward(100)
  ```

- 이렇게 명령어를 사용하면 정사각형을 그릴 수 있다.

- forward(), fd() 함수는 거북이를 바라보고 있는 방향으로 움직이게 하는 함수이다.
  
- backward(), bk(), back() 함수는 거북이를 뒤로 움직이게 하는 함수이다.

- right(), rt() 함수는 거북이가 바라보는 방향을 오른쪽 방향으로 몇 도 움직이게 하는 함수이다.

- left(), lt() 함수는 거북이가 바라보는 방향을 왼쪽 방향으로 몇 도 움직이게 하는 함수이다.

#### n각형 생성하기

- 정n각형의 외각은 360/n으로 구할 수 있다.
  그리고 정n각형의 변은 n개 있으므로 n번 반복하면 된다.
  그러므로 정n각형을 그리는 방법은 다음과 같이 짤 수 있다.

  ```python
  >>> import turtle as t
  >>> t.shape('turtle')
  >>> n = int(input())
  10
  >>> for i in range(n):
      	t.fd(100)
          t.rt(360/n)
  ```

- color() 함수는 매개변수로 들어온 색상 코드 값 또는 영어로 된 색상 이름으로 선의 색깔을 결정하는 함수이다.
  만약 선으로 루프가 생기면 그 안을 선의 색깔로 가득 채운다.

- begin_fill() 함수는 색깔을 넣기 시작하는 함수이고 end_fill() 함수는 색깔을 그만 넣으라는 함수이다.

- 다음은 파란 색깔을 넣는 코드이다

  ```python
  >>> import turtle as t
  >>> t.shape('turtle')
  >>> n = int(input())
  5
  >>> t.color('blue')
  >>> t.begin_fill()
  >>> for i in range(n):
      	t.fd(100)
          t.rt(360/n)
  >>> t.end_fill()
  ```

#### 원 생성하기

- circle() 함수를 사용하면 반지름이 매개변수인 원을 그리게 된다.
- speed() 함수는 매개변수로 문자열 또는 0.5 ~ 10의 숫자를 받으며
  숫자가 클수록 거북이의 그림 그리는 속도가 빨라진다.
  문자열로는 'fastest', 'fast', 'normal', 'slow', 'slowest'가 있다.