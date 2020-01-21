# C언어 fwrite 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ stdio.h \ fwrite  
URL : https://modoocode.com/69  
  
## fwrite
  
    #include <stdio.h>

    size_t fwrite(const void* ptr, size_t size, size_t count, FILE* stream);
  
스트림에 데이터 블록을 쓴다.  
  
스트림에 count 개의 원소를 가지는 배열을 쓴다. 각각의 원소는 size 바이트이고, 그 배열은 ptr이 가리키는 것이다.  
  
따라서, 전체 스트림에 써지는 바이트 수는 size * count가 된다. 전체 스트림에 써지는 바이트 수 만큼 위치 지정자가 증가하게 된다.  
  
## 인자
  
- ptr
  
    스트림에 쓰여질 배열을 가리키는 포인터
  
- size
  
    그 배열의 각각의 원소 크기
  
- count
  
    그 배열의 원소의 수이다. 이 때, 각 원소의 크기는 size 바이트이다.
  
- stream
  
    내용을 쓸 스트림을 가리키는 FILE 포인터
  
## 리턴값
  
스트림에 성공적으로 써진 전체 원소의 개수를 size_t 형으로 리턴한다. 이는 정수형이다. 만일, 쓰여진 바이트 수와 count의 값이 다르다면 오류가 발생하게 된다.  
  
## 실행 예제
  
    // http://www.cplusplus.com/reference/clibrary/cstdio/fwrite 에서 가져온 예제를 조금 제 스타일대로 수정했습니다.

    #include <stdio.h>

    int main()
    {
        FILE* pFile;
        char buffer[] = { 'x', 'y', 'z' };

        pFile = fopen("fwrite.bin", "wb"); // 에러 검사를 해주는 것이 좋다.
        fwrite(buffer, sizeof(char), sizeof(buffer) / sizeof(char), pFile);
        fclose(pFile);

        return 0;
    }

    // char가 1바이트라고 이론적으로 알려져 있지만 컴파일러나 개발 환경에 따라 조금씩 달라질 수 있으므로 항상 바이트를 전달할 때는 sizeof 연산자를 활용해서 전달하는 것이 좋다.

    // 배열 요소를 구하는 공식으로 sizeof(배열 포인터) / sizeof(배열 요소 자료형)의 공식을 활용할 수 있다.