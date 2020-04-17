## Python - File

- 파이썬에서 파일을 읽고 쓰기 위해서는 open() 함수를 이용해서 파일 객체를 생성하면 된다.
  open() 함수의 매개변수로는 읽고 쓸 파일의 이름.확장자와 파일의 열기모드를 설정하면 된다.
- w는 쓰기 모드이고 r은 읽기 모드인데 w모드일 때 write() 메소드를 이용해서 쓸 수 있고
  r모드일 때 read() 메소드를 이용해서 읽을 수 있다.
- 파일을 모두 사용하고 나면 close() 메소드를 이용해서 파일을 닫아주어야 한다.

#### 1. 파일 쓰기

- 파일을 쓰는 방법은 위에서 말했듯이 w모드를 사용하면 된다.

  ```python
  file = open('temp.txt', 'w')
  file.write('this is txt')
  file.close()
  ```

- 위와 같이 쓰면 temp.txt 파일에 this is txt 라는 문자열이 생성됩니다.
  만약 temp.txt 파일이 없을 경우에는 생성합니다.

#### 2. 파일 읽기

- 파일을 읽는 방법은 위에서 말했듯이 r모드를 사용하면 된다.

  ```python
  file = open('temp.txt', 'w')
  string = file.read()
  print(string)
  file.close()
  
  # this is txt
  ```

- 이렇게 파일을 읽어오면 temp.txt에 적혀있는 모든 문자열이 string 변수에 담깁니다.

#### 3. 자동 파일 닫기

- 파일을 읽고 쓰고 나면 close() 메소드를 이용해서 파일 객체를 닫아주어야 합니다.
  하지만 이렇게 글을 쓰고 읽을 때마다 파일 객체를 닫아주는 것은 매우 귀찮은 작업이 될 수 있습니다.
  그래서 파이썬에서는 with-as 키워드를 이용해서 코드블록을 벗어나면 자동으로 파일을 닫아주는
  문법을 지원합니다.

  ```python
  with open('temp.txt', 'r') as file:
      s = file.read()
      print(s)
      
  # this is txt
  ```

#### 4. 반복문으로 파일에 여러 줄 쓰기

- 다음은 반복문으로 파일에 여러 줄 쓰는 예제이다.

  ```python
  with open('temp.txt', 'w') as file:
      for i in range(5):
          file.write(str(i))
  ```

- 이렇게 파일에 쓰면 다음과 같이 파일에 적혀있습니다.

  ```temp.txt
  01234
  ```

- 문자열에 이스케이프 시퀀스를 작성하면 그 기능을 사용할 수 있습니다.

  ```python
  with open('temp.txt', 'w') as file:
      for i in range(5):
          file.write(str(i) + '\n')
  ```

  ```temp.txt
  0
  1
  2
  3
  4
  ```

#### 5. 리스트 문자열 파싱하기

- 리스트에 존재하는 문자열을 그대로 파일에 사용하기 위해서는
  writelines() 메소드를 사용하면 된다.
  자동 계행은 되지 않는다.

  ```python
  a = ['lee', 'kim', 'park']
  with open('temp.txt', 'w') as file:
      file.writelines(a)
  ```

  ```temp.txt
  leekimpark
  ```

#### 6. 한 줄씩 읽어오기

- 한 줄씩 읽어오기 위해서는 readlines() 메소드를 사용하면 한 줄 한 줄이 리스트의 요소로써 바뀐다.

  ```python
  with open('temp.txt', 'r') as file:
      a = file.readlines()
      print(a)
      
  # ['leekimpark']
  ```

#### 7. 반복문으로 한 줄씩 읽어오기

- for문과 while문으로 읽어오는 방법은 다음과 같다.

  ##### 7-1. for문으로 읽어오기

  - for문의 index는 자동으로 한 줄씩 읽어오게 되어있다.

    ```python
    with open('temp.txt', 'r') as file:
        for i in file:
            print(i)
    
    # leekimpark
    ```

  ##### 7-2. while문으로 읽어오기

  - while문의 조건으로 빈문자열이 들어올 때를 지정하면 쉽게 가져올 수 있다.

    ```python
    with open('temp.txt', 'r') as file:
        i = None
        while i != '':
            i = file.readline()
            print(i)
            
    # leekimpark
    ```

#### 8. 피클링하기

- 파이썬의 객체들을 바이너리 파일에 저장하는 것을 피클링이라고 한다.
  그리고 반대를 언피클링이라고 하는데
  피클링을 하기 위해서는 pickle 모듈을 임포트 받아야 한다.
  그리고 쓰기 모드를 wb로 하여야 한다.

  ```python
  import pickle
  
  name = 'lee'
  age = 18
  address = 'gimhae'
  
  with open('my.p', 'wb') as file:
      pickle.dump(name, file)
      pickle.dump(age, file)
      pickle.dump(address, file)
  ```

- 이러면 바이너리 파일이 만들어지기 때문에 사람이 알아볼 수 없다.

#### 9. 언피클링하기

- 언피클링은 피클링으로 인해 바이너리 파일로 만들어진 파이썬 객체를
  다시 코드상으로 만들기 위해서 하는 과정을 말한다.

- 언피클링을 하기 위해서는 load() 메소드를 사용하며 rb 파일 모드를 사용한다.

  ```python
  import pickle
  
  with open('my.p', 'rb') as file:
      name = pickle.load(file)
      age = pickle.load(file)
      address = pickle.load(file)
      print(name)
      print(age)
      print(address)
     
  # lee
  # 18
  # gimhae
  ```

  