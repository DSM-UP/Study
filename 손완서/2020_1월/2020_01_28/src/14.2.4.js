const fs = require("fs");

fs.readFile("a.txt", function(err, dataA) {
  if (err) console.error(err);
  fs.readFile("b.txt", function(err, dataB) {
    if (err) console.error(err);
    fs.readFile("c.txt", function(err, dataC) {
      if (err) console.error(err);
      setTimeout(function() {
        fs.writeFile("d.txt", dataA + dataB + dataC, function(err) {
          if (err) console.error(err);
        });
      }, 60 * 1000);
    });
  });
});

const fs = require("fs");
function readSketchyFile() {
  try {
    fs.readFile("does_not_exist.txt", function(err, data) {
      if (err) throw err;
    });
  } catch (err) {
    console.log("warning: minor issue occured, program continuing");
  }
}
readSketchyFile();
