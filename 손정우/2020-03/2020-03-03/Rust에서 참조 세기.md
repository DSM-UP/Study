# Rust에서 참조 세기

Rust에는 소유권이라는 강력한 도구가 있어 참조 세기같은 방법이 필요가 없어 보일 수도 있습니다

그럼에도 불구하고 참조 세기를 하는 스마트 포인터가 있어 복수의 소유권을 가능하게 합니다

복수의 소유권은 그래프와 같은 구조에서 여러 노드에서 하나의 노드를 참조해야하기 때문입니다

기존의 참조 방식(빌림)은 이것이 불가능합니다

예를 들어 아래와 같은 구조를 만든다고 합시다

![Two lists that share ownership of a third list](https://rinthel.github.io/rust-lang-book-ko/img/trpl15-03.svg)

```Rust
enum List<'a>{
    Cons(i32 ,&'a List<'a>),
    Nil,
}

use List::{Cons, Nil};

fn main() {
    let a = Cons(5, &Nil);
}
```

위의 코드를 컴파일할 시 컴파일러는 에러를 줍니다

그 이유는 `Cons(5, &Nil)`에서 &Nil의 라이프타임이 바로 다음 라인에서 끝날 것이기 때문입니다

그럼 Nil은 a보다 라이프타임이 긴 다른 변수로 빼서 넣어주어야 합니다
이는 코드가 더러워지고 또다른 문제점을 만들지도 모릅니다

따라서 복수의 소유권을 인정하는 참조 세기하는 스마트 포인터인 Rc 스마트 포인터가 등장했습니다



### Rc 스마트 포인터

```Rust
enum List {
    Cons(i32, Rc<List>),
    Nil,
}

use List::{Cons, Nil};
use std::rc::Rc;

fn main() {
    let a = Rc::new(Cons(5, Rc::new(Cons(10, Rc::new(Nil)))));
    let b = Cons(3, Rc::clone(&a));
    let c = Cons(4, Rc::clone(&a));
}
```

Rc포인터는 clone을 통해 값을 공유할 수 있습니다

clone을 할때 마다 참조 카운트는 증가합니다
그리고 drop될 때 참조 카운트는 감소합니다

참조 카운트를 직접 확인 하는 방법은`Rc::strong_count`함수를 사용하는 것입니다

```Rust
enum List {
    Cons(i32, Rc<List>),
    Nil,
}

use List::{Cons, Nil};
use std::rc::Rc;

fn main() {
    let a = Rc::new(Cons(5, Rc::new(Cons(10, Rc::new(Nil)))));
    let b = Cons(3, Rc::clone(&a));
    let c = Cons(4, Rc::clone(&a));
	
    println!("{}", Rc::strong_count(&a));
}
```



Rc 스마트 포인터는 읽는 것만 허용합니다





















