# for문 - 별찍기 

#### 1. 첫째 줄부터 N번째 줄까지 차례대로 별을 출력

```c
#include <stdio.h>

int main(){
	int n;
	scanf("%d", &n);
	for(int i=1;i<=n;i++){
		for(int j=1;j<=i;j++){
			printf("*"); 
		}
	printf("\n");
	}
	return 0;
}
```

#### 2. 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

```c
#include <stdio.h>

int main(){
	int n;
	scanf("%d", &n);
	for(int i=1;i<=n;i++){
		for(int j=i;j<n;j++){
			printf(" "); 
		}
		for(int j=1;j<=i;j++){
			printf("*");
		}
	printf("\n");
	}
	return 0;
}
```

#### 3. 옆으로 돌린 모양으로 별 찍는 문제

```c
#include <stdio.h>

int main(){
	int a;
	scanf("%d", &a);
	for(int i=1;i<=a;i++){
		for(int j=0;j<i;j++){
			printf("*");
		}
		printf("\n");
	}
	for(int i=1;i<a;i++){
		for(int j=i;j<a;j++){
			printf("*");
		}
		printf("\n");
	}
	return 0;
}
```



#### 4. 모래시계 모양으로 별 찍는 문제

```c
#include <stdio.h>

int main(){
	int a;
	scanf("%d", &a);
	for(int i=1;i<=a;i++){
		for(int j=1;j<i;j++){
			printf(" ");
		}
		for(int j=0;j<=2*a-2*i;j++){
			printf("*");
		}
		printf("\n");
	}
	for(int i=1;i<a;i++){
		for(int j=i;j<a-1;j++){
			printf(" ");
		}
		for(int j=0;j<=2*i;j++){
			printf("*");
		}
		printf("\n");
	}
	return 0;
}
```



