const $paras = $("p");
$paras.length; // 문단의 수
typeof $paras; // "object"
$paras instanceof $; // true
$paras instanceof jQuery; // true

const $newPara = $("<p>Newly created paragraph...</p>");
