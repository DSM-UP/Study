## Python - Using Dictionary

#### 1. 딕셔너리 요소 추가하기

- 딕셔너리의 요소를 추가하는 방법에는 두 가지 방법이 있다.
  setdefault() 메소드를 사용하는 방법과 update() 메소드를 사용하는 방법이다.

  ##### 1-1. setdefault() 메소드 사용하기

  - setdefault() 메소드를 사용하는 방법은 두 가지가 있다.
    첫 번째는 매개변수로 Key 값만 넣는 것이고
    두 번째는 매개변수로 Key 값과 Value 값을 넣는 것이다.

  - 첫 번째 방법처럼 매개변수로 Key 값만 넣어주게 되면
    Key가 매개변수인 새로운 요소가 추가된다.
    Value는 None으로 아무것도 없는 상태가 된다.

  - 두 번째 방법처럼 매개변수로 Key 값과 Value 값을 같이 넣어주게 되면
    Key - Value인 요소가 추가된다.

  - setdefault() 메소드를 사용했을 때 만약 Key가 이미 존재하는 Key라면
    요소가 추가되거나 수정되지 않고 무시된다.

    ```python
    a = {'a' : 1, 'b' : 2, 'c' : 3}
    a.setdefault('a', 10)		# 무시
    a.setdefault('d')			# Value = None 	으로 추가
    a.setdefault('e', 5)		# Value = 5		로 추가
    print(a)
    
    # {'a':1, 'b':2, 'c':3, 'd':None, 'e':5}
    ```

  ##### 1-2. update() 메소드 사용하기

  - update() 메소드를 사용하는 방법은 많다.
    하지만 가장 기본적인 것은 Key=Value 방식으로 요소를 추가하는 것이다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    a.update(a=0)
    a.update(d=4)
    print(a)
    
    # {'a':0, 'b':2, 'c':3, 'd':4}
    ```

  - 만약 여러 개를 한 거 번에 변경하고 싶다면 콤마로 구분하여 실행할 수도 있다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    a.update(a=0, d=4)
    print(a)
    
    # {'a':0, 'b':2, 'c':3, 'd':4}
    ```

  - setdefalut() 메소드와 update() 메소드의 차이는 여기서 벌어진다.
    setdefault() 메소드는 기존의 요소를 변경할 수 없었던 반면에
    update() 메소드는 기존의 요소를 변경할 수 있다.

  - 그런데 이러한 경우 Key의 값이 str 타입일 경우에만 사용이 가능하다.
    만약 int나 float으로 Key 값을 이루고 있을 경우에는 다음과 같은 방식으로
    update() 메소드를 사용 가능하다.

  - 첫 번째는 매개변수로 딕셔너리를 받는 것이다.
    매개변수로 딕셔너리를 받으면 Key가 겹치는 요소들은 매개변수의 딕셔너리로 업데이트하고
    새로운 Key는 요소로 추가한다.

    ```python
    a = {'a':1, 'b':2}
    a.update({'a':10, 'c':3})
    print(a)
    
    # {'a':10, 'b':2, 'c':3}
    ```

  - 두 번째는 매개변수로 리스트나 튜플을 받는 것이다.
    리스트와 튜플을 Key, Value 형식으로 받으면 그 Key와 Value를 요소에 바로 추가한다.

    ```python
    a = {'a':1, 'b':2}
    a.update(['c':3], ['d':4])
    print(a)
    
    # {'a':1, 'b':2, 'c':3, 'd':4}
    
    b = {'a':1, 'b':2}
    b.update(('c':3), ('d':4))
    print(b)
    
    # {'a':1, 'b':2, 'c':3, 'd':4}
    ```

  - 세 번째는 반복가능객체를 매개변수로 받는 것이다.
    우리가 쉽게 접할 수 있는 반복가능객체는 zip()이 있는데
    이를 이용하면 쉽게 리스트를 만들어 구축할 수 있다.

    ```python
    a = {'a':1, 'b':2}
    a.update(zip(['c', 'd'], [3, 4]))
    print(a)
    
    # {'a':1, 'b':2, 'c':3, 'd':4}
    ```

#### 2. 딕셔너리 요소 삭제하기

