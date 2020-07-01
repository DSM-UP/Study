# 리눅스 파일 권한 변경

- 리눅스 파일 권한
  - Read
  - Write
  - eXecute
  - 예) -rwxr-xr-x => 첫 -는 파일 종류. 그 다음 rwx는 소유권자의 권한. 그 다음 r-x는 소유그룹의 권한. 그 다음 r-x는 기타 사람들의 권한.
- 명령어 : chmod [Option] MODE[Mode] FILE
  - 예)
    - chmod 644 test.txt => 소유권자를 rw-(110)으로, 소유그룹 r--(100)으로, 기타를 r--(100)로 변경
    - chmod u=w test.txt => 소유권자의 권한을 쓰기만 사용하도록 변경
    - chmod u+x test.txt => 소유권자에게 실행 권한 추가
    - chmod u-x test.txt => 소유권자의 시행권한 삭제
    - chmod o-rwx test.txt => 기타의 모든 권한 삭제
    - chmod go+r test.txt => 소유그룹과 기타에게 읽기권한 추가
    - chmod a+rwx test.txt => 모두에게 모든 권한 부여

