```rust
fn main() {
    println!("Hello World!");
}
```

위의 코드는 전형적인 hello world 코드이다.

println!은 매크로로 문자열을 콘솔에 출력한다.

`rustc 파일명`으로 컴파일 할 수 있고 확장자는 .rc로 한다.



## Cargo 사용하기

Cargo는 러스트의 빌드 시스템 및 패키지 매니저이다. Cargo가 코드를 빌드하고 의존하고 있는 라이브러리를 다운 받아줄 것이다.

```shell
cargo new "프로젝트명" --bin
cd "프로젝트명"
```

위의 명령어로 프로젝트를 생성할 수 있다.

`--bin`인자가 라이브러리가 아닌 실행가능한 애플리케이션으로 만든다는 설정이다.
cargo로 프로젝트를 생성시 Cargo.toml이라는 설정파일(main의 위치, 등), .gitignore파일 그리고 src라는 폴더가 이 자동으로 생성되었을 것이다.

```toml
[package]
name = "hello_cargo"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]

[dependencies]
```

위의 내용이 Cargo.toml의 내용이다.

[package]는 이후의 문장들이 패키지 환경설정이라는 것을 나타낸다.
[dependencies]는 의존성 리스트를 적을 수 있다.
러스트에서는 코드의 패키지를 크레이트(crate)라 부른다.



cargo build라는 명령어로 빌드가 가능하고 cargo run이라는 명령으로 빌드와 동시에 실행이 가능하다.
cargo check는 쉽게 말하면 문법 검사기로 컴파일이 되는 코드인지 확인하고 실행파일을 생성하지는 않는다.

cargo build --release로 최적화와 함께 컴파일 가능하다.



## 주석

| 주석 모양          | 설명                                                  |
| ------------------ | ----------------------------------------------------- |
| //                 | 줄 주석은 라인 끝까지 포함한다.                       |
| /* 시작      끝 */ | 블록 주석은 시작에서 끝나는 끝나는 부분까지 포함한다. |
| ///                | 해당 아이템에 대한 라이브러리 문서를 생성한다.        |
| //!                | 둘러싼 아이템을 위한 라이브러리를 생성한다.           |

```rust
fn main() {
	// 이것은 줄 주석
	
    /*
	 *	이것은 블록 주석
	 *	여러줄에 주석을 달 수 있다.
	 */
    
    /*
    	*을 사실 스타일이다.
    */
}
```



## 형식 지정 출력

매크로들을 `std::fmt`에 정의하여 사용하며 아래의 것들이 있다.

- `format!` : 텍스트를 형식에 맞춰 String으로 작성
- `print!` : `format!`처럼 형식에 맞추고 콘솔에 출력
- `println!` : `print!`하고 같은데 새 줄 추가

```rust
fn main() {
    // `{}`은 인자에 따라 자동으로 변환한다
    // 31이 String으로 변환된다.
    println!("{} days", 31);
    
}
```



## use

use 키워드를 사용하여 라이브러리를 가져올 수 있다.

`use std::io;`



## 함수

`fn`키워드로 함수를 선언하며 그 뒤에 함수 이름이 온다. ()는 인자, {가 함수의 시작, }이 함수의 끝을 의미한다.

~~~rust
fn main(){
	...
}
~~~



## 변수

```rust
let mut guess = String::new();
```

위의 코드를 보면 let, mut 키워드가 있고 guess는 변수 명일 것이다.

```rust
let foo = bar;
```

let을 통해 변수를 선언할 수 있다.
그리고 놀랍게도 rust는 기본으로 불변(const)이다. 이를 immutable 변수라고 한다.

```rust
let mut bar = 5;
```

mut을 사용하면 가변변수를 만들 수 있다. 이를 mutable 변수라고 한다.



