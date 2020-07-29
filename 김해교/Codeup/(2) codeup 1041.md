# codeup 1041

 **[기초-산술연산] 문자 1개 입력받아 다음 문자 출력하기**

```c
#include <stdio.h>

int main(){
	char a; // 영문자니까 int가 아닌 char로 쓴다.
	scanf("%c", &a); // 문자니까 %c로 써서 입력 받는다. 
	printf("%c", a+1); // 그 다음 문자를 출력해야 하니까 +1을 붙인다.
    
    return 0; // 이 리턴은 꼭 써주기
}
```

<img src="C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200702200428465.png" alt="image-20200702200428465" style="zoom:200%;" /> (result)