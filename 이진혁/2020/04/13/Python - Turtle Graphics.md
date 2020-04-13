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

- forward() 함수는 앞으로 가는 함수이고
  