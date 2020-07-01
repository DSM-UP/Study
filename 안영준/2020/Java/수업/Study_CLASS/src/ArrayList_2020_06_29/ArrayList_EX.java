package ArrayList_2020_06_29;

import java.util.ArrayList;
import java.util.List;

public class ArrayList_EX {
	public static void main(String[] args) {
		List<String> list = new ArrayList<String>();
		
		list.add("abcd");
		list.add("1234");
		list.add(1," abcd");
		list.add("abcd");
		list.set(1, "Ebc");

		int size = list.size();
		System.out.println("ÃÑ ¿¹Á¦¼ö"+ size);
		System.out.println();
		
		String skill = list.get(2);
		System.out.println("2:"+ skill);
		System.out.println();
		
		for(int i = 0;i<list.size();i++) {
			String str = list.get(i);
			System.out.println(i+":"+str);
		}
		System.out.println();	
		for(String str:list) {
			System.out.println(str);
		}
		list.remove(2);
		System.out.println();
		System.out.println(list);
	}

}
