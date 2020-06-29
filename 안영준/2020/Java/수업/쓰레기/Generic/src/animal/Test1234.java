package animal;
import java.util.ArrayList;

class LandAnimal { public void crying() { System.out.println("À°Áöµ¿¹°"); } }

class Cat extends LandAnimal { public void crying() { System.out.println("³Ä¿Ë³Ä¿Ë"); } }

class Dog extends LandAnimal { public void crying() { System.out.println("¸Û¸Û"); } }

class Sparrow { public void crying() { System.out.println("Â±Â±"); } }

 

class AnimalList<T extends LandAnimal> {

    ArrayList<T> al = new ArrayList<T>();

 

    void add(T animal) { al.add(animal); }

    T get(int index) { return al.get(index); }

    boolean remove(T animal) { return al.remove(animal); }

    int size() { return al.size(); }

}

 

public class Test1234 {


	public static void main(String[] args) {

        AnimalList<LandAnimal> landAnimal = new AnimalList<>(); // Java SE 7ºÎÅÍ »ý·«°¡´ÉÇÔ.

 

        landAnimal.add(new LandAnimal());

        landAnimal.add(new Cat());

        landAnimal.add(new Dog());
        landAnimal.remove(new Dog());

        // landAnimal.add(new Sparrow()); // ¿À·ù°¡ ¹ß»ýÇÔ.

 

        for (int i = 0; i < landAnimal.size() ; i++) {

            landAnimal.get(i).crying();

        }

    }

}