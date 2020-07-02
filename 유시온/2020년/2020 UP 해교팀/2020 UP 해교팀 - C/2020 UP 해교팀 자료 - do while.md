## 2020 UP 해교팀 자료 - do while

### do ~ while이란?

* `do ~ while`문은 기본적인 `while`문의 조건문을 먼저 실행하지 않고, 내부의 실행 코드를 먼저 실행한 후 조건을 검사하는 반복문

* `while`문의 형식

  * ```c
    #include <stdio.h>
    int main() {
        int a = 0;
        
        // 먼저 조건을 검사한다. 
        // 똑똑... 혹시 a 값이 3이 아니니...?
        while(a != 3) {
            // 맞구나!! 그럼 얘좀 출력해줘!!
            printf("%d", a);
            // 그리고 값 올려줘!
            a += 1;
        };
        
        return 0;
    }
    // 결과
    // 012
    ```



* `do while`의 형식

  * ```c
    #include <stdio.h>
    int main() {
        int a = 0;
        // 일단 한 번 실행하고 생각한다. 
        // 어라.. 검사 안하네? 그럼 해야지!
        do {
            // 출력하자!!
            printf("%d", a);
            // 값도 올려!
            a += 1;
            // 어라, 검사를 마지막에 하네 아직은 3이 아니니 한번 더~
        } while(a != 3);
        
        return 0;
    }
    // 결과
    // 012
    ```



* `while`, `do-while`, `for`의 차이점
  * while은 정확히 몇 번 도는지 모르는 경우. 특히 특정 조건이 만족되기 전까지 실행을 계속 해야만 하는 경우에 사용함.
  * do-while은 while가 비슷하지만, 알고리즘적으로 조건 검사 전 한 번은 실행해야 한다고 할 때 사용함.
  * for은 정확히 몇 번 도는지 예상이 가능한 경우에 사용함.



* `do-while`문을 알려달라고 했으니 너를 위한 자그마한 숙제 ^^ 못봤다고 하지는 않겠지?? :D

  * ```c
    #include <stdio.h>
    
    int main() {
        int num;
        int factorial = 1;
        
        scanf("%d", &num);
        
        do{
        	
        	
        }while ();
        
        printf("%d", factorial);
        
        return 0;
    }
    ```

  * 이 코드를 참고하여, `do-while`을 이용해서 오늘 풀었던 팩토리얼 구현 어때? I Believe U  화이팅 ㅅㅅ

