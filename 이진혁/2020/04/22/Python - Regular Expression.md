## Python - Regular Expression

- 정규 표현식을 사용하기 위해서는 re 라는 모듈을 임포트해야 합니다.
  re는 Regular Expression의 약자입니다.

#### 1. 문자열 판단하기

- re의 match() 메소드를 이용하면 첫 번째 매개변수가 두 번째 매개변수에 존재하는지 알아보고
  만약 있다면 SRE_Match 객체가 리턴되고 없다면 아무것도 리턴되지 않습니다.

  ```python
  import re
  
  print(re.match('Python', 'Python Love'))
  
  # <_sre.SRE_Match object; span=(0, 6), match='Python'>
  ```

#### 2. 문자열이 맨 앞에 오는지 맨 뒤에 오는지 판단하기

- search() 메소드를 사용하면 match() 메소드와 같지만 정규표현식을 이용해서 표현할 수 있다.
  ^를 앞에 붙이면 맨 앞에 오는지 알 수 있고 $를 뒤에 붙이면 맨 뒤에 오는지 알 수 있다.

  ```python
  import re
  
  print(re.search('^Python', 'Python Love'))
  print(re.search('Love$', 'Python Love'))
  
  # <_sre.SRE_Match object; span=(0, 6), match='Python'>
  # <_sre.SRE_Match object; span=(7, 11), match='Love'>
  ```

#### 3. 지정된 문자열 중 하나라도 포함되는지 판단하기

- match() 메소드의 |, or 연산자를 사용하면 문자열 중 하나라도 포함되면 Match객체를 리턴합니다.

  ```python
  import re
  
  print(re.match('Python|Love', 'Python'))
  
  # <_sre.SRE_Match object; span=(0, 6), match='Python'>
  ```

  