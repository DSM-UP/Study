# JAVA Final

## Final 변수

상수를 정의한다

const같은 역할을 하는 것 같다.



```java
class FinalKeyword {
	public final int ONE = 1;
}

public static void main(String[] args) {
		FinalKeyword ex1 = new FinalKeyword();
		System.out.println(ex1.ONE); // 1 출력
		ex1.ONE = 2; //컴파일 에러
		
}
```

