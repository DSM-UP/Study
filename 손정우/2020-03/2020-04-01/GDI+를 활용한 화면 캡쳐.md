# GDI+를 활용한 화면 캡쳐

간단하게 대략적인 절차는 다음과 같다

화면이 있음
화면 정보를 복사
저장

이 중 화면 정보를 복사 과정을 더 자세히 보면 다음과 같다
화면이 있음
화면DC와 호환하는 DC 생성
화면의 비트맵과 호환하는 비트맵 생성
생성된 DC와 생성된 비트맵과 연결
생성된 DC에 화면 DC의 비트맵 복사
저장

이를 코드로 나타내면 다음과 같다

```C++
HDC mem_hdc = CreateCompatibleDC(hdc);//hdc가 화면 dc, mem_hdc가 호환 DC
//비트맵을 생성하는데 크기는 임의로 400*300으로 했다
HBITMAP mem_bmp = CraeteCompatibleBitmap(mem_hdc, 400, 300);
//생성된 DC에 생성된 비트맵을 연결한다
SelectObject(mem_hdc, mem_bmp);
//비트맵 복사
BitBlt(mem_hdc,0, 0, 400, 300, hdc, 0, 0, SRCCOPY);
//저장
...
    
//생성된dc 삭제
DeleteDC(mem_hdc);
```