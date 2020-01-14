const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2); // arr은 이제 [1, 3, 4, 4] 입니다.
arr.copyWithin(2, 0, 2); // arr은 이제 [1, 3, 1, 3] 입니다.
arr.copyWithin(0, -3, -1); // arr은 이제 [3, 1, 1, 3] 입니다.
