#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int sum=0;
int AddToTotal(num);

int main()
{
	int num;
	int i;

	for (i = 0; i < 3; i++)
	{
		fputs("정수를 입력하세요. : ", stdout);
		scanf("%d", &num);

		printf("%d회 누적 합계 = %d \n", i + 1, AddToTotal(num));
	}

	return 0;
}

int AddToTotal(int num)
{
	
	sum += num;
	return sum;
}