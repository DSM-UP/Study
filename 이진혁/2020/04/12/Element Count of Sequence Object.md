## Element Count of Sequence Object

- 시퀀스 객체의 요소 갯수를 구하는 방법은 len() 함수를 사용하는 것이다.
  튜플과 리스트는 단순히 len() 함수를 사용하게 되면 리스트와 튜플의 길이 즉, 요소의 갯수를 구할 수 있다.

  ```python
  intList = [1, 2, 3, 4, 5]
  print(len(intList))
  
  print(len(tuple(range(10))))
  
  # 5
  # 10
  ```

- 이렇게 튜플과 리스트의 요소의 갯수를 구할 수 있었다.

- 그렇다면 문자열은 어떻게 될까?
  물론 비슷하다.
  len() 함수를 사용하게 되면 문자열의 길이를 반환하는데
  정확이 문자의 갯수를 반환하며 문자에는 공백도 포함한다.

  ```python
  testStr = 'Hello, World'
  print(len(testStr))
  
  # 12
  ```

- range는 range() 함수로 인해 만들어질 요소의 갯수를 반환한다.

  ```python
  print(len(range(1, 10, 2)))
  
  # 5
  ```