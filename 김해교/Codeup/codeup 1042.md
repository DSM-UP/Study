# codeup 1042

 **[기초-산술연산] 정수 2개 입력받아 나눈 몫 출력하기**

```c
#include <stdio.h>

int main(){
	int a, b; // 일단 정수형이니 int, 2개 입력받아야 하니 2개의 변수 선언.
    scanf("%d %d", &a, &b); // int이니 %d로 하고 2개 입력 받아야 하니 2개 쓴다.
    printf("%d", a/b); // 출력할 때의 값은 a를 b로 나눈 몫을 출력해야 하니 a/b로 쓴디.
        
    return 0; // 항상 쓰기
}
```

<img src="C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200702200841976.png" alt="image-20200702200841976" style="zoom:200%;" /> (result)