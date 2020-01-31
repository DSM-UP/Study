# if let을 이용한 패턴 매칭

이전에 match를 이용한 패턴 매칭을 보았다

그러나 match는 패턴 매칭을 위해 가능한 모든 경우에 대한 갈래(arm)을 모두 만들어야 하는 불편함이 있다

아래는 Option<T>을 활용한 그 예이다

```rust
let some_u8_value = Some(0u8);

match some_u8_value {
    Some(8) => println!("8!!"),
    _ => println("other"),
}
```

위의 경우를 보면 오직 Some(8) 값을 가지는 지 확인하기 위해 `_ => println("other"),` 구문이 들어가게 되었다

하지만 if let을 이용한다면 이는 더 짧게 사용이 가능하다

```rust
if let Some(8) = some_u8_value {
    println!("8!!");
}
```



if let 구문은 else를 사용할 수 있다

```rust
let mut count = 0;
match coin {
    Coin::Quarter(state) => println!("State quarter from {:?}!", state),
    _ => count += 1,
}
```

위의 코드를 if let과 else로 바꾸면 아래와 같다

```rust
let mut count = 0;
if let Coin::Quarter(state) = coin {
    println!("State quarter from {:?}!", state);
} else {
    count += 1;
}
```

