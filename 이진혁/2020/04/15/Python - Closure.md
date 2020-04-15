## Python - Closure

#### 1. 전역 변수와 지역 변수

```python
a = 10
def a():
    a = 20
    print(a)
a()
print(a)

# 20
# 10
```

- 여기서 가장 먼저 선언된 a는 밖에서 선언 되었으므로 전역 변수라고 하고
  if문 안에서 선언된 a는 지역 변수라고 한다.
  따라서 만약 a가 10이라면 a의 값을 20으로 변경하는 것이 아니라
  지역변수인 a를 선언해서 20을 할당하는 것이다.

- 코드 블록 안에서 전역 변수를 건드리고 싶다면 global 이라는 키워드를 이용해서 전역 변수를 사용하겠다고
  선언해야 한다.

  ```python
  a = 10
  def a():
      global a
      a = 20
      print(a)
  a()
  print(a)
  
  # 20
  # 20
  ```

#### 2. 지역 변수의 범위

- 함수 안에 함수가 있을 경우 지역변수를 사용하면 어떻게 될까요?

  ```python
  def outter():
      x = 10
      def inner():
          x = 20
          print(x)
      inner()
      print(x)
  outter()
  
  # 20
  # 10
  ```

- 마치 outter() 함수의 x가 20으로 변경될 것 같지만
  이렇게 함수 안에 함수가 있을 경우에는 또다른 지역변수가 생성됩니다.
  따라서 이러한 경우에는 nonlocal 키워드를 사용해야 합니다.

  ```python
  def outter():
      x = 10
      def inner():
          nonloacal x
          x = 20
          print(x)
  	inner()
      print(x)
  outter()
  
  # 20
  # 20
  ```

- 물론 이렇게 사용하는 것 보다는 함수의 매개변수로 변수를 전달하는 것이 올바릅니다.
  global과 nonlocal 키워드는 웬만하면 사용하지 않게 코드를 짜는 것이 중요합니다.

#### 3. 클로저란?

```python
def calculator():
    x = 2
    y = 3
    def add(z):
        return x + y + z
    return add
calc = calculator()

print(calc(1), calc(2))

# 6 7
```

- 이렇게 함수의 리턴값을 내부 함수로 할 수 있다.
  이렇게 되면 이를 대입한 calc과 같은 변수를 클로저라고 한다.
  왜냐하면 이렇게 함수를 리턴받았을 때
  내부함수인 add() 함수는 바깥에 있는 x와 y를 사용한다.
  이러할 경우에는 add() 함수만 필요한 것이 아니라 바깥에 있는 x와 y의 정보까지 필요하므로
  이러한 정보를 저장하고 있는 함수를 클로저라고 한다.