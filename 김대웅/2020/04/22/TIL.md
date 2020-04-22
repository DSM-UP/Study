# TIL

파이썬 제너레이터

- 제너레이터 : 이터레이터를 생성해주는 함수.
- 함수 안에서 yield를 사용하면 함수는 제너레이터가 된다.

~~~python
def number_generator():
    yield 0
    yield 1
    yield 2
    
for i in number_generator():
    print(i) # 0 1 2
~~~

- 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
- 제너레이터 객체에는 \_\_iter\_\_, \_\_next\_\_ 메소드가 들어있다.

- for i in number_generator(): 에서 for 문은 \_\_next\_\_를 호출하여 yield에서 발생시킨 값을 가져온다. 그러다가 StopIteration 예외가 발생하면 반복을 끝낸다.

- 제너레이터는 함수를 끝내지 않은 상태에서 yield를 이용하여 값을 바깥으로 전달할 수 있다. 보통의 함수에서 return이 호출되면 함수가 종료되지만, yield는 함수 바깥의 코드가 실행되도록 양보한다.



~~~python
def number_generator(stop):
    n = 0
    while n < stop:
        yield n
        n += 1
        
for i in number_generator(3):
    print(i) # 0 1 2
~~~

- 이런 식으로 range 함수같이 만들 수도 있다.



~~~python
def number_generator():
    x = [1, 2, 3]
    for i in x:
        yield i
        
for i in number_generator():
    print(i)
~~~

다음과 같은 코드를 yield from을 사용하여

~~~python
def number_generator():
    x = [1, 2, 3]
    yield from x
    
for i in number_generator():
    print(i)
~~~

이렇게 간단히 나타낼 수 있다.

- yield from 반복가능한객체
- yield from 이터레이터
- yield from 제너레이터객체



