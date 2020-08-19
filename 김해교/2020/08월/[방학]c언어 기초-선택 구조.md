### 선택 구조

{2020년 8월 18일 월요일}

#### **if문을 활용하여 작성할 것(1~4)**



<1>입력한 수가 3의 배수이면서 5의 배수인지 판별하라.

```c
#include <stdio.h>

int main(){
	int drainage;
	scanf("%d", &drainage); 
	if(drainage%3==0 && drainage%5==0){
		printf("3의 배수이면서 5의 배수입니다.");
	}
}
```



<2>두 개의 알파벳을 입력하면 두 알파벳 사이의 알파벳만을 출력하라.

```c
#include <stdio.h>

int main(){
	int age;
	scanf("%d", &age);
	if(age<8){
		printf("무료입니다."); 
	}
	else if(age>=8 && age<60){
		printf("30,000원입니다.");
	}
	else{
		printf("7,500원입니다.");	
	}
	return 0;
}
```



<3>나이를 입력받아 나이에 따라 입장료를 계산하라.

[조건] 8세 미만 : 무료

8세 이상 60세 미만 : 정가(30,000원) / 60세 이상 : 정가의 75%(7,500원)

```c
#include <stdio.h>

int main(){
	int age;
	scanf("%d", &age);
	if(age<8){
		printf("무료입니다."); 
	}
	else if(age>=8 && age<60){
		printf("30,000원입니다.");
	}
	else{
		printf("7,500원입니다.");	
	}
    
	return 0;
}
```



#### **switch ~ case문을 활용하여 작성할 것**(5~9)



<5> <1>을  switch ~ case문으로 출력하라.

```c
#include <stdio.h>

int main(){
	int a, num=0;
	scanf("%d", &a);
	if(a%3==0&&a%5==0){
		num = 1;
	}
	else if(a%3==0){
		num = 2;
	}
	else if(a%5==0){
		num = 3;
	}
	else num = 0
	switch(num){
		case 1:
			printf("3의 배수이면서 5의 배수입니다.");
			break;
		case 2:
			printf("3의 배수이지만 5의 배수입니다.");
			break;
		case 3:
			printf("3의 배수는 아니지만 5의 배수입니다.");
			break;
		default :
			printf("3의 배수이면서 5의 배수가 아닙니다.");
			break;
	}
	return 0;
}
```



<6> 성적을 입력받아 학점을 결정하라.

```c
#include <stdio.h>

int main(){
	int grades, num;
	scanf("%d", &grades);
	num = grades/10;
	switch(num){
		case 10:
		case 9:
			printf("A");
			break;
		case 8:
			printf("B");
			break;
		case 7:
			printf("C");
			break;
		case 6:
			printf("D");
			break;
		default :
			printf("F");
			break;
	}
	return 0;
}
```



<9> 특정한 달을 입력하면 그 달의 일수를 출력하라.

```c
#include <stdio.h>

int main(){
	int month, mon=0;
	scanf("%d", &month);
	switch(month){
		case 1: 
		case 3:
		case 5:
		case 7: 
		case 8: 
		case 10: 
		case 12:  
			printf("%d월의 일수는 31일입니다.", month);
			break; 
		case 4: 
		case 6: 
		case 9: 
		case 11: 
			printf("%d월의 일수는 30일입니다.", month);
			break;
		case 2: 
			printf("%d월의 일수는 28일입니다.", month);
			break;
		default : 
			printf("없는 달입니다."); 
	}
	return 0;
}
```

