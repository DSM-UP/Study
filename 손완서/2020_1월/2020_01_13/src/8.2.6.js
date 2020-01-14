const arr = new Array(5).fill(1); // arr이 [1, 1, 1, 1, 1]로 초기화됩니다.
arr.fill("a"); // arr은 이제 ["a", "a", "a", "a", "a"] 입니다.
arr.fill("b", 1); // arr은 이제 ["a", "b", "b", "b", "b"] 입니다.
arr.fill("c", 2, 4); // arr은 이제 ["a", "b", "c", "c", "b"] 입니다.
arr.fill(5.5, -4); // arr은 이제 ["a", 5.5, 5.5, 5.5, 5.5] 입니다.
arr.fill(0, -3, -1); // arr은 이제 ["a", 5.5, 0, 0, 5.5] 입니다.
