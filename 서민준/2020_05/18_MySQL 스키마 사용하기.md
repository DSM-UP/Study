# use of schema
  
MySQL 서버 접속에 성공하였다면, 스키마를 만들어서 테이블을 만들 준비를 해야 한다.  
  
**출처**  
<a href = "https://opentutorials.org/course/3161/19535" target = "_blank">스키마 사용하기 - 생활코딩</a>  
  
## create schema
  
	CREATE DATABASE name;  
  
name에 자신이 생성하고자 하는 스키마의 이름을 주면 된다. 만약 name에 준 이름이 이미 생성되어 있는 스키마와 같은 이름이라면 error가 발생한다. 생성에 성공하면 다음과 같이 Query에 대한 문구가 출력된다.  
![create schema](https://user-images.githubusercontent.com/51042546/81031211-7d97f180-8ec6-11ea-9fba-ca7de090d3b9.png)  
  
## delete schema
  
	DROP DATABASE name;
  
name에 자신이 삭제하고자 하는 스키마의 이름을 주면 된다. 성공하면 다음과 같은 메시지가 출력된다.  
![drop schema](https://user-images.githubusercontent.com/51042546/81031333-df585b80-8ec6-11ea-8299-da2bba214d0a.png)  
  
## 전에 입력했던 명령 다시 입력하기
  
cmd 창을 통해 데이터베이스를 관리하다 보면 전에 입력했던 명령을 다시 입력해야하는 경우가 있다. 혹은 철자 오류 등으로 명령을 잘못 입력했을 때 방금 전 명령에서 조금만 수정해야 하는 경우도 있다. 이럴 때 매번 명령을 다시 타이핑하는 것은 여간 귀찮은 일이 아니다.  
  
이 일을 해결할 수 있는 방법이 바로 키보드에 있는 위쪽 방향 화살표이다. 이걸 누르면 이전에 입력했던 명령을 그대로 커멘드 라인에 작성해준다. 유용하게 사용할 때가 많으니 알아두길 바란다.  
  
## show database list
  
SHOW 명령어는 꽤나 다양한 형태로 사용된다. 우선 영상에 나온 방법을 소개하기로 한다.  
  
	SHOW DATABASES;
  
![SHOW DATABASES](https://user-images.githubusercontent.com/51042546/81031640-e469da80-8ec7-11ea-8c26-17864789e9cc.png)  
  
이 명령을 사용하면 위와 같이 현재 생성되어 있는 DATABASE를 모두 list 형식으로 보여준다.  
  
## 사용하고자 하는 데이터베이스 결정하기
  
우리가 스키마를 만들고 그 안에 테이블을 만들기 위해서는 그 스키마를 사용한다고 설정해야 한다. 그 명령은 다음과 같다.  
  
	USE name;
  
name에는 사용하고자 하는 스키마의 이름을 주면 된다. 그러면 다음과 같이 데이터베이스를 변경했다는 메시지가 나오게 된다.  
![use database](https://user-images.githubusercontent.com/51042546/81031760-4cb8bc00-8ec8-11ea-8c85-b03aaccabc7c.png)  
  
이렇게 되면 이제 MySQL은 이제부터 내가 내리는 모든 명령을 name의 이름을 가진 스키마가 가지고 있는 테이블을 대상으로 명령을 수행하게 된다.  
