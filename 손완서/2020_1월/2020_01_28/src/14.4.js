function nfcall(f, ...args) {
  return new Promise(function(resolve, reject) {
    f.call(null, ...args, function(err, ...args) {
      if (err) return reject(err);
      resolve(args.length < 2 ? args[0] : args);
    });
  });
}

function ptimeout(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, delay);
  });
}

function grun(g) {
  const it = g();
  (function iterate(val) {
    const x = it.next(val);
    if (!x.done) {
      if (x.value instanceof Promise) {
        x.value.then(iterate).catch(err => it.throw(err));
      } else {
        setTimeout(iterate, 0, x.value);
      }
    }
  })();
}

function* theFutureIsNow() {
  const dataA = yield nfcall(fs.readFile, "a.txt");
  const dataB = yield nfcall(fs.readFile, "b.txt");
  const dataC = yield nfcall(fs.readFile, "c.txt");
  yield ptimeout(60 * 1000);
  yield nfcall(fs.writeFile, "d.txt", dataA + dataB + dataC);
}

grun(theFutureIsNow);
