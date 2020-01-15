class Motorcycle extends Vehicle {}
const c = new Car();
const m = new Motorcycle();
c instanceof Car; // true
c instanceof Vehicle; // true
m instanceof Car; // false
m instanceof Motorcycle; // true
m instanceof Vehicle; // true
