# 빅O 표기법

알고리즘의 성능을 이야기하는 지표중 하나

O(1) < O(log n) < O(n) < O(n long n) < O(n^2)

### O(1)

단 한번의 연산으로 끝난다

해쉬 테이블, 스택에서의 푸시 및 팝 등

```java
public void printFirstItem(int[] arrayOfItems) {
    System.out.println(arrayOfItems[0]);
}
```



### O(long n)

이진 탐색 트리의 탐색, 삽입 등



### O(n)

n번의 연산으로 끝난다
배열의 순차 접근 등

```java
public void pirntAllItems(int[] arrayOfItems) {
    for (int item : arrayOfItems) {
        System.out.println(item);
    }
}
```



### O(n long n)

퀵소트, 머지 소트, 힙 소트가 이에 해당한다

O(long n)이 n번 반복된 것과 같다



### O(n^2)

삽입 정렬, 버블 정렬, 선택 정렬이 이에 해당한다
n^2의 연산이 소요된다

