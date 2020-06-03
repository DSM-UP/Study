#### Lambda의 closer

람다는 자바의 closer와 개념이 좀 다르다. 자바의 lambda는 함수내부에서 실행될때, 로컬 변수에 접근하기 위해서는 해당 변수의 값이 final이어야한다.

final인 경우 해당 변수값을 복사하여 lambda 내부에서 사용하며, 이를 capturing이라고 한다.

코틀린의경우 final변수의 경우 똑같이 복사하고, final이아닌 로컬변수에서는 wrapper에 변수를 담고 그 wrapper를 final변수를 담아 이 변수의 참조값을 저장하면된다.