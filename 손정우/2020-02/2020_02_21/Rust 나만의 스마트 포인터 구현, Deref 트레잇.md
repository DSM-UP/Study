# Rust 나만의 스마트 포인터 구현, Deref 트레잇

우리만의 Box<T>를 만들어 볼 것이다

```Rust
struct MyBox<T>(T); 

imple<T> MyBox<T> {
    fn new(x: T) -> MyBox<T>{
        MyBox(x);
    }
}
```

new로 새로운 인스턴스를 생성하는데 들어온 값을 힙에다 저장해야하므로 튜플 구조체로 구현한다



---



우리가 새로운 스마트 포인터를 만들게 된다면  `*` 연산자를 통해 값을 가져오는 기능을 만들어야한다
C언어로 치면 포인터 타입이 주소를 가릴킬 때 그 주소에 위치한 값을 가져오는 것을 의미한다
이러한 기능을 역참조라고 한다

러스트 표준 라이브러리에서 역참조 기능을 위해 `Deref` 트레잇을 제공한다



```Rust
use std::ops::Deref;

imple<T> Deref for MyBox<T> {
    type Target = T;
    
    fn deref(&self) -> &T{
        &self.0
    }
}
```

