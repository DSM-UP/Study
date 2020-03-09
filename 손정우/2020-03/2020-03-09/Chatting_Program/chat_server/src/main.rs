use std::io::prelude::*;
use std::thread;
use std::net::TcpListener;
use std::sync::mpsc;
use std::net::TcpStream;

fn main() {
    let listener = TcpListener::bind("127.0.0.1:8085").unwrap();
    let mut user_collection = vec![];

    let (user_sender, user_getter) = mpsc::channel();

    let handle = thread::spawn(move || {
        for stream in listener.incoming() {
            let user = stream.unwrap();
            user_sender.send(user).unwrap();
        }

    });

    loop{
        user_collection.push(user_getter.recv().unwrap());

        for mut u in &user_collection {
            u.write(String::from("가나다라마").as_bytes()).unwrap();
        }

        // let mut last_user : &TcpStream = &user_collection[user_collection.len() - 1];
        // last_user.write(String::from("가나다라마").as_bytes()).unwrap();
        // println!("{:?}",String::from("가나다라마").as_bytes());
    }

    handle.join().unwrap();
    
}
