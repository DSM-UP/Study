# Django

> #### https://www.youtube.com/watch?v=Go-NZbOgcUE&list=PLieE0qnqO2kSHhEZzTBTtCUOKO1G_-Ctd&index=4 
> #### Seoul Wiz님의 Youtube 강의를 참고해 작성하였습니다.

## [T26] 장고(Django) 03강_Django 프로젝트 설계

> ### 3-1 Django Framework 흐름도

1. Client(브라우저, App 등)가 Request(데이터 요청)를 한다.
2. URLConf라는 방식을 통해 들어온 URL을 `urls.py`에서 받고 처리한다.
3. View에서는 URLConf에서 넘겨준 정보로 `views.py`에서 실제로 작동을 시킨다.
4. Model은 DB 담당자로, URLConf에서 실행시켜서 `models.py`에서 DB에 접근하게 된다.
5. DB에서는 필요한 데이터를 가공한다.
6. 가공이 끝난 데이터를 DB에서 Model로 반환한다. 
7. Model은 다시 View에게 정보를 반환한다. 
8. View에서는 정보를 다시 가공한다. 그리고, Template에 접근하여 `*.html`을 받는다.
9. 이를 다시 Client에 반환한다.


> ### 3-2  URLConf(urls.py)

URLConf는 `프로젝트명/기본프로젝트/urls.py`에 있다.  
기본적으로는 `urlpatterns = []` 라는 코드가 들어있다.  
여기에는 `path()`라는 함수를 이용하는데.  
`path('student/register/', views.student_register),` 형식으로 사용한다.  

첫 번째 인자에는 URL(클라이언트 요청 URL)이 담기고, 두 번째 인자에는 view(함수 또는 메서드)가 담긴다.

즉, URL에 해당하는 요청이 들어오면, 특정 view가 실행되게 하는 것이다.

이때, path() 함수에서 주소와  함께 태그를 사용하며 실행 될 함수에게 매개변수를 전달할 수 있다.  
`path('<id>login', views.login_check),`


> ### 3-3 View(views.py)

View는 `프로젝트명/기본프로젝트/views.py`에 있다.  
URLConf에서 path() 함수로 실행시킨 특정 view 메소드가 실행된다.  
view 메소드에는 request 가 기본 인자로 들어오게 된다. 

그 후, DB등을 이용한 프로그램 실행 결과를 HttpResponse()에 담아 반환한다.

즉, **클라이언트의 요청에 따른 애플리케이션 실행 결과를 Template(html), 에러메시지 등을 이용해서 클라이언트에 response 한다.**


> ### 3-4 Model(models.py)

Model은 `프로젝트명/기본프로젝트/models.py`에 있다.
Model은 DB를 관리해 주는 시스템이다. 

models.py에서 class를 이용하여 DB의 table을 생성할 수 있다. 

```python
class Student(models Model):
    s_name = models.CharField(max_length=30)
    s_major = models.CharField(max_length=30)
```

이를 통해 students_student 테이블이 생성된다.  
(애플리케이션 이름 + _ + 클래스명(소문자))

이러한 방식을 ORM(Object Relational Mapping) 이라고 한다.  


> ### 3-5 Template(*.html)

Template는 `프로젝트명/기본프로젝트/settings.py`에 있다.

settings.py 안에 `INSTALLED_APPS` 에 앱들의 이름을 넣어줘야 한다. 


> ### 3-6 프로젝트 설정(/DjangoPjt/settings.py)

settings.py는 프로젝트의 전체적인 설정을 담당한다. 

모든 애플리케이션을 설정 파일에 등록해야 한다.  

개발 모드와 운영 모드를 설정할 수 있다.
 1. `DEBUG = True`
    * DEBUG는 개발 모드를 의미한다. 
    * 운영 모드시에는 False를 입력해야 한다.
    
 2. `ALLOWED_HOST = ['localhost', '127.0.0.1']` 
    * 개발 모드는 입력하지 않아도 자동으로 localhost 정의된다. 
    * 운영 모드는 서버 IP 주소를 입력해야 한다.


> ### 3-7 기본 사용자 및 그룹 테이블 생성

일반적인 웹 사이트에는 일반 사용자용 사이트와 관리자(admin)용 페이지로 나뉜다.  
그러니 페이지를 두 개 만드는 것이다. 그러나 Django에서는 기본적으로 관리자 페이지를 제공한다.  

`python manage.py migrate`로 사용자 및 그룹 테이블을 생성하고 데이터 베이스에 반영시킨다. 


> ### 3-8 관리자 계정 생성 및 서버 구동

관리자 계정 생성은 `python manage.py createsuperuser` 명령어로 처리한다.  
이 경우, Username과 Email, Password를 입력해야 한다.  
(이때, Password는 보이지 않는다. 필자처럼 고생하지 말자... ㅠ)

서버 구동은 `python manage.py runserver 0.0.0.0:8000` 로 기본 서버를 확인할 수 있다. 

기본적으로 0.0.0.0:8000에 들어가게 되면, client 페이지가 뜨는데. admin 페이지는 뒤에 /admin을 붙이면 나온다.
