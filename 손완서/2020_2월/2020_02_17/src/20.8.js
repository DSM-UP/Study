const exec = require("child_process").exec;

exec("dir", function(err, stdout, stderr) {
  if (err) return console.error('Error executing "dir"');
  stdout = stdout.toString(); // Buffer를 문자열로 바꿉니다.
  console.log(stdout);
  stderr = stderr.toString();
  if (stderr !== "") {
    console.error("error:");
    console.error(stderr);
  }
});
