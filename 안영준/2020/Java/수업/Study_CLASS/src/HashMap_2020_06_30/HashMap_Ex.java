 package HashMap_2020_06_30;
import java.util.*;
//키로 사용할 객체는 hashcode의 equals 메소드를 재정의해서 동등 객체가 될 조건을 정해야 한다.
public class HashMap_Ex {
	void sum(String ...str) {
		for(String a:str) System.out.println(a);
	}
	void sum1(String[] str1) {
		for(String b : str1) System.out.println(b);
	}
	public static void main(String[] args) {
		Map<String,Integer> map = new HashMap<String,Integer>();
		HashMap_Ex v = new 	HashMap_Ex();
        v.sum("-","a","b","c");

		map.put("a", 1);
		map.put("a2", 1);
		map.put("a3", 1);
		map.put("a4", 1);
		map.put("a5", 1);
		System.out.println("entry: "+map.size());
		
		System.out.println("홍길동:"+map.get("a"));
		System.out.println(map);
		System.out.println();
		/*
		 Set<String> keyset1 = map.keySet();
		 Iterator<String> KeyIterator = keyset1.Iterator();
		 while(keyIterator.hasnext()){
		 String key1 = keyset.next();
		 String value = keyset.get(key1)
		   
		   
		   
		   Set<String> keyset= map.keySet();
		   Iterator<String> keyIterator = keyset.iterator();
		   While(keyIterator.hasnext()){
		   String key = KeyIterator.next();
		   String value = map.get(key);
		   }
		   
		   Set<Map.Entry<String,Integer>> entryset= map.entrySet();
		   Iterator<Map.Entry<String,Integer>> entryIterator =  entryset.iterator();
		   while(entryIterator.hasnext()){
		   	Map.entry<String,Integer> entrykeyset = entryIterator.next();
		   	String key = entrykeyset.getkey();
		   	String value = entrykeyset.getvalue();
		   	
		   	}
	   
		   
		   
		   
		 set<String> keyset = map.keyset();
		 Iterator<String> keyInterator= keyset.iterator();
		 while(keyInterator.hasnext()){
		 String key = keyInterator.next();
		 Integer value = map.get(key);
		 -
		 Set<Map.entry<String, Integer>> eyset1 =map.entryset();
		 Integer<map.entry<String,Integer>> entryInteger = entryset.iterator();
		 while(entryInteger.hasnext()){
		 Map.Entry<String, Integer> entry = entryInteger.next();
		 String key = entry.getkey();
		 String value = entry.getvelue();
		 }
		 
		 */
		
		Set<String> keyset = map.keySet();
		Iterator<String> keyIterator = keyset.iterator();
		while(keyIterator.hasNext()) {
			String key = keyIterator.next();
			Integer value = map.get(key);
			System.out.println(key+value);
				
		}
		
		System.out.println();
	map.remove("a");
	System.out.println("entry:"+map.size());
	
	Set<Map.Entry<String, Integer>> entryset = map.entrySet();
	Iterator<Map.Entry<String,Integer>> entryInterator =  entryset.iterator();
	
	while(entryInterator.hasNext()) {
		Map.Entry<String, Integer> entry = entryInterator.next();
		String key = entry.getKey();
		Integer value = entry.getValue();
		System.out.println(key+value);
	}
	System.out.println();
	map.clear();
	System.out.println(map.size());
	}


}
