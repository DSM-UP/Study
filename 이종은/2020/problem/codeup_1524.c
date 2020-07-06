#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int map[9][9], i, j, sum=0, a, b;
    for (i = 0; i < 9; i++)
    {
        for (j = 0; j < 9; j++)
        {
            scanf("%d", &map[i][j]);
        }
    }


    scanf("%d %d", &a, &b);
    
    a -= 1;
    b -= 1;

    if (map[a][b] == 1)
        printf("-1");
    else
    {
        sum = map[a - 1][b] + map[a - 1][b - 1] + map[a - 1][b + 1] + map[a][b - 1] + map[a][b + 1] + map[a + 1][b] + map[a + 1][b - 1] + map[a + 1][b + 1];
    }

    printf("%d", sum);
    return 0;
}
