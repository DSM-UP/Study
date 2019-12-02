# Django

> #### https://www.youtube.com/watch?v=hQyLUv_viDA&list=PLieE0qnqO2kSHhEZzTBTtCUOKO1G_-Ctd&index=2 
> #### Seoul Wiz님의 Youtube 강의를 참고해 작성하였습니다.

## [T25] 장고(Django) 02강_Django설치 및 프로젝트 생성

### 2-1 python 패키지 pip 업그레이드

- pip : Python Install Package의 약자로 PyPI(Python Package Index)의 SW패키지를 사용하기 위한 명령어.

`python -m pip install --upgrade pip` 명령어를 사용하여, pip를 업그레이드 할 수 있다.

`pip --version` 으로 현재 사용하고 있는 pip의 버전을 확인할 수 있다.


### 2-2 Django 설치 및 업그레이드

`pip install django` 명령어를 사용하여, Django를 설치한다.

`django` 대신 다른 이름을 치면 그 라이브러리가 다운받아 진다.

`pip install django --upgrade` 명령어는 Django를 최신 버전으로 업그레이드 된다.


### 2-3 Django 삭제

Django 삭제는 Django의 설치 경로를 확인하여, 그 디렉토리를 삭제하면 된다.

**python -c "import django; print(django.__path__)"**  명령어를 이용하면 주소를 확인할 수 있다.


### 2-4 Django 프로젝트 생성

`cd 디렉토리-경로`  프로젝트를 생성 할, 디렉토리-경로에 접근한다.
`django-admin startproject 프로젝트명` 를 이용하여, 프로젝트를 생성한다.  


### 2-5 애플리케이션 생성

`cd 프로젝트-경로` 프로젝트-경로에 접근한다.  
`python manage.py startapp 앱-이름` 앱-이름 애플리케이션을 생성한다.  


### 2-6 프로젝트 디렉토리 이름 변경

`cd ../` ../를 이용하여 상위 디렉토리에 접근한다.  
`move project-name change-name` 기존의 project-name을 change-name으로 변환한다.


## 2-7 MVT 패턴

프로그래밍을 할 때, 패턴에 의거해서 짜게 되는데. 그 중 하나가 MVC 패턴이다.
   
MVC 패턴은 서버 쪽을 생각하는 것이다.

1. Client에서 request를 받으면, 먼저 Control에서 받는다.
2. Control이 request를 받았을 때, DB가 필요하다고 판단되면 Model 쪽으로 넘긴다. 그렇지 않으면 View 쪽으로 넘긴다.  

Control을 서버 측의 지휘자이고, Model은 DB에서 정보를 꺼내는 역할이고. View는 실제 보여야 할 것들을 보여준다.

MVC 패턴은 유지보수에 유리하다.  

Django 에서는 MVT 패턴을 사용하는데 MVC와 이름만 다른 것이다.  
다만, Model : Model, Control : View, View : Template 으로 대치되어 사용된다. 
