## Python - Dictionary with For

- 딕셔너리는 전에 배운 items(), keys(), values() 메소드를 이용해서
  for문에 적용시켜서 간단하게 값을 얻어낼 수 있다.

- 기존에 items(), keys(), values() 메소드를 사용해서 얻은 리턴값은
  dict_items, dict_keys, dict_values로, 기본적으로 사용할 수가 없었다.

  ```python
  a = {'a':1, 'b':2, 'c':3}
  
  for key, value in a.items():
      print(key, value)
      
  # a 1
  # b 2
  # c 3
  
  for key in a.keys():
      print(key)
      
  # a
  # b
  # c
  
  for value in a.values():
      print(value)
  
  # 1
  # 2
  # 3
  ```