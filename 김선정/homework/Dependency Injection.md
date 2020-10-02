## Dependency Injection

표준을 정의 할 수 있고, 정의된 표준을 바탕으로 같은 설계를 하게 하여 준다.

**장점 **

* 재사용성을 높여준다.
* 테스트에 용이함
* 코드를 단순화 시켜준다.
* 종속적이던 코드의 수가 줄어든다.
* 가독성이 좋아진다.
* 결합도는 낮추면서 유연성과 확장성은 향상 시킬 수 있다.
* 객체간의 의존관계를 설정할 수 있다.
* 객체간의 의존관계를 없애거나 줄일 수 있다.

#### 의존성 주입 방법

1. Contructor Injection (생성자를 통한 전달)

   * 종속성이 감소한다.
   * components 종속성이 감소하면 변경에 민감하지 않다.

2. Method(Setter) Injection(  setter()를 통한 전달 )

   * 재사용성이 증가한다.

   * 일부 인터페이스의 다른 구현이 필요한 경우, 코드를 변경할 필요없이 해동 구현을 사용하도록

     components를 구성할 수 있다.

3. Field Injection(멤버 변수를 통한 전달)

   * 코드를 읽기 쉬워진다.

   * components의 종속성을 보다 쉽게 파악할 수 있으므로 코드를 쉽게 읽을 수 있다.


#### 간단한 예시

![img](https://gmlwjd9405.github.io/images/web/di-example.png)

1. AnimalType에 대한 구체적인 Class를 생성한다.
2. PetOwner 객체에 AnimalType 객체를 전달한다.
   * Contructor Injection (생성자를 통한 전달)
   * Method(Setter) Injection (setter()를 통한 전달)
   * Field Injection(멤버 변수를 통한 전달)