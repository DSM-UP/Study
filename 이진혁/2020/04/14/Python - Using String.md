## Python - Using String

#### 1. 문자열 바꾸기

- 문자열 안에서 일부를 다른 문자열로 치환하기 위해서는 replace() 메소드를 사용하면 된다.
  replace() 메소드의 첫 번째 매개변수의 단어를 두 번째 매개변수로 변경한다.

  ```python
  print('Hello, World'.replace('World', 'Python'))
  print('Hello, Hello, Hello'.replace('H', 'h'))
  print('     '.replace(' ', 'a'))
  
  # Hello, Python
  # hello, hello, hello
  # aaaaa
  ```

- 리턴되는 문자열은 기존의 문자열을 수정한 것이 아니라 새로운 문자열이다.

#### 2. 문자 바꾸기

- 문자를 바꿀 때에는 str.maketrans() 메소드를 이용해서 객체를 만든 뒤
  translate() 메소드의 인자값으로 넣어주면 maketrans() 메소드의 첫 번째 인자값인 문자열의
  문자 하나 하나를 두 번째 문자열의 문자 하나 하나로 변환한다.

  ```python
  print('banana'.translate(str.maketrans('abcde', '12345')))
  
  # 21n1n1
  ```

#### 3. 문자열 분리하기

- split() 메소드를 이용하면 매개변수인 구분자를 기준으로 문자열을 구분하여
  리스트 형식으로 리턴한다.

  ```python
  a = 'abadfsd asdfasdf asdfasdf asdfsadf asdfasdf'.split()
  print(a)
  
  b = 'abababa'.split('b')
  print(b)
  
  # ['abadfsd', 'asdfasdf', 'asdfasdf', 'asdfsadf' 'asdfasdf']
  # ['a', 'a', 'a', 'a']
  ```

#### 4. 구분자 문자열과 문자열 리스트 연결하기

- split() 메소드를 이용해서 문자열을 나눠서 리스트로 만들 수 있었다.
  다시 원래 상태로 복구하려면 join() 메소드를 사용하면 된다.
  매개변수로 리스트를 넣어주면 리스트의 요소 중간중간에 구분자를 넣어서 문자열을 리턴한다.

  ```python
  a = '-'.join(['010', '1234', '5678'])
  print(a)
  
  # 010-1234-5678
  ```

#### 5. 대문자로 바꾸기

- upper() 메소드를 사용하면 문자열의 모든 소문자를 대문자로 변경하여 리턴한다.

  ```python
  print('string'.upper())
  
  # STRING
  ```

#### 6. 소문자로 바꾸기

- lower() 메소드를 사용하면 문자열의 모든 대문자를 소문자로 변경하여 리턴한다.

  ```python
  print('STRING'.lower())
  
  # string
  ```

#### 7. 공백 삭제하기

- 공백을 삭제하기 위해서는 lstrip(), rstrip(), strip() 메소드를 사용하면 된다.
  lstrip() 메소드는 왼쪽에서부터 공백이 아닌 문자가 나올 때 까지 삭제한다.
  rstrip() 메소드는 오른쪽에서부터 공백이 아닌 문자가 나올 때 까지 삭제한다.
  strip() 메소드는 양쪽에서부터 공백이 아닌 문자가 나올 때 까지 삭제한다.

  ```python
  string = '        l   ee     '
  s1 = string.lstrip()
  s2 = string.rstrip()
  s3 = string.strip()
  
  print(s1)
  print(s2)
  print(s3)
  
  # 'l   ee     '
  # '        l   ee'
  # 'l   ee'
  ```

#### 8. 특정 문자 삭제하기

- 특정 문자를 삭제하기 위해서는 lstrip(), rstrip(), strip() 메소드의 매개변수에 구분자를 넣어주면 된다.
  이 구분자는 문자 하나하나 별로 적용이 된다.

  ```python
  string = ',,,,,.....l...,,,ee.,.,.,.,.'
  s1 = string.lstrip(',.')
  s2 = string.rstrip(',.')
  s3 = string.strip(',.')
  
  print(s1)
  print(s2)
  print(s3)
  
  # 'l...,,,ee.,.,.,.,.'
  # ',,,,,.....l...,,,ee'
  # 'l...,,,ee'
  ```

#### 9. 문자열 위치 정렬하기

- ljust(), rjust(), center() 메소드를 사용하면 왼쪽 정렬, 오른쪽 정렬, 가운데 정렬을 할 수 있다.
  매개변수로 문자열의 길이를 받는데 그 길이가 될 때 까지 공백으로 채운다.
  만약 길이보다 문자열의 길이가 더 길면 공백을 채우지 않는다.

  ```python
  print('hello'.ljust(10))
  print('hello'.rjust(10))
  print('hello'.center(10))
  
  # 'hello     '
  # '     hello'
  # '   hello  '
  ```

- 가운데 정렬시 정확히 중간에 위치하지 못한다면 왼쪽의 공백이 오른쪽의 공백보다 많게 만든다.

#### 10. 문자열 왼쪽에 0 채우기

- zfill() 메소드는 매개변수로 들어온 갯수만큼 왼쪽에 숫자 0을 채우는 메소드이다.

  ```python
  print('112233'.zfill(2))
  
  # 00112233
  ```

#### 11. 문자열 위치 찾기

- find() 메소드는 문자열을 찾아서 그 문자열의 인덱스를 리턴하는데
  찾고자 하는 문자열이 두 개 이상 있으면 인덱스 번호가 더 낮은 것으로 리턴된다.
  만약 찾고자 하는 문자열이 없을 경우 -1을 리턴한다.

  ```python
  a = 'hello'
  print(a.find('ll'))
  print(a.find('asdfasdf'))
  
  # 2
  # -1
  ```

- rfind() 메소드를 사용하면 왼쪽이 아니라 오른쪽에서부터 문자열을 탐색합니다.

- index() 메소드와 rindex() 메소드는 find() 메소드와 rfind() 메소드와 같은 역할을 하지만
  문자열을 못찾을 경우 오류를 발생시키는 차이점이 있습니다.

#### 12. 문자열 개수 세기

- count() 메소드를 사용하면 매개변수로 들어온 문자열이 몇 개 포함되어 있는지 리턴한다.

  ```python
  print('aabbccdd'.count('a'))
  
  # 2
  ```

  