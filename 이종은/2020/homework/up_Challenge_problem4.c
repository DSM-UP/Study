#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int i, j, sum=0;

    for (i = 1; i <= 9; i++)
    {
        for (j = 9; j >= 1; j--)
        {
            sum = ((10 * i) + j) + ((10 * j) + i);
            if (sum == 99)
            {
                printf("X = %d, Y = %d\n", i, j);
            }
        }
    }

    return 0;
}
