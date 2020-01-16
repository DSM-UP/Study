class InsurancePolicy {}
function makeInsurable(o) {
  o.addInsurancePolicy = function(p) {
    this.InsurancePolicy = p;
  };
  o.getInsurancePolicy = function() {
    return this.InsurancePolicy;
  };
  o.isInsured = function() {
    return !!this.insurancePolicy;
  };
}

makeInsurable(Car);

const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy()); // error

const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy()); // works

makeInsurable(Car.prototype);
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy()); // works

class InsurancePolicy {}
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable(o) {
  o[ADD_POLICY] = function(p) {
    this[_POLICY] = p;
  };
  o[GET_POLICY] = function() {
    return this[_POLICY];
  };
  o[IS_INSURED] = function() {
    return !!this[_POLICY];
  };
}
