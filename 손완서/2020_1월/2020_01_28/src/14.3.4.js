function launch() {
  return new Promise(function(resolve, reject) {
    console.log("Lift off!");
    setTimeout(function() {
      resolve("In orbit!");
    }, 2 * 1000); // 2초만에 궤도에 도달하다니!
  });
}

const c = new countdown(5).on("tick", i => console.log(i + "..."));

c.go()
  .then(launch)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error("Houston, we have a problem....");
  });
