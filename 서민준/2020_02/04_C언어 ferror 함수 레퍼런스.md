# C언어 ferror 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ ferror  
URL : https://modoocode.com/52  
  
## ferror
  
    #include <stdio.h>

    int ferror(FILE* stream);
  
오류 표시자를 검사한다.  
  
인자에서 지정한 스트림의 오류 표시자가 설정 되어 있는지 확인하고, 설정 되어 있다면 0이 아닌 값을 리턴한다.  
  
보통 오류 표시자는 이전의 스트림 작업에서 오류가 발생했을 때 설정된다.  
  
## 인자
  
### stream
  
오류 표시자의 값을 확인할 스트림의 FILE 객체를 가리키는 포인터  
  
## 리턴값
  
만일 스트림의 오류 표시자가 설정되어 있다면 0이 아닌 값을 리턴한다. 그렇지 않을 경우 0을 리턴한다.  
  
## 실행 예제
  
    // 예제 출처 :http://www.cplusplus.com/reference/clibrary/cstdio/ferror
    // 약간의 수정을 가했습니다.

    #include <stdio.h>

    int main()
    {
        FILE* pFile;

        pFile = fopen("ferror.txt", "r");
        
        if (!pFile)
            perror("Error opening file);
        else
        {
            fputc('x', pFile);
            if (ferror(pFile))
                puts("Error Writing to ferror.txt");
            fclose(pFile);
        }

        return 0;
    }