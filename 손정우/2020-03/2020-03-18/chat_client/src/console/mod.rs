use std::sync::mpsc;
use std::thread;

pub fn run_input_console() -> Box<mpsc::Receiver<String>> {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        loop{
            tx.send(input_console()).unwrap();
        }
    });
    Box::new(rx)
}

fn input_console() -> String{

    let mut msg = String::new();
    std::io::stdin().read_line(&mut msg).unwrap();
    let msg = String::from(msg.trim());
    msg
}
