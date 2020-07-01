# Go 언어

Go는 문법 요소는 줄이고 유연함을 높였다. 그래서 적은 문법으로 풍부한 기능을 구현할 수 있다. Go에는 while 문이 없어서 for 문으로만 반복을 표현한다. 또한, 복잡한 if 문 대신 switch 문 case에 조건식을 넣어 간결하게 표현한다. 

~~~go
package main

import "fmt"

func main() {
    sum := 0
    // for 문에 초기화 구문, 조건식, 후속 작업 정의
    for i := 0; i < 10; i++ {
        sum += i
    }
    fmt.Println(sum) // 45
}
~~~

~~~go
package main

import "fmt"

func main() {
    sum, i := 0, 0
    // for 문에 조건식만 사용
    for i < 10 {
        sum += i
        i++
    }
    fmt.Println(sum) // 45
}
~~~

~~~go
package main

import "fmt"

func main() {
    sum, i := 0, 0
    // for 문에 조건식 생략. 중간에 break를 안걸어주면 무한 반복
    for {
        if i >= 10 {
            break
        }
        sum += i
        i++
    }
    fmt.Println(sum) // 45
}
~~~

Switch문 case에 조건식 사용

~~~go
package main

import "fmt"

func main() {
    c := 'a'
    switch {
    case '0' <= c && c <= '9':
        fmt.Printf("%c은(는) 숫자입니다", c)
    case 'a' <= c && c <= 'z':
        fmt.Printf("%c은(는) 소문자입니다", c)
    case 'A' <= c && c <= 'Z':
        fmt.Printf("%c은(는) 대문자입니다", c)
    }
} // a은(는) 소문자입니다
~~~



Go는 코드를 작성할 때 혼동을 줄 수 있는 모호한 문법을 피했다. ++와 -- 같은 증감 연산자는 후치 연산으로만 사용할 수 있고, 증감 연산은 반환 값이 없다. 즉, i = i++ 또는 ++i 같은 코드는 허용하지 않는다. 그리고 C나 C++처럼 변수의 메모리 주소에 접근할 수 있게 포인터 사용을 허용하지만, 포인터 연산은 허용하지 않는다. 이는 포인터의 과다한 사용으로 코드가 복잡해지는 것을 방지하기 위해서다.

- 증감 연산은 반환 값이 없음

~~~go
package main

import "fmt"

func main() {
    sum, i := 0, 0
    for i < 10 {
        sum += i++ // 증감 연산은 반환 값이 없음. 컴파일 에러 발생
    }
    fmt.Println(sum)
}
~~~

- 증감 연산자의 전치 연산은 허용하지 않음

~~~go
package main

import "fmt"

func main() {
    sum, i := 0, 0
    for i < 10 {
        sum += i
        ++i // 증감 연산자의 전치 연산은 허용하지 않음. 컴파일 에러 발생
    }
    fmt.Println(sum)
}
~~~

