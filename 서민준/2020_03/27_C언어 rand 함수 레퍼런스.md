# C언어 rand 함수 레퍼런스 정리
  
**출처**  
<a href = "https://modoocode.com/139">모두의 코드</a>  
<a href = "https://docs.microsoft.com/ko-kr/cpp/c-runtime-library/reference/rand?view=vs-2019">MSDN</a>  
  
## rand
  
    #include <stdlib.h>

    int rand(void);
  
난수를 생성한다.  
  
0 ~ RAND_MAX(32767) 범위의 **의사 난수(pesudo-random)**를 생성한다. 의사 난수란 실질적인 난수가 아니라 컴퓨터 상에서 일련의 복잡한 연산에 의해 만등러지는 난수 같아 보이는 수들을 말한다.  
  
rand 함수를 실행할 때마다 특정한 알고리즘에 의해 연관성이 없어보이는 수들이 생성된다. 이 알고리즘은 난순열을 생성하기 위해 초기값이 필요한데, srand 함수를 통해 이 초기값을 설정할 수 있다.  
  
### 리턴값
  
0 ~ RANDMAX(32767) 범위 사이의 정수  
  
### 실행 예제
  
    // 숫자 맞추기
    /* 이 예제는
    http://www.cplusplus.com/reference/clibrary/cstdlib/rand
    에서 가져왔습니다. */

    #include <stdio.h>
    #include <stdlib.h>
    #include <time.h>

    int main()
    {
        int iSecret, iGuess;

        /* initialize random seed */
        srand(time(NULL));

        /* generate secret number */
        iSecret = rand() % 10 + 1;

        do
        {
            printf("Guess the number (1 to 10): ");
            scanf("%d", &iGuess);

            if (iSecret < iGuess)
                puts("The secret number is lower");
            else if (iSecret > iGuess)
                puts("The secret number is higher");
        } while (iSecret != iGuess);

        puts("Congratulations!");
        return 0;
    }
  
실행 결과  
Guess the number (1 to 10): 5  
The secret number is higher  
Guess the number (1 to 10): 8  
The secret number is lower  
Guess the number (1 to 10): 6  
Congratulations!  
