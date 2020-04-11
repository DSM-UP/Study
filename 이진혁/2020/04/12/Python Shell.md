## Python Shell

- PyCharm IDE를 사용하지 않고도 Python Shell을 이용해서 파이썬 코드를 짤 수 있다.
  다른 언어로 생각해보면 Note pad++을 이용해서 Java나 C 코드를 짜는 것으로 볼 수 있다.
  Python Shell은 다음과 같이 보여진다.

  ```java
  Python [version] ~~~~
  >>> 
  ```

- 이렇게 위에 파이썬의 버전과 컴파일 시간 등등이 적혀있고 ">>> "라는 기호 뒤에 명령어를 쓸 수 있다.
  만약 코드를 잘못 작성했다면 처음부터 다시 작성해야한다.

- 만약 Python Shell을 이용해서 Hello, World를 출력하는 방법은 다음과 같다.

  ```python
  >>> print('Hello, World')
  Hello, World
  ```

- 이렇게 명령어를 출력할 수 있다.
  그리고 이렇게 한 줄 한 줄 쓰다가 오류가 나서 다시 쓰는 것을 방지하고자
  모든 코드를 작성하고 한 번에 컴파일할 수 있는데
  Python Shell 에서 File -> New File 을 이용하면 새로운 창이 뜨고 그 창에서 코드를 입력한 뒤
  Run -> Run Module을 이용하면 저장하고 Python Shell에 저장한 디렉토리와 함께 코드가 실행되어
  출력이 된다.

  ```java
  >>> 
   RESTART: C: ~~~~ HelloWorldTest.py
  Hello, World
  Hello, World
  Hello, World
  ```

  ```python
  # HelloWorldTest.py
  print('Hello, World')
  print('Hello, World')
  print('Hello, World')
  ```