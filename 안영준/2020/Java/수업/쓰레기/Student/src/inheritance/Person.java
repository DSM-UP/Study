package inheritance;

public class Person {
	String a;
	int b;
	
	public Person(String pa,int pb) {
		a= pa;
		b= pb;
	}
	
	public String getName() {
		return a+b;
	}
	public void setGpa() {
		System.out.println(a+b);
		b = 123;
	}
	
	public static void main(String[] args) {
		Person abc = new Person("¤±¤±",34);
		
		
		abc.setGpa();
	}
}
	