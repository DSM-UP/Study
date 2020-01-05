# Go2

#### 세미콜론 생략 가능

 Go에서는 세미콜론으로 문장의 끝을 표시한다. Go 컴파일러는 세미콜론을 기준으로 문장 단위를 인식한다. 그래서 문장 여러 개를 세미콜론으로 구분하여 한 줄에 작성할 수도 있다.

 하지만 이것은 제약이 되기도 한다. 

~~~go
package main

func main() {
    for i := 0; i <= 5; i++ {
        fmt.Print(i)
    }
    
    for j := 5; j >= 0; j-- // for 문 끝에 세미콜론이 삽입되어 컴파일 오류가 발생한다.
    {
        fmt.Print(j)
    }
}
~~~

이처럼 컴파일러가 문장의 끝에 세미콜론을 삽입하기 때문에 다른 줄에 여는 괄호를 쓰면 컴파일 오류가 발생한다.



#### gofmt

 Go는 코드의 스타일을 자동으로 맞춰주는 gofmt 도구를 제공한다. gofmt 도구를 사용하면 코드의 스타일을 Go에서 사용하는 스타일대로 맞춰준다. 대부분의 개발용 에디터에는 소스 코드를 저장할 때 gofmt로 스타일을 정돈해주는 플러그인이 있다.

- gofmt 사용전

~~~go
package main
import "fmt"
func main() {
    type Rect struct{
    width int
    height int
    }
    r := Rect{1, 2}; fmt.Println(r.width * 2 + r.height * 2)
}
~~~

- gofmt 사용후

~~~go
package main

import "fmt"

func main() {
    type Rect struct {
        width int
        height int
    }
    
    r := Rect{1, 2}
    fmt.Println(r.width * 2 + r.height * 2)
}
~~~

