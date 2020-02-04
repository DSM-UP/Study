# Rust trait

다른 언어에서 다향성을 추구하기 위해 상속이나 인터페이스 등의 기능을 제공하는 것과 같이 Rust에서는 trait이라는 기능을 제공한다

기존의 상속과 인터페이스는 이미 있던것에 덧붙여 새로운 객체를 만드는 것과는 다른 이미 있는 객체에 trait을 붙이는 형식으로 제공된다



```Rust
pub trait Summarizable {
    fn summary(&self) -> String;
}
pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}
impl Summarizable for NewsArticle {
    fn summary(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.author, self.location)
    }
}

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summarizable for Tweet {
    fn summary(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}
```

