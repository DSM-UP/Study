## 객체지향 프로그래밍( Object Oriented Programming)

객체 지향 프로그래밍은 컴퓨터 프로그램을 객체들의 모임으로 파악하고자 하는 프로그래밍의 패러다임 중에

하나이다. 각 객체 들은 서로 메세지를 주고 받을 수 있으면 데이터를 처리할 수 있다.

#### 특징과 장점

* 프로그램을 유연하고 변경이 용이하게 만든다.
* 프로그램의 개발과 보수를 간편하게 만든다.
* 직관적인 코드 분석을 가능하게 한다.

위의 장점들을 관통하는 객체 지향 프로그래밍의 중요한 특성은 강한 응집력과 약한 결합력을 지향한다는 점이다.

**응집력:** 프로그램의 한 요소가 해당 기능을 수행하기 위해 얼마만큼의 연관되 책임과 아이디어가 뭉쳐있는지를

나타내는 정도. 프로그램의  요소가 특정 목적을 위해 밀접하게 연관된 기능들이 모여서 구현되어 있고,

지나치게 많은 일을 하지 않으면 그것을 응집력이 높다고 표현한다.

**결합력:**프로그램 코드의 한 요소가 다른 것과 얼마나 강력하게 연결되어 있는지, 얼마나 의존적인지를

나타내는 정도. 결합력이 낮다는 것은 한 요소가 다른 요소들과 관계를 크게 맺고 있지 않은 상태를 의미한다.

#### 객체지향 프로그래밍의 기본 구성 요소

* 클래스

  클래스의 정의는 데이터와 메소드가 결합된 사용자정의 타입이다. 사용자정의 타입이란 프로그래머가

  서로 관련된 변수들을 묶어서 만든 데이터 타입을 뜻한다. 클래스는 이 객체를 생성하는 설계도와 같은

  역할을 한다. 설계도에는 실제 제품의 속성와 기능에 대해서 기술하고 있고 이를 만든 제품에는 설계도의

  내용이 실제로 구현되어 있는 것이다. 클래스 멤버들은 모두가 필수요소는 아니기에 해당 클래스의 역할과

  기능에 따라서 그리고 필요에 의해서 클래스의 형태가 달라지게 된다. 

  ##### 인스턴스

  사실 클래스와 인스턴스의 형태상의 차이는 없다, 오히려 그렇게 구분해 놓지 않는다면 클래스와 

  인스턴스는 같다고 봐도 무방할 정도로 닮아 있다. 하지만 클래스를 통해 생성 된 각각의 인스턴스들은

  서로 다른 각자의 이름을 가지고 있고, 각각이 그 속성과 기능을 독립적으로 갖는다는 점이 중요하다.

* 객체

  클래스의 인스턴스. 상위 클래스의 속성을 가지고 있으면서 개별적인 특성과 행쉬(메소드)또한 가지고 있다.

  객체는 동작을 하는 모든 물체라고 이해하면 된다. 생각을 해보면 세상의 모든 것은 모든 물체는 객체가 

  될 수 있다. 예를 들어

  * 핸드폰 : 전화를 건다, 전화를 받는다, 번호를 누른다 등등의 동작을 하는 객체이다.
  * 마우스: 오른쪽 클릭을 한다, 왼쪽 클릭을 한다, 드래그를 한다 등등의 동작을 하는 객체이다.
  * 가방 : 물건을 넣는다, 지퍼를 잠근다 등등의 동작을 하는 각체이다.

  대표적인 객체지향 프로그래밍 언어인 자바에서는 그런 객체는 클래스로 표현되고 객체들이 하는 동작은

  클래스의 내부 메소드로 표현된다.

  객체지향 프로그래밍에서 객체는 클래스의 인스턴스이다. 클래스 객체는 자료와 그 자료를 다루는 명령의

  조합을 포함하여 객체가 메시지를 받고 자료를 처리하며 메시지를 다른 객체로 보낼 수 있도록 한다.

  실세계의 유추로 설명하자면, 만약 어떤 사람이 집에서 살기를 원할 때, 그 집의 청사진이나 축소 모형 따위는

  전혀 필요가 없다. 필요한 것은 설계에 맞는 실제 집이다, 이 유추에서 청사진은 클래스를 나타내고 실제 집은

  객체를 나타낸다.

* 메서드

  클래스로부터 생성된 객체를 사용하는 방법. 객체의 속성을 조작하는 데 사용 된다.
  
  클래스는 멤버로 속성을 표현하는 필드와 기능을 표현하는 메소드를 가진다.
  
  그중에서 메소드란 어떠한 특정 작업을 수행하기 위한 명령문의 집합이라 할 수 있다.
  
  클래스에서 메소드를 작성하여 사용하는 이유는 중복되는 코드의 반복적인 프로그래밍을 피할 수 있기 
  
  때문이다. 또한, 모듈화로 인해 코드의 가독성도 좋아진다. 그리고 프로그램 문제가 발생하거나 기능의
  
  변경이 필요할 때도 손쉽게 유지보수를 할 수 있게 된다.
  
  * 메소드를 작성할 때는 되도록 하나의 메소드가 하나의 기능만을 수행하도록 작성하는 것이 좋다.

