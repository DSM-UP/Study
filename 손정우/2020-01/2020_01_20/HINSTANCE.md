### HINSTANCE

H(handle) + Instance로 윈도우즈 운영체제에서 프로그램들을 구별하기 위한 ID값

동일한 프로그램을 여러개 실행한 경우 같은 값을 가진다



### ProcessID

메모리에 실행 가능한 상태로 재배열된 실행 코드를 '프로세스'라고 하며 이를 구별하기 위한 값이다

실행된 모든 프로그램은 각기 다른 ProcessID 값을 가진다



### 차이점

둘다 모두 실행되는 프로그램을 구별하기 위한 용도로 사용된다

HINSTANCE의 경우 같은 프로그램들이 동일하게 가지는 실행코드나 리소스를 공유하기 위해 사용되는 개념이다

ProcessID는 동일한 프로그램이든 아니든 모든 프로세스들을 개별적으로 구별하기 위한 값이다



### HINSTACE 값을 얻기

win32 프로그램은 WinMain 함수가 시작 함수인데 이 함수의 첫 번째 매개변수인 hInstance에 해당 프로그램의 HINSTACE 값이 전달된다

```C
int WINAPI WinMain(HINSTACE hInstance, HINSTACE hPrevInstance, LPSTR lpCmdLine, int nCmdShow){
    
    ...
    
}
```



