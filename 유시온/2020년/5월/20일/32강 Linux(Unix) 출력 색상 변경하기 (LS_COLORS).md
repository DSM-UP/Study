### 32강 Linux(Unix) 출력 색상 변경하기 (LS_COLORS)



#### 색상 변경 방법

* `LS_COLORS="파일종류명=텍스트형식;색 형식"`



#### 파일 종류명

* di = directory
* fi = file
* ln = symbolic link
* pi = fifo file
* so = socket file
* bd - block (buffered) special file
* cd = charater (unbuffered) special file
* or = symbolic link pointing to a non-existent file (orphan)
* mi = non-existent file pointed to by a symvolic link (visible shen you type ls -l)
* ex = file which is executable (ie. has 'x' set in permissions)



#### 텍스트 형식

* 0 = defualt colour
* 1 = bold
* 4 = underlined
* 5 = flashing text
* 7 = reverse field 

