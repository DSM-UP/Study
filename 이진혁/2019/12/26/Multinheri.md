## Multinheri

- C++이라는 언어에는 다중 상속이라는 기능을 지원한다.
- 하지만 자바, C#과 같이 객체 지향언어에서 다중 상속을 막아 놓는 것이 대부분이다.
- 그러면 무슨 이유에 다중 상속이라는 기능을 제한한 것일까?

- 아래의 코드를 살펴보자.

```cpp
#include <iostream>

class AAA {
private :
    int member;
public :
    AAA() : member(10) {}
	void Show() { std::cout << "member : " << member << std::endl; }
}

class BBB {
private :
    int member;
public :
    BBB() : member(20) {}
    void Show() { std::cout << "member : " << member << std::endl; }
}

class CCC : public AAA, public BBB {
public :
    CCC() : AAA(), BBB() {}
    void ShowYourSelf() { Show(); }
}

int main() {
    CCC c;
    c.ShowYourSelf();
    
    return 0;
}
```

- 위와 같은 코드가 존재한다고 생각해보자.
- 이 때 과연 c.ShowYourSelf() 함수는 도대체 어떤 클래스의 Show() 함수를 불러야 할까?
- 이것이 문제이다. 만약에 이것이 아니더라도 member 라는 변수에 접근하게 된다면 어떤 member라는 변수에 접근하게 되는지가 의문이 된다.
- 이렇게 컴파일러가 어떤 것을 접근해야 할지 모르도록 애매하게 설정해놓으면 오류가 발생하게 된다.



- 다중 상속의 폐해로 가장 큰 예를 들자면 다이아몬드 상속이 있다. 이는 AAA라는 클래스가 BBB, CCC라는 자식클래스를 가지고 그 두 클래스가 부모가 되어 DDD클래스를 상속시키면 거의 무조건 오류가 발생하게 된다.
- 하지만 C++에서 다중 상속을 사용할 수 밖에 없는 상황이 온다고 하지만 무슨 상황인지는 이해가 되지 않는다.