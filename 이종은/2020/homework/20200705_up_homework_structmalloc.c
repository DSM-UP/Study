#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

typedef struct _item {
    int data;
    struct _item* next;
}item;

int main()
{
    item* A=(item*)malloc(sizeof(item));
    item* B = (item*)malloc(sizeof(item));
    item* C = (item*)malloc(sizeof(item));

    A->next = B;
    B->next = C;
    C->next = A;
    return 0;
}
