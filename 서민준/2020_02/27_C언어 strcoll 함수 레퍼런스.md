# C언어 strcoll 함수 레퍼런스 정리
  
**출처**  
모두의 코드 \ C Reference \ string.h \ strcoll  
URL : https://modoocode.com/86  
  
## strcoll
  
    #include <string.h>

    int strcoll(const char* str1, const char* str2);
  
locale을 이용하여 두 개의 문자열을 비교한다.  
  
C 형식 문자열인 str1과 str2를 LC_COLLATE에 정의되어 있는 방식에 따라 해석된 후 비교하게 된다.  
  
이 함수 역시 문자 하나 하나를 일일이 비교하여 두 개의 문자가 다른 것이 나타날 때 까지나 NULL에 도달할 때 까지 비교를 수행한다.  
  
## locale(로케일)
  
**출처**  
https://ko.wikipedia.org/wiki/%EB%A1%9C%EC%BC%80%EC%9D%BC#%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/%EB%A7%88%ED%81%AC%EC%97%85_%EC%96%B8%EC%96%B4_%EC%A7%80%EC%9B%90  
  
**로케일(locale)**은 사용자의 언어, 국가뿐 아니라 사용자 인터페이스에서 사용자가 선호하는 사항을 지정한 매개 변수의 모임이다.  
  
## LC_COLLATE
  
**출처**  
https://blog.azulpintor.io/entry/postgresql-create-database  
  
locale 규칙의 카테고리 중 하나로, 데이터베이스에 저장된 값의 정렬에 관여하는 설정입니다.  
  
## 인자
  
### str1
  
비교할 C 형식 문자열  
  
### str2
  
비교할 C 형식 문자열  
  
## 리턴값
  
두 문자열이 일치하면 0을 반환한다.  
  
만일 str1과 str2에서 최초로 일치하지 않는 문자의 값이 str1이 더 크다면 0보다 큰 값을 반환하고 그렇지 않다면 0보다 작은 값을 반환하게 된다.