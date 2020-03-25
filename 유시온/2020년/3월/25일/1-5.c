// 입력 - scanf() 입력 예제
#include <stdio.h>

int main() {
	int favoriteNumber = 1;

	printf("방금 내 최애 숫자 : %d\n", favoriteNumber);
	scanf("%d", &favoriteNumber);
	printf("지금 내 최애 숫자 : %d\n", favoriteNumber);

	return 0;
}