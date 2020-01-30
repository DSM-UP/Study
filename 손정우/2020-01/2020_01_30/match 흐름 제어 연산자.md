# match 흐름 제어 연산자

다른 언어에서의 switch이다

```rust
enum Coin{
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u32{
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```



아래와 같이 스코프를 이용하여 여러줄을 쓸 수도 있다



```rust
match coin {
        Coin::Penny => {
            println!("Lucky penny!");
            1
    	},
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
```



값을 바인딩하는 패턴은 다음과 같이 사용할 수 있다

```rust
enum Coin{
    Penny,
    Nickel,
    Dime,
    Quarter(String),
}

fn value_in_cents(coin: Coin) -> u32{
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("Hello {}",state);
            25
        },
    }
}
```