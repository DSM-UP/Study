# Dear Imgui

imgui(Immediate mode gui 즉시 실행 gui)

Dear Imgui는 **c++를 위한 가벼운 GUI라이브러리이다.** 3D파이프라인을 사용가능한 프로그램에서 언제든 렌더링할 수 있는 최적화된 vertex 버퍼를 만든다. 이것은 빠르고 가벼우며 외부 종속성이 없다.

### 목차

- [Usage](#Usage)
- [How it works](#How-it-works)
- Demo
- Integration



### Usage

루트 폴더에 모든 파일이 들어있다.

특정한 빌드 절차가 필요없다. 그저 .cpp파일들을 프로젝트 파일에 포함시키기만 하면 된다.

Dear Imgui와 통합한 백엔드가 필요한데 백엔드는 마우스/키보드/게임패드와 같은 입력들과 여러가지 설정들을 Dear Imgui에게 전달하고 결과 정점의 렌더링을 담당한다.

다양한 그래픽api와 렌더링 플랫폼을 위한 백엔드는 examples/ 폴더에 예제 프로그램과 함께 제동된다.

Dear Imgui가 프로젝트에서 설정된 후, 프로그램 루프 어디에서든 사용할 수 있다.



Code:

```
ImGui::Text("Hello, world %d", 123);
if (ImGui::Button("Save"))
    MySaveFunction();
ImGui::InputText("string", buf, IM_ARRAYSIZE(buf));
ImGui::SliderFloat("float", &f, 0.0f, 1.0f);
```

Result:
[![sample code output](https://raw.githubusercontent.com/wiki/ocornut/imgui/web/v160/code_sample_02.png)](https://raw.githubusercontent.com/wiki/ocornut/imgui/web/v160/code_sample_02.png)
*(settings: Dark style (left), Light style (right) / Font: Roboto-Medium, 16px / Rounding: 5)*



Dear Imgui는 정교한 툴이든 생명이 짧은 툴(설령 1분만에 사라지는 것이더라도)이든 생성하는데 아무런 제약이 없다. 즉 단지 몇몇 값을 수정하는 위젯이든 돌아가고있는 알고리즘을 추적을 하든 데이터셋을 실시간으로 화면에 반영을하든 무겁든 가볍든 상관이 없다.



### How it works

IMGUI 패러다임에 숨은 핵심 원리를 이해하길 바란다면 위키에서 [About the IMGUI paradigm](https://github.com/ocornut/imgui/wiki#About-the-IMGUI-paradigm)을 읽어라.
IMGUI는 필요하지 않은 상태 복사를 최소화, 상태 동기화를 시도한다. 이는 전통적인 방식의 유저 모드 인터페이스보다 오류(더 적은 코드, 더 적은 버그) 발생률이 더 낮고 동적 사용자 인터페이스를 만들 수 있다.

Dear ImGui는 프로그램에서 쉽게 만들 수 있는 정점 버퍼와 명령 목록들을 출력한다. 이들을 렌더링 하기 위한 draw call과 상태 변화 요청의 수는 꽤 적다. Dear ImGui는 그래픽 상태를 알거나 직접적으로 접근 할 수 없기 때문에 너는 함수들을 코드에디에서든 호출 할 수 있다. (예를 들어 실행되는 알고리즘 중간, 렌더링 과정 중간) 

흔한 오해는 imgui를 즉시 렌더링 모드로 착각한다는 것인데 이는 gui함수 호출이 엄청 많은 비효율적인 draw call과 상태 변화로 GPU드라이버를 망친다고 생각하는 것이다. 이는 Dear ImGui가 하는 것이 아니다. Dear ImGui는 정점 버퍼와 작은 draw call 배치의 리스트를 출력한다. 절대 다이렉트로 GPU를 건들이지 않는다. draw call 배치는 상당히 최적적이고 이를 앱에서 멀리 떨어져서도 나중에 렌더링할 수 있다.



#### Demo

`ImGui::ShowDemoWindow()`함수를 호출하는 것은 다양한 특성과 예시의 윈도우 소개하는 것을 만들 것이다. 그 코드는 imgui_demo.cpp에 있다.

[![screenshot demo](https://raw.githubusercontent.com/wiki/ocornut/imgui/web/v167/v167-misc.png)](https://raw.githubusercontent.com/wiki/ocornut/imgui/web/v167/v167-misc.png)

소스를 통해 예제를 빌드할 수 있다. 만약 그렇지 않다면 Dear imgui에게 바로 알리자. 만약 바르게 데모 앱을 보고 싶다면  [imgui-demo-binaries-20190715.zip](http://www.dearimgui.org/binaries/imgui-demo-binaries-20190715.zip) 에서 윈도우 바이너리 파일을 바로 다운로드 할 수 있다.

데모 앱은 DPI 설정이 되어있지 않아 4k 화면에서 더러워 보일 수 있다. 앱을 만들때 DPI 설정을 위해서 다른 크기의 폰트를 로드/리로드를 할 수 있고 `style.ScaleAllSizes()`로 크기을 바꿀 수 있다.













