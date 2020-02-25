#### group by

data class Person(val name: String, val age: Int)

fun main(args: Array) 

{

 val people = listOf(Person("Alice", 31), Person("Bob", 29), Person("Carol", 31)) 

println(people.groupBy { it.age }) 

}

list의 groupby를 수행하면 나이에 따라 그룹힝 된다.