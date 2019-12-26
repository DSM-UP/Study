use std::io;

fn main() {
    println!("1. ℃->℉");
    println!("2. ℉->℃");
    

    let mut menu: u32 = 0;
    loop {
        let mut in_menu = String::new();

        io::stdin().read_line(&mut in_menu)
                    .expect("Failed to read line");
        
        menu = match in_menu.trim().parse(){
            Ok(num) => num,
            Err(_) => {
                println!("숫자로 입력해주세요!!");
                continue
            },
        };
        break;
    }

    let mut data: u32 = 0;
    loop {
        let mut in_data = String::new();

        io::stdin().read_line(&mut in_data)
                    .expect("Failed to read line");
        
        data = match in_data.trim().parse(){
            Ok(num) => num,
            Err(_) => {
                println!("숫자로 입력해주세요!!");
                continue
            },
        };
        break;
    }

    let res: f64 = if menu == 1 {
        c_to_f(data as f64)
    } else if menu == 2 {
        f_to_c(data as f64)
    } else {
        0.
    };
    

    println!("{}",res);
}

fn f_to_c(x: f64) -> f64 {
    (x-32.)*5./9.
}

fn c_to_f(x: f64) -> f64 {
    println!("--{}--",x);
    x*9./5.+32.
}