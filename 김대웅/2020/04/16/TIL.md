

# TIL

파이썬 람다 표현식

- 람다 표현식의 형태 : lambda 매개변수들: 식

~~~python
def multiple_two(x):
    return x * 2

multiple_two(2) // 4
~~~

매개변수로 받은 숫자에 2를 곱해서 반환하는 간단한 함수가 있다. 이 함수를 람다 표현식으로 바꾸면 다음과 같다.

~~~python
lambda x: x * 2
~~~

이렇게 실행을 하면 함수 객체가 나오며 이 상태로는 함수를 호출할 수 없다. (람다 표현식은 이름 없는 함수를 만들기 때문)



~~~python
multiple_two = lambda x: x * 2
multiple_two(2) // 4
~~~

이렇게 람다 표현식을 변수에 할당해주면 람다 표현식을 사용할 수 있게 된다.



(lambda 매개변수들: 식)(인수들) 형식으로 만들면 람다 표현식을 변수에 할당하지 않고 호출할 수 있다.

~~~python
(lambda x: x * 2)(2) // 4
~~~



- 람다 표현식 안에서는 변수 없이 식 한 줄로 표현해야 하기 때문에 변수를 만들 수 없다.
- 람다 표현식 바깥에 있는 변수를 이용할 수는 있다.



- 람다 표현식의 활용

  - map

    - 함수

    ~~~python
    def multiple_two(x):
        return x * 2
    
    list(map(multiple_two, [3, 4, 5])) // [6, 8, 10]
    ~~~

    - 람다 표현식

    ~~~python
    list(map(lambda x: x * 2, [3, 4, 5])) // [6, 8, 10]
    ~~~

    