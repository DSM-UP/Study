## Python - Command Prompt

- 이전에 Python Shell을 이용해서 파이썬 코드를 짜보고 실행시켜보았다.
  이번에는 cmd 창을 이용해서 파이썬 코드를 짜보고 실행시켜보겠다.

- cmd 창에서 파이썬 코드를 실행시키기 위해서는 'python'이라는 명령을 이용해서 파이썬 코드의 영역으로
  바꿀 수 있다.
  그러므로 다음과 같이 명령을 주면서 파이썬 코드를 실행시킬 수 있다.

  ```python
  C:\Users\user>python
  Python 3.8.2 (tags/v3.8.2:7b3ab59, Feb 25 2020, 22:45:29) [MSC v.1916 32 bit (Intel)] on win32
  Type "help", "copyright", "credits" or "license" for more information.
  >>> print('Hello, World!')
  Hello, World!
  ```

- 이렇게 파이썬 코드를 즉시 작성하여 실행시킬 수 있다.

- 이렇게 즉석 작성하는 것 말고 이미 작성되어 있는 .py 파일을 실행시킬 수도 있다.
  .py 파일을 실행시키기 위해서는 python 영역으로 옮기지 않고 cd 명령어를 이용해서
  .py 파일이 있는 디렉토리로 옮긴 뒤 python 파일이름.py 명령어를 통해 파이썬 파일을 실행시킬 수 있다.

  ```python
  # HelloWorldTest.py
  print('Hello, World!')
  print('Hello, World!')
  print('Hello, World!')
  print('Hello, World!')
  ```

  ```python
  # cmd
  C:\Users\user>cd C:\workspace
  C:\workspace>python HelloWorldTest.py
  Hello, World!
  Hello, World!
  Hello, World!
  Hello, World!
  ```