package TreeSet_2020_07_06;

import java.util.*;

public class TreeSet_Ex1 {
	public static void main(String[] args) {
		TreeSet<Integer> treeset = new TreeSet<Integer>();
		treeset.add(new Integer(1));
		treeset.add(new Integer(12));
		treeset.add(new Integer(13));
		treeset.add(new Integer(14));
		treeset.add(new Integer(15));

		Integer score = null;

		score = treeset.first();
		System.out.println("가장 낮은 정수"+score);
		
		score = treeset.last();
		System.out.println("가장 높은 정수"+score+"\n");
		
		score = treeset.lower(new Integer(95));
		System.out.println("95점 아래점수 " + score);
		
		score = treeset.higher(new Integer(95));
		System.out.println("95 위의 정수"+score);

		score = treeset.floor(new Integer(95));
		System.out.println("95이거나 바로 아래 함수"+score);
		
		score = treeset.ceiling(new Integer(94));
		System.out.println("95이거나 바로 위의 함수"+score);
		
		while(treeset.isEmpty()) {
			score = treeset.pollFirst();
			System.out.println(score+"남은 객체 수" + treeset.size());
		}
	
	}
}
