#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int num1, num2, num3;
    printf("세 정수를 입력하세요. : ");
    scanf("%d %d %d", &num1, &num2, &num3);
    printf("연산 결과 = %d", (num1 - num2) * (num2 + num3) * (num3 % num1));

    return 0;
}
