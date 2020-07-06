#include <stdio.h>
#define num 5

int main()
{
    int arr[num] = { 5, 10, 15 };
    int sum=0, i;
    for (i = 0; i < num; i++)
    {
        sum += arr[i];
    }
    printf("%d", sum);

    return 0;
}
