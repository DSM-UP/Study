# Dear Imgui

Dear Imgui는 **c++를 위한 가벼운 GUI라이브러리이다.** 3D파이프라인을 사용가능한 프로그램에서 언제든 렌더링할 수 있는 최적화된 vertex 버퍼를 만든다. 이것은 빠르고 가벼우며 외부 종속성이 없다.

### 목차

- Usage
- How it works
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

