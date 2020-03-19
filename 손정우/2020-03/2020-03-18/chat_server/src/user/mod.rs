use std::net::TcpStream;
use std::io::prelude::*;

#[allow(dead_code)]
pub struct User {
    stream: TcpStream,
    id: u16,    //this is port number of TcpStreamd
}

impl User {
    pub fn new(stream: TcpStream) -> User{
        let id = stream.peer_addr().unwrap().port();
        User {
            stream,
            id,
        }
    }

    pub fn get_id(&self) -> u16 {
        self.id
    }

    pub fn read(&mut self, buf: &mut [u8]) -> std::io::Result<usize>{
        self.stream.read(buf)
    }

    pub fn write(&mut self, buf: &[u8]) -> std::io::Result<usize>{
        self.stream.write(buf)
    }

    pub fn try_clone(&self) -> std::io::Result<User>{
        let stream = self.stream.try_clone()?;
        Ok(User::new(stream))
    }
}