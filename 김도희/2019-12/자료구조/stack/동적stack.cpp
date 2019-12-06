#include <stdio.h>
#include <stdlib.h>
#define MAX_STACK 100

typedef struct
{
	int topindex;
	int cap;
	int* data;
} Stack;

void init(Stack * s)
{
	s->cap = 1;
	s->topindex == -1;
	s->data = (int*)malloc(cap * sizeof(int));
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
		s->data = (int*)realloc(s->data,cap * sizeof(int));
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

}