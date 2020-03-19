extern crate chat_client;

use std::io::prelude::*;

use std::sync::mpsc::TryRecvError;
use std::net::TcpStream;

use chat_client::net::run_recv_chat;
use chat_client::ui::UiManager;
use chat_client::console::run_input_console;

fn main() {
    if let Ok(mut stream) = TcpStream::connect("127.0.0.1:8085"){
        let mut ui_manager = UiManager::new();
        let chat_receiver = run_recv_chat(stream.try_clone().unwrap());
        let console_receiver = run_input_console();

        loop {
            match console_receiver.try_recv() {
                Ok(msg) => {stream.write(msg.as_bytes()).unwrap();},
                Err(TryRecvError::Empty) => {},
                _ => break,
            };
            
            match chat_receiver.try_recv() {
                Ok(chat_data) => ui_manager.print_chat(&chat_data),
                Err(TryRecvError::Empty) => continue,
                _ => break,
            };


        }

    }
    else {
        println!("서버에 연결 할 수 없습니다");
    }
}