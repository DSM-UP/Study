package HashSet_2020_06_30;

import java.util.HashSet;
import java.util.Set;

public class HashSet_EX2 {
	public static void main(String[] args) {
		Set<Member> set = new HashSet<Member>();
		
		set.add(new Member("이름1",30));
		set.add(new Member("이름1",30));
		
		
		System.out.println("총 개체수: "+set.size());
		
		
		
	}
}
