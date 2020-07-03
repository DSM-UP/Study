package Study_2020_07_03;

import java.util.*;

public class Study {
	public static void main(String[] args) {
		
	 long starttime;
	
	 long endtime;
	 Map<String,Integer> map = new HashMap<String, Integer>();
	 List<String> list = new ArrayList<String>();
	 List<String> list1 = new LinkedList<String>();
	 list.add("Abcd");
 	 list.add("Abcd");
	 list.add("Abcd");
	 list.add("Abcd");
	 
	 
	 
	 
	 int size =list.size();
	 System.out.println(size);
	 list.remove("1");
	 
	 for(int i=0;i<list.size();i++)
	 {
	 String information = list.get(i);
	 System.out.println(i+information);
	 }
	 
	 
	 long starttime1;
	 starttime1 = System.nanoTime();
	 
	 
	 for(int i=0;i<10000;i++) {
		 list.add(0,String.valueOf(i));
	 }
	 long endtime1;
	 endtime1 = System.nanoTime();
	 
	 System.out.println(endtime1-starttime1);
	 
	 
	 
	 
	 
	 map.put("hello", 1);
	 map.put("hello1", 1);
	 
	 Set<String> keyset = map.keySet();
	 Set<Map.Entry<String, Integer>> entryset = map.entrySet();

	 Iterator<String> keyiterator = keyset.iterator();
	 while(keyiterator.hasNext()) {
		 String key = keyiterator.next();
		 Integer value = map.get(key);
	 
		 System.out.println(key+value);
	 }
	 
	 Iterator<Map.Entry<String, Integer>> entryiterator = entryset.iterator();
	 while(entryiterator.hasNext()){
		 Map.Entry<String, Integer> entry = entryiterator.next();
		 
		 String key1 = entry.getKey();
		 Integer value1 = entry.getValue();
		 
	 }
	
	 //starttime=System.nanoTime();
/*	 for(int i=0;i<10000;i++) {
		 list.add(0,String.valueOf(i));
		 	 endtime = System.nanoTime();

		 
	 }*/
	 }
}
/*
 public class Member{
 	public String name;
 	public int age;
 	
 	public Member(String name, int age){
 	this.name = name;
 	this.age = age;
 	}
 	
 	public boolean equals(Object obj){
 	if(obj instanceof Member){
 	Member member = (Member) obj;
 	return.name.equals(name)&&(Member.age==age)
 	
 	}
 	else return false;
 	
 	public int hashcode(){
 	return name.hashcode()+age;
 	
 	
 	
 	pulic class Member(){
 		public int age;
 		public String name;
 		
 		public boolean equals(String name, int age){
 			Member member = (Member) obj;
 			return Member.name.equals(name)&&(Member.age == age);
 			
 			
 		}
 		else{
 		return false}
 		
 	}
 	
 	
 	public Member(String name, int age){
 		this.age =a ge;
 		this.name = name;
 	}
 	
 	
 	public boolean equals(Object obj){
 	Member member = (Member) obj;
 	return meber.name.equals(name)&&(member.age=age);
 	
 	}
 	else
 	{return false;
 	
 	public int hashcode(){
 		return name.hashCode()+ age;
 	}
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	public class Member{
 		public String name;
 		public int age;
 		
 		public boolean equals(String name, int age){
 		 if(obj instanceof Member){
 		 	Member member = (Member) obj;
 		 	return member.name.equals(name)&&(member.age == age);
 		}
 		else{ return false;}
 	}
 		public int hashCode(){
 		return name.hashCode()+age;
 		
 		}
 		
 }
 }
 }
 
*/