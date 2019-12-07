#include "CircularQueue.h"
#include <stdio.h>
#include <stdlib.h>

void QueueInit(Queue* pq)
{
	pq->front = 0;
	pq->rear = 0;
	int i;
	for (i = 0; i < QUE_LEN; i++)
		pq->queArr[i] = NULL;
}

int isFull(Queue* pq)
{
	if ((pq->front) == (pq->rear) + 1 || (pq->front == 0 && pq->rear == 7))
		return TRUE;
	return FALSE;
}

int isEmpty(Queue* pq)
{
	if (pq->front == pq->rear)
		return TRUE;
	else
		return FALSE;
}

int NextPosIdx(int pos)
{
	if (pos == QUE_LEN - 1)
		return 0;
	else
		return pos + 1;
}

void EnQueue(Queue* pq, Data data)
{
	if (isFull(pq))
	{
		Screen(pq, "[STATUS] QUEUE IS FULL!!", NULL);
		return;
	}

	pq->rear = NextPosIdx(pq->rear);
	pq->queArr[pq->rear] = data;
	Screen(pq, "[STATUS] 입력한 원소:", data);
}

Data DeQueue(Queue* pq)
{
	if (isEmpty(pq))
	{
		Screen(pq, "[STATUS]: 큐가 비어있어요!!", NULL);
		return;
	}
	
	pq->front = NextPosIdx(pq->front);
	Screen(pq, "[STATUS] 삭제한 원소: ", pq->queArr[pq->front]);
	pq->queArr[pq->front] = NULL;
	return pq->queArr[pq->front];
	
}
