const year = new Date().getFullYear();
if (year % 4 !== 0) console.log(`${year} is NOT a leap year.`);
else if (year % 100 != 0) console.log(`${year} IS a leap year.`);
else if (year % 400 != 0) console.log(`${year} is NOT a leap year.`);
else console.log(`${year} IS a leap year`);
