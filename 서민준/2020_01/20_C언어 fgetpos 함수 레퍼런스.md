# C언어 fgetpos 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ fgetpos  
URL : https://modoocode.com/70  
  
## fgetpos
  
    #include <stdio.h>

    int fgetpos(FILE* stream, fpos_t* position);
  
스트림의 위치 지정자(position indicator)가 가리키는 위치를 position에 저장한다.  
  
인자로 전달되는 position은 fpos_t의 형을 가리키는 포인터 형태로 사용되어야 하며, 거의 대부분 fsetpos의 인자로만 사용하게 된다.  
  
만일 파일 위치 지정자의 값을 정수형 데이터로 얻고 싶다면 ftell 함수를 호출하면 된다.  
  
## 인자
  
- stream
  
    스트림의 FILE 객체를 가리키는 포인터
  
- position
  
    fpos_t 객체를 가리키는 포인터
  
## 리턴값
  
성공적으로 값을 구하였다면 0을 리턴하고 그렇지 않을 경우 0이 아닌 값을 리턴한다.  
  
## 실행 예제
  
    // 예제 출처 : http://www.cplusplus.com/reference/clibrary/cstdio/fgetpos

    #include <stdio.h>

    int main()
    {
        FILE* pFile;
        int c;
        int n;
        fpos_t pos;

        pFile = fopen("fgetpos.txt", "r");
        if (!pFile) // pFile == NULL
            perror("Error opening file");
        else
        {
            // pFile로부터 한 글자를 읽어들입니다.
            c = fgetc(pFile);
            printf("1st character is %c \n", c);
            
            // fsetpos 함수를 사용하기 위해 pos에 값을 구해놓는다.
            fgetpos(pFile, &pos);

            for (n = 0; n < 3; n++)
            {
                // 현제 pos에는 파일에서 첫 글자를 읽은 후의 위치값이 들어있다.
                fsetpos(pFile, &pos);

                // 파일로부터 한 글자를 읽으나 반복 루트때문에 같은 글자만을 읽을 것이다.
                c = fgetc(pFile);
                printf("2nd character is %c \n", c);
            }

            fclose(pFile);
        }

        return 0;
    }