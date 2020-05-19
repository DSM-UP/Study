# JAVA Abstract class	

## Abstract class ????

**추상클래스는 A클래스, B클래스, C클래스들 간에 비슷한 필드와 메서드를 공통적으로 추출해 만들어진 클래스다.**



```java
abstract class Animal {
	private String type;
	
	public Animal(String type) {
		this.type = type;
	}
	
	public abstract void sound();
}

class Cat extends Animal {
	Cat(String type) {
		super(type);
	}
	public void sound() {
		System.out.println("냐옹");
	}
}

class Dog extends Animal {
	Dog(String type) {
		super(type);
	}
	public void sound() {
		System.out.println("월월");
	}
}

public static void main(String[] args) {
		Cat cat = new Cat("고양이");
		Dog dog = new Dog("강아지");
		
		cat.sound();
		dog.sound();
}
```

