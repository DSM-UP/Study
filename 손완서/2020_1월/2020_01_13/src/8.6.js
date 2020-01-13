const arr = Array(10).map(function(x) {
  return 5;
});

const arr = [1, 2, 3, 4, 5];
delete arr[2];
arr.map(x => 0); // [0, 0, undefined, 0, 0]
