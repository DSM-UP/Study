### Modern c++_예외 처리

오늘은 예외 처리에대해 보게 되었다. 이미 과거에 한 번 공부한 적이 있는 내용이지만 오랫 동안 사용하지 않던 기능이라 대부분 잊어버렸다. 이번에 다시 보게 되니 예외 처리를 좀 더 자세하게 알게 되었고 또한 여러가지 예외 처리의 표현 방식을 알게 되었다.

```c++
struct ErrorType {};
void func() {
    throw ErrorType{};
}

void handleError(){
    try {
        func();
    } catch(ErrorType& e) {
        throw e;
        throw;
     	//예외를 다시 던져 보다 나중에 예외에 대해 처리하도록 함
    }
}

int main() {
    try {
        handleError();
    } catch() {
        std::cout <<"오류"<<std::endl;
    }
    return 0;
}
```



