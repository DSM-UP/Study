#include <stdio.h>

int main()
{
    int i, j;
    for (i = 2; i < 10; i+=2)
    {
        printf("====%d단====\n",i);
        for (j = 1; j <= i; j++)
        {
            printf("%d * %d = %d\n", i, j, i * j);
            putchar('\n');
        }
    }

    return 0;
}
