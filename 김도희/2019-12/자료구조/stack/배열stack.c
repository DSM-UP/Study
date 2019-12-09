#include <stdio.h>
#include <stdlib.h>
#define MAX_STACK 10

typedef int element;
typedef struct
{
	int topindex;
	element data[MAX_STACK];
}Stack;

void Init(Stack* s)
{
	s->topindex = -1;
}

int empty(Stack* s)
{
	return (s->topindex == -1);
}

int full(Stack* s)
{
	return (s->topindex == (MAX_STACK)-1);
}

element push(Stack* s, element d)
{
	if (full(s))
	{
		printf("스택 포화 \n");
		exit(0);
	}

	else
		return s->data[++(s->topindex)] = d;
}

element pop(Stack* s)
{
	if (empty(s))
	{
		printf("스택 공백 \n");
		exit(0);
	}

	else
		return s->data[(s->topindex)--];
}

element peek(Stack* s)
{
	if (empty(s))
	{
		printf("스택 공백");
		return 0;
	}

	else
		return s->data[s->topindex];
}

int main()
{
	Stack s;
	Init(&s);

	printf("%d ", push(&s, 1));
	printf("%d ", push(&s, 2));
	printf("%d ", push(&s, 3));
	printf("\n\n");
	printf("%d ", pop(&s));
	printf("%d ", pop(&s));
	printf("%d ", pop(&s));
	printf("%d ", pop(&s));

	return 0;
}