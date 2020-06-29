package 예제;

import java.util.Hashtable;

public class HashTable {

	public static void main(String[] args) {
		Hashtable<Integer, String> ht = new Hashtable<Integer, String>();
		ht.put(0, "a");
		ht.put(1, "b");
		ht.put(2, "c"); // Hashtable에 값 삽입
		ht.replace(2, "d"); // Hashtable 값 바꾸기
		ht.remove(2); // Hashtable 값 삭제

		for(int i = 0; i<ht.size(); i++) {
			System.out.println(ht.get(i)); // Hashtable 값 출력
		}
		
		System.out.println("Hashtable 크기 : " + ht.size());
		System.out.println("Hashtable key 확인 : " + ht.containsKey(1));
		System.out.println("Hashtable value 확인 : " + ht.containsValue("a"));
		System.out.println("Hashtable 크기 0인지 확인 : " + ht.isEmpty());
		System.out.println("Hashtable 전체 Key 확인 : " + ht.keySet());
		
	}

}