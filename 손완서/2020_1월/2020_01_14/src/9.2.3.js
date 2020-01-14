// Car 클래스는 이전에 만든, shift 메서드가 있는 클래스입니다.
const car1 = new Car();
const car2 = new Car();
car1.shift === Car.prototype.shift; // true
car1.shift("D");
car1.shift("d"); // error
car1.userGear; // 'D'
car1.shift === car2.shift; // true

car1.shift = function(gear) {
  this.userGear = gear.toUpperCase();
};
car1.shift === Car.prototype.shift; // false
car1.shift === car2.shift; // false
car1.shift("d");
car1.userGear; // 'D'
