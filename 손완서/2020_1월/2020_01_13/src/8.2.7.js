const arr = [1, 2, 3, 4, 5];
arr.reverse(); // arr은 이제 [5, 4, 3, 2, 1] 입니다.

const arr = [5, 4, 3, 2, 1];
arr.sort(); // arr은 이제 [1, 2, 3, 4, 5] 입니다.

const arr = [
  { name: "Suzanne" },
  { name: "Jim" },
  { name: "Trevor" },
  { name: "Amanda" }
];
arr.sort(); // arr은 바뀌지 않습니다.
arr.sort((a, b) => a.name > b.name); // arr은 name 프로퍼티의 알파벳 순으로 정렬됩니다.
arr.sort((a, b) => a.name[1] < b.name[1]); // arr은 name 프로퍼티의 두 번째 글자의 알파벳 역순으로 정렬됩니다.
