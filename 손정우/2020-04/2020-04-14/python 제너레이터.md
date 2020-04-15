# python 제너레이터

제너레이터 : 이터레이터를 생성해주는 함수
yield 키워드를 사용한다
이터레이터를 직접 작성하는 것보다 훨씬 쉽다
발생자라고도 부른다

함수 안에서 yield르 사용하면 제너레이터가 된다

```python
def number_generator():
    yield 0
    yield 1
    yield 2
    
for i in number_generator():
    print(i)
```

```
0
1
2
```



제너레이터 함수를 호출하면 제너레이터 객체가 반환된다
이 객체는 \_\_iter\_\_와 \_\_next\_\_함수가 존재한다 -> 이터레이터이다

함수가 끝나면 자동으로 Stopiteration 예외가 발생해 이터레이터가 끝났음을 알 수 있다

이를 활용해 코루틴을 만들 수 있다