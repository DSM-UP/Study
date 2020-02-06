#### lambda and collection

코틀린에서는 maxby라는 collection의 확장함수를 재공한다.

예로

fun main(args: Array){

​	val people = listOf(Person("Alice",29),Person("Bob",31))

​	println(people.maxby{it.age})

}

}

이 코드를 볼 수 있다. 간단히 두 사람중 누가 더 나이가많은지 비교할수있도록 도와주는 함수인거 같다.