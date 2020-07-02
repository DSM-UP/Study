package No4;

import No4.Box;

public class Util {

public static <T> Box<T> boxing(T t) {

Box<T> box = new Box<T>();

box.set(t);

return box;

}
}