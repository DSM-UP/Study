package No5;

public class StorageImp1<T> implements Storage<T> {
	private T[] array;
	
	public StorageImp1(int capacity) {
		this.array = (T[])(new Object[capacity]);
	}

	@Override
	public void add(T item, int index) {
		// TODO Auto-generated method stub
		array[index] = item;

	}

	@Override
	public T get(int index) {
		// TODO Auto-generated method stub
		return array[index];
	}

}
