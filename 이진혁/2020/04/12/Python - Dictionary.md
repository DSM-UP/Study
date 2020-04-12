## Python - Dictionary

- 파이썬에는 딕셔너리라는 자료구조가 존재한다.
  하지만 시퀀스 데이터 타입이 아니기 때문에 조금 다른 구조를 가지고 있다.

- 딕셔너리는 다른 언어에서의 Map과 같이 키-값의 쌍으로 이루어진 자료구조이다.
  특이한 점은 다른 언어에서는 키(Key)가 대부분 문자열(String)으로 고정되어 있는 경우가 많은데
  파이썬에서는 키의 자료형을 리스트와 딕셔너리가 아닌 다른 것으로 정의하고 있다.
  따라서 bool, float, int, tuple, range, str과 같은 자료형으로 Key를 정의할 수 있다.

- 딕셔너리는 중괄호로 표시하며 Key : Value를 콤마를 구분자로하여 표시한다.

  ```python
  >>> dictionary = {'a':97, 10:'10', 1.1:'1.1', True:False, ('Hello', 'World!'):'Tuple'
                   range(3):'1'}
  ```

#### 1. 키의 중복?

- Map의 특성을 보면 알겠지만 키는 반드시 중복이 되어서는 안 됩니다.
  왜냐하면 자료를 찾기위해서 탐색을 할 때 키에 맞는 값을 알아내기 때문입니다.
  하지만 파이썬의 딕셔너리에서 키가 중복이 된다면 인덱스 기준 더 높은 인덱스에 있는 키만 유효하고
  나머지는 삭제합니다.

  ```python
  >>> dictionary = {1:1, 1:2, 1:3}
  >>> dictionary
  {1:3}
  ```

- 이렇게 index 2에 있는 1:3이 살아남은 것을 알 수 있습니다.

#### 2. 빈 딕셔너리 생성

- 빈 딕셔너리를 생성하는 방법은 리스트나 튜플과 동일합니다.
  대신 중괄호를 사용하며 dict() 함수를 사용합니다.

  ```python
  >>> a = {}
  >>> a
  {}
  >>> b = dict()
  >>> b
  {}
  ```

#### 3. dict() 을 이용한 딕셔너리 생성 방법

- dict() 함수를 이용하면 크게 네 가지 방법으로 딕셔너리를 생성할 수 있다.

  1. dict(키1=값1, 키2=값2)

     - 이 방법은 마치 자바스크립트의 속성을 지정하는 것과 비슷하게 만들 수 있다.
       키=값의 형식으로 딕셔너리를 생성하며
       키는 그냥 문자열을 넣지만 따옴표를 생략합니다.
       따라서 무조건 키는 str 타입이 됩니다.

       ```python
       d = dict(name='JinHyeok', height=175, weight='none', age=18)
       print(d)
       
       # {'name':'JinHyeok','height':175,'weight':'none','age':18}
       ```

  2. dict(zip([키1, 키2], [값1, 값2]))

     - 이 방법은 zip() 함수를 이용해서 두 개의 리스트를 받은 뒤 그 리스트의 값들을 각각 키와 값으로
       매핑하여 딕셔너리를 생성하는 방법이다.

       ```python
       keyList = ['name', 'height', 'weight', 'age']
       valueList = ['JinHyeok', 175, 'none', 18]
       d = dict(zip(keyList, valueList))
       print(d)
       
       # {'name':'JinHyeok','height':175,'weight':'none','age':18}
       ```

  3. dict([(키1, 값1), (키2, 값2)])

     - 이 방법은 dict() 함수 안에 모든 요소가 튜플로 된 리스트를 넣는데
       그 튜플은 첫 번째 값이 키이고 두 번째 값이 값이다.

       ```python
       d = dict([('name', 'JinHyeok'), ('height', 175), ('weight', 'none'),
                ('age', 18)])
       print(d)
       
       # {'name':'JinHyeok','height':175,'weight':'none','age':18}
       ```

  4. dict({키1:값, 키2:값2})

     - 이 방법은 그냥 dict() 함수의 매개변수로 사용할 딕셔너리를 넣는 것이다.
       이러면 매개변수로 넣은 딕셔너리와 같은 딕셔너리가 만들어진다.

       ```python
       d = dict({'name':'JinHyeok', 'height':175, 'weight':'none', 'age':18})
       print(d)
       
       # {'name':'JinHyeok','height':175,'weight':'none','age':18}
       ```

#### 4. 딕셔너리의 접근

- 딕셔너리의 요소에 접근하는 방법은 시퀀스 데이터 타입처럼 인덱스로 접근하는 것이 아니라
  키로 접근하게 된다.
  따라서 대괄호 안에 원하는 키를 넣으면 그에 맞는 값이 리턴된다.

  ```python
  d = dict(1:1, 2:2, 3:3)
  print(d[1])
  
  # 1
  ```

#### 5. 딕셔너리의 수정

- 딕셔너리의 값을 수정하는 방법은 딕셔너리에 접근 한 뒤 대입 연산을 통해 대입하는 것으로 수정이 된다.
  물론 키를 수정하는 것은 안 된다.

  ```python
  d = dict(1:1, 2:2, 3:3)
  d[1] = 'string'
  print(d)
  
  # {1:'string', 2:2, 3:3}
  ```

#### 6. 딕셔너리의 삽입

- 딕셔너리의 삽입 과정은 간단하다.
  딕셔너리의 수정에서 했던 일을 없는 키에 값을 할당하면 그 키와 값을 이용해서 요소가 만들어진다.

  ```python
  d = {'string' : 1, True : 2, 1.1 : 10}
  d['tuple'] = False
  print(d)
  
  # {'string':1, True:2, 1.1:10, 'tuple':False}
  ```

#### 7. 딕셔너리 요소 확인

- 딕셔너리에 어떠한 요소가 존재하는지 확인하는 방법은 기존의 in과 not in을 사용하는 것이다.

  ```python
  d = {'string':1, True:2, 1.1:10, 'tuple':False}
  print(True in d)
  print(False in d)
  
  # True
  # False
  ```

#### 8. 딕셔너리 크기 구하기

- 딕셔너리의 크기는 키의 갯수라고 볼 수 있다.
  왜냐하면 키와 값의 갯수는 같기 때문이다.
  딕셔너리의 크기를 구하는 방법은 len() 함수를 사용하면 쉽게 알아낼 수 있다.

  ```python
  d = {1:1, 2:2, 3:3}
  print(len(d))
  
  # 3
  ```