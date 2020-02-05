# C언어 feof 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ feof  
URL : https://modoocode.com/51  
  
## feof
  
    #include <stdio.h>

    int feof(FILE* stream);
  
파일 끝 표시자(End-of-File indicator)를 검사한다.  
  
인자로 넘겨준 스트림의 파일 끝 표시자를 검사하여 설정되어 있다면 0이 아닌 값을 리턴한다. 보통 표시자는 이전의 입출력 작업에 의해 스트림이 파일 끝에 도달하였을 때 설정된다.  
  
rewind나 fseek, fsetpos 함수들 중 어느 하나가 성공적으로 위치 표시자의 값을 바꾸기 전 까지, 모든 입출력 작업들은 오류를 리턴하게 된다.  
  
## 인자
  
### stream
  
작업을 수행할 스트림의 FILE 객체를 가리키는 포인터  
  
## 리턴값
  
인자로 전달된 스트림의 파일 끝 지시자가 설정되어 있다면 0이 아닌 값을 리턴한다. 그렇지 않을 경우 0이 리턴된다.  
  
## 예제
  
    // 출처 : http://www.cplusplus.com/reference/clibrary/cstdio/feof
    // 약간의 수정을 가했습니다.

    #include <stdio.h>

    int main()
    {
        FILE* pFile;
        long n = 0;

        pFile = fopen("feof.txt", "rb");

        if (!pFile)
            perror("Error opening file");
        else
        {
            while (!feof(pFile)) // 파일 끝 지시자가 설정되지 않았다면
            {
                fgetc(pFile); // 파일로부터 한 문자를 읽어온다.
                n++; // 그 뒤, n의 수 1 증가
            }

            fclose(pFile);
            // NULL 문자를 계산에 포함하지 않기 위함이다.
            printf("Total number of bytes : %d \n, n - 1);
        }
    }