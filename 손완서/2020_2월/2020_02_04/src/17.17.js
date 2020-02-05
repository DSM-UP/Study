const input = "It was the best of times, it was the worst of times";
const beginning = input.match(/^\w+/g); // "It"
const end = input.match(/\w+s$/g); // "times"
const everything = input.match(/^.*$/g); // input과 같습니다.
const nomatch1 = input.match(/^best/gi);
const nomatch2 = input.match(/worst$/gi);

const input = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input.match(/^\w+/gm); // ["One", "Two", "Three", "Four"]
const endings = input.match(/\w+$/gm); // ["line", "lines", "lines", "Four"]
