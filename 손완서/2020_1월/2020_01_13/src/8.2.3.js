const arr = [1, 2, 3, 4, 5];
arr.slice(3); // [4, 5]. arr은 바뀌지 않았습니다.
arr.slice(2, 4); // [3, 4]. arr은 바뀌지 않았습니다.
arr.slice(-2); // [4, 5]. arr은 바뀌지 않았습니다.
arr.slice(1, -2); // [2, 3]. arr은 바뀌지 않았습니다.
arr.slice(-2, -1); // [4]. arr은 바뀌지 않았습니다.
