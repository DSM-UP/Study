//첫 번째 방법
// fn main() {
//     let length1 = 50;
//     let width1 = 30;

//     println!("사각형의 넓이는 {}입니다.", area(length1, width1));

// }

// fn area(length: u32, width: u32) -> u32{
//     length * width
// }

//두 번째 방법 - 튜플 이용하기
// fn main() {
//     let rec1 = (50, 30);
//     println!("사각형의 넓이는 {}입니다.", area(rec1));
// }

// fn area(rec: (u32, u32)) -> u32{
//     rec.0 * rec.1
// }

//세 번째 방법 - 구조체를 이용하여 코드에 의미를 추가하기
// struct Rectangle {
//     length: u32,
//     width: u32,
// }

// fn main() {
//     let rec1 = Rectangle{ length: 50, width: 30 };
//     println!("사각형의 넓이는 {}입니다.", area(&rec1));
// }

// fn area(rec: &Rectangle) -> u32 {
//     rec.length * rec.width
// }


//메소드 이용하기
struct Rectangle {
    length: u32,
    width: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.length * self.width
    }
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.length > other.length && self.width > other.width
    }
}

fn main() {
    let rect1 = Rectangle{ length: 50, width: 30 };
    let rect2 = Rectangle { length: 40, width: 10 };
    let rect3 = Rectangle { length: 45, width: 60 };

    println!("rect1의 넓이 {}", rect1.area());
    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));
}