## XML vs JSON

##### XML

- XML과 JSON의 차이점과 공통점에 알아보기 전에 XML에 대하여 간략하게 알아보았다.
- XML은 eXtensible Markup Language의 약자로써 말 그대로 Markup Language의 확장된 버전이라고 생각하면 된다.
- XML 이전의 Markup Language라고 한다면 SGML이 있는데 이에 대한 업그레이드 버전이라고 생각하면 된다.
- XML은 아래와 같은 구성을 가지고 있다.

```xml
<student>
	<name>leejinhyeok</name>
	<age>17</age>
	<gender>man</gender>
	<height>174.4</height>
	<weight>65</weight>
</student>
```


- 이와 같이 leejinhyeok이라는 name 속성을 가지고 있는 student가 있다는 것을 쉽게 알 수 있고 데이터를 저장하고 전달할 수 있다는 것을 알 수 있다.
- 또한 XML은 .xml 이라는 확장자명을 가지고 있으며 application/xml 이라는 미디어 타입을 가지고 있다.



##### JSON

- JSON은 JavaScript Object Notation의 약자로써 자바 스크립트에서 지원하는 객체 생성문의 표기법을 이용하여 데이터를 저장하는 방식이라고 생각하면 된다.
- JSON은 이름 답게 JavaScript의 객체 리터럴 방식과 유사하다.
- 아래는 JavaScript의 객체 리터럴 방식과 JSON의 정보 저장 방법이다.


```javascript
var obj = {
	name : "leejinhyeok",
	age : 17,
	gender : "man",
	height : 17.4,
	weight : 65
}
```
```json
{
	"name" : "leejinhyeok",
	"age" : 17,
	"gender" : "man",
	"height" : 174.4,
	"weight" : 65
}
```


- 위의 코드를 보면 javascript의 객체 리터럴을 통한 객체 생성문과 JSON의 문장이 서로 비슷한 것을 알 수 있다.
- 또한 XML과 JSON이 비슷한 용도로 사용되고 비슷한 문장구조를 가지고 있다는 것을 알 수 있다.
- 아래에서는 XML과 JSON 끼리의 공통점과 차이점에 대해서 알아보겠다.


##### 공통점

- XML과 JSON의 공통점에는 크게 세 가지로 나뉘어져 있다.



###### 1. 데이터를 저장하고 전달할 수 있다.

- 위의 XML과 JSON의 문장을 보면 알 수 있겠지만 name이라는 속성에 leejinhyeok 이라는 정보가 담겨져 있다는 것을 알 수 있다. 또한 이 데이터를 전달도 할 수 있다는 공통점을 가지고 있다.



###### 2. 기계만이 아니라 사람도 쉽게 읽을 수 있다.

- 이 또한 첫 번째 공통점과 비슷하게 name이라는 속성에 leejinhyeok 이라는 정보가 담겨져 있다는 것을 한 눈에 볼 수 있다.



###### 3. 여러 가지 언어에 사용될 수 있다.

- C, C++, C#, Java, Python 등 여러 가지 언어에서 XML과 JSON을 파싱하여 사용할 수 있다는 공통점이 있으며 이것은 곧이어 장점으로 연결된다.
- 여러 가지 언어에서 사용될 수 있다는 것은 그 만큼 범용성이 높다는 것이기 때문이다.



##### 차이점

- XML과 JSON의 차이점에는 크게 다섯 가지로 나뉘어져 있다.



###### 1. JSON이 XML보다 코드가 짧다.

- 만약 pneumonoultramicroscopicsilicovolcanokoniosis이라는 속성이 존재한다고 한다면 XML에서는 아래와 같은 코드를 작성해야 한다.

```xml
<disease>
	<pneumonoultramicroscopicsilicovolcanokoniosis>
	true
	<pneumonoultramicroscopicsilicovolcanokoniosis/>
</disease>
```

- 하지만 JSON에서는 아래와 같이 XML보다 짧게 코드를 짤 수 있다.

```json
{
    “pneumonoultramicroscopicsilicovolcanokoniosis” : true
}
```

- 이와 같이 태그의 특성상 코드가 짧다는 것을 알 수 있다.
- 그리고 이것은 후에 얘기할 코드의 무거움과도 관련이 있다.



###### 2. JSON은 종료 태그가 없다.

- 첫 번째 차이점에서 말한 것처럼 JSON으로 작성된 파일이 XML로 작성된 파일보다 짧다.
- 그에 대한 이유로는 종료 태그가 없다는 것을 들 수 있다.
- JSON에서는 종료태그가 없기 때문에 코드가 더 짧을 수 있다.

- 하지만 XML에서는 종료 태그를 줄일 수 있는 방법이 있다.
- 원래는 아래의 첫 번째와 같은 코드를 두 번째와 같은 코드로 변환시킬 수 있다.


__ 첫 번째 코드 __

``` xml
<student>
	<name>leejinhyeok</name>
    <age>17</age>
</student>
```

```xml
<student>
	<name value="leejinhyeok"/>
    <age value="17"/>
</student>
```


- 그래도 종료태크의 흔적은 남아있는 것을 알 수 있다.



###### 3. JSON은 배열을 사용할 수 있다.

- JSON은 XML과 다르게 기본적으로 배열을 사용할 수 있도록 지원한다.
- 따라서 정보의 속성에 배열을 통해 아래와 같이 정보를 저장할 수 있다.

```json
{
    “students” : [
        “leejinhyeok”,
        “sonjungwoo”,
        “kimdaewoong”,
        “yusion”,
        “sonwanseo”,
        “gongyunggil”,
        “seominjun”,
        “kimdohoe”,
        “baekseoyung”,
        “anyungjun”
    ]
}
```

###### 4. 파싱하는 방식이 다르다.

- XML은 XML 파서가 XML DOM에 접근해서 XML을 해석하여 파싱한다.
- 하지만 JSON은 eval() 함수를 이용해서 문자열을 해석하여 파싱하는 방식을 사용한다.
- 이것이 다음에 나올 차이점에 큰 영향을 준다.

##### 5. JSON이 XML보다 처리속도가 빠르다.

- 차이점 4번에서 말했듯이 파싱하는 방법이 다르기 때문에 처리속도의 차이가 일어나게 된다.
- XML은 XML DOM에 파서가 접근하게 되는데 DOM은 XML의 태그들이 어떻게 이루어졌는지 표시하고 있는 복잡한 문서이기 때문에 접근하는데에 비교적 오래걸리게 된다.
- 하지만 JSON은 자바스크립트의 오브젝트를 이용하여 만들었기 때문에 빠르고 자바스크립트가 굉장히 빠른 속도를 지향하는데 그 자바스크립트와 호환이 잘 되도록 설계했기 때문에 빠른 속도를 자랑하고 있다.