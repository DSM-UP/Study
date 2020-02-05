const inputs = [
  "john@doe.com", // 이메일 주소만 있습니다.
  "john@doe.com is my email", // 이메일 주소로 시작합니다.
  "my email is john@doe.com", // 이메일 주소로 끝납니다.
  "use john@doe.com, my email", // 이메일 주소가 중간에 있고 바로 뒤에 쉼표가 있습니다.
  "my email:john@doe.com." // 이메일 주소 주위에 구두점이 있습니다.
];

const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/gi;
inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));
// [
//     "<a href="mailto:john@doe.com">john@doe.com</a>",
//     "<a href="mailto:john@doe.com">john@doe.com</a>",
//     "my email is <a href="mailto:john@doe.com">john@doe.com</a>",
//     "use <a href="mailto:john@doe.com">john@doe.com</a>, my email",
//     "my email:<a href="mailto:john@doe.com">john@doe.com</a>.",
// ]
