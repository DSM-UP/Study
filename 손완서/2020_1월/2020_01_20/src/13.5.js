setTimeout(function() {
  console.log("hello");
}, 1500);

var i;
for (i = 5; i >= 0; i--) {
  setTimeout(function() {
    console.log(i === 0 ? "go!" : i);
  }, (5 - i) * 1000);
}

function loopBody(i) {
  setTimeout(function() {
    console.log(i === 0 ? "go!" : i);
  }, (5 - i) * 1000);
}
var i;
for (i = 5; i >= 0; i--) {
  loopBody(i);
}

var i;
for (i = 5; i >= 0; i--) {
  (function(i) {
    setTimeout(function() {
      console.log(i === 0 ? "go!" : i);
    }, (5 - i) * 1000);
  })(i);
}

for (let i = 5; i >= 0; i--) {
  setTimeout(function() {
    console.log(i === 0 ? "go!" : i);
  }, (5 - i) * 1000);
}
