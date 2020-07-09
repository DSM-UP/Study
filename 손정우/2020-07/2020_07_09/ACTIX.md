# ACTIX

러스트의 웹 백엔드 프레임워크다

### 목차

- [개요](#개요)
- [시작하기](#시작하기)

- [참고 문서](#참고 문서)

### 개요

> 러스트의 강력한 액터 시스템과 최고로 재미있는 웹 프레임워크

위의 말은 Actix 공식 페이지에 올라와 있는 말이다.

Actix의 특징으로는 4가지로 소개하고 있다

- 타입 안정성
  타입을 가지는 모든 것들의 타입을 잊어버려도 된다. Rust이기 때문에 타입따위 완벽하게 관리된다.
- 많은 기능들
  HTTP/2, logging 등을 포함한 수 많은 기능을 제공한다
- 높은 확장성
  Actix에서 사용할 수 있는 라이브러리를 쉽게 만들 수 있다
- 미친듯 빠른 속도
  그냥 빠르다 미친듯이

### 시작하기

```toml
[dependencies]
actix-web = "2.0"
actix-rt = "1.0"
```

```rust
use actix_web::{web, App, HttpResponse, HttpServer, Responder};

async fn index() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")   
}

async fn index2() -> impl Responder {
    HttpResponse::Ok().body("Hello world again!")
}


#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(index))
            .route("/again", web::get().to(index2))
    })
    .bind("127.0.0.1:8088")?
    .run()
    .await
}
```

















































### 참고 문서

actix 공식 사이트
https://actix.rs/