package ArrayList_2020_06_29;

import java.util.Arrays;
import java.util.List;

public class ArraylsList_Ex {
	public static void main(String[] args) {
		List<String> list1 = Arrays.asList("abcd","ABCD");
		for(String name:list1) {
			System.out.println(name);
		}
		
		List<Integer> list2 = Arrays.asList(1,2,3);
		for(int value:list2) {
			System.out.println(value);
		}
	}
}

