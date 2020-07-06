#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main()
{
    char arr[100] = "";
    int i;
    gets(arr);
    for (i = 0; arr[i]!='\0'; i++)
    {
        if (arr[i] >= 'A' && arr[i] <= 'Z')
        {
            arr[i] = arr[i] + 32;
        }
        else if(arr[i] >= 'a' && arr[i] <= 'z')
        {
             arr[i] = arr[i] - 32;
        }
    }
    puts(arr);

    return 0;
}
