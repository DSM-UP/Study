const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet() {
  return `Hello, I'm ${this.name}!`;
}

greet(); // "Hello, I'm undefined!" - this는 어디에도 묶이지 않았습니다.
greet.call(bruce); // "Hello, I'm Bruce!" - this는 bruce입니다.
greet.call(madeline); // "Hello, I'm Madeline!" this는 madeline입니다.

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(bruce, 1949, "singer");
// bruce는 이제 { name: "Bruce", birthYear: 1949, occupation: "singer" } 입니다.
update.call(madeline, 1942, "actress");
// madeline은 이제 { name: "Madeline", birthYear: 1942, occupation: "actress" } 입니다.

update.apply(bruce, [1955, "actor"]);
// bruce는 이제 { name: "Bruce", birthYear: 1955, occupation: "actor" } 입니다.
update.apply(madeline, [1918, "writer"]);
// madeline은 이제 { name: "Madeline", birthYear: 1918, occupation: "writer" } 입니다.

const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr); // -5
Math.max.apply(null, arr); // 15

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // apply(bruce, newBruce)와 같습니다.
Math.min(...arr); // -5
Math.max(...arr); // 15

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
// bruce는 이제 { name: "Bruce", birthYear: 1904, occupation: "actor" } 입니다.
updateBruce.call(madeline, 1274, "king");
// bruce는 이제 { name: "Bruce", birthYear: 1274, occupation: "king" } 입니다.
// madeline은 변하지 않았습니다.

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
// bruce는 이제 { name: "Bruce", birthYear: 1949, occupation: "singer, songwriter" } 입니다.
