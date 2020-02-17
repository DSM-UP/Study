const fs = require("fs");

fs.writeFile("hello.txt", "hello from Node!", function(err) {
  if (err) return console.log("Error writing to file.");
});

const fs = require("fs");

fs.writeFile(__dirname + "/hello.txt", "hello from Node!", function(err) {
  if (err) return console.error("Error writing to file.");
});

const fs = require("fs");
const path = require("path");

fs.writeFile(path.join(__dirname, "hello.txt"), "hello from Node!", function(
  err
) {
  if (err) return console.error("Error writing to file.");
});

const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "hello.txt"), function(err, data) {
  if (err) return console.error("Error reading file.");
  console.log("Read file contents:");
  console.log(data);
});

const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "hello.txt"), { encoding: "utf8" }, function(
  err,
  data
) {
  if (err) return console.error("Error reading file.");
  console.log("File contents:");
  console.log(data);
});

fs.writeFileSync(path.join(__dirname, "hello.txt"), "hello from Node!");

const data = fs.readFileSync(path.join(__dirname, "hello.txt"), {
  encoding: "utf8"
});

try {
  fs.writeFileSync(path.join(__dirname, "hello.txt"), "hello from Node!");
} catch (err) {
  console.error("Error writing file.");
}

const fs = require("fs");

fs.readdir(__dirname, function(err, files) {
  if (err) return console.error("Unable to read directory contents");
  console.log(`Contents of ${__dirname}:`);
  console.log(files.map(f => "\t" + f).join("\n"));
});
