#include <stdio.h>
#include <stdlib.h>
#define MAX_STACK 100
#define MAZE_SIZE 6

typedef struct {
	short r;
	short c;
}element;

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
		exit(0);
	}

	else
		return s->data[s->topindex];
}

element here = { 1,0 };

char maze[MAZE_SIZE][MAZE_SIZE] =
{
	{'1', '1', '1', '1', '1', '1'},
	{'e', '0', '1', '0', '0', '1'},
	{'1', '0', '0', '0', '1', '1'},
	{'1', '0', '1', '0', '1', '1'},
	{'1', '0', '1', '0', '0', 'x'},
	{'1', '1', '1', '1', '1', '1'},
};

//위치 스택에 삽입하는 함수
void loc(Stack* s, int r, int c)
{
	if (r < 0 || c < 0) return 0;
	
	if (maze[r][c] != '1' && maze[r][c] != '.')
	{
		element tmp;
		tmp.r = r;
		tmp.c = c;
		push(s, tmp);
	}
}

//미로 출력
void print(char maze[MAZE_SIZE][MAZE_SIZE])
{
	printf("\n");
	for (int r = 0; r < MAZE_SIZE; r++)
	{
		for (int c = 0; c < MAZE_SIZE; c++)
		{
			printf("%c", maze[r][c]);
		}
		printf("\n");
	}
}

int main()
{
	int r, c;
	Stack s;

	Init(&s);
	while (maze[here.r][here.c] != 'x')
	{
		r = here.r;
		c = here.c;
		maze[r][c] = '.';
		print(maze);
		loc(&s, r - 1, c);
		loc(&s, r + 1, c);
		loc(&s, r , c-1);
		loc(&s, r, c+1);

		if (empty(&s))
		{
			printf("\n\n실패"); return;
		}

		else
			here = pop(&s);
	}
	printf("\n\n성공!\n");
	return 0;
}