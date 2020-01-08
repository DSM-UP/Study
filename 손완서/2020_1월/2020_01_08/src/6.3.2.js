function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}

const o = {
  subject: "I",
  verb: "love",
  object: "JavaScript"
};

getSentence(o); // "I love JavaScript"

const arr = ["I", "love", "JavaScript"];
getSentence(arr); // "I love JavaScript"

function addPrefix(prefix, ...words) {
  // 나중에 더 좋은 방법을 배웁니다.
  const prefixedWords = [];
  for (let i = 0; i < words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

addPrefix("con", "verse", "vex"); // ["converse", "convex"]
