## Python - Nested Dictionary

- 딕셔너리의 Key에는 딕셔너리가 들어갈 수 없지만 Value에는 딕셔너리가 들어갈 수 있다.
  딕셔너리의 Value 안에 딕셔너리가 존재하는 중첩된 딕셔너리를 만들 수 있다.
  다음은 중첩된 딕셔너리를 만드는 예제이다.

  ```python
  student = {
      'lee' : {
          'school' : 'DSM',
          'height' : 175,
          'weight' : 67
      },
      'kim' : {
          'school' : 'GHJ',
          'height' : 142,
          'weight' : 38
      },
      'park' : {
          'school' : 'DGC',
          'height' : 130,
          'weight' : 27
      }
  }
  print(student['lee']['school'])
  
  # DSM
  ```

- 이렇게 두 개의 대괄호를 이용해서 각각의 대괄호에 얻고자하는 Value의 키, 키를 입력하면 된다.