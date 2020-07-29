package TreeSet_2020_07_06;

import java.util.*;

public class TreeSet_Ex3 {

	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		TreeSet<String> treeset = new TreeSet<String>();
		
		treeset.add("c");
		treeset.add("apple");
		treeset.add("bpple");
		treeset.add("cpple");
		treeset.add("dpple");
		treeset.add("epple");
		treeset.add("f");
		treeset.add("ff");


		treeset.add("fa");
		treeset.add("fpple");
		treeset.add("gpple");
		treeset.add("hpple");
		treeset.add("apple");
		treeset.add("ipple");

	System.out.println("[c~f사이의 단어 검색]");	
	NavigableSet<String> rangeset=treeset.subSet("c", true, "f", true);
	
	for(String a:rangeset) {
		System.out.println(a);
	}
	}

}
