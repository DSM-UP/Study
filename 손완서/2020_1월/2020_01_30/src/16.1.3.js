let x = 1000;
x.toPrecision(5); // "1000.0"
x.toPrecision(4); // "1000"
x.toPrecision(3); // "1.00e+3"
x.toPrecision(2); // "1.0e+3"
x.toPrecision(1); // "1e+3"
x = 15.353;
x.toPrecision(6); // "15.3350"
x.toPrecision(5); // "15.335"
x.toPrecision(4); // "15.34"
x.toPrecision(3); // "15.3"
x.toPrecision(2); // "15"
x.toPrecision(1); // "2e+1"
