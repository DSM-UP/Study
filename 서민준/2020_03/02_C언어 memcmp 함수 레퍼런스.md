# C언어 memcmp 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ memcmp  
URL : https://modoocode.com/84  
  
## memcmp
  
    #include <string.h>

    int memcmp(const void* ptr1, const void* ptr2, size_t num);
  
두 개의 메모리 블록을 비교한다.  
  
ptr1이 가리키는 처음 num 바이트의 데이터와 ptr2가 가리키는 처음 num 바이트의 데이터를 비교하여 이들이 같다면 0을 리턴하고 다르다면 0이 아닌 값을 리턴한다.  
  
## 인자
  
### ptr1, ptr2
  
메모리 블록을 가리키는 포인터  
  
### num
  
비교할 바이트 수
  
## 리턴값
  
만일 두 메모리 블록이 정확히 같다면 0을 리턴한다.  
  
만일 두 메모리 블록이 다를 경우, ptr1과 ptr2가 가리키는 메모리 블록에서 앞에서 처음으로 다른 바이트를 살펴 보는데, 그 바이트를 unsigned char로 해석하였을 때, 그 값이 ptr1이 더 크면 0보다 큰 값을, 아니면 0보다 작은 값을 리턴한다.  
  
## 실행 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstring/memcmp
    // 약간의 수정을 가했습니다.

    #include <stdio.h>
    #include <string.h>

    int main()
    {
        char str1[256];
        char str2[256];
        int n;
        size_t len1, len2;

        fputs("Enter a sentence : ", stdout);
        fgets(str1, sizeof(str1), stdin);
        str[strlen(str1) - 1] = '\0';

        fputs("Enter another sentence : ", stdout);
        fgets(str2, sizeof(str2), stdin);
        str[strlen(str2) - 1] = '\0';

        len1 = strlen(str1);
        len2 = strlen(str2);

        n = memcmp(str1, str2, len1 > len2 ? len1 : len2);

        if (n > 0)
            printf("'%s' is greater than '%s'. \n", str1, str2);
        else if (n < 0)
            printf("'%s' is less than '%s'. \n", str1, str2);
        else
            printf("'%s' is the same as '%s'. \n", str1, str2);
        
        return 0;
    }
  
실행 결과  
Enter a sentence : abcde  
Enter another sentence : abecd  
'abcde' is less than 'abecd'.  
