# JAVA Interface

## Interface ????

> 하나의 시스템을 구성하는 2개의 구성 요소(하드웨어, 소프트웨어) 또는 2개의 시스템이 상호작용할 수 있도록 접속되는 경계(boundary), 이 경계에서 상호 접속하기 위한 하드웨어, 소프트웨어, 조건, 규약 등을 포괄적으로 가리키는 말

## 왜 사용하는가??

다형성을 위해서

## 예시

당신이 동물들을 만드는데 동물들의 종류가 여러가지고 당신은 모든 동물들의 Say메서드를 구현하여야 한다.

## 코드

```java
interface Animal {
	void say();
}

public class Hello{
	public static void main(String[] args) {
		Cat cat1 = new Cat();
		Dog dog1 = new Dog();
		
		cat1.say();
		dog1.say();
	}
}

class Cat implements Animal {
	public void say() {
		System.out.print("냐옹");
	}
}

class Dog implements Animal {
	public void say() {
		System.out.print("월월");
	}	
}
```