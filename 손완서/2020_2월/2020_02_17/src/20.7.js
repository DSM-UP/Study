const os = require("os");

console.log("Hostname: " + os.hostname());
console.log("OS type: " + os.type());
console.log("OS platform: " + os.platform());
console.log("OS release: " + os.release());
console.log("OS uptime: " + (os.uptime() / 60 / 60 / 24).toFixed(1) + " days");
console.log("CPU architecture: " + os.arch());
console.log("Number of CPUs: " + os.cpus().length);
console.log("Total memory: " + (os.totalmem() / 1e6).toFixed(1) + " MB");
console.log("Free memory: " + os.freemem() / (1e6).toFixed(1) + " MB");
