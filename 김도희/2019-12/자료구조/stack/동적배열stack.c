#include <stdio.h>
#include <stdlib.h>
#define MAX_STACK 100

typedef struct
{
	int topindex;
	int cap;
	int* data;
} Stack;

void init(Stack* s)
{
	s->cap = 1;
	s->topindex = -1;
	s->data = (int*)malloc(s->cap * sizeof(int));
}

int empty(Stack* s)
{
	return (s->topindex == -1);
}

int full(Stack* s)
{
	return (s->topindex == (s->cap - 1));
}

int push(Stack* s, int data)
{
	if (full(s)) {
		s->cap *= 2;
		s->data = (int*)realloc(s->data, s->cap * sizeof(int));
	}
	s->data[++(s->topindex)] = data;
}

int pop(Stack* s)
{
	if (empty(s))
	{
		printf("공백 오류");
		exit(0);
	}
	else
		return s->data[(s->topindex)--];
}

int main()
{
	Stack s;
	init(&s);

	push(&s, 1);
	push(&s, 2);
	push(&s, 3);
	printf("%d ", pop(&s));
	printf("%d ", pop(&s));
	printf("%d ", pop(&s));
}