## Python - Keyword Argument

- 위치 인수는 인수를 순서대로 넣는 기본적인 방법이었다.
  키워드 인수는 말 그대로 키워드=값 방식으로 순서를 지키지 않아도 키워드의 값만 맞으면 되는 인수
  방법이다.

  ```python
  def ka(name, age, addr):
      print(name, age, addr)
  
  ka(name='lee', age=18, addr='gimhae')
  
  # lee 18 gimhae
  ```

- 딕셔너리를 이용해서 키워드 인수를 사용할 수 있는데
  딕셔너리의 키에 키워드를 넣고 값에 인수를 넣으면 된다.
  이에 **을 앞에 붙이면 사용가능한데 *이 아니라 * *인이유는 *은 키를 모두 매칭하고 * *은 값을
  매칭하기 때문이다.

  ```python
  def ka(name, age, addr):
      print(name, age, addr)
      
  d = {'name':'lee', 'age':18, 'addr':'gimhae'}
  ka(**d)
  
  # lee 18 gimhae
  ```

- 키워드 인수를 사용하는 가변 인수를 만드려면 위치 인수를 사용하는 것과 비슷하다.

  ```python
  def ka(**kwargs):
      for kw, arg in kwargs.items():
          print(kw, ': ', arg, sep='')
  
  ka(name='lee', arg=18, addr='gimhae')
  
  # name: lee
  # age: 18
  # addr: gimhae
  ```

- 매개변수에 초깃값을 줄 수 있다.
  다음과 같이 표기한다.

  ```python
  def 함수명(a, b, c='초깃값')
  ```

- 초깃값은 여러 개 줄 수 있으며 반드시 오른쪽에 정렬되어야 한다.

  ```python
  def 함수명(a, b='초깃값', c='초깃값')	# O
  def 함수명(a='초깃값', b='초깃값', c)	# X
  ```

  