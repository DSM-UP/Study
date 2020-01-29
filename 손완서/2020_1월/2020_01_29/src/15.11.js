const moment = require("moment");

moment.subtract(10, "seconds").fromNow(); // a few seconds ago
moment.subtract(10, "seconds").fromNow(); // a few seconds ago
moment.subtract(45, "seconds").fromNow(); // a minute ago
moment.subtract(5, "minutes").fromNow(); // 5 minutes ago
moment.subtract(44, "minutes").fromNow(); // 44 minutes ago
moment.subtract(45, "minutes").fromNow(); // an hour ago
moment.subtract(5, "hours").fromNow(); // 4 hours ago
moment.subtract(21, "hours").fromNow(); // 21 hours ago
moment.subtract(22, "hours").fromNow(); // a day ago
moment.subtract(300, "days").fromNow(); // 10 months ago
moment.subtract(345, "days").fromNow(); // a year ago
