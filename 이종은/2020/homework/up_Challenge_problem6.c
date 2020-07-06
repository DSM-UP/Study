#include <stdio.h>

int main()
{
    int i, j, value =0;
    for (i = 0; i < 8; i++)
    {
        value += 3;
    }
    value /= 4;

    printf("%d", value);

    return 0;
}
