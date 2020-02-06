# C언어 clearerr 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ clearerr  
URL : https://modoocode.com/50  
  
## clearerr
  
    #include <stdio.h>

    void clearerr(FILE* stream);
  
오류 표시자를 초기화한다.  
  
스트림의 EOF 표시자와 오류 표시자를 모두 재설정한다.  
  
만일 스트림 함수가 오류 혹은 파일 끝에 도달하였기 때문에 실패한다면, 이 두 개의 표시자들 중 하나가 설정된다. 이 표시자들은 rewind, fseek, fsetpos 함수 들 중 어느 하나가 호출 되기 전 까지 변경되지 않는다.  
  
## 인자
  
### stream
  
작업을 수행할 스트림의 FILE 객체를 가리키는 포인터  
  
## 예제
  
    // 예제 출처 : http://www.cplusplus.com/reference/clibrary/cstdio/clearerr
    // 약간의 수정을 가했습니다.

    #include <stdio.h>

    int main()
    {
        FILE* pFile;

        pFile = fopen("clearerr.txt", "r");

        if (!pFile)
            perror("Error opening file");
        else
        {
            fputc('x', pFile); // 파일에 x 문자 하나를 출력한다.

            if(ferror(pFile)) // r 모드로 열었기 때문에 오류가 난다.
            {
                puts("Error Writing to clearerr.txt");
                clearerr(pFile);
            }
            
            fgetc(pFile);
            if(!ferror(pFile)) // 위에서 오류 표시자를 비웠기 때문에 조건이 성립한다.
                puts("No errors reading clearerr.txt");
            
            fclose(pFile);
        }

        return 0;
    }