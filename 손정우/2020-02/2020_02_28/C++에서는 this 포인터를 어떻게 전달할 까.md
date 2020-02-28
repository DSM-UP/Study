# C++에서는 this 포인터를 어떻게 전달할 까?

C++에서 this 포인터를 어떻게 전달하는 지 궁금해졌다

### 타 언어에서의 this

다른 언어의 경우 예를 들어 javascript나 C#같은 언어는 this 포인터 혹은 멤버를 전달할 때 암묵적으로 매개변수를 추가해 보내준다

### C++에서는?

C, C++에서는 함수를 호출할 때 어떤 방식으로 호출하는 지 정해놓은 호출 규약이 있는데 stdcall, cdecl 등이 그것들이다 (정확히 말하면 호출 규약은 x86, x64같은 아키텍처에 따라 다르다)

[위키백과의 호출 규약 문서](#https://ko.wikipedia.org/wiki/X86_호출_규약)를 보면 여러 호출 규약 중 thiscall 호출 규약이 있는데 this 포인터를 ecx 레지스터로 보낸다고 한다
레지스터를 활용하므로 매개변수를 활용해 메모리를 이용하는 것 보다 빠를 것이다

아래는 직접 컴파일하며 어셈블리로 thiscall를 봐보았다

[사용한 C++ 코드]

```C++
#include <iostream>

class object {

public:
	void function() {	
		return;
	}

};

int main() {

	object obj;

	obj.function();

	return 0;
}
```

아래는 컴파일 후의 어셈블리 언어다 쉬운 이해를 위해 대응 되는 C++를 배치 했다

```assembly
	object obj;
	obj.function();  <- C++ 코드
	
008B1852  lea         ecx,[obj]  
008B1855  call        object::function (08B1343h)  
	

...

	void funciton(){ <-- C++코드
008B17B6  add         byte ptr [eax],al  
008B17B8  add         byte ptr [ebx+56h],dl  
008B17BB  push        edi  
008B17BC  push        ecx  
008B17BD  lea         edi,[ebp-0CCh]  
008B17C3  mov         ecx,33h  
008B17C8  mov         eax,0CCCCCCCCh  
008B17CD  rep stos    dword ptr es:[edi]  
008B17CF  pop         ecx  
008B17D0  mov         dword ptr [this],ecx  
008B17D3  mov         ecx,offset _ED61655A_main@cpp (08BC026h) 
		return; <-- C++코드
	}  <-- C++코드
	
```

thiscall에서 ecx를 사용하여 this 포인터를 보내므로 ecx와 관련된 코드와 필요한 코드만 설명한다

1. 어셈블리 첫번째 코드를 보면 lea라는 명령어를 쓰는데 이는 특정 레지스터에 값을 쓴다
   보면 ecx 레지스터에 obj의 주소를 썼다
2. call 명령어로 함수의 코드가 위치한 주소로 이동한다
3. push ecx로 ecx의 값인 object의 주소를 스택에 push한다 (메모리 구조의 그 스택이다)
4. ecx가 필요한 다른 작업을 한다
5. pop ecx로 스택의 최상위 값인 object의 주소를 다시 ecx로 이동시킨다
6. mov dword ptr [this],ecx  로 ecx의 값 object의 주소를 this 변수에 저장한다

이로서 멤버 변수 this 포인터는 값으로 자신의 객체의 주소를 가지게 되었다

