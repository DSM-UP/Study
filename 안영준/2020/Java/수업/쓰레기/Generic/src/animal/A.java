package animal;

public class A<T extends Animal>{
	

	public static void main(String[] args) {
		A<Dog12> a = new A<>();
		A<Animal> a2 = new A<>();
		System.out.println(a);
		System.out.println(a2);

		// animal 포함한 하위클래스
		// 상위타입은 클래스뿐만이 아니라 인터페이스도 가능하다. , 인터페이스라고 해서 implements x <T extend 상위타입>  리턴 타입메소드(
	} //하위,구현클래스만가능
}

//제네릭 타입을 매개값이나 리턴타입으로 사용할 때 = 와일드카드사용함.