function* theFutureIsNow() {
  let data;
  try {
    data = yield Promise.all([
      nfcall(fs.readFile, "a.txt"),
      nfcall(fs.readFile, "b.txt"),
      nfcall(fs.readFile, "c.txt")
    ]);
  } catch (err) {
    console.error("Unable to read one or more input files: " + err.message);
    throw err;
  }
  yield ptimeout(60 * 1000);
  try {
    yield nfcall(fs.writeFile, "d.txt", data[0] + data[1] + data[2]);
  } catch (err) {
    console.error("Unable to write output file: " + err.message);
    throw err;
  }
}
