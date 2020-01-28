function* theFutureIsNow() {
  const data = yield Promise.all([
    nfcall(fs.readFile, "a.txt"),
    nfcall(fs.readFile, "b.txt"),
    nfcall(fs.readFile, "c.txt")
  ]);
  yield ptimeout(60 * 1000);
  yield nfcall(fs.writeFile, "d.txt", data[0] + data[1] + data[2]);
}
