#include <stdio.h>
#include <stdlib.h>

#define MAX_QUEUE 5

typedef int element;
typedef struct {
	int rear;
	int front;
	element data[MAX_QUEUE];
}Queue;

void Init(Queue * q)
{
	q->front = -1;
	q->rear = -1;
}

int empty(Queue* q)
{
	return (q->rear == q->front);
}

int full(Queue* q)
{
	return (q->rear == (MAX_QUEUE)-1);
}

void Enqueue(Queue* q, int d)
{
	if ((full(q)))
	{
		printf("포화");
		exit(0);
	}
	q->data[++(q->rear)] = d;
}

int dequeue(Queue* q)
{
	if ((empty(q)))
	{
		printf("공백");
		exit(0);
	}
	return q->data[++(q->front)];
}

void print(Queue* q)
{
	int i;

	for (i = 0; i < MAX_QUEUE; i++)
	{
		if (i <= q->front || i > q->rear)
			printf("  |");
		else
			printf("%d|", q->data[i]);
	}
	printf("\n");
}

int main()
{
	Queue q;
	Init(&q);

	Enqueue(&q, 10); print(&q);
	Enqueue(&q, 20); print(&q);
	Enqueue(&q, 30); print(&q);

	printf("%d ", dequeue(&q)); print(&q);
	printf("%d ", dequeue(&q)); print(&q);
	printf("%d ", dequeue(&q)); print(&q);

	return 0;

}