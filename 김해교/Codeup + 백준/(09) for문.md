# for문

* 들여쓰기 주의

### 1. 구구단

**N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램**

```c
#include <stdio.h>

int main(){
	int n;
	scanf("%d", &n);
	for(int i=1;i<=9;i++){ // 1부터 9까지 반복
		printf("%d * %d = %d\n", n, i, n*i); // 반복이 될 때마다 곱하면서 출력
	}
	return 0;
}
```



### 2. 합

**n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램**

```c
#include <stdio.h>

int main(){
	int n, sum=0;
	scanf("%d", &n);
	for(int i=1;i<=n;i++){ // 1부터 입력받은 n까지 반복
		sum += i; // 반복이 될 때마다 초깃값이 0인 sum에 더하기
	}
	printf("%d", sum); // 반복문 돌면서 더한 값을 저장한 sum 출력	
	return 0;
}
```



### 3-1. N 찍기

**자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램**

```C
#include <stdio.h>

int main(){
	int n;
	scanf("%d", &n);
	for(int i=1;i<=n;i++){ // 1부터 입력받은 n까지 반복
		printf("%d\n", i); // 반복문이 끝날 때까지 1씩 더한 i의 값 출력
	}
	return 0;
}
```



### 3-2. 기찍 N

**자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램**

```c
#include <stdio.h>

int main(){
	int n;
	scanf("%d", &n);
	for(int i=n;i>0;i--){ //입력받은 n부터 돌면서 -1씩 빼면서 0이 되기 전까지 반복
		printf("%d\n", i); // 반복문이 끝날 때까지 n부터 1씩 뺀 i의 값 출력
	}
	return 0;
}
```



### 4. X보다 작은 수

**정수 N개로 이루어진 수열 A와 정수 X가 있다, 이때 A에서 X보다 작은 수를 모두 출력하는 프로그램**

```c
#include <stdio.h>

int main(){
	int a, b, x;
	scanf("%d %d\n", &a, &b);
	for(int i=1;i<=a;i++){ // 1부터 입력받은 a이 될 때까지 반복
		scanf("%d ", &x); // 반복하면서 x들을 입력받는다
		if(x<b){ // 만약에 x가 b의 수보다 작으면
			printf("%d ", x); // 출력해라
		}
	}
	return 0;
}
```

