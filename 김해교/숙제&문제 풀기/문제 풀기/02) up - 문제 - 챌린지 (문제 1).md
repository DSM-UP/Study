# 세 개의 정수를 연산하는 프로그램

**(num1과 num2의 차) * (num2와 num3의 합) * (num3과 num1의 나머지)**

```c
#include <stdio.h>

int main() {
	int num1, num2, num3, sum;
    printf("세 정수를 입력하세요. : ");
    scanf("%d %d %d", &num1, &num2, &num3);
    sum = (num1-num2)*(num2+num3)*(num3%num1); 
    printf("연산 결과 = %d", sum);
	return 0;
}
```