- 딕셔너리의 요소를 삭제하는 방법으로는 pop(), popitem(), clear() 메소드와 del 키워드가 있다.

  ##### 2-1. pop() 메소드 사용하기

  - pop() 메소드를 사용하는 방법에는 두 가지 방법이 있다.

  - 첫 번째 방법으로는 매개변수로 Key를 받는 것이다.
    매개변수인 Key를 가지는 요소를 찾아서 삭제한 뒤 삭제한 Value를 리턴한다.

  - 만약에 Key가 딕셔너리에 없으면 오류를 일으킨다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    print(a.pop('a'))
    print(a)
    
    # 1
    # {'b':2, 'c':3}
    ```

  - 두 번째 방법으로는 매개변수로 Key와 DefaultValue를 받는 방법이다.
    첫 번째 방법으로는 존재하지 않는 Key를 넣었을 때 오류가 발생하게 된다.
    하지만 이 방법으로는 Key가 딕셔너리에 존재하지 않는 Key일 경우 DefaultValue를 리턴한다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    print(a.pop('a', 10))
    print(a.pop('d', 10))
    print(a)
    
    # 1
    # 10
    # {'b':2, 'c':3}
    ```

  ##### 2-2. del 키워드 사용하기

  - del 키워드를 사용하는 방법은 간단하다.
    del 키워드 뒤에 x[Key]를 입력하면 된다.
    pop() 메소드와는 다르게 리턴하는 값이 없다는 특징이 있다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    del a['a']
    del a['b']
    print(a)
    
    # {'c':3}
    ```

  ##### 2-3. popitem() 메소드 사용하기

  - popitem() 메소드는 매개변수가 존재하지 않는다.
    파이썬 3.5버전 이하에서는 popitem() 메소드를 실행하면 딕셔너리에서 랜덤으로
    요소를 하나 삭제하고 (Key, Value)로 된 튜플을 리턴했었다.
    하지만 파이썬 3.6버전 이후에서는 popitem() 메소드를 실행시
    딕셔너리의 가장 마지막 요소를 제거하고 튜플을 리턴한다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    print(a.popitem())
    print(a.popitem())
    print(a)
    
    # ('c', 3)
    # ('b', 2)
    # {'a':1}
    ```

  ##### 2-4. clear() 메소드 사용하기

  - clear() 메소드는 많이 봤듯이 모든 요소를 삭제하고 빈 딕셔너리로 만드는 메소드이다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    a.clear()
    print(a)
    
    # {}
    ```

#### 3. 딕셔너리 요소 가져오기

- 딕셔너리의 요소를 가져오는 방법은 get(), items(), keys(), values() 메소드를 사용하는 방법이 있다.

  ##### 3-1. get() 메소드 사용하기

  - get() 메소드를 사용하는 방법에는 두 가지 방법이 있다.

  - 첫 번째 방법으로는 매개변수로 Key를 받는 것이다.
    그러면 딕셔너리에 Key가 있는지 확인하고 Key가 있으면 Key에 맞는 Value를 리턴한다.
    만약 딕셔너리에 Key가 존재하지 않으면 None을 리턴한다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    print(a.get('a'))
    print(a.get('d'))
    print(a)
    
    # 1
    # None
    # {'a':1, 'b':2, 'c':3}
    ```

  - 두 번째 방법으로는 매개변수로 Key와 DefaultValue를 받는 것이다.
    이 또한 get(Key)와 동일하게 동작하지만
    딕셔너리에 Key가 없을 경우 None이 아니라 DefaultValue를 리턴한다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    print(a.get('a', 10))
    print(a.get('d', 10))
    print(a)
    
    # 1
    # 10
    # {'a':1, 'b':2, 'c':3}
    ```

  ##### 3-2. items() 메소드 사용하기

  - items() 메소드는 딕셔너리에 존재하는 모든 Key와 Value를 가져오는 메소드이다.
    리턴되는 값은 dict_items 타입으로 리턴된다.
    dict_items 타입은 리스트안에 튜플 형식의 Key, Value가 존재한다.
    그렇다고 리스트안의 튜플으로 착각하면 안 된다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    b = a.items()
    print(b)
    print(b[0])		# error
    print(b[0][0])	# error
    
    # dict_items([('a', 1), ('b', 2), ('c', 3)])
    ```

  - 이렇게 리스트안의 튜플과는 다르게 접근할 수가 없다.

  ##### 3-3. keys() 메소드 사용하기

  - keys() 메소드는 딕셔너리에 존재하는 모든 Key를 가져와서
    dict_keys 타입으로 리턴한다.
    마치 리스트처럼 보이는데 리스트는 아니다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    print(a.keys())
    
    # dict_keys(['a', 'b', 'c'])
    ```

  ##### 3-4. values() 메소드 사용하기

  - values() 메소드는 딕셔너리에 존재하는 모든 Value를 가져와서
    dict_values 타입으로 리턴된다.
    마치 리스트처럼 보이는데 리스트는 아니다.

    ```python
    a = {'a':1, 'b':2, 'c':3}
    print(a.values())
    
    # dict_keys([1, 2, 3])
    ```

#### 4. 딕셔너리 튜플과 리스트로 생성하기

- dict.fromkeys() 메소드를 사용하면 매개변수로 들어오는 리스트 또는 튜플을 이용해서
  Key를 생성하고 값은 None으로 설정합니다.
  두 번째 매개변수로 DefaultValue를 넣어주면 모든 키의 값으로DefaultValue가 들어갑니다.

  ```python
  a = dict.fromkeys(['a', 'b', 'c'])
  print(a)
  
  b = dict.fromkeys(('a', 'b', 'c'), 1)
  print(b)
  
  # {'a':None, 'b':None, 'c':None}
  # {'a':1, 'b':1, 'c':1}
  ```

  