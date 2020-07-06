#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int num,sum=0;
    printf("정수를 입력하세요. : ");
    scanf("%d", &num);
    while (num != 0)
    {
        sum += num;
        printf("정수를 입력하세요. : ");
        scanf("%d", &num);

        
    }
    printf("%d", sum);
    

    return 0;
}
