# 1. HTML5
HTML(HyperText Markup Language)은 웹페이지를 기술하기 위한 마크업 언어. 웹페이지의 내용과 구조를 담당하는 언어로써 HTML 태그를 통해 정보를 구조화하는 것
## 1-1. Multimedia
Without Plugins like Flash, 비디오 및 오디오 기능 지원
## 1-2. Graphics & Effects
SVG, 캔버스를 사용한 2차원 그래픽과 CSS3, WebGL을 사용한 3차원 그래픽을 지원
## 1-3. Connectivity
HTML5는 서버와의 소켓 통신을 지원하므로 서버와의 양방향 통신이 가능
## 1-4. Device Access
하드웨어 기능 직접적 제어 가능
## 1-5. Offline & Storage
오프라인 상태에서도 앱 동작 가능 -> HTML5가 플랫폼으로서 사용될 수 있음을 의미
## 1-6. Semantics
HTML 요소의 의미를 명확히 설명하는 시맨틱 태그를 도입하여 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명 가능 -> HTML 요소의 의미를 명확히 해석, 그 데이터를 활용할 수 있는 시맨틱 웹 실현 가능
## 1-7. CSS3
HTML5는 CSS3을 완벽하게 지원


# 2. Hello HTML5

1. <!DOCTYPE html>으로 시작
2. <html>과 </html> 사이에 기술
3. <head>와 </head> 사이에 title, link, meta 등의 설정 위치, 브라우저에 표시 X
4. 웹브라우저에 출력되는 모든 요소는 <body>와 </body> 사이에 위치
5. Editor or IDE 종류
   -VS Code
   -WebStorm
   -Atom
   -Brackets
   -Sublime text

# 3. HTML5의 기본 문법
## 3-1. 요소
시작 태그와 종료 태그 그릐고 태그 사이에 위치한 content로 구성
태그는 대소문자를 구별하지 않으나 소문자 사용이 일반적
### 3-1-1. 요소의 중첩
요소 중첩 가능, 포함 가능 -> 부자 관계 성립 -> 정보 구조화
중첩 관계를 시각적으로 파악하기 쉽게 indent(들여쓰기)를 활용한다.
###3-1-2. 빈 요소
content를 가질 수 없는 요소 = 빈 요소 -> content가 없으며 속성만 가질 수 있음
대표적 빈요소
    -br
    -hr
    -img
    -input
    -link
    -meta
## 3-2. 어트리뷰트
어트리뷰트 = 요소의 성질, 특징을 정의
요소는 어트리뷰트를 가질 수 있으며 어트리뷰트는 요소에 추가적 정보를 제공
시작 태그에 위치하며 이름과 값의 쌍을 이룸
### 3-2-1. 글로벌 어트리뷰트
