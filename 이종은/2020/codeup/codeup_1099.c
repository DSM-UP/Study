#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int house[10][10], i, j;
    for (i = 0; i < 10; i++)
    {
        for (j = 0; j < 10; j++)
        {
            scanf("%d", &house[i][j]);
        }
    }
    putchar('\n');

    i = 1, j=1;
    while (house[i][j]!=2)
    {
        if (house[i][j] == 0)
        {
            house[i][j] = 9;
            if (house[i][j + 1] == 0)
                j++;
            else
                i++;
            continue;
        }
        else if (house[i][j + 1] == 1)
        {
            i++;
            continue;
        }
        /*else if (house[i][j]==2)
        {
            house[i][j] = 9;
            break;
        }*/

    }
    house[i][j] = 9;

    /*for (i = 1; i < 10; i++)
    {
        for (j = 1; j < 10; j++) //for문을 사용하면 다시i값이 플러스 될 때 j도 1이 됨
        {
            if (house[i][j] == 0)
            {
                house[i][j] = 9;
                
            }
            else if (house[i][j+1] == 1)
            {
                //house[i][j] = 9;
                i++;
            }
            else //if (house[i][j] == 2)
            {
                //house[i][j] = 9;
                break;
            }
        }
    }*/
    for (i = 0; i < 10; i++)
    {
        for (j = 0; j < 10; j++)
        {
            printf("%d ", house[i][j]);
        }
        putchar('\n');
    }


    return 0;
}
