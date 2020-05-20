### 34강 리눅스 부팅 과정과 런 레벨 (Run Levels)



#### 리눅스 부팅 순서

1. BIOS : (입출력 확인)
2. Master Boot Record (MBR) 
3. LILO or GRUB
4. Kernel
5. init : process number 1(PID=1)
6. Run Levels



#### 컴퓨터 종료 방법

* `poweroff` : 일반적 종료
* `shutdown` : 다른 사용자에게 알리며 종료
* `halt` 
* `init 0` 