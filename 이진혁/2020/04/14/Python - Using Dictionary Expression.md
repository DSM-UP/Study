## Python - Using Dictionary Expression

- 리스트 표현식이 있는 것처럼 딕셔너리도 표현식을 사용할 수 있다.

- 리스트의 표현식과 거의 동일한 모습을 하고 있는 것을 알 수 있다.

  ```python
  a = {'a':1, 'b':2, 'c':3}
  print({key:value for key, value in a.items()})
  
  # {'a':1, 'b':2, 'c':3}
  ```

- 만약 if문을 넣고 싶다면 리스트 표현식과 동일하게 적용시킬 수 있다.

  ```python
  a = {'a':1, 'b':2, 'c':3}
  print({key:value for key, value in a.items() if key != 'b'})
  
  # {'a':1, 'c':3}
  ```