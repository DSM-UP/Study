# Rust 제네릭

같은 동작을 하지만 타입만 다른 함수를 여러개 만드는 것은 귀찮고 시간 또한 많이 걸리는 작업이다

Rust에서는 이를 위해 다른 언어와 마찬가지로 제네릭이라는 방법을 제시한다

```Rust
fn Sum<T>(a: &T, b: &T) -> T {
    a + b
}
```



제네릭은 굳이 함수에서만 사용되는 것은 아니다

가장 흔한 예로 Option<T> Enum이 있다

```Rust
enum Option<T> {
    Some(T),
    None
}
```

