function Car(make, model) {
  this.make = make;
  this.model = model;
  this._userGears = ["P", "N", "R", "D"];
  this._userGear = this.userGears[0];
}

class Es6Car {} // 생성자는 의도적으로 생략합니다.
function Es5Car {}
> typeof Es6Car // "function"
> typeof Es5Car // "function"
