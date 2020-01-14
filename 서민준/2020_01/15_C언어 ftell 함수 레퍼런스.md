# C언어 ftell 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ ftell  
URL : https://modoocode.com/74  
  
## ftell
  
    #include <stdio.h>

    long int ftell(FILE* stream);
  
스트림의 위치 지정자의 현재 위치를 구한다.  
  
이진 스트림의 경우, 리턴된 값이 파일의 시작 부분에서 부터 현재 위치까지의 바이트 수를 말한다. 텍스트 스트림의 경우, 파일의 시작 부분으로 부터 현재 위치까지의 바이트 수라고 단정짓기 힘들다.  
  
하지만, 이 리턴된 값을 가지고 fseek 함수를 이용하면 현재의 위치로 파일 위치 포인터를 설정할 수 있다.  
  
## 인자
  
- stream
  
    - 작업을 수행할 스트림의 FILE 객체를 가리키는 포인터
  
## 리턴값
  
성공적으로 수행하였다면 현재의 위치 포인터가 가진 값이 리턴된다. 만일 오류가 발생하였다면 NULL이 리턴되고, 전역 변수 errno의 값은 양수로 설정된다.  
  
perror 함수를 통해 errno의 값을 해석할 수 있다.
  
## 예제
  
    /* 파일 전체의 크기를 읽어온다. pFile 을 파일 끝으로 선택한 뒤, ftell 함수를 통해서 파일 처음 부터 pFile 까지, 즉 파일 처음 부터 끝 까지의 바이트 수를 계산한다. */
    
    /* 이 예제는 http://www.cplusplus.com/reference/clibrary/cstdio/ftell/ 에서 가져왔습니다.  (그 뒤, 저의 스타일로 조금 수정하였습니다.) */

    #include <stdio.h>

    int main()
    {
        FILE* pFile;
        long size;

        // 바이너리 파일로 열어주면 ftell의 리턴값이 정확히 바이트 수를 의미한다고 볼 수 있다.
        pFile = fopen("myfile.txt", "rb");

        if (!pFile) // pFile이 NULL이라면 오류가 발생함
            perror("Error opening file");
        else
        {
            // 파일의 위치를 파일의 끝으로 이동시킵니다.
            fseek(pFile, 0, SEEK_END);
            // 파일 위치를 맨 처음으로 되돌리면서 전체 바이트 수를 size에 저장합니다.
            size = ftell(pFile);
            fclose(pFile);
            printf("Size of myfile.txt : %ld byte. \n", size);
        }

        return 0;
    }