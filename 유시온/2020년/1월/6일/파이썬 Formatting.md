# 파이썬 Formatting

> ### % opertor 

c 언어에서의 printf를 작성할 때와 비슷하게 작성합니다. 그리고 데이터 타입을 명확히 알고 작성해야 합니다. 먼저 문자열의 경우 `%s`를 사용합니다.

```python
string = 'hello %s' % 'world'
print(string)
# hello world
```



만약 데이터 타입이 Integer 형식이면 `%i`를 사용 해 줍니다.

```python
string = '%i won' % 1000
print(string)
# 1000 won
```



만일 포맷팅의 데이터 타입이 다르다면 에러를 일으킵니다.

```python
string = 'hello %i' % 'world'
print(string)

Traceback (most recent call last):
    string = 'hello %i' % 'world'
TypeError: %i format: a number is required, not str
```



### 그러나 좋지는 않다...

그러나 위의 포맷팅 형식으로 문자열을 길게 늘일 경우, 가독성이 심히 떨어지는 것을 볼 수 있습니다.

```python
first = 'hello'
second = 'world'
year = '2020'
month = '1'
day = '6'
string = '%s %s. Now year is %i. and month is %i, day is %i' % (first, second, year, month, day)
# hello world. Now year is 2020. and month is 1, day is 6
```



> ### str.format

이러한 단점을 보완하기 위해 파이썬 3 이후에  str.format을 지원합니다.

```python
string = 'hello {}'.format('world')
print(string)
# hello world

string2 = 'hello {who}. year: {year}'
string2.format(who='world', year=2020)
# hello world. year: 2020

string3 = 'hello {1}. year: {2}'
string2.format('world', 2020)
# hello world. year: 2020
```



### 하지만 이녀석도...

% operator 보다는 좋지만, str.format도 매개변수나 문자열이 길어지면 가독성이 낮아집니다.

```python
first = 'hello'
second = 'world'
year = 2020
month = 1
day = 6
print(('{first} {second}. Now year is {year}. and month is {month}, day is {day}'))
# hello world. Now year is 2020. and month is 1, day is 6
```



>  ### f-string

f-string은 파이썬 3.6 이상부터 지원하는 문법입니다. 더더욱 간편해진 문법이죠. 산술 연산도 가능합니다.  포매팅 변수를 나중에 입력해도 가능합니다.

```python
who = 'world'
string = f'hello {who}'
print(string)
# hello world

x = 1
y = 2
string = f'sum: {x+y}'
print(string)
# sum: 3

string = f'hello {who}'
who = 'world'
print(string)
# hello world
```



속도도 위의 세 개 중에 가장 월등히 빠릅니다. 