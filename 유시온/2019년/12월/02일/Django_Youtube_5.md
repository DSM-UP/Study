# Django

> #### https://www.youtube.com/watch?v=9l4v2AerrDY&list=PLieE0qnqO2kSHhEZzTBTtCUOKO1G_-Ctd&index=7 
> #### Seoul Wiz님의 Youtube 강의를 참고해 작성하였습니다.

## [T28] 장고(Django) 05강_학사관리프로그램 만들기-I

### 5-1 웹 어플리케이션 설계

 보기 | URL | view | template | redirection
---|-----|------|----------|------------
학생등록 | /students/reg | regStudent() | registerStudent.html | 
학생(전체)보기 |  | regConStudent() |  | /students/all 
학생(전체)보기 | /students/all | reaStudentAll() | readStudents.html | 
학생 수정 | /students/\<str:s_name\>/mod | reaStudentOne() | modifyStudent.html | 
 X |  | modConStudent() |  | reaStudentAll() 
학생삭제 | /students/\<str:s_name\>del | delStudent() | deleteStudent.html |


### 5-2 프로젝트 생성

1. `django-admin startproject studentsProject`
2. `move studentsProject stdProject`
3. `cd stdProject` 


### 5-3 애플리케이션 생성

1. `python manage.py startapp students`


### 5-4 프로젝트 설정 변경(settings.py)

1. `studentsProject` 디렉토리의 `settings.py` 열기.
2. `students.apps.StudentsConfig`를 INSTALLED_APPS에 추가하기.
    * students는 디렉토리를 의미함.
    * StudentsConfig는 apps.py의 클래스명.
3. `TIME_ZONE = 'Asia/Seoul`로 변경하기.


### 5-5 데이터베이스 만들기(models.py)

1. students/models.py 
```python
   from django.db import models

   class Student(models.model):
       s_name = models.CharField(max_length=100)
       s_major = models.CharField(max_length=100)
       s_age = models.IntegerField(default=0)
       s_grade = models.IntegerField(default=0)
       s_gender = models.CharField(max_length=30)
      
       def __str__(self):
           return self.s_name
   ```
   
2. students/admin.py
```python
from django.contrib import admin
from students.models import Student

admin.site.register(Student)
```

3. `python manage.py makemigrations`
4. `python manage.py migrate`


### 5-6 관리자 계정 생성 및 웹서버 실행

1. `python manage.py createsuperuser`
    * Username, Email address, Password를 입력한다.
    * Password는 투명화 처리 되어 있다.
2. `python manage.py runserver 0.0.0.0:8000`
    * `localhost:8000` 또는 `127.0.0.1:8000`으로 접속한다.