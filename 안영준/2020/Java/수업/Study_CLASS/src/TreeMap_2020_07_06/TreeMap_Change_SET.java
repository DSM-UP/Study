package TreeMap_2020_07_06;
import java.util.*;
public class TreeMap_Change_SET {	

		public static void main(String[] args) {
			TreeMap<Integer,String> treeset = new TreeMap<Integer,String>();
			treeset.put(new Integer(1),"abcd");
			treeset.put(new Integer(41),"abcd");
			treeset.put(new Integer(3),"abcd");
			treeset.put(new Integer(2),"abcd");
		Map.Entry<Integer, String> score =null;			
			
			score = treeset.firstEntry();
			System.out.println("가장 낮은 정수"+treeset.firstEntry());
			
			score = treeset.lastEntry();
			System.out.println("가장 높은 정수"+score+"\n");
			
			score = treeset.lowerEntry(new Integer(95));
			System.out.println("95점 아래점수 " + score);
			
			score = treeset.higherEntry(new Integer(95));
			System.out.println("95 위의 정수"+score);

			score = treeset.floorEntry(new Integer(95));
			System.out.println("95이거나 바로 아래 함수"+score);
			
			score = treeset.ceilingEntry(new Integer(94));
			System.out.println("95이거나 바로 위의 함수"+score);
			
			
			while(treeset.isEmpty()) {
				score = treeset.pollFirstEntry();
				System.out.println(score+"남은 객체 수" + treeset.size());
			}
		
		
	}

}
