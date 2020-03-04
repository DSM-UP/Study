# Rust에서 소멸자

Rust에서는 메모리가 더 이상 유효하지 않게 되는 것을(메모리 해제) drop이라고 부른다
그리고 Rust에서는 객체가 drop될 때 코드를 실행하는 소멸자 역할로 Drop 트레잇(인터페이스)를 제공한다

우리는 Drop 트레잇을 구현함으로서 일반적으로 소멸자라 불리는 메서드를 만들 수 있게 된다



[예시]

```Rust
struct MyObject {
	data: String,
}

impl Drop for MyObject {
    fn drop(&mut self) {
        println!("drop {}", self.data);
    }
}

fn main(){
    let obj = MyObject{data: String::from("obj") };
    println!("object created");
}
```



[결과]

```Rust
object created
drop obj

```



---



아쉽지만 우리가 직접 drop 메서드를 호출할 수는 없도록 Rust가 막는다

그럼 drop메서드가 호출 될려면 객체가 스코프가 벗어나야하는데 일찍 객체가 drop 되도록 하는 방법이 있다

drop이라는 함수가 존재하는데 이를 이용하면된다



[예시]

```Rust
fn main(){
    let obj = MyObject{data: String::from("obj") };
    drop(obj);
    println!("end");
}
```



[결과]

```Rust
drop obj
end

```

