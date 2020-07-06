package TreeSet_2020_07_06;

import java.util.*;

public class TreeSet_Ex2 {
	public static void main(String[] args) {
		TreeSet<Integer> treeset = new TreeSet<Integer>();
		treeset.add(new Integer(90));
		treeset.add(new Integer(91));
		treeset.add(new Integer(92));
		treeset.add(new Integer(93));
		treeset.add(new Integer(94));

		NavigableSet<Integer> de= treeset.descendingSet();
		for(Integer score : de) {
			System.out.println(score+"");
		}
		System.out.println();
		
		NavigableSet<Integer> ae = de.descendingSet();
		for(Integer score:ae) {
			System.out.println(score+"");
		}
	}
}
