# C언어 rewind 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ rewind  
URL : https://modoocode.com/75  
  
## rewind
  
    #include <stdio.h>

    void rewind(FILE* stream);
  
스트림의 위치 지정자를 맨 처음으로 설정한다. 참고로 위 함수의 작업은  
  
    fseek(stream, 0, SEEK_SET);
  
과 정확히 동일하다. 단, fseek 함수와 달리 rewind 함수는 오류 지정자를 초기화한다.  
  
따라서 스트림이 읽기 및 쓰기 형식으로 열려있을 경우, rewind 함수를 호출함으로써 읽기에서 쓰기 모드로, 쓰기에서 읽기 모드로 변경할 수 있다.  
  
## 인자
  
- stream
  
    스트림의 FILE 객체를 가리키는 포인터
  
## 실행 예제
  
    /* myfile.txt에 A 부터 Z 까지 출력한 뒤, 다시 pFile을 파일의 처음으로 옮긴 후 파일의 내용을 읽어들인다. 즉, buffer에는 A 부터 Z 까지 들어가게 된다. 따라서 화면에는 ABCDEFGHIJKLMNOPWQRSTUVWXYZ 가 출력된다.*/

    /* 이 예제는 http://www.cplusplus.com/reference/clibrary/cstdio/rewind 에서 가져왔습니다. */

    #include <stdio.h>

    int main()
    {
        int n;
        char buffer[27]; // 알파벳은 총 26자이므로 NULL 자리까지 확보
        FILE* pFile;

        pFile = fopen("myfile.txt", "w+");
        // 파일에 알파벳 순으로 출력하고, 다시 읽어들이기 위해 w+ 모드로 연다.

        // 반복문을 통해 해당 파일에 알파벳 문자를 순서대로 출력한다.
        for(n = 'A'; n <= 'Z'; n++)
            fputc(n, pFile);
        
        rewind(pFile); // pFile이 가리키는 포인터 위치를 파일의 맨 처음으로 가지고 온다.
        fread(buffer, sizeof(char), 26, pFile); // 문자 하나의 바이트만큼 총 26자를 읽는다.
        fclose(pFile); // 파일 사용의 마무리

        buffer[26] = '\0'; // 버퍼의 마지막 자리에는 널 문자를 넣어 문자열의 종료를 알려야 한다.
        puts(buffer);

        return 0;
    }