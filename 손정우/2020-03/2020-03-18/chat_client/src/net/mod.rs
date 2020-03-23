use std::io::prelude::*;
use std::net::TcpStream;
use std::thread;

use std::sync::mpsc;

pub fn run_recv_chat(stream: TcpStream) -> Box<mpsc::Receiver<String>> {
    let (tx, rx) = mpsc::channel();

    let mut stream = stream;
    thread::spawn(move || {
        loop{
            let mut buffer = [0; 1024];
            stream.read(&mut buffer).unwrap();
            let data = String::from(String::from_utf8_lossy(&buffer));
            tx.send(data).unwrap();
        }
    });
    Box::new(rx)
}