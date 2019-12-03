# Django

> #### https://www.youtube.com/watch?v=S8kAi_TyE9c&list=PLieE0qnqO2kSHhEZzTBTtCUOKO1G_-Ctd&index=6 
> #### Seoul Wiz님의 Youtube 강의를 참고해 작성하였습니다.

## [T29] 장고(Django) 06강_학사관리프로그램 만들기-II

### 6-1 학생 등록 및 리스트 페이지 만들기

1. URLconf
2. views
3. template


`studentsProject` 디렉토리의 `urls.py`는 이 프로젝트의 url들을 담당한다.
그러나, 한 파일 안에 모든 url이 있다면 유지 보수 능력이 떨어질 것이다.

그러니 애플리케이션마다 `urls.py` 파일을 추가로 생성하여 나누어주어야 한다.

그러나 `studentsProject` 디렉토리 말고 다른 디렉토리에서 `urls.py`를 생성한다고 해도 실제로 작동하지 않는다.

그래서 `studentsProject/urls.py`의 urlpattern에 어느 디렉토리의 어느 `urls`를 지정할지 선언해 주어야 한다.

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('students/', include('students.urls')),
]
```

지정을 한 `urls.py`에서는 사용 할 `views`를 import 해 주어야 한다.

그리고 urlpatterns를 또 지정해야 하는데, 이때는 함수를 같이 선언 해 주어야 한다.

views에서는 함수 선언과 템플릿을 지정해 주어야 한다. 

템플릿은 애플리케이션 디렉토리에 **templates**로 디렉토리를 생성하여 그 내부에 템플릿을 정리해 둔다.

```python
from django.shortcuts import render

def regStudent(request) :
    return render(request, 'students/registerStudents.html')
``` 

`views.py`에서 regStudent에 대한 응답으로 `students/registerStudents.html`을 주는 것이다.

보통 form태그에서 `action` 속성을 이용하여, submit 이후 진행 방향을 알려준다.

`<form action="{% url 'students:regCon' %}" method="post">`

form 태그 action 속성에서 url을 지정하는 방법은 `{% url 'urls.py의 디렉토리명:urlpatterns의 메소드명' %}`

비슷한 방법으로 {% for %}문이나 {% if %}문을 사용할 수 있다.