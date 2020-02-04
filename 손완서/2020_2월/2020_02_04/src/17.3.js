const input = "As I was going to Saint Ives";
const re = /\w{4,}/gi;

// 문자열(input)의 메서드를 사용할 때
input.match(re); // ["was", "going", "Saint", "Ives"]
input.search(re); // 5 (세 글자 이상으로 이루어진 첫 단어의 인덱스는 5입니다.)

// 정규식(re)의 메서드를 사용할 때
re.exec(input); // ["was"] (처음 일치하는 것)
re.exec(input); // ["going"] (exec는 마지막 위치를 '기억'입니다.)
re.exec(input); // ["Saint"]
re.exec(input); // ["Ives"]
re.exec(input); // null -- 일치하는 것이 더는 없습니다.
re.test(input); // true (input에는 세 글자 이상으로 이루어진 단어가 한 개 이상 있습니다.)

// 위 예제는 모두 정규식 리터럴을 그대로 써도 됩니다.
input.match(/\w{4,}/gi);
input.search(/\w{4,}/gi);
/\w{4,}/gi.test(input);
/\w{4,}/gi.exec(input);
// ...
