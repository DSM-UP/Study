const fs = require("fs");

fs.readdir("data", function(err, files) {
  if (err) {
    console.error("Fatal error: couldn't read data directory.");
    process.exit(1);
  }
  const txtFiles = files.filter(t => /\.txt$/i.test(f));
  if (txtFiles.length === 0) {
    console.log("No .txt files to process.");
    process.exit(0);
  }
  // .txt 파일 처리
});

const fs = require("fs");

const filenames = process.argv.slice(2);

let counts = filenames.map(f => {
  try {
    const data = fs.readFileSync(f, { encoding: "utf8" });
    return `${f}: ${data.split("\n").length}`;
  } catch (err) {
    return `${f}: couldn't read file`;
  }
});

console.log(counts.join("\n"));

const debug = process.env.DEBUG === "1" ? console.log : function() {};

debug("Visible only if environment variable DEBUG is set!");

console.log(`Current directory: ${process.cwd()}`);
process.chdir(__dirname);
console.log(`New current directory: ${process.cwd()}`);
