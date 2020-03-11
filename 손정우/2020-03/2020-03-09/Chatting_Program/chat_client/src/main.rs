use std::io::prelude::*;
use std::net::TcpStream;

fn main() {
    if let Ok(mut stream) = TcpStream::connect("127.0.0.1:8085"){
        println!("Success");
        let mut buf = [0; 512];
        loop{
            stream.read(&mut buf).unwrap();
            println!("{}", String::from_utf8_lossy(&buf));
        }
    }
    else {
        println!("fail");
    }

}
