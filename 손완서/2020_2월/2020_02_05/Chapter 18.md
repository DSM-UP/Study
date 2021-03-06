# Chapter 18. 브라우저의 자바스크립트

### 18.1 ES5와 ES6

에버그린 브라우저는 자동으로, 사용자의 의사를 묻지도 않고 업데이트하는 방법으로 새 웹 표준을 더 빨리, 지속해서 적용한다.
ES6를 ES5로 바꾸는 것을 트랜스컴파일이라 한다.

### 18.2 문서 객체 모델

DOM, 즉 문서 객체 모델은 HTML 문서의 구조를 나타내는 표기법인 동시에 브라우저가 HTML 문서를 조작하는 핵심이기도 하다.

DOM은 트리 구조로 표현한다.
DOM 트리는 노드로 구성된다.
루트 노드를 제외하면 모든 노드에 부모가 있으며, 자식 노드는 있어도 되고 없어도 된다.
루트 노드는 문서이며 자식 노드는 <html> 요소 하나뿐이다.

<html> 요소에는 자식으로 <head> 요소와 <body> 요소가 잇다.

DOM 트리의 모든 노드는 Node 클래스의 인스턴스이다.
Node 객체에는 트리 구조를 나타내는 parentNode와 childNodes 프로퍼티, 자신에 대한 프로퍼티인 nodeName과 nodeType 프로퍼티가 있다.

DOM은 노드로만 구성된다.
하지만 모든 노드가 HTML 요소는 아니다.

모든 노드에는 nodeType, nodeName 프로퍼티가 있다.
nodeType은 그 노드가 어떤 타입인지 나타내는 정수이다.

### 18.3 용어 사용

부모 노드는 직접적인 부모이다, 다시 말해 바로 윗 단계를 말한다.
자식 노드 역시 직접적인 자식이다.
자손은 자식, 자식의 자식 등을 말한다.
조상은 부모, 부모의 부모 등을 말한다.

### 18.4 get 메서드

모든 HTML 요소는 고유한 ID를 할당받을 수 있다.
document.getElementById는 ID를 이용해 요소를 찾는다.

브라우저는 ID가 중복되어도 경고하지 않으므로 HTML 유효성 검사기 등을 통해 유일한 ID를 사용해야 한다.

document.getElementsByClassName는 주어진 클래스 이름에 해당하는 요소들을 반환한다.

document.getElementsByTagName는 주어진 태그 이름에 해당하는 요소들을 반환한다.

### 18.5 DOM 요소 쿼리

querySelector와 querySelectorAll은 CSS 선택자를 사용해 요소를 찾는 메서드이다.

CSS 선택자는 <p>, <div> 같은 요소 이름, ID, 클래스, 클래스의 조합, 요소 이름과 클래스의 조합 등 다양한 방식으로 요소를 찾는다.
CSS 선택자에서 요소 이름을 사용할 때는 꺾쇠 없이 요소 이름만 쓴다.
클래스로 요소를 찾을 때는 클래스 이름 앞에 점을 찍는다.
클래스 여러 개를 사용할 때는 찾으려는 클래스 앞에 모두 점을 찍는다.

CSS 선택자를 사용하면 위치를 기준으로 요소를 찾을 수도 있다.

요소선택자 사이에 스페이스를 넣으면 특정 노드의 자손인 요소를 찾을 수 있다.

요소 선택자 사이에 > 기호를 넣으면 자손이 아니라 자식만 선택한다.

자손 선택자와 자식 선택자를 함께 써도 된다.

### 18.6 DOM 요소 조작

모든 요소에는 textContent와 innerHTML 프로퍼티가 있다.
textContent는 HTML 태그를 모두 제거하고 순수한 텍스트 데이터만 제공하며, innerHTML는 HTML 태그를 그대로 제공한다.

### 18.7 새 DOM 요소 만들기

새로 만든 요소를 DOM에 추가할 때는 insertBefore와 appendChild 메서드를 사용한다.
메서드를 사용하기 위해서는 부모 DOM 요소(<div id="content">)와 그 첫 번째 자식을 찾아야 한다.

insertBefore는 매개변수를 두 개 받는다.
첫 번째 매개변수는 삽입할 요소이고, 두 번째 매개변수는 삽입할 위치를 정하는 요소이다.
appendChild는 항상 마지막 자식 요소로 추가하므로, 삽입할 요소만 매개변수로 제공하면 된다.

### 18.8 요소 스타일링

요소의 스타일을 바꾸고 싶다면 그에 맞는 CSS 클래스를 새로 만들고 그 클래스를 원하는 요소에 지정한다.

모든 요소에는 클래스를 나열하는 classList 프로퍼티가 있다.
classList의 add 메서드로 클래스를 추가할 수 있다.

클래스를 제거할 때는 classList.remove를 사용한다.

### 18.9 데이터 속성

데이터 속성을 사용해 HTML 요소에 임의의 데이터를 추가할 수 있다.
브라우저는 이 데이터를 완전히 무시하므로 자바스크립트에서 쉽게 요소에 관한 정볼르 읽거나 수정할 수 있다.

document.querySelectorAll을 사용해 action 데이터 속성에 "highlight"가 들어있는 요소를 모두 찾을 수 있다.

DOM API는 데이터 속성의 값을 문자열 형태로 저장하므로 객체 데이터는 저장할 수 없다.

자바스크립트에서 데이터 속성을 수정하거나 데이터를 추가하는 것도 간단하다.
