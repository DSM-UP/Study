extern crate chat_server;

use std::thread;
use std::net::TcpListener;
use std::sync::{Arc, Mutex};

use chat_server::thread_pool::ThreadPool;
use chat_server::user::User;
use chat_server::room::Room;

fn main() {
    let listener = TcpListener::bind("127.0.0.1:8085").unwrap();
    let pool = ThreadPool::new(15);
    
    thread::spawn(move || {
        let room = Arc::new(Mutex::new(Room::new()));
        for stream in listener.incoming() {
            let mut user = User::new(stream.unwrap());
            room.lock().unwrap().join(user.try_clone().unwrap());
            let _room = Arc::clone(&room);
            pool.execute(move || {
                let room = _room;
                loop {
                    let mut buff = [0; 512];
                    match user.read(&mut buff) {
                        Err(_) => break,
                        Ok(_)  => {
                            let chat_data = format!("[{}]{}",user.get_id(), String::from_utf8_lossy(&buff));
                            //println!("{}",chat_data);
                            //println!("{} |> {}", user.get_id() ,String::from_utf8_lossy(&buff));
                            //user.write(String::from("너가 보냄").as_bytes()).unwrap();
                            //room.lock().unwrap().broadcast(&buff);
                            room.lock().unwrap().broadcast(&chat_data.as_bytes());
                        },
                    }
                }
                room.lock().unwrap().leave(user.get_id());
                println!("{} 서버 나감", user.get_id());
            });
        }
    });







    //handle.join().unwrap();
    let mut msg = String::new();
    std::io::stdin().read_line(&mut msg).unwrap();
}