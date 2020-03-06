# Rust Multiple Threading

__스레드 생성__

`thread::spawn`함수로 새로운 스레드를 생성할 수 있다
인자로 클로저를 받는다



__스레드 기다라기__

스레드가 끝날때까지 기다리기 위해서 join핸들을 사용할 수 있다
`thread::spawn`의 반환 타입은 `JoinHandle`이며 JoinHandle의 메소드 `join`를 호출하여 해당 스레드가 끝날 때 까지 기다릴 수 있다



__다른 스레드로 소유권 이전__

어떤 변수에 대한 소유권을 다른 소유권으로 이전하기 위해 `move` 키워드를 사용해야한다

```Rust
use std::thread;

fn main(){
    let v = vec![1, 2, 3];
	let handle = thread::spawn(move || {
        println!("vecotr : {:?}", v);
    });
    //println!("vecotr : {:?}", v); <- 소유권이 없으므로 컴파일 에러
    handle.join();
}
```



__메세지 패싱__

스레드간 정보를 공유할 때 메모리를 공유하는 것은 위험하다 따라서 채널이라는 것을 통해 메세지를 보내고 받으며 정보를 공유한다

`mpsc::channel`함수를 통해 채널을 만들 수 있고 송신 객체와 수신 객체를 튜플로 묶어 반환한다

스레드를 생성할 때 그 스레드가 필요한 송신 혹은 수신 객체의 소유권을 이전시켜준다

```Rust
use std::sync::mpsc;

fn main(){
	let (tx, rx) = mpsc::channel();
    let hanndle = thread::spawn(move || {
        let v = vec![1, 2, 3]; 
        tx.send(v).unwrap();//tx의 소유권을 이전 받음
        //println!("vecotr : {:?}", v); <- 소유권이 없으므로 컴파일 에러
    });
    let vector = rx.recv().unwrap();
	
    println("{:?}", vector);
    
    handle.join();
}
```

송신부는 여러개가 될 수 있는데 `mspc::Sender::clone`함수로 송신부를 복사할 수 있다

수신부에서 수신시 `recv` 대신 `try_recv`을 사용하여  논블락킹 방식으로 통신할 수 있다
(논블락킹 : 수신이 올 때까지 기다리는 것아니라 수신이 온지 안온지 확인하여 안왔다면 기다리지 않고 다른 작업 수행)