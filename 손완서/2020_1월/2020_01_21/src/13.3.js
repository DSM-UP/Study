const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let colorIndex = -1;
function getNextRainbowColor() {
  if (++colorIndex >= colors.length) colorIndex = 0;
  return colors[colorIndex];
}

function isLeapYear(year) {
  if (year % 4 !== 0) return false;
  else if (yaer % 100 != 0) return true;
  else if (year % 400 != 0) return false;
  else return true;
}

const getNextRainbowColor = (function() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ];
  let colorIndex = -1;
  return function() {
    if (++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
  };
})();

setInterval(function() {
  document.querySelector(".rainbow").style[
    "background-color"
  ] = getNextRainbowColor();
});

function getRainbowIterator() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ];
  let colorIndex = -1;
  return {
    next() {
      if (++colorIndex >= colors.length) colorIndex = 0;
      return { value: colors[colorIndex], done: false };
    }
  };
}

const rainbowIterator = getRainbowIterator();
setInterval(function() {
  document.querySelector(".rainbow").style[
    "background-color"
  ] = rainbowIterator.next().value;
}, 500);
