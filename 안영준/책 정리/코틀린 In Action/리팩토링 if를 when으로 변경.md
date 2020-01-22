#### 리팩토링: if를 when으로 변경

 코틀린의 if에는 자바와 달리 달리 3항 연산자가 없기 때문에, if(a<b) a else b 는 자바의 a>b ? a:b 처럼 작동한다. 이런 특성을 사용하면 eval 함수에서 return 문과 중괄호를 없애고 if 식을 본문으로 사용해 더 간단하게 만들 수 있다.

fun eval(e:Expr): Int = 

if(e is Num){

e.value

}else if is sum{

eval(e.right).eval(e.left)

}

else{

throw IllegalArgumentException("ERROR")

}



if의 분기의 식이 하나밖에없다면 중괄호를 생략해도 된다. 이 코드를 when을 사용해 더 다듬을 수 있다.

fun eval(e:Expr): Int = 

when(e_{

is Num ->

e.value

처럼 말이다.

when 식을 앞에서 살펴본 값 동등성 검사가 아닌 다른 기능에도 쓸 수 있다.

이 예제는 받은 값의 타입을 검사하는 when분기를 보여준다, if예제와 마찬가지로 타입을 검사하고 나면 스마트 캐스트가 이루어진다. 따라서 변수를 강제로 캐스팅 할 필요가 없다.

