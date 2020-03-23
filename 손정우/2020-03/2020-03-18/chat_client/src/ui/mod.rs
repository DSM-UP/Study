use std::io::prelude::*;
use std::io::stdout;

use crossterm::{execute, terminal, cursor};

pub struct UiManager {
    line: u16,
}

impl UiManager {
    pub fn new() -> UiManager{

        UiManager::print_input_box();
        UiManager{
            line: 0,
        }
    }
    
    fn print_input_box() {
        execute!(stdout(), cursor::MoveTo(0, terminal::size().unwrap().1 - 3)).unwrap();

        let size_x = terminal::size().unwrap().0 - 1;
        print!("┌ 입력 창");
        for _ in 0..(size_x - 10) {
            print!("─");
        }
        println!("┐");

        print!("│");
        for _ in 0..(size_x - 2) {
            print!(" ");
        } println!("│");

        print!("└");
        for _ in 0..(size_x - 2) {
            print!("─");
        } print!("┘");
        std::io::stdout().flush().unwrap();

        execute!(stdout(), cursor::MoveTo(2, terminal::size().unwrap().1 - 2)).unwrap();
    }

    pub fn print_chat(&mut self, chat: &String) {
        let term_y = terminal::size().unwrap().1;
        execute!(stdout(), cursor::MoveTo(0, self.line)).unwrap();
        println!("{}", chat);
        if (term_y - 3) > self.line {
            self.line += 1;
        }
        else {
            execute!(stdout(), terminal::ScrollUp(1)).unwrap();
        }
        UiManager::print_input_box();
    }
}