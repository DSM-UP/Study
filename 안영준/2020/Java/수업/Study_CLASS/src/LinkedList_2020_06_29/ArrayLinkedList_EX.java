package LinkedList_2020_06_29;

import java.util.*;

public class ArrayLinkedList_EX {
	public static void main(String[] args) {
		List<String> list1 = new ArrayList<String>();
		List<String> list2 = new LinkedList<String>();
		
		long startTime;
		long endTime;

		
		startTime = System.nanoTime();
		
		for(int i=0;i<10000;i++) {
			list1.add(0,String.valueOf(i));
		}
		
		endTime = System.nanoTime();
		
		System.out.println("걸린시간"+ (endTime-startTime));
		
		startTime = System.nanoTime();

		for(int i=0;i<10000;i++) {
			list2.add(0,String.valueOf(i));
		}
		
		endTime = System.nanoTime();
		
		System.out.println("걸린시간"+ (endTime-startTime));
	}
	
}
