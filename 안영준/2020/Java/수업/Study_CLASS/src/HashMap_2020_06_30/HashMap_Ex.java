package HashMap_2020_06_30;

import java.util.*;
//키로 사용할 객체는 hashcode의 equals 메소드를 재정의해서 동등 객체가 될 조건을 정해야 한다.
public class HashMap_Ex {
	public static void main(String[] args) {
		Map<String,Integer> map = new HashMap<String,Integer>();
		
		map.put("a", 1);
		map.put("a2", 1);
		map.put("a3", 1);
		map.put("a4", 1);
		map.put("a5", 1);
		System.out.println("entry: "+map.size());
		
		System.out.println("홍길동:"+map.get("a"));
		System.out.println();
		
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
