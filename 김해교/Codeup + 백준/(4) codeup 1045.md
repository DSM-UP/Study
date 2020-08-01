# codeup 1045

**[기초-산술연산] 정수 2개 입력받아 자동 계산하기 **

```c
#include <stdio.h>

int main(){
	int a, b; // 일단 정수형이니 int, 2개 입력받아야 하니 2개의 변수 선언.
    scanf("%d %d", &a, &b); // int이니 %d로 하고 2개 입력 받아야 하니 2개 쓴다.
    printf("%d\n", a+b); //첫 줄에는 두 수의 합이어서 a+b로 출력
    printf("%d\n", a-b); //첫 줄에는 두 수의 차이어서 a-b로 출력
    printf("%d\n", a*b); //첫 줄에는 두 수의 곱이어서 a*b로 출력
    printf("%d\n", a/b); //첫 줄에는 두 수의 몫이어서 a/b로 출력
    printf("%d\n", a%b); //첫 줄에는 두 수의 나머지이어서 a%b로 출력
    printf("%.2lf\n", (float)a/b); //첫 줄에는 두 수의 나눈 값을 소수점 둘째 자리까지 출력이어서 %.2.lf로 하고 (float)a/b로 출력
        
    return 0; // 항상 쓰기
}
```

<img src="C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200702201640611.png" alt="image-20200702201640611" style="zoom:200%;" /> (result)