#### 객체지향 프로그래밍의 특성

* 캡슐화

  캡슐화는 객체의 데이터를 외부에서 직접 접근하지 못하게 막고, 함수를 통해서만 조작이 가능하게 하는

  작업이다.

  클래스 입장에서 캡슐화를 살펴보자면 자바에서 접근 제어자(public, protected,private)가 있는데

  private으로 정의된 속성은 외부에 노출 시키지 않고 자산의 클래스에서만 사용하기 위해 정의한다.

  즉, private으로 정의된 속성을 실제 내용물이라고 생각하면 된다. 

  이 속성은 외부에 알려줄 필요가 없다. 즉, 정보은닉을 할 수 있다는 장점이 있다.

* 다향성

  같은 타입이지만 실행 결과가 다양한 객체를 이용할 수 있는 성질을 말한다. 같은 부모 클래스 타입으로

  선언 되었지만, 하위 클래스가 모두 다르다는 것을 나타낸다.

  부모 클래스로부터 상속을 받은 속성에 대해, 자식 클래스에서 몰려받은 속성을 재정의 할 수 있다.

  이것을 오버라이딩이라고 한다.

* 상속

  부모클래의 필드를 자식 클래스가 들려받는다 라는 개념이다. 상속되는 클래스를 부모 클래스라 하며

  슈퍼클래스라고도 부른다. 자식 클래스는 서브 클래스라고도 부르며 상속 받는 클래스 이다

  상속이 필요한 이유는 코드의 중복을 없애기 위함이다. 

  코드의 중복이 많아지면 개발 단계에서도 피곤하지만, 유지 보수에도 많은 비용이 들게 된다.

  그래서 개발을 할 때 코드의 중복을 반드시 피해야 한다.

  ##### 다향성을 사용하면 좋은점은? :

  같은 이름의 속성을 유지함으로서, 속성을 사용하기 위한 인터페이스를 유지하고, 메서드 이름을 낭비하지

  않는다는 것이다. API가 많아질수록 복잡성은 증가하기 때문에 다형성은 유용합니다.

  

  API: 응용프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어 할 수 있게

  만든 인터페이스를 뜻한다.

  #### 객체지향 5대 원칙

  1. 단일 책임  원칙 (Single Reponsibility Principle)

     모든 class는 하나의 책임만 가지며, 그 책임은 완전히 캡슐화 되어야 함을 일컫는다. 곡 작성되는 class는 

     하나의 기능만 가지며, 그 Class가 제공하는 모든 서비스는 하나의 책임을 수행하는 데 집중되어야 한다는

     원칙이다. 

     설계를 잘한 프로그램은 기본적으로 새로운 요구사항과 프로그램 변경에 영향을 받는 부분이 적다.

     다시말해, 응집도는 높고 결합도는 낮은 프로그램을 뜻한다. 만약 한 클래스가 수행할 수 있는 기능,

     즉 책임이 많아지는데, 책임이 많아지게 되면 클래스 내부의 함수 끼리 강한 결합을 발생할 가능성이

     높아진다.

  2. 개방 폐쇄 원칙(Open/closed principle)

     *기존의 코드를 변경하지 않고(closed) 기능을 수정하거나 추가할 수 있도록(Open) 설계 해야한다*

     개방폐쇄 원칙은 클래스, 모듈 함수 등의 소프트웨어 개체는 확장에 대해 열려있어야 하고, 수정에 대해서

     닫혀있어야 한다는 프로그래밍 원칙이다. 이는 수정이 일어나더라도 기존의 구성요소에는 수정이

     일어나지 않아야 하며, 쉽게 확장이 가능하여 재사용을 할 수 있도록 해야 한다는 의미이다.

     이때 여기서 중요한 것이 추상화와 다향성이다.

  3. 리스코프 치환 원칙(Liskov Substitutions Principle, LSP)

     리스코프 치환 코드는 상속에 대한 개념으로서, 자료형 S가 자료형 T의 하위형이라면 필요한 프로그램의

     속성의 변경없이 자료형 T의 객체를 자료형 S의 객체로 교체(치환) 할 수 있어야 한다.

     쉽게 말해서 부모 class가 들어갈 자리에 자식 class를 넣어도 잘 구동되어야 한다 라는 원칙이다.

  4. 인터페이스 분리 법칙(Interface Segregation Principle, ISP)

     클라이언트는자신이 사용하지 않는 메소드에 의존 관계를 맺으면 안된다라는 원칙이다.

     이 법칙에서의 핵심 과제는 큰 덩어리의 인터페이스들을 구체적이고 작은 단위들로 분리시킴으로써 꼭

     필요한 메서드들만 이용한 수 있게 한다이다. 이러한 원칙을 준수하면서 기대할 효과로는 시스템의 내부

     의존성 관계를 느슨하게 하여 리팩토링, 수정, 재배포를 쉽게 할 수 있도록 한다.

  5. 의존성 역전 원칙 (Dependency Inversion Principle, DIP)

     * 상위 모듈은 하위 모듈에 종속되어서는 안된다. 둘 다 추상화에 의존해야 한다.
     * 추상화는 세부사항에 의존하지 않는다. 세부사항은 추상화에 의해 달라져야 한다.

     

  