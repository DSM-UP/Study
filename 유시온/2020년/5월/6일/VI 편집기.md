#### VI 편집기

`vi 파일명` : 해당 파일을 vi편집기로 수정을 시작함

----

`i` : INSERT 모드 시작.

`o` : INSERT 모드 시작. 다음 줄부터 시작.

`a` : INSERT 모드 시작. 이전 줄부터 시작.

`hlkj` : 좌우상하 버튼.

`esc` : 편집 중단. 명령 모드로 전환.

---

`yy` : 한 줄 복사.

`yw` :  한 단어 복사.

`yl` : 한 글자 복사.

`p` : 붙여넣기.

----

`:w` : 저장.

`:q` : 나가기.  (`:wq`로 사용 가능)



#### NANO 편집기

`nano 파일명` 또는 `editor 파일명` : 해당 파일을 나노 편집기로 수정을 시작함.

`ctrl` 키와 다른 키를 조합하여 단축키를 사용함.

하단에 명령어가 보인다. 



#### 파일 찾기

`find 찾을디렉토리 -속성 값`의 형태로 사용한다.

ex) `find ./ -name *.txt -size +1c`

이 경우, 이 폴더에서 이름이 *.txt를 만족하고 크기가 1바이트 이상인 파일을 찾는다. 



#### 파일 내부 검색

 `cat 파일명`  : 해당 파일의 내용을 **모두** 보여준다.

`head -n숫자 파일명` : 해당 파일의 내용을 위에서부터 **-n뒤의 숫자 크기** 만큼의 줄을 보여준다.

`tail -n숫자 파일명` : 해당 파일의 내용을 아래에서부터 **-n뒤의 숫자 크기** 만큼의 줄을 보여준다.

`grep "찾을 문자" 파일명` : 해당 파일에서 "찾을 문자"를 찾아서 그 줄을 보여준다.

`grep -i "찾을 문자" 파일명` : 로 할 경우, 대소문자의 구분을 하지 않는다.



#### 디렉토리 검색

`ls 파일[]명` : 파일명 사이의 []속에 있는 문자들을 포함하여 검색한다.

ex) `ls hello[12].txt` : hello1.txt, hello2.txt 를 찾음



#### 파일 비교

`cmp 파일명1 파일명2` : 파일1과 파일2의 차이를 찾아 어느 줄인지 알려준다.

`diff 파일명1 파일명2` : 파일1과 파일2의 차이를 찾아 해당 줄을 보여준다. 



#### 파일 분석

`file 파일명` : 해당 파일의 내용을 토대로 파일을 분석하여 알려준다.



#### 명령어들

`history` : 이전에 사용한 명령어들을 사용한 번호와 함께 보여준다. 

`!n` :  history 명령어를 사용하여 명령어를 번호로 실행시킨다.

`history > 파일명` : 해당 파일에 history 명령어를 실행시킨 결과를 저장시킨다.

`echo "문자열"` : 문자열을 출력한다.

`echo "문자열" > 파일명` : 해당 파일에 문자열만 저장시킨다.

`echo "문자열" >> 파일명` : 해당 파일에 문자열을 추가로 저장시킨다.

`cat 파일명 |  grep "문자열"` : 해당 파일에서 문자열을 찾아서 출력한다.



#### 압축하기/풀기

```
-f : 파일 이름 지정
-c : 파일을 tar로 묶음
-x : tar 압축을 풂
-v : 내용을 자세히 출력
-z : gzip으로 압축하거나 해제함
-t : 목록 출력	
-p : 파일 권한을 지정
-C : 경로를 지정
```

* 압축하기 : tar -cf name.tar a b
* 압축풀기 : tar -xvf name.tar
* 압축하기 : tar -zcf name.tar.gz a b
* 압축풀기 : tar -zxvf name.tar.gz



 

cd ~

ls

cp /etc/hosts test.org

ls

cat test.org

mkdir dsm

cp test.org dsm 

ls ./dsm

mv ./dsm/test.org ./dsm/test.bak

ls ./dsm

ls

rm test.org

ls

cp ./dsm/test.bak test.org 								2415 유시온 CutyApple

rm -r dsm                  





grep "bash" ./etc/passwd

sudo su - root

zz142512

sudo find / -name passwd

sudo find / -name cp