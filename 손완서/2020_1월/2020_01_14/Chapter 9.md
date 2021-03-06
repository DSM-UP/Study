# Chapter 9. 객체와 객체지향 프로그래밍ㅂ

배열과 객체의 차이

- 배열은 값을 가지며 각 값에는 숫자형 인덱스가 있다. 객체는 프로퍼티를 가지며 각 프로퍼티에는 문자열이나 심볼 인덱스가 있다.
- 배열에는순서가 있다. 즉, arr[0]은 항상 arr[1]보다 앞에 있다. 반면 객체에는 그런 순서가 보장되지 않는다. obj.a가 obj.b보다 앞에 있다고 말할 수는 없다.

프로퍼티는 키(문자열 또는 심볼)과 값으로 구성된다.
객체의 진짜 특징은 키를 통해 프로퍼티에 접근할 수 있다는 점이다.

### 9.1 프로퍼티 나열

프로퍼티 나열에서 기억해야 할 것은 순서가 보장되지 않는다는 점이다.

#### 9.1.1 for...in

for...in 루프에는 키가 심볼인 프로퍼티는 포함되지 않는다.

#### 9.1.2 Object.keys

Object.keys는 객체에서 나열 가능한 문자열 프로퍼티를 배열로 반환한다.

객체의 프로퍼티 키를 배열로 가져와야 할 때는 Object.keys가 편리하다.

### 9.2 객체지향 프로그래밍

OOP의 기본 아이디어는 단순하고 직관적이다.
객체는 데이터와 기능을 논리적으로 묶어 놓은 것이다.
OOP는 사물에 관해 추상적으로, 구체적으로 생각할 수 있게 한다.

클래스는 어떤 자동차처럼 추상적이고 범용적인 것이다.
인스턴스는 특정 자동차처럼 구체적이고 한정적인 것이다.
기능은 메서드라고 부른다.
클래스에 속하지만 특정 인스턴스에 묶이지 않는 기능을 클래스 메서드라고 한다.
인스턴스를 처음 만들 때는 생성자가 실행된다.
생성자는 객체 인스턴스를 초기화한다.

OOP는 클래스를 계층적으로 분류하는 수단도 제공한다.
부모 클래스 = 슈퍼 클래스
자식 클래스 = 서브 클래스

#### 9.2.1 클래스와 인스턴스 생성

외부에서 접근하면 안 되는 프로퍼티 일므 앞에 밑줄을 붙이는 것을 '가짜 접근 제한'이라고 한다.

#### 9.2.3 프로토타입

클래스의 인스턴스에서 사용할수 있는 메서드라고 하면 그건 프로토타입 메서드를 말하는 것이다.

최근에는 프로토타입 메서드를 #으로 표시하는 표기법이 널리 쓰인다.

모든 함수에는 prototype이라는 특별한 프로퍼티가 있다.

객체 생성자, 즉 클래스는 Car처럼 항상 첫 글자를 대문자로 표기한다.

함수의 prototype 프로퍼티가 중요해지는 시점은 new 키워드로 새 인스턴스를 만들었을 때이다.
new 키워드로 만든 새 객체는 생성자의 prototype 프로퍼티에 접근할 수 있다.
객체 인스턴스는 생성자의 prototype 프로퍼티를 **proto** 프로퍼티에 저장한다.

**proto** 프로퍼티는 자바스크립트의 내부 동작 방식에 영향을 미친다.

프로토타입에서 중요한 것은 동적 디스패치라는 메커니즘이다.
디스패치는 메서드 호출과 같은 의미이다.
클래스의 인스턴스는 모두 같은 프로토타입을 공유하므로 프로토타입에 프로퍼티나 메서드가 있다면 해당 클래스의 인스턴스는 모두 그 프로퍼티나 메서드에 접근할 수 있다.

클래스의 프로토타입에서 데이터 프로퍼티를 수정하는 것은 권장하지 않는다.

#### 9.2.4 정적 메서드

메서드에는 인스턴스 메서드 외에도 정적 메서드(클래스 메서드)가 있다.
이 메서드는 특정 인스턴스에 적용되지 않는다.
정적 메서드에서 this는 인스턴스가 아니라 클래스 자체에 묶인다.

정적 메서드는 클래스에 관련되지만 인스턴스와는 관련이 없는 범용적인 작업에 사용된다.
