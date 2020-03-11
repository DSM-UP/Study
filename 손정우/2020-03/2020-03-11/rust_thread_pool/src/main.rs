extern crate rust_thread_pool;
use rust_thread_pool::ThreadPool;

use std::time::Duration;

fn main() {
    let pool = ThreadPool::new(4);

        pool.execute(||{
            println!("Hello");
        });
        pool.execute(||{
            println!("Hello");
        });
        pool.execute(||{
            println!("Hello");
        });
        pool.execute(||{
            println!("Hello");
        });

    std::thread::sleep(Duration::new(5, 2));
}
