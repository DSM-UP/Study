/*package HashSet_2020_06_30;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class Hash_SEt {
	public static void main(String[] args) {
		Set<String> set = new HashSet<String>();
		set.add("ABC");
		set.add("ABCg");
		set.add("ABCf");
		set.add("ABCe");
		set.add("ABCd");

		int size =set.size();
		System.out.println("ÃÑ °´Ã¼¼ö:"+size);
		
		Iterator<String> iterator = set.iterator();
		
		while(iterator.hasNext()) {
			String s = iterator.next();
			System.out.println("\t"+s);
			
		}
		
		
		for(String s1:set) {
			System.out.println(s1);
	
		}
		
		set.clear();
		if(set.isEmpty()) {
			System.out.println("ºñ¾îÀÖÀ½");
		}
	
		
	}
}
*/