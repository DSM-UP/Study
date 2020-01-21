function isCurrentYearLeapYear() {
  const year = new Date().getFullYear();
  if (year % 4 !== 0) return false;
  else if (year % 100 != 0) return true;
  else if (year % 400 != 0) return false;
  else return true;
}

const daysInMonth = [
  31,
  isCurrentYearLeapYear() ? 29 : 28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];

if (isCurrentYearLeapYear()) console.log("It is a leap year");
