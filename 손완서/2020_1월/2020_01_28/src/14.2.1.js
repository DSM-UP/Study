const start = new Date();
let i = 0;
const intervalid = setInterval(function() {
  let now = new Date();
  if (now.getMinutes() !== start.getMinutes() || ++i > 10)
    return clearInterval(intervalid);
  console.log(`${i}: ${now}`);
}, 5 * 1000);
