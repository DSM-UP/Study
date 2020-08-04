#### _acount.h (헤더 파일)

```c
#pragma once
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
typedef struct
{
    char name[11];
    int money;
    int num;
}acount;
void management(acount* point[], int Unique_number);
void _delete(int Unique_number, acount* point[]);
void add(acount* point[], int Unique_number);
```

#### bank.c

``` c
#include "_acount.h"
int main()
{
    acount* point[1000];
    int k = 1, i = 0, Unique_number = 0;
    while (k != 0)
    {
        putchar('\n');
        printf("계좌 추가는 1, 계좌 삭제는 2, 계좌 관리는 3, 종료는 0 입력.\n");
        scanf("%d", &k);
        if (k >= 0 && k <= 3)
        {
            if (k == 1) //계좌 추가
            {
                Unique_number++;
                add(point, Unique_number);
            }
            else if (k == 2) //계좌 삭제
            {
                _delete(Unique_number, point);
            }
            else if (k == 3)
            {
                management(point, Unique_number);
            }
        }
        else
        {
            printf("다시 입력해주세요.\n");
        }
    }
    for (i = 0; i < Unique_number; i++)
    {
        free(point[i]);
    }
    return 0;
}
```

#### add_function.c (계좌 추가)

```c
#include "_acount.h"
void add(acount* point[], int Unique_number)
{
    point[Unique_number - 1] = (acount*)malloc(sizeof(acount));
    printf("계좌 소지자 명을 입력하세요\n");
    scanf("%s", point[Unique_number - 1]->name);
    point[Unique_number - 1]->money = 0;
    printf("계좌 고유번호는 %d\n", Unique_number);
    point[Unique_number - 1]->num = Unique_number;
    printf("계좌가 만들어졌습니다\n");

}
```

#### delete_function.c (계좌 삭제)

```c
#include "_acount.h"
void _delete(int Unique_number, acount* point[])
{
    int dnumber;
    printf("삭제할 계좌의 고유번호를 입력하세요\n");
    scanf("%d", &dnumber);
    if (point[dnumber - 1]->num == 0)
    {
        printf("이미 삭제된 계좌입니다\n");
        return 0;
    }
    if (Unique_number >= dnumber)
    {
        for (int i = 0; i <= Unique_number - 1; i++) //계좌를 찾는 과정 //point[i]->num== dnumber+1
        {
            if (point[i]->num == dnumber)
            {
                point[i]->num = 0;
                //free(point[i]); //delete에서 free
                printf("삭제가 되었습니다\n");
            }
        }
    }
    else
    {
        printf("고유번호를 다시 확인해주세요.\n");
    }
}
```

#### management_function.c (계좌 관리)

```c
#include "_acount.h"
void management(acount* point[], int Unique_number)
{

    int mine, your, money, i;
    printf("송금은 1, 입금은 2, 출금은 3, 잔액 확인은 4 입력\n");
    scanf("%d", &i);
    if (i == 1)
    {
        printf("자신의 계좌 고유 번호를 입력하세요\n");
        scanf("%d", &mine);
        if (mine > Unique_number||mine<=0)
        {
            printf("자신의 계좌 고유 번호를 다시 확인해주세요.\n");
            return 0;
        }
        else if (point[mine - 1]->num == 0)
        {
            printf("삭제된 계좌입니다. 고유 번호를 다시 확인해주세요.\n");
            return 0;
        }
        printf("송금할 계좌의 고유 번호를 입력하세요\n");
        scanf("%d", &your);
        if (your > Unique_number||your<=0)
        {
            printf("송금할 계좌의 계좌 고유 번호를 다시 확인해주세요.\n");
            return 0;
        }
        else if (point[your - 1]->num == 0)
        {
            printf("삭제된 계좌입니다. 고유 번호를 다시 확인해주세요.\n");
            return 0;
        }
        printf("송금할 금액을 입력하세요\n");
        scanf("%d", &money);

        if (point[mine - 1]->money >= money)
        {
            point[your - 1]->money = point[your - 1]->money + money;
            point[mine - 1]->money = point[mine - 1]->money - money;
            printf("송금되었습니다\n");
        }
        else
        {
            printf("잔액이 부족합니다\n");
        }
    }
    else if (i == 2)
    {
        printf("입금할 계좌의 고유 번호를 입력하세요\n");
        scanf("%d", &your);
        if (your > Unique_number || your <= 0)
        {
            printf("입금할 계좌의 고유 번호를 다시 확인해주세요.\n");
            return 0;
        }
        else if (point[your - 1]->num == 0)
        {
            printf("삭제된 계좌입니다\n");
            return 0;
        }
        printf("입금할 금액을 입력하세요\n");
        scanf("%d", &money);
        if (money <= 0)
        {
            printf("0 이상의 금액만 입금할 수 있습니다.\n");
            return 0;
        }
        point[your - 1]->money = point[your - 1]->money + money;

        printf("입금되었습니다\n");
    }
    else if (i == 3)
    {
        printf("자신의 계좌 고유 번호를 입력하세요\n");
        scanf("%d", &mine);
        if (mine > Unique_number || mine <= 0)
        {
            printf("자신의 계좌 고유 번호를 다시 확인해주세요.\n");
            return 0;
        }
        else if (point[mine - 1]->num == 0)
        {
            printf("삭제된 계좌입니다\n");
            return 0;
        }
        printf("출금할 금액을 입력하세요\n");
        scanf("%d", &money);

        if (money <= 0)
        {
            printf("0이하의 금액은 출금할 수 없습니다.\n");
        }
        else if (point[mine - 1]->money >= money) 
        {
            point[mine - 1]->money = point[mine - 1]->money - money;
            printf("출금되었습니다\n");
        }
        else
        {
            printf("잔액이 부족합니다\n");
        }
    }
    else if (i == 4)
    {
        printf("잔액 확인할 계좌 고유 번호를 입력하세요\n");
        scanf("%d", &mine);
        if (mine > Unique_number || mine <= 0)
        {
            printf("자신의 계좌 고유 번호를 다시 확인해주세요.\n");
            return 0;
        }
        else if (point[mine - 1]->num == 0)
        {
            printf("삭제된 계좌입니다\n");
            return 0;
        }
        printf("현재 잔액은 %d입니다\n", point[mine - 1]->money);
    }
}
```

