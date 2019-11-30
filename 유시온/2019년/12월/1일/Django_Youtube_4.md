# Django

> #### https://www.youtube.com/watch?v=fTWNpn0-fu0&list=PLieE0qnqO2kSHhEZzTBTtCUOKO1G_-Ctd&index=3 
> #### Seoul Wiz님의 Youtube 강의를 참고해 작성하였습니다.

## [T27] 장고(Django) 04강_데이터베이스(ORM)

### 4-1 테이블 생성

테이블은 models.py에 태이블 클래스 정의 후 admin.py에 등록 해야 한다.

> Django 프로젝트 기본 설정

1. 프로젝트 생성
    * `django-admin startproject PROJECTNAME`을 명령프롬포트에 입력하여, project를 생성한다.
2. 애플리케이션 생성
    * `cd PROJECTNAME`을 입력하여, 프로젝트 디렉토리 내부로 들어간다.
    * `python manage.py startapp APPNAME`을 입력하여, 애플리케이션을 생성한다.
3. 프로젝트 이름 변경
    * `cd ../`을 입력하여, 프로젝트 디렉토리 외부로 나온다.
    * `move PROJECTNAME NEW_PROJECTNAME`을 입력하여 PROJECTNAME을 NEW_PROJECTNAME으로 변경한다.
4. 애플리케이션 등록
    * `cd NEW_PROJECTNAME\PROJECTNAME`을 입력하여 PROJECTNAME 디렉토리 내부로 들어온다.
    * `settings.py`를 열어, `INSTALLED_APPS`에 `'APPNAME.apps.APPNAMEConfig',`를 입력한다.   
5. 테이블 생성
    * `NEW_PROJECTNAME`디렉토리 내부에 들어온다.
    * `python manage.py migrate`를 입력하여 테이블을 생성한다.
6. 관리자 생성
    * `python manage.py createsuperuser`을 입력한다.
    * `Username, Email address, Password`를 모두 입력하여 관리자를 생성한다.
7. 서버 열기
    * `python manage.py runserver 0.0.0.0:8000`을 입력하여 서버를 연다.
8. 사용자 페이지 접속하기
    * `127.0.0.1:8000`을 브라우저 주소에 입력하여 페이지에 접속한다.
    * 클라이언트가 페이지에 접속한다면, 아까 서버를 연 명령프롬포트에 기록이 남는다.
9. 관리자 페이지 접속하기
    * `127.0.0.1:8000/admin`을 브라우저 주소에 입력하여 관리자 페이지에 접속한다.
    * 아까 생성한 관리자의 Username과 Password를 입력하여 관리자 로그인을 한다.
    * Groups와 Users가 기본적으로 생성 되어 있다.

<hr>

테이블 클래스는 models.py에 정의한다.

테이블의 이름으로 class를 생성하여 models.Model을 상속한다.

필드 명은 클래스의 속성으로 정의를 한다.

```python
class Student(models.Model):
    s_name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.s_name
``` 

이때, 값의 타입을 정하고, 데이터의 최대 길이를 정해야 한다.

그리고 \_\_str__(self)를 지정하여 이름을 따올 수 있게 해야 한다.

이 클래스를 이제 admin.py에 등록해야 한다.

```python
from django.contrib import admin
from students.models import Student

admin.site.register(Student)
```
  
그 후, DB변경사항을 `python manage.py makemigrations`를 입력한다.
그 다음 `python manage.py migrate`를 입력하여 반영시킨다. 

### 4-2 레코드 다루기(create, read, update, delete) 

shell 모드 진행 : `python manage.py shell`을 입력하여 shell 모드로 진행할 수 있다.

#### 레코드 추가(create) - 데이터 생성

1. NEW_PROJECT 디렉토리 내부에 진입한다.
2. `python manage.py shell`을 입력하여, shell 모드를 킨다.
3. `from students.models import Student`를 입력하여 Student 클래스를 사용할 수 있게 한다.
4. 변수에 Student를 생성자를 이용해 넣어준다.
5. 변수.save()로 DB에 저장한다. 

```python
python manage.py shell  #shell 모드 킴
from students.models import Student #Student 클래스 import
qs = Student(s_name='honggildong', s_major='computer', s_age=21, s_grade=2, s_gender='M')   # 변수 할당
qs.save()   #save()
```

#### 레코드 읽기(read) - 데이터 검색

1. NEW_PROJECT 디렉토리 내부에 진입한다.
2. `python manage.py shell`을 입력하여, shell 모드를 킨다.
3. `CLASSNAME.objects.all()`을 입력하여, CLASSNAME의 데이터 전체를 **QuerySet** 타입으로 반환한다.
4. `CLASSNAME.objects.get(조건)`을 입력하여, CLASSNAME의 데이터 중 조건에 맞는 데이터를 **CLASSNAME** 타입으로 반환한다.

#### 레코드 읽기(read) - 필드 데이터 검색

1. 데이터 다수 : 첨자([])를 이용한 접근
    * ```python
          qs = Student.objects.all()
          qs[1]
          qs[1].s_name
      ``` 
2. 데이터 한개 : '.'를 이용한 접근
    * ```python
          qs = Student.objects.get(s_name='Honggildong')
          qs.s_name
          qs.s_age
      ```
      
#### 레코드 읽기(read) - 데이터 필터(filter)

기호 | 뜻
-----|----
__lt | ~보다 작다
__lte | ~보다 작거나 같다
__gt | ~보다 크다
__gte | ~보다 크거나 같다
__isnull | ~ null인 자료 검색
__contains | 특정 문자열을 포함하는 자료 검색
__startwith | 특정 문자열로 시작하는 자료 검색
__endwith | 특정 문자열로 끝나는 자료 검색

#### 레코드 읽기(read) - 데이터 정렬

기호 | 뜻
-----|---
order_by(' ') | 오름차순
order_by('- ') | 내림차순

#### 레코드 업데이트(update) - 데이터 수정

1. NEW_PROJECT 디렉토리 내부에 진입한다.
2. `python manage.py shell`을 입력하여, shell 모드를 킨다.
3. `CLASSNAME.objects`를 이용하여 변수에 값을 담는다.
4. 변수에 값을 재할당하여 데이터를 수정한다.
5. 변수.save()

#### 레코드 삭제(delete) - 데이터 삭제

1. 1. NEW_PROJECT 디렉토리 내부에 진입한다.
2. `python manage.py shell`을 입력하여, shell 모드를 킨다.
3. `CLASSNAME.objects`를 이용하여 변수에 값을 담는다.
4. 변수.delete()

