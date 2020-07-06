#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int num,i,j,k;
    scanf("%d", &num);
    for (i = 0; i < num; i++)
    {
        for (j = 0; j <= i; j++)
        {
            printf("*");
        }
        for (k = (num*2)-1; k > (i*2)+1; k--)
        {
            printf(" ");
        }
        for (j = 0; j <= i; j++)
        {
            printf("*");
        }
        putchar('\n');
    }
    for (i = 0; i < num; i++)
    {
        for (j = num-1; j > i; j--)
        {
            printf("*");
        }
        for (k = 0; k <= (i*2)+1; k++)
        {
            printf(" ");
        }
        for (j = num-1; j > i; j--)
        {
            printf("*");
        }
        putchar('\n');
    }


    return 0;
}
