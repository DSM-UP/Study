# codeup 1462

**[기초-배열연습] 2차원 배열 순서대로 채우기 1-3**

```c
#include <stdio.h>

int main(){
	int a, sum=0;
	scanf("%d", &a);
	int n[a][a];
	for(int i=0;i<a;i++){
		sum++;
		for(int j=0;j<a;j++){
			n[i][j]= sum+j*a;
			printf("%d ", n[i][j]);
		}
		printf("\n");
	}
	return 0;
}
```

<img src="C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200705144500898.png" alt="image-20200705144500898" style="zoom:200%;" /> (result)