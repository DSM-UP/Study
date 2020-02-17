const debug = require("debug")("main"); // 모듈이 반환하는 함수를 즉시 호출할 수 있습니다.

debug("starting"); // 디버그가 활성화되어 있으면 "main startin +0ms" 라는 로그를 남긴다.

let lastMessage;

module.exports = function(prefix) {
  return function(message) {
    const now = Date.now();
    const sinceLastMessage = now - (lastMessage || now);
    console.log(`${prefix} ${message} +${sinceLastMessage}ms`);
    lastMessage = now;
  };
};

const debug1 = require("./debug")("one");
const debug2 = require("./debug")("two");

debug1("started first debugger!");
debug2("started second debugger!");

setTimeout(function() {
  debug1("after some time....");
  debug2("what happends?");
}, 200);
