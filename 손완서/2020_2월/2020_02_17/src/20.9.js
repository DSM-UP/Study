const fs = require("fs");
const ws = fs.createWriteStream("stream.txt", { encoding: "utf8" });
ws.write("line 1\n");
ws.write("line 2\n");
ws.end();

const rs = fs.createReadStream("stream.txt", { encoding: "utf8" });
rs.on("data", function(data) {
  console.log(">> data: " + data.replace("\n", "\\n"));
});
rs.on("end", function(data) {
  console.log(">> end");
});

const rs = fs.createReadStream("stream.txt");
const ws = fs.createWriteStream("stream_copy.txt");
rs.pipe(ws);
