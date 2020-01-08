const o = {
  name: "Wallace",
  speak() {
    return `My name is ${this.name}!`;
  }
};

o.speak(); // My name is Wallace!

const speak = o.speak;
speak = o.speak; // true; 두 변수는 같은 함수를 가리킵니다.
speak(); // "My name is undefined!"

const o = {
  name: "Julie",
  greetBackwards: function() {
    function getReverseName() {
      let nameBackwards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  }
};
o.greetBackwards();

const o = {
  name: "Julie",
  greetBackwards: function() {
    const self = this;
    function getReverseName() {
      let nameBackwards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  }
};
o.greetBackwards();
