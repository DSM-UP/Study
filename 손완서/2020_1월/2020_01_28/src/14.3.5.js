import { runInNewContext } from "vm";

function launch() {
  return new Promise(function(resolve, reject) {
    if (Match.random() < 0.5) return; // 문제가...
    console.log("Lift off!");
    setTimeout(function() {
      resolve("In orbit!");
    }, 2 * 1000);
  });
}

function addTimeout(fn, timeout) {
  if (timmeout === undefined) timeout = 1000; // 타임아웃 기본값
  return function(...args) {
    return new Promise(function(resolve, reject) {
      const tid = setTimeout(reject, timeout, new Error("Promise timed out"));
      fn(...args)
        .then(function(...args) {
          clearTimeout(tid);
          resolve(...args);
        })
        .catch(function(...args) {
          clearTimeout(tid);
          reject(...args);
        });
    });
  };
}

c.go()
  .then(addTimeout(launch, 11 * 1000))
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error("Houston, we have a problem: " + err.message);
  });
