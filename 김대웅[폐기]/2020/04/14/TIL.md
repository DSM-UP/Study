# TIL

파이썬 Dictionary : 키-값의 형태를 가지는 파이썬의 자료형

- 모습 : {key1:value1, key2:value2, key3:value3, ...}

~~~python
dict_example = {'name': 'python', 1: 'one', 'array': [3, 4, 1]}
~~~

- 딕셔너리는 이런 식으로 만들 수 있다. 리스트나 튜플도 값에 올 수 있다는 것을 알 수 있다.
- 이외에도 dict()를 사용해서 딕셔너리를 만들 수 있다.



- 딕셔너리에 쌍 추가

~~~python
dict_example['age'] = 29
print(dict_example) # {'name': 'python', 1: 'one', 'array': [3, 4, 1], 'age': 29}
~~~

위처럼 딕셔너리[키] = 값 을 하면 딕셔너리에 쌍을 추가할 수 있다.



- 딕셔너리 쌍 삭제

~~~python
del dict_example[1]
print(dict_example) # {'name': 'python', 'array': [3, 4, 1], 'age': 29}
~~~

del 키워드를 사용해서 딕셔너리 쌍을 삭제할 수 있다. del 딕셔너리[키]



- 딕셔너리에서 값 얻기 : 딕셔너리[키] 로 특정 키의 값을 얻을 수 있다.

- 주의사항
  - 딕셔너리를 만들 때 키가 중복되면 하나를 제외한 나머지 값들이 무시된다.
  - 딕셔너리의 키에 변하는 값은 사용할 수 없다. (list 사용 불가, tuple 사용 가능)



- 딕셔너리 관련 함수들
  - keys
    - 사용하는 딕셔너리의 키들을 모아서 dict_keys 객체(반복 가능)로 반환한다.
  - values
    - 사용하는 딕셔너리의 값들을 모아서 dict_values 객체(반복 가능)로 반환한다.
  - items
    - 사용하는 딕셔너리의 키-값 쌍들을 튜플로 묶은 dict_items 객체(반복 가능)로 반환한다.
  - clear
    - 사용하면 딕셔너리 안의 모든 요소들을 삭제한다.
  - get
    - 매개변수로 키를 넣어서 키에 대응하는 값을 반환한다. 딕셔너리[키] 와 다른 점은 딕셔너리[키] 는 존재하지 않는 키에 접근할 경우 오류를 발생시키지만 get을 사용하면 None을 반환한다.
    - 두 번째 매개변수로 디폴트 값을 지정해서 키가 존재하지 않으면 정해놓은 디폴트 값으로 반환하도록 할 수 있다.

- in

  - 키 in 딕셔너리 형태로 사용하며 딕셔너리 내에 해당 키가 존재하면 True, 존재하지 않으면 False가 된다.

  ~~~python
  dict_example = {1: 'one', 'age': 1242, 'hobby': 'soccer'}
  print('age' in dict_example) # True
  print(2 in dict_example) # False
  ~~~

  