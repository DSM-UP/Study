package comparable_2020_07_07;

import java.util.*;
import com.sun.org.apache.xpath.internal.axes.DescendantIterator;

public class Main {
//	public static void main(String[] args) {	
//		TreeSet<Person> treeset = new TreeSet<Person>();
//		
//		treeset.add(new Person("a",24));
//		treeset.add(new Person("db",13));
//		treeset.add(new Person("dc",14));
//		treeset.add(new Person("de",12));
//
//		Iterator<Person> iterator = treeset.iterator();
//		while(iterator.hasNext()) {
//			Person person = iterator.next();
//			System.out.println(person.name+person.age);
//		}
//		
//	}
	public static void main(String[] args) {
		TreeSet<Fruit> treeSet = new TreeSet<Fruit>(new DescendingComparator());
			treeset.add(new Fruit("포도",1000));
			treeset.add(new Fruit("포도1",2000));
			treeset.add(new Fruit("포도2",3000));

			
			Iterator<Fruit> iterator = treeset.iterator();
			while(iterator.hasNext()) {
				Fruit fruit = iterator.next();
				System.out.println(fruit.name+fruit.price);
			}
// 		
//	}
	
}